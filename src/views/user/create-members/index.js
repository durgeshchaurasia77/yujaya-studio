// import { useState, useRef } from 'react'
import { useEffect, useRef, useState, Fragment } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Card,
  CardBody,
  Button,
  Row, Col, FormGroup, Label, Input, CardFooter, InputGroup, InputGroupText, InputGroupAddon, Modal, ModalHeader, ModalBody
} from 'reactstrap'

import Stepper from 'bs-stepper'
import 'bs-stepper/dist/css/bs-stepper.min.css'
import Select from 'react-select'
import '../../../assets/css.css'
import { Editor } from 'react-draft-wysiwyg'
import { EditorState } from 'draft-js'
import CommonEditor from '../../../component/common/CommonEditor.js'
import Flatpickr from 'react-flatpickr'
import 'flatpickr/dist/themes/material_blue.css'
import { Calendar } from 'react-feather'
import { Link } from "react-router-dom"
import SelectAllMultiSelect from "../../../component/SelectAllMultiSelect/SelectAllMultiSelect.js"
import jsPDF from "jspdf"
import html2canvas from "html2canvas"

const optionsCountry = [
  { value: '', label: 'Please select one', isDisabled: true},
  { value: 'india', label: 'India' },
  { value: 'usa', label: 'USA' },
  { value: 'china', label: 'China' }
]
const optionsState = [
  { value: '', label: 'Please select one', isDisabled: true},
  { value: 'Delhi', label: 'Delhi' },
  { value: 'Andhra Pradeh', label: 'Andhra Pradeh' },
  { value: 'Uttar Pradesh', label: 'Uttar Pradesh' }
]
const optionsCity = [
  { value: '', label: 'Please select one', isDisabled: true},
  { value: 'new_delhi', label: 'New Delhi' },
  { value: 'dwarka', label: 'Dwarka' },
  { value: 'rohini', label: 'Rohini' },
  { value: 'saket', label: 'Saket' },
  { value: 'visakhapatnam', label: 'Visakhapatnam' },
  { value: 'vijayawada', label: 'Vijayawada' },
  { value: 'guntur', label: 'Guntur' },
  { value: 'tirupati', label: 'Tirupati' }
]
const optionsNationalId = [
  { value: '', label: 'Please select one', isDisabled: true},
  { value: 'Passport', label: 'Passport' },
  { value: 'National Id', label: 'National Id' },
  { value: 'Driving License', label: 'Driving License' }
]
const optionsPromoCode = [
  { value: '', label: 'Please select one', isDisabled: true},
  { value: 'CODE200', label: 'CODE200' },
  { value: 'CODE400', label: 'CODE400' },
  { value: 'CODE800', label: 'CODE800' }
]
const optionsMembershipStatus = [
  { value: '', label: 'Please select one', isDisabled: true},
  { value: 'pending', label: 'Pending' },
  { value: 'confirmed', label: 'Confirmed' },
  { value: 'cancelled', label: 'Cancelled' },
  { value: 'suspended', label: 'Suspended' },
  { value: 'expired', label: 'Expired' },
  { value: 'renewed', label: 'Renewed' },
  { value: 'transferred', label: 'Transferred' },
  { value: 'void', label: 'Void' }
]
const includePackagesTierOptions = [
  { value: '1_month_limited', label: '1 Month Limited' },
  { value: '1_month_unlimited', label: '1 Month Unlimited' },
  { value: 'multi_class_bundles', label: 'Multi-Class Bundles' },
  { value: 'online_only', label: 'Online-Only' },
  { value: 'specialized', label: 'Specialized' }
]

const includePackagesOptions = [
  { value: 'All Existing And Future Classes', label: 'All Existing And Future Classes' },
  { value: 'HIIT Workout', label: 'HIIT Workout' }
]

const optionsDesignationType = [
  { value: '', label: 'Please select one' },
  { value: 'sales_manager', label: 'Sales Manager' },
  { value: 'centre_manager', label: 'Centre Manager' },
  { value: 'accountant', label: 'Accountant' },
  { value: 'manager', label: 'Manager' },
  { value: 'operation_manager', label: 'Operation Manager' },
  { value: 'sales_executive', label: 'Sales Executive' },
  { value: 'yoga_master', label: 'Yoga Master' },
  { value: 'yoga_teacher', label: 'Yoga Teacher' },
  { value: 'yoga_instructor', label: 'Yoga Instructor' },
  { value: 'other', label: 'Other' }
]

const AddAnnoucement = () => {
  const [venue, setVenue] = useState('')
  const [feeType, setFeeType] = useState(null)
  const [isEarlyBird, setIsEarlyBird] = useState(false)
  const [offlineEarlyBirdFee, setOfflineEarlyBirdFee] = useState('')
  const [offlineEarlyExpireDays, setOfflineEarlyExpireDays] = useState('')

  const [onlineEarlyBirdFee, setOnlineEarlyBirdFee] = useState('')
  const [onlineEarlyExpireDays, setOnlineEarlyExpireDays] = useState('')
  const [recurringStatus, setRecurringStatus] = useState(true)
  const [dateTimeStatus, setDateTimeStatus] = useState(true)
  const [bookLimit, setBookLimit] = useState(true)
  const [status, setStatus] = useState(true)
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [renewDate, setRenewDate] = useState(null)
  const [signingDate, setSigningDate] = useState(new Date())
  const [picker, setPicker] = useState(new Date())
  const [isCustomDate, setIsCustomDate] = useState(false)
  const [validityStart, setValidityStart] = useState("purchase")
  const [showModal, setShowModal] = useState(false)
  const contractRef = useRef()
  const [formData, setFormData] = useState({
    agreementNo: "RD-17",
    emergencyContactPerson: "",
    emergencyRelationship: "",
    emergencyContactNo: "",
    guardianName: "",
    guardianRelationship: "",
    nationalIdType: "",
    nationalIdNumber: "",
    guardianContactNo: "",
    address: "",
    country: "",
    state: "",
    city: "",
    zipCode: ""
  })

  const handleDownload = async () => {
  const element = contractRef.current

  const canvas = await html2canvas(element, {
    scale: 2
  })

  const imgData = canvas.toDataURL("image/png")

  const pdf = new jsPDF("p", "mm", "a4")

  const imgWidth = 210
  const pageHeight = 295
  const imgHeight = (canvas.height * imgWidth) / canvas.width

  pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight)

  pdf.save(`Agreement-${formData.agreementNo}.pdf`)
}
  return (
  <>
    <Card>
      <CardBody>
        <h4 className="mb-2 fw-bold">Add Member</h4>
        {/* Agreement Info */}
        <Row className="gy-3 mb-2">
          <Col md="3">
            <FormGroup>
              <Label>Agreement No</Label>
              <Input type="text" value="RD-17" />
            </FormGroup>
          </Col>
          <Col md="6" className="text-end mt-2">
            <Button color="link" onClick={() => setShowModal(true)}>
              View Contract
            </Button>
            |
            <Button color="link" onClick={handleDownload}>
              Download Agreement
            </Button>
          </Col>
        </Row>

        {/* Emergency Contact */}
        <h5 className="fw-bold mt-2 mb-2">In Case of Emergency</h5>
        <Row className="gy-3">
          <Col md="4">
            <FormGroup>
              <Label>Contact Person</Label>
              <Input type="text" placeholder="Enter contact person" />
            </FormGroup>
          </Col>

          <Col md="4">
            <FormGroup>
              <Label>Relationship</Label>
              <Input type="text" placeholder="Enter relationship" />
            </FormGroup>
          </Col>

          <Col md="4">
            <FormGroup>
              <Label>Contact No</Label>
              <Input type="text" placeholder="Enter contact number" />
            </FormGroup>
          </Col>
        </Row>

        {/* Guardian / Co-Signer */}
        <h5 className="fw-bold mt-2 mb-2">Guardian / Co-Signer</h5>
        <Row className="gy-3">
          <Col md="4">
            <FormGroup>
              <Label>Guardian / Co-Signer Name</Label>
              <Input type="text" placeholder="Enter name" required/>
            </FormGroup>
          </Col>

          <Col md="4">
            <FormGroup>
              <Label>Relationship</Label>
              <Input type="text" placeholder="Enter relationship" required/>
            </FormGroup>
          </Col>

          <Col md="4">
            <FormGroup>
              <Label>National ID Type<span className="text-danger">*</span></Label>
              <Select
                options={optionsNationalId}
                placeholder="Select National ID Type"
                className="react-select"
                classNamePrefix="select"
                isSearchable={false}
                required 
              />
            </FormGroup>
          </Col>

          <Col md="4">
            <FormGroup>
              <Label>National ID Number<span className="text-danger">*</span></Label>
              <Input type="text" placeholder="Enter ID number" required/>
            </FormGroup>
          </Col>

          <Col md="4">
            <FormGroup>
              <Label>Contact No<span className="text-danger">*</span></Label>
              <Input type="text" placeholder="Enter contact number" required/>
            </FormGroup>
          </Col>

          <Col md="4">
            <FormGroup>
              <Label>Address<span className="text-danger">*</span></Label>
              <Input type="text" placeholder="Enter address" required/>
            </FormGroup>
          </Col>

          <Col md="4">
            <FormGroup>
              <Label>Country<span className="text-danger">*</span></Label>
              <Select
                options={optionsCountry}
                placeholder="Select country"
                className="react-select"
                classNamePrefix="select"
                isSearchable={true}
                required 
              />
            </FormGroup>
          </Col>

          <Col md="4">
            <FormGroup>
              <Label>State<span className="text-danger">*</span></Label>
              {/* <Input type="text" placeholder="Enter state" required/> */}
              <Select
                options={optionsState}
                placeholder="Select State"
                className="react-select"
                classNamePrefix="select"
                isSearchable={true}
                required 
              />
            </FormGroup>
          </Col>

          <Col md="4">
            <FormGroup>
              <Label>City<span className="text-danger">*</span></Label>
              {/* <Input type="text" placeholder="Enter city" required/> */}
              <Select
                options={optionsCity}
                placeholder="Select City"
                className="react-select"
                classNamePrefix="select"
                isSearchable={true}
                required 
              />
            </FormGroup>
          </Col>

          <Col md="4">
            <FormGroup>
              <Label>Zip Code<span className="text-danger">*</span></Label>
              <Input type="text" placeholder="Enter zip code" required/>
            </FormGroup>
          </Col>
        </Row>
      </CardBody>
    </Card>
    <Card className="mt-2">
      <CardBody>
        <h5 className="fw-bold mb-3">Membership Details</h5>

        <Row className="gy-3">
          {/* Membership Tier */}
          <Col md="6">
            <FormGroup>
              <Label>
                Membership Tier Name <span className="text-danger">*</span>
              </Label>
              <Select
                options={includePackagesTierOptions}
                placeholder="Select Membership Tier"
                className="react-select"
                classNamePrefix="select"
                isSearchable={false}
                required 
              />
                {/* <SelectAllMultiSelect
                  options={includePackagesTierOptions}
                  placeholderText="Select Membership Tier"
                  classNamePrefix="select"
                  required
                /> */}
            </FormGroup>
          </Col>

          {/* Include Packages */}
          <Col md="6">
            <FormGroup>
              <Label>
                Include Packages <span className="text-danger">*</span>
              </Label>
                <SelectAllMultiSelect
                  options={includePackagesOptions}
                  placeholderText="Select Include Packages"
                  classNamePrefix="select"
                  required
                />
              <small className="text-muted">
                (fetch from packages – allow multiple selection)
              </small>
            </FormGroup>
          </Col>

          {/* Package Selection (Checkboxes) */}
          {/* <Col md="12">
            <FormGroup>
              <div className="d-flex flex-column gap-2">
                <FormGroup check>
                  <Input type="checkbox" />
                  <Label check>Select All Existing Classes</Label>
                </FormGroup>

                <FormGroup check>
                  <Input type="checkbox" />
                  <Label check>All Existing and Future Classes</Label>
                </FormGroup>

                <FormGroup check>
                  <Input type="checkbox" />
                  <Label check>HIIT Workout</Label>
                </FormGroup>
              </div>
            </FormGroup>
          </Col> */}

          {/* Membership Status */}
          <Col md="6">
            <FormGroup>
              <Label>Membership Status</Label>
              <Select
                options={optionsMembershipStatus}
                placeholder="Select Membership Status"
                className="react-select"
                classNamePrefix="select"
                isSearchable={false}
                required 
              />
            </FormGroup>
          </Col>
        <Col md="6">
          <FormGroup>
            <Fragment>
            <Label>
              Date of Starting <span className="text-danger">*</span>
            </Label>

            <InputGroup style={{ cursor: 'pointer' }}>
              <Flatpickr
                value={picker}
                onChange={date => setPicker(date)}
                className="form-control"
                data-enable-time
                id='date-time-picker'
                options={{
                  enableTime: true,
                  dateFormat: 'd-m-Y H:i',
                  minDate: startDate,
                  allowInput: true
                }}
                placeholder="Select Date of Starting"
              />
              <InputGroupAddon addonType="append">
                <InputGroupText>
                  <Calendar size={16} />
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
            </Fragment>
          </FormGroup>
        </Col>

        {/* End Date */}
        <Col md="6">
          <FormGroup>
            <Label>
              Date of Expiring <span className="text-danger">*</span>
            </Label>

          <InputGroup style={{ cursor: 'pointer' }}>
              <Flatpickr
                value={endDate}
                onChange={date => setEndDate(date[0])}
                className="form-control"
                options={{
                  enableTime: true,
                  dateFormat: 'Y-m-d H:i',
                  minDate: startDate,
                  allowInput: true
                }}
                placeholder="Select Date of Expiring"
              />
              <InputGroupAddon addonType="append">
                <InputGroupText>
                  <Calendar size={16} />
                </InputGroupText>
              </InputGroupAddon>
              </InputGroup>
            </FormGroup>
        </Col>
          {/* Membership Renew Date */}
          <Col md="6">
          <FormGroup>
            <Label>
              Membership Renew Date <span className="text-danger">*</span>
            </Label>

          <InputGroup style={{ cursor: 'pointer' }}>
              <Flatpickr
                value={renewDate}
                onChange={date => setRenewDate(date[0])}
                className="form-control"
                options={{
                  enableTime: true,
                  dateFormat: 'Y-m-d H:i',
                  minDate: startDate,
                  allowInput: true
                }}
                placeholder="Select Membership Renew Date"
              />
              <InputGroupAddon addonType="append">
                <InputGroupText>
                  <Calendar size={16} />
                </InputGroupText>
              </InputGroupAddon>
              </InputGroup>
            </FormGroup>
        </Col>
        </Row>
      </CardBody>
    </Card>
    <Row className="alignment-row">
      <Col md="6">
        <Card className="h-100">
          <CardBody>

            {/* <hr className="my-4" /> */}
            <h6 className="fw-bold mb-4">Set Membership Discount</h6>

            <Row className="">

              {/* PROMO CODE */}
              <Col md="12">
                <Row className="align-items-center">
                  <Col md="3" className="d-flex align-items-center">
                    <Input type="radio" name="discountType" className="me-1" />
                    <Label className="mb-0">Promo Code</Label>
                  </Col>

                  <Col md="7">
                    <div className="d-flex gap-2">
                      {/* <Input
                        type="text"
                        placeholder="Enter promo code"
                        className="mr-2"
                      /> */}
                      <div style={{ minWidth: "300px" }} className='mr-2'>
                        <Select
                          options={optionsPromoCode}
                          placeholder="Select Promo Code"
                          className="react-select"
                          classNamePrefix="select"
                          isSearchable={true}
                          required 
                          
                        />
                      </div>
                      <Button color="primary" style={{ minWidth: "90px" }}>
                        Apply
                      </Button>
                    </div>
                  </Col>
                  <Col md="2"></Col>
                </Row>
              </Col>

              {/* APPLY DISCOUNT */}
              <Col md="12" className="mt-2 mb-2">
                <Row className="align-items-center">
                  <Col md="3" className="d-flex align-items-center">
                    <Input type="radio" name="discountType" className="me-2" />
                    <Label className="mb-0">Apply Discount</Label>
                  </Col>

                  <Col md="8">
                    <div className="apply-discount">
                      <FormGroup check className="mb-0">
                        <Input type="radio" name="discountValueType" />
                        <Label check>Fixed</Label>
                      </FormGroup>

                      <FormGroup check className="mb-0">
                        <Input type="radio" name="discountValueType" />
                        <Label check>Percentage</Label>
                      </FormGroup>

                      <Input
                        type="number"
                        placeholder="Discount Value"
                        style={{ maxWidth: "160px" }}
                      />
                    </div>
                  </Col>
                  <Col className="1"></Col>
                </Row>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
      <Col md="6">
        <Card className="h-100">
          <CardBody>
            <h6 className="fw-bold mb-2">Billing Details</h6>

            <Row className="gy-2">

              {/* Processing Fee */}
              <Col md="12">
                <Row className="align-items-center">
                  <Col md="4">
                    <Label className="mb-0">Processing Fee</Label>
                  </Col>
                  <Col md="8">
                    <Input
                      type="number"
                      placeholder="Enter Processing Fee"
                      value="10"
                    />
                  </Col>
                </Row>
              </Col>

              {/* Initial Payment */}
              <Col md="12" className="mt-2">
                <Row className="align-items-center">
                  <Col md="4">
                    <Label className="mb-0">Initial Payment (if any)</Label>
                  </Col>
                  <Col md="8">
                    <Input
                      type="number"
                      placeholder="Enter Initial Payment"
                      value="0"
                    />
                  </Col>
                </Row>
              </Col>

              {/* Billing Amount */}
              <Col md="12" className="mt-2">
                <Row className="align-items-center">
                  <Col md="4">
                    <Label className="mb-0">Billing Amount</Label>
                  </Col>
                  <Col md="8">
                    <Input
                      type="number"
                      placeholder="Billing Amount"
                      value="110"
                      disabled
                    />
                  </Col>
                </Row>
              </Col>

            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
    <Row className="alignment-row">
    <Col md="12">
      <Card className="mt-2">
        <CardBody>
          <h5 className="fw-bold mb-4">Add Payment Details By Staff</h5>

          <Row className="gy-4">

            {/* Employee ID */}
            <Col md="6">
              <FormGroup>
                <Label>Employee ID</Label>
                <Input
                  type="text"
                  value="12234 - Display Staff ID"
                  disabled
                />
              </FormGroup>
            </Col>

            {/* Consultant / Staff Name */}
            <Col md="6">
              <FormGroup>
                <Label>
                  Consultant / Staff Name <span className="text-danger">*</span>
                </Label>
                <Select
                  options={optionsDesignationType}
                  placeholder="Select Consultant / Staff"
                  className="react-select"
                  classNamePrefix="select"
                  isSearchable={false}
                  required 
                />
              </FormGroup>
            </Col>

            {/* Remarks */}
            <Col md="12">
              <FormGroup>
                <Label>Remarks</Label>
                <Input
                  type="textarea"
                  rows="4"
                  placeholder="Enter remarks"
                />
              </FormGroup>
            </Col>

            {/* Confirmation Message */}
            <Col md="6">
              <FormGroup>
                <Label>Confirmation Message</Label>
                <Input
                  type="text"
                  placeholder="This message will be sent in the membership confirmation email"
                />
                <small className="text-muted">
                  This message will be included in the membership confirmation email.
                </small>
              </FormGroup>
            </Col>

            {/* Date of Signing */}
            <Col md="6">
              <FormGroup>
                <Label>
                  Date of Signing <span className="text-danger">*</span>
                </Label>

                <InputGroup>
                  <Flatpickr
                  value={signingDate}
                    className="form-control"
                    onChange={date => setSigningDate(date[0])}
                    options={{
                      enableTime: true,
                      dateFormat: "d-m-Y H:i",
                      allowInput: true
                    }}
                    placeholder="Select Date of Signing"
                  />
                  <InputGroupAddon addonType="append">
                    <InputGroupText>
                      <Calendar size={16} />
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </FormGroup>
            </Col>

          </Row>

          {/* Footer Action */}
          <div className="d-flex align-items-center gap-3 mt-4">
            <Button color="primary">
              Proceed to Payment
            </Button>

            {/* <span className="text-muted">
              Save and go to common
            </span>
                <Link
                    to="/membership/payment/add"
                    className="text-primary fw-semibold"
                  > Click here
                  </Link>
                  
            <span className="text-muted"> page
            </span> */}
          </div>

        </CardBody>
      </Card>
    </Col>
  </Row>
    <Modal isOpen={showModal} toggle={() => setShowModal(false)} size="lg">
      <ModalHeader toggle={() => setShowModal(false)}>
        Agreement Contract
      </ModalHeader>

      <ModalBody>
        <h4>Agreement No: {formData.agreementNo}</h4>
        <hr />

        <h5>Emergency Contact</h5>
        <p><strong>Name:</strong> {formData.emergencyContactPerson}</p>
        <p><strong>Relationship:</strong> {formData.emergencyRelationship}</p>
        <p><strong>Contact:</strong> {formData.emergencyContactNo}</p>

        <h5 className="mt-3">Guardian Details</h5>
        <p><strong>Name:</strong> {formData.guardianName}</p>
        <p><strong>Relationship:</strong> {formData.guardianRelationship}</p>
        <p><strong>ID Type:</strong> {formData.nationalIdType}</p>
        <p><strong>ID Number:</strong> {formData.nationalIdNumber}</p>
        <p><strong>Contact:</strong> {formData.guardianContactNo}</p>

        <h5 className="mt-3">Address</h5>
        <p>
          {formData.address}, {formData.city}, {formData.state},{" "}
          {formData.country} - {formData.zipCode}
        </p>
      </ModalBody>
    </Modal>
    <div
      ref={contractRef}
      style={{
        position: "absolute",
        left: "-9999px",
        top: 0,
        padding: "40px",
        backgroundColor: "#fff",
        width: "800px"
      }}
    >
        <h2 style={{ textAlign: "center" }}>Membership Agreement</h2>
        <hr />

        <h5>Agreement No: {formData.agreementNo}</h5>

        <h4>Emergency Contact</h4>
        <p>Name: {formData.emergencyContactPerson}</p>
        <p>Relationship: {formData.emergencyRelationship}</p>
        <p>Contact: {formData.emergencyContactNo}</p>

        <h4 style={{ marginTop: "20px" }}>Guardian Details</h4>
        <p>Name: {formData.guardianName}</p>
        <p>ID Type: {formData.nationalIdType}</p>
        <p>ID Number: {formData.nationalIdNumber}</p>
        <p>Contact: {formData.guardianContactNo}</p>

        <h4 style={{ marginTop: "20px" }}>Address</h4>
        <p>
          {formData.address}, {formData.city}, {formData.state},{" "}
          {formData.country} - {formData.zipCode}
        </p>
      </div>
  </>
  )
}

export default AddAnnoucement
