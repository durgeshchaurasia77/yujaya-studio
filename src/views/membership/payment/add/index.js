import { useEffect, useRef, useState, Fragment } from 'react'
import {
  Card,
  CardBody,
  Button,
  Row, Col, FormGroup, Label, Input, CardFooter, InputGroup, InputGroupText, InputGroupAddon, CardHeader, CardTitle, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap'
import Stepper from 'bs-stepper'
import 'bs-stepper/dist/css/bs-stepper.min.css'
import Select from 'react-select'
import '../../../../assets/css.css'
import { Editor } from 'react-draft-wysiwyg'
import { EditorState } from 'draft-js'
import CommonEditor from '../../../../component/common/CommonEditor'
import Flatpickr from 'react-flatpickr'
import 'flatpickr/dist/themes/material_blue.css'
import { Calendar } from 'react-feather'
import SelectAllMultiSelect from "../../../../component/SelectAllMultiSelect/SelectAllMultiSelect.js"

const AddPayment = () => {
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
  const [termsModal, setTermsModal] = useState(false)
  const [privacyModal, setPrivacyModal] = useState(false)


  return (
    <>
    <Card>
      {/* <CardHeader>
        <CardTitle tag='h4'>Add New Studio</CardTitle>
      </CardHeader> */}
      <CardBody>
        {/* <Form onSubmit={handleSubmit}> */}
          <Row>
          <Col md="12">
            <Card className="mt-0">
              <CardBody >

                <h4 className="fw-bold mb-3">Payment Info</h4>

                <p className="text-muted mb-3">
                  Common payment page for any type of transaction like Class, Package,
                  Membership, Products, Courses, Workshops, Teacher Training, etc.
                </p>

                <p className="fw-semibold mb-4">
                  You are paying for: <span className="text-primary">
                    Limited Package - Morning Yoga
                  </span>
                </p>

                <Row className="gy-4">

                  {/* Amount */}
                  <Col md="6">
                    <FormGroup>
                      <Label>Amount (SGD)</Label>
                      <Input type="number" value="500" />
                    </FormGroup>
                  </Col>

                  {/* Coupon Code */}
                  <Col md="6">
                    <FormGroup>
                      <Label>Enter Coupon Code</Label>
                      <div className="d-flex gap-2">
                        <Input type="text" placeholder="Please Enter Coupon Code" className="mr-2"/>
                        <Button color="primary">Apply</Button>
                      </div>
                    </FormGroup>
                  </Col>

                  {/* Gift Card */}
                  <Col md="12">
                    <FormGroup>
                      <Label>Enter Gift Card Code (Allow multiple)</Label>
                      <div className="d-flex gap-2 flex-wrap">
                        <Input type="text" style={{ maxWidth: "300px" }} placeholder="Please Enter Gift Card Code" className="mr-2"/>
                        <Button color="primary" className="mr-2">Apply</Button>
                        <Button color="secondary" outline>
                          Click for Other Gift Card
                        </Button>
                      </div>
                    </FormGroup>
                  </Col>

                  {/* Fees After Discount */}
                  <Col md="6">
                    <FormGroup>
                      <Label>Fees After Discount (SGD)</Label>
                      <Input type="number" value="500" disabled />
                    </FormGroup>
                  </Col>

                  {/* Total With Tax */}
                  <Col md="6">
                    <FormGroup>
                      <Label>
                        Total Amount With Tax / VAT / GST <span className="text-danger">*</span>
                      </Label>
                      <Input type="number" value="523" disabled />
                    </FormGroup>
                  </Col>

                  {/* Net Payable */}
                  <Col md="6">
                    <FormGroup>
                      <Label>Net Payable Amount (SGD)</Label>
                      <Input type="number" value="550" disabled />
                    </FormGroup>
                  </Col>

                  {/* Payment Remarks */}
                  <Col md="6">
                    <FormGroup>
                      <Label>Payment Remarks</Label>
                      <Input type="text" />
                    </FormGroup>
                  </Col>

                </Row>

                {/* Payment Mode */}
                <hr className="my-4" />
                <h6 className="fw-bold mb-3">Payment Mode</h6>

                <Row className="gy-3">

                  {/* Online */}
                  <Col md="6">
                    <FormGroup check className="mb-2">
                      <Input type="radio" name="paymentMode" />
                      <Label check className="fw-semibold">Online</Label>
                    </FormGroup>

                    <div className="ms-4 d-flex flex-column gap-1">
                      <FormGroup check>
                        <Input type="radio" name="onlineMode" />
                        <Label check>PayPal (PayPal & Credit Card)</Label>
                      </FormGroup>

                      <FormGroup check>
                        <Input type="radio" name="onlineMode" />
                        <Label check>Stripe</Label>
                      </FormGroup>

                      <FormGroup check>
                        <Input type="radio" name="onlineMode" />
                        <Label check>
                          Razor Pay (UPI, GooglePay, Credit Card, Net Banking)
                        </Label>
                      </FormGroup>

                      <FormGroup check>
                        <Input type="radio" name="onlineMode" />
                        <Label check>HitPay</Label>
                      </FormGroup>
                    </div>
                  </Col>

                  {/* Cash */}
                  <Col md="6">
                    <FormGroup check>
                      <Input type="radio" name="paymentMode" />
                      <Label check className="fw-semibold">Cash</Label>
                    </FormGroup>
                  </Col>

                </Row>

                {/* Terms & Notifications */}
                <hr className="my-4" />

                {/* <FormGroup check className="mb-2">
                  <Input type="checkbox" />
                  <Label check>
                    I have read the <span className="text-primary">Terms and Conditions</span> and
                    <span className="text-primary"> Privacy Policy</span> and agree that all
                    above information is accurate.
                  </Label>
                </FormGroup> */}
                <FormGroup check className="mb-2">
                  <Input type="checkbox" />
                  <Label check>
                    I have read the{" "}
                    <span
                      className="text-primary cursor-pointer"
                      onClick={() => setTermsModal(true)}
                    >
                      Terms and Conditions
                    </span>{" "}
                    and{" "}
                    <span
                      className="text-primary cursor-pointer"
                      onClick={() => setPrivacyModal(true)}
                    >
                      Privacy Policy
                    </span>{" "}
                    and agree that all above information is accurate.
                  </Label>
                </FormGroup>

                <FormGroup check className="mb-3">
                  <Input type="checkbox" />
                  <Label check>
                    I would like to receive emails about upcoming workshops, updates,
                    and other Yoga related news.
                  </Label>
                </FormGroup>

                {/* Pay Button */}
                {/* <Button color="btn btn-primary button-alignment-accouncement">
                  Pay Now
                </Button> */}

              </CardBody>
            </Card>
          </Col>
        </Row>
        {/* </Form> */}
      </CardBody>
      <CardFooter className="text-end">
          <div className="d-flex justify-content-between align-end button-alignment-accouncement">
              <Button color="primary">Submit</Button>
            </div>
        </CardFooter>
    </Card>

    <Modal
        isOpen={termsModal}
        toggle={() => setTermsModal(!termsModal)}
        size="lg"
        centered
      >
        <ModalHeader toggle={() => setTermsModal(false)}>
          Terms and Conditions
        </ModalHeader>

        <ModalBody>
          <Card>
            <CardBody>
              <h6 className="fw-bold mb-3">Sample Terms and Conditions</h6>

              <p>
                By accessing or using our services, you agree to be bound by these
                terms and conditions. Please read them carefully.
              </p>

              <ul>
                <li>Membership fees are non-refundable.</li>
                <li>Services are subject to availability.</li>
                <li>Misuse of facilities may result in termination.</li>
                <li>All payments must be completed before service usage.</li>
              </ul>

              <p className="mb-0">
                These terms may be updated at any time without prior notice.
              </p>
            </CardBody>
          </Card>
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={() => setTermsModal(false)}>
            I Understand
          </Button>
        </ModalFooter>
      </Modal>

      <Modal
          isOpen={privacyModal}
          toggle={() => setPrivacyModal(!privacyModal)}
          size="lg"
          centered
        >
          <ModalHeader toggle={() => setPrivacyModal(false)}>
            Privacy Policy
          </ModalHeader>

          <ModalBody>
            <Card>
              <CardBody>
                <h6 className="fw-bold mb-3">Sample Privacy Policy</h6>

                <p>
                  We value your privacy and are committed to protecting your personal
                  information.
                </p>

                <ul>
                  <li>Personal data is collected only for service purposes.</li>
                  <li>Your information is never sold to third parties.</li>
                  <li>Data is stored securely with limited access.</li>
                  <li>You may request data deletion at any time.</li>
                </ul>

                <p className="mb-0">
                  By using our services, you consent to our privacy practices.
                </p>
              </CardBody>
            </Card>
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={() => setPrivacyModal(false)}>
              Got It
            </Button>
          </ModalFooter>
        </Modal>

    </>
  )
}

export default AddPayment
