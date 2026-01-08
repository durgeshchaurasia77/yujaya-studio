// import { useState, useRef } from 'react'
import { useEffect, useRef, useState, Fragment } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom"
import {
  Card,
  CardBody,
  Button,
  Row, Col, FormGroup, Label, Input, CardFooter, InputGroup, InputGroupText, InputGroupAddon
} from 'reactstrap'
import Stepper from 'bs-stepper'
import 'bs-stepper/dist/css/bs-stepper.min.css'
import Select from 'react-select'
import '../../../assets/css.css'
import { Editor } from 'react-draft-wysiwyg'
import { EditorState } from 'draft-js'
import CommonEditor from '../../../component/common/CommonEditor'
import Flatpickr from 'react-flatpickr'
import 'flatpickr/dist/themes/material_blue.css'
import { Calendar } from 'react-feather'
import SelectAllMultiSelect from "../../../component/SelectAllMultiSelect/SelectAllMultiSelect.js"

const optionsPackageList = [
  { value: "limited", label: "Limited" },
  { value: "unlimited", label: "Unlimited" },
  { value: "multi_class_bundles", label: "Multi-Class Bundles" },
  { value: "trial", label: "Trial" },
  { value: "introductory_packages", label: "Introductory Packages" },
  { value: "drop_in", label: "Drop-in" },
  { value: "online_only", label: "Online-Only" },
  { value: "student", label: "Student" },
  { value: "personal_training", label: "Personal Training" },
  { value: "therapy", label: "Therapy" },
  { value: "workshop", label: "Workshop" },
  { value: "corporate", label: "Corporate" },
  { value: "retreat", label: "Retreat" },
  { value: "seminar", label: "Seminar" },
  { value: "specialized", label: "Specialized" }
]


const optionsMembershipTiersList = [
  { value: '', label: 'Please Select', isDisabled: true },
  { value: '1_month_limited', label: '1 Month Limited' },
  { value: '1_month_unlimited', label: '1 Month Unlimited' },
  { value: 'multi_class_bundles', label: 'Multi-Class Bundles' },
  { value: 'online_only', label: 'Online-Only' },
  { value: 'specialized', label: 'Specialized' }
]


const combineClassOptions = [
  { value: '', label: 'Please Select', isDisabled: true },
  { value: 'all_event', label: 'All Event' },
  { value: 'morning_yoga', label: 'Morning Yoga' },
  { value: 'hatha_yoga', label: 'Hatha Yoga for kuldeep' },
  { value: 'meditations', label: 'Meditations' }
]
const optionsdurationTypeList = [
  { value: '', label: 'Please Select', isDisabled: true },
  { value: 'day', label: 'Day(s)' },
  { value: 'week', label: 'Week(s)' },
  { value: 'month', label: 'Month(s)' },
  { value: 'year', label: 'Year(s)' }
]
const optionsdayTypeList = [
  { value: '', label: 'Please Select', isDisabled: true },
  { value: 'all_days', label: 'All Days' },
  { value: 'weekdays', label: 'Weekdays' },
  { value: 'weekends', label: 'Weekends' },
  { value: 'custom', label: 'Custom' }
]

const optionshoursList = [
  { value: '', label: 'Please Select', isDisabled: true },
  { value: 'days', label: 'Days' },
  { value: 'hours', label: 'Hours' }
]
const optionshoursDayList = [
  { value: '', label: 'Please Select', isDisabled: true },
  { value: 'days', label: 'Days' },
  { value: 'weeks', label: 'Weeks' },
  { value: 'months', label: 'Months' }
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
  const [picker, setPicker] = useState(new Date())
  const [isCustomDate, setIsCustomDate] = useState(false)
  const [validityStart, setValidityStart] = useState("purchase")
  return (
  <>
    <Card>
      <CardBody>
        <h4 className="mb-4 fw-bold">Create Package</h4>

        <Row className="gy-3">

          {/* Package Type */}
          <Col md="4">
            <FormGroup>
              <Label>
                Package Type <span className="text-danger">*</span>
              </Label>
              <Select
                options={optionsPackageList}
                placeholder="Please Select"
                classNamePrefix="select"
                isSearchable={false}
              />
            </FormGroup>
          </Col>

          {/* Recurring */}
          {/* <Col md="3">
              <Label for="recurringSwitch">
                Recurring
              </Label>
            <FormGroup >
              <Input type="switch" id="recurringSwitch" />
            </FormGroup>
          </Col> */}
          <Col md="3">
            <label className="custom-switch mt-2">
              <input
                type="checkbox"
                checked={recurringStatus}
                onChange={() => setRecurringStatus(!recurringStatus)}
              />
              <span className="slider"></span>
              <span className="switch-label">Recurring</span>
            </label>
          </Col>

          {/* Package Name */}
          <Col md="5">
            <FormGroup>
              <Label>
                Package Name <span className="text-danger">*</span>
              </Label>
              <Input type="text" placeholder="Please Enter Package Name"/>
            </FormGroup>
          </Col>

          {/* Description */}
          <Col md="12">
            <FormGroup>
              <Label>
                Description <span className="text-danger">*</span>
              </Label>
              <CommonEditor
                editorState={editorState}
                onChange={setEditorState}
                height={200}
                placeholder="Please Enter Description"
              />
            </FormGroup>
          </Col>

          {/* Package Price */}
          <Col md="3">
            <FormGroup>
              <Label>
                Package Price  <span className="fw-semibold">(SGD)</span><span className="text-danger">*</span>
              </Label>
              <div className="d-flex align-items-center gap-2">
                <Input type="number" placeholder="Please Enter Package Price"/>
              
              </div>
            </FormGroup>
          </Col>

          {/* Membership Checkbox */}
          <Col md="2" className="d-flex align-items-end">
            <FormGroup check className="mb-2">
              <Input type="checkbox" id="isMembership" />
              <Label for="isMembership" check className="fw-semibold">
                Is this for Membership
              </Label>
            </FormGroup>
          </Col>

          {/* Membership Tier */}
          <Col md="7">
            <FormGroup>
              <Label>Membership Tier</Label>
              <div className="d-flex align-items-center gap-2 flex-wrap">
                <Select
                  options={optionsMembershipTiersList}
                  placeholder="Please Select"
                  classNamePrefix="select"
                  className="flex-grow-1 mr-2"
                />
                {/* <a href="#" className="text-primary fw-semibold mr-2">
                  Click here
                </a> */}
                  <Link
                    to="/membership/add"
                    className="text-primary fw-semibold mr-2"
                  >
                    Click here
                  </Link>
                <span className="text-muted">
                  to Create Membership Tiers
                </span>
              </div>
            </FormGroup>
          </Col>

          {/* Combine Class Types */}
          <Col md="6">
            <FormGroup>
              <Label>
                Combine Different class types
                <span className="text-danger">*</span>
              </Label>
              <SelectAllMultiSelect
                  options={combineClassOptions}
                  placeholderText="Select Event"
                  classNamePrefix="select"
                  required
                />
              <small className="text-muted">
                (Fetch all class and allow multiple selection)
              </small>
            </FormGroup>
          </Col>

        </Row>
      </CardBody>
    </Card>
      <Card className="mt-4">
      <CardBody>
        <h5 className="mb-3 fw-bold">Package Validity Settings</h5>

        <Row className="gy-3">

          {/* Package Validity */}
          <Col md="5">
            <FormGroup>
              <Label>
                Package Validity <span className="text-danger">*</span>
              </Label>
              <Input type="number" defaultValue={60} />
            </FormGroup>
          </Col>

          {/* Duration Type */}
          <Col md="5">
            <FormGroup>
              <Label>Duration Type</Label>
              <Select
                  options={optionsdurationTypeList}
                  placeholder="Please Duration Type"
                  classNamePrefix="select"
                  className="flex-grow-1 mr-2"
                />
            </FormGroup>
          </Col>

          {/* Empty for alignment */}
          <Col md="2" />

          <Col md="5">
            <FormGroup>
              <Fragment>
              <Label>
                Start Date & Time <span className="text-danger">*</span>
              </Label>
    
              <InputGroup style={{ cursor: 'pointer' }}>
                <Flatpickr
                  value={startDate}
                  onChange={date => setPicker(date)}
                  className="form-control"
                  data-enable-time
                  id='date-time-picker'
                  options={{
                    enableTime: true,
                    dateFormat: 'd-m-Y H:i',
                    allowInput: true
                  }}
                  placeholder="Select start date & time"
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
        <Col md="5">
          <FormGroup>
            <Label>
              End Date & Time <span className="text-danger">*</span>
            </Label>

           <InputGroup style={{ cursor: 'pointer' }}>
              <Flatpickr
                value={endDate}
                onChange={date => setEndDate(date[0])}
                className="form-control"
                options={{
                  enableTime: true,
                  dateFormat: 'd-m-Y H:i',
                  minDate: startDate,
                  allowInput: true
                }}
                placeholder="Select end date & time"
              />
              <InputGroupAddon addonType="append">
                <InputGroupText>
                  <Calendar size={16} />
                </InputGroupText>
              </InputGroupAddon>
              </InputGroup>
            </FormGroup>
        </Col>
        
        <Col md="2" className="d-flex align-items-end">
            <FormGroup check className="mb-2">
              <Input type="checkbox" id="isExpiry" />
              <Label for="isExpiry" check className="fw-semibold">
                 No Expiry Date
              </Label>
            </FormGroup>
          </Col>
        </Row>
      </CardBody>
    </Card>
    <Card className="mt-4">
    <CardBody>
      <h5 className="mb-3 fw-bold">
        Package Validity will start counting down...
      </h5>

      <Row className="gy-3">

        {/* From Day of Purchase */}
        <Col md="12">
        <FormGroup check>
          <Input
            type="radio"
            name="validityStart"
            id="fromPurchase"
            checked={validityStart === "purchase"}
            onChange={() => setValidityStart("purchase")}
          />
          <Label for="fromPurchase" check>
            From the Day of Purchase
          </Label>
        </FormGroup>
      </Col>

      {/* From Fixed Custom Date */}
      <Col md="12">
        <FormGroup check className="d-flex align-items-center gap-3">
          <Input
            type="radio"
            name="validityStart"
            id="fromCustomDate"
            checked={validityStart === "custom"}
            onChange={() => setValidityStart("custom")}
          />
          <Label for="fromCustomDate" check className="mb-0">
            From Fixed Custom Date
          </Label>

          <Flatpickr
            className="form-control w-auto ml-1"
            placeholder="Select Custom Date"
            options={{
              dateFormat: "d-m-Y",
              allowInput: true
            }}
            disabled={validityStart !== "custom"}
          />
        </FormGroup>
      </Col>

      {/* From First Class Booked */}
      <Col md="12">
        <FormGroup check className="d-flex align-items-center flex-wrap gap-2">
          <Input
            type="radio"
            name="validityStart"
            id="fromFirstClass"
            checked={validityStart === "firstClass"}
            onChange={() => setValidityStart("firstClass")}
          />
          <Label for="fromFirstClass" check className="mb-0 mr-1">
            From the date of first class booked using the package
            <strong className="mx-1">OR</strong>
            it will expire after
          </Label>

          <Input
            type="number"
            defaultValue={60}
            className="w-auto mr-1"
            disabled={validityStart !== "firstClass"}
          />
          <span className="fw-semibold mr-2">
            DAYS without being used
          </span>
        </FormGroup>
      </Col>

        {/* Package Location */}
        <Col md="12">
          <FormGroup>
            <Label className="fw-bold">
              Package for which Location <span className="text-danger">*</span>
            </Label>

            <div className="d-flex gap-5 mt-1 flex-wrap">
              <FormGroup check>
                <Input type="checkbox" id="loc1" defaultChecked />
                <Label for="loc1" check className="mr-2">Vyasa Sin</Label>
              </FormGroup>

              <FormGroup check>
                <Input type="checkbox" id="loc2" />
                <Label for="loc2" check className="mr-2">Vya Ind</Label>
              </FormGroup>

              <FormGroup check>
                <Input type="checkbox" id="loc3" />
                <Label for="loc3" check className="mr-2">Vya sa Zoom</Label>
              </FormGroup>
            </div>
          </FormGroup>
        </Col>

      </Row>
    </CardBody>
    
  </Card>
    <Card className="mt-4">
      <CardBody >
        
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5 className="fw-bold mb-0">ADVANCED Options</h5>
          <Button color="light" size="sm">
            +
          </Button>
        </div>

        <hr className="my-2" />

        <h6 className="fw-bold mb-3">Day / Time Restrictions</h6>

        <Row className="gy-3">

          {/* Toggle */}
          <Col md="12">
            <FormGroup >
              {/* <Input type="switch" id="dayTimeRestriction" /> */}
              <label className="custom-switch">
                <input
                  type="checkbox"
                  checked={dateTimeStatus}
                  onChange={() => setDateTimeStatus(!dateTimeStatus)}
                />
                <span className="slider"></span>
                <span className="switch-label">Set Day / Time Restriction</span>
              </label>
            </FormGroup>
          </Col>

          {/* Days Dropdown */}
          <Col md="4">
            <FormGroup>
              <Label className="fw-semibold">Days</Label>
              <Select
                  options={optionsdayTypeList}
                  placeholder="Please Days Type"
                  classNamePrefix="select"
                  className="flex-grow-1 mr-2"
                />
            </FormGroup>
          </Col>

          {/* Time Any Time */}
          <Col md="2">
            <FormGroup check className="mt-2">
              <Input type="checkbox" id="anyTime" defaultChecked />
              <Label for="anyTime" check className="fw-semibold">
                Time: Any Time
              </Label>
            </FormGroup>
          </Col>

          {/* Start Time */}
          <Col md="3">
            <FormGroup>
              <Label className="fw-semibold">Start Time</Label>
              <Flatpickr
                className="form-control"
                placeholder="Select Start Time"
                options={{
                  enableTime: true,
                  allowInput: true,
                  noCalendar: true,
                  dateFormat: "h:i K"
                }}
              />
            </FormGroup>
          </Col>

          {/* End Time */}
          <Col md="3">
            <FormGroup>
              <Label className="fw-semibold">End Time</Label>
              <Flatpickr
                className="form-control"
                placeholder="Select End Time"
                options={{
                  enableTime: true,
                  allowInput: true,
                  noCalendar: true,
                  dateFormat: "h:i K"
                }}
              />
            </FormGroup>
          </Col>

        </Row>
      </CardBody>
      
    </Card>
    <Card className="mt-4">
      <CardBody >
{/* style={{ backgroundColor: "#ffffcc" }} */}
        <h5 className="fw-bold mb-3">Booking Limit Restriction</h5>

        <Row className="gy-3">

          {/* Set Booking Limit Restriction */}
          <Col md="12">
            {/* <FormGroup className="d-flex align-items-center gap-2">
              <Input type="switch" id="bookingLimitSwitch" />
              <Label for="bookingLimitSwitch" className="mb-0 fw-semibold">
                Set booking limit Restriction
              </Label>
            </FormGroup> */}
            <Col md="12">
            <FormGroup >
                {/* <Input type="switch" id="dayTimeRestriction" /> */}
                <label className="custom-switch">
                  <input
                    type="checkbox"
                    checked={bookLimit}
                    onChange={() => setBookLimit(!bookLimit)}
                  />
                  <span className="slider"></span>
                  <span className="switch-label">Set Booking limit Restriction</span>
                </label>
              </FormGroup>
            </Col>
          </Col>

          {/* Number of Classes */}
          <Col md="2">
            <FormGroup>
              <Label className="fw-semibold">Number of Classes to limit</Label>
              <Input type="number" defaultValue={60} />
              <small className="text-muted">
                User can book unlimited number of classes if left empty
              </small>
            </FormGroup>
          </Col>

          {/* <Col md="8" className="d-flex align-items-end">
            <small className="text-muted">
              User can book unlimited number of classes if left empty
            </small>
          </Col> */}

          {/* Days / Week / Month limit */}
          <Col md="3">
            <FormGroup>
              <Label className="fw-semibold">Days / Week / Month limit</Label>
              <div className="d-flex gap-2">
                <Input type="number" defaultValue={60} />
                <Select
                  options={optionshoursDayList}
                  placeholder="Please Type"
                  classNamePrefix="select"
                  className="flex-grow-1 mr-2"
                />
              </div>
              <small className="text-muted">
                User can book unlimited number of classes if left empty
              </small>
            </FormGroup>
          </Col>
        {/* 
          <Col md="8" className="d-flex align-items-end">
            <small className="text-muted">
              User can book unlimited number of classes if left empty
            </small>
          </Col> */}

          {/* Total Allowed Hours */}
          <Col md="3">
            <FormGroup>
              <Label className="fw-semibold">Total Allowed Hours</Label>
              <div className="d-flex gap-2">
                <Input type="number" defaultValue={60} />
                <Select
                  options={optionshoursList}
                  placeholder="Please Hours Type"
                  classNamePrefix="select"
                  className="flex-grow-1 mr-2"
                />
              </div>
              <small className="text-muted">
                User can book unlimited number of classes if left empty
              </small>
            </FormGroup>
          </Col>

          {/* <Col md="8" className="d-flex align-items-end">
          </Col> */}

          {/* Package Image */}
          <Col md="4">
            <FormGroup>
              <Label className="fw-semibold">Package Image</Label>
              <Input type="file" />
            </FormGroup>
          </Col>

          {/* Status */}
          <Col md="12">
            <label className="custom-switch mt-2">
              <input
                type="checkbox"
                checked={status}
                onChange={() => setStatus(!status)}
              />
              <span className="slider"></span>
              <span className="switch-label">Status</span>
            </label>
          </Col>

        </Row>
      </CardBody>
        <CardFooter className="text-end">
          <div className="d-flex justify-content-between align-end button-alignment-accouncement">
              <Button color="primary">Submit</Button>
            </div>
        </CardFooter>
    </Card>
  </>
  )
}

export default AddAnnoucement
