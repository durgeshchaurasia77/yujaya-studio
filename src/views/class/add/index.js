// import { useState, useRef } from 'react'
import { useEffect, useRef, useState } from 'react'
import Select, { components } from 'react-select'
// import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Card,
  CardBody,
  Button,
  Row, Col, FormGroup, Label, Input, CardFooter
} from 'reactstrap'
import Stepper from 'bs-stepper'
import 'bs-stepper/dist/css/bs-stepper.min.css'
// import Select from 'react-select'
import SelectAllMultiSelect from "../../../component/SelectAllMultiSelect/SelectAllMultiSelect.js"
import SelectAllMultiSelect2 from "../../../component/SelectAllMultiSelect/SelectAllMultiSelect2.js"
import '../../../assets/css.css'
import { EditorState } from 'draft-js'
import CommonEditor from '../../../component/common/CommonEditor'
import AvatarOption from '../AvatarOption.js'

const optionsCountry = [
  { value: '', label: 'Please select one', isDisabled: true},
  { value: 'india', label: 'India' },
  { value: 'usa', label: 'USA' },
  { value: 'china', label: 'China' }
]
const optionsTeacherTraining = [
  { value: '', label: 'Please select one', isDisabled: true},
  { value: 'ytt-100', label: '100 Hour Teacher Training' },
  { value: 'ytt-200', label: '200 Hour Teacher Training' },
  { value: 'ytt-300', label: '300 Hour Teacher Training' },
  { value: 'ytt-500', label: '500 Hour Teacher Training' },
  { value: 'continuing-education', label: 'Continuing Education (CE)' }
]
const optionsClassLevel = [
  { value: '', label: 'Please select one', isDisabled: true},
  { value: 'beginer', label: 'Beginer' },
  { value: 'intermediate', label: ' Intermediate' },
  { value: 'advanced', label: 'Advanced' }
]
const optionsLanguage = [
  { value: '', label: 'Please select one', isDisabled: true},
  { value: 'english', label: 'English' },
  { value: 'spanish', label: 'Spanish' },
  { value: 'japanese', label: 'Japanese' }
]
const optionsCategory = [
  // { value: '', label: 'Please select one', isDisabled: true},
  { value: 'yoga', label: 'Yoga'},
  { value: 'yoga_therapy', label: 'Yoga Therapy' },
  { value: 'ayurveda', label: 'Ayurveda' },
  { value: 'healing', label: 'Healing' },
  { value: 'retreat', label: 'Retreat' },
  { value: 'meditation', label: 'Meditation' },
  { value: 'wisdom', label: 'Wisdom' },
  { value: 'spirituality', label: 'Spirituality' }
]

const optionsSubCategory = [
  // { value: '', label: 'Please select one', isDisabled: true},
  { value: 'class', label: 'Class'},
  { value: 'course', label: 'Course' },
  { value: 'workshop', label: 'Workshop' },
  { value: 'personal_training', label: 'Personal Training' },
  { value: 'private_therapy', label: 'Private Therapy' },
  { value: 'home_training', label: 'Home Training' },
  { value: 'trial', label: 'Trial' },
  { value: 'student', label: 'Student' },
  { value: 'counseling', label: 'Counseling' },
  { value: 'seminar', label: 'Seminar' },
  { value: 'talk', label: 'Talk' }
]


// const optionsInstructor = [
//   { value: 'aron', label: 'Aron' },
//   { value: 'kuldeep', label: 'Kuldeep' },
//   { value: 'manoj', label: 'Manoj' }
// ]
const optionsInstructor = [
  {
    value: 'aron',
    label: 'Aron',
    image: 'https://i.pravatar.cc/100?img=1'
  },
  {
    value: 'kuldeep',
    label: 'Kuldeep',
    image: 'https://i.pravatar.cc/100?img=2'
  },
  {
    value: 'manoj',
    label: 'Manoj',
    image: null
  }
]
const optionsPhysicalLocation = [
  // { value: '', label: 'Please select one', isDisabled: true},
  { value: 'vyasa_yoga', label: 'Vyasa Yoga' },
  { value: 'ashram', label: 'Ashram' },
  { value: 'online', label: 'Online' }
]
const optionsFees = [
  { value: '', label: 'Please select one', isDisabled: true},
  { value: 'free', label: 'Free' },
  { value: 'paid', label: 'Paid' }
]
const AddClass = () => {
  const [venue, setVenue] = useState('')
  const [feeType, setFeeType] = useState(null)
  const [isEarlyBird, setIsEarlyBird] = useState(false)
  const [offlineEarlyBirdFee, setOfflineEarlyBirdFee] = useState('')
  const [offlineEarlyExpireDays, setOfflineEarlyExpireDays] = useState('')

  const [onlineEarlyBirdFee, setOnlineEarlyBirdFee] = useState('')
  const [onlineEarlyExpireDays, setOnlineEarlyExpireDays] = useState('')
  const [status, setStatus] = useState(true)
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const [selectedLanguage, setSelectedLanguage] = useState(
    optionsLanguage.find(o => o.value === 'english')
  )
  const [totalSeats, setTotalSeats] = useState(0)

  const [seatDistribution, setSeatDistribution] = useState({
    online: 0,
    call: 0,
    member: 0,
    vip: 0,
    guest: 0,
    staff: 0,
    walkin: 0,
    waiting: 0
  })

  const handleTotalSeatsChange = (value) => {
  const seats = Number(value)

  setTotalSeats(seats)

  setSeatDistribution({
    online: seats,
    call: 0,
    member: 0,
    vip: 0,
    guest: 0,
    staff: 0,
    walkin: 0,
    waiting: 0
  })
}

const handleSeatChange = (type, value) => {
  const updated = {
    ...seatDistribution,
    [type]: Number(value)
  }

  const totalAllocated = Object.values(updated).reduce(
    (a, b) => a + b,
    0
  )

  if (totalAllocated > totalSeats) {
    alert("Total distributed seats cannot exceed total seats")
    return
  }

  setSeatDistribution(updated)
}
useEffect(() => {
  if (!isEarlyBird) {
    setOfflineEarlyBirdFee('')
    setOfflineEarlyExpireDays('')
    setOnlineEarlyBirdFee('')
    setOnlineEarlyExpireDays('')
  }
}, [isEarlyBird])


const CustomOption = (props) => (
  <components.Option {...props}>
    <AvatarOption data={props.data} />
  </components.Option>
)

const CustomSingleValue = (props) => (
  <components.SingleValue {...props}>
    <AvatarOption data={props.data} />
  </components.SingleValue>
)
const CustomMultiValueLabel = (props) => (
  <components.MultiValueLabel {...props}>
    <AvatarOption data={props.data} />
  </components.MultiValueLabel>
)
  return (
  <>
    <Card>
      <CardBody>
        <h4 className="mb-2">Add Class Type</h4>
        <Row className="gx-2">
          {/* Language */}
          <Col md="4">
            <FormGroup>
              <Label>Class Language</Label>
              <Select
                options={optionsLanguage}
                placeholder="Select Language"
                className="react-select"
                classNamePrefix="select"
                isSearchable={false}
                value={selectedLanguage}
                required 
              />
            </FormGroup>
          </Col>

          {/* Program Level */}
          <Col md="4">
            <FormGroup>
              <Label>Class Level <span className="text-danger">*</span></Label>
              <Select
                options={optionsClassLevel}
                placeholder="Select Class Level"
                className="react-select"
                classNamePrefix="select"
                isSearchable={false}
                required 
              />
            </FormGroup>
          </Col>

          <Col md="4">
            <FormGroup>
              <Label>Class Category <span className="text-danger">*</span></Label>
              <SelectAllMultiSelect
                options={optionsCategory}
                placeholderText="Select Category"
                classNamePrefix="select"
                required
              />
            </FormGroup>
          </Col>


          <Col md="4">
            <FormGroup>
              <Label>Class Sub Category</Label>
              <SelectAllMultiSelect
                options={optionsSubCategory}
                placeholderText="Select Sub Category"
                classNamePrefix="select"
                required
              />
            </FormGroup>
          </Col>
          <Col md="4">
            <FormGroup>
              <Label>Teacher Training<span className="text-danger">*</span></Label>
              <Select
                options={optionsTeacherTraining}
                placeholder="Select Teacher Training"
                className="react-select"
                classNamePrefix="select"
                isSearchable={false}
                required 
              />
            </FormGroup>
          </Col>


          {/* Hours */}
          <Col md="4">
            <FormGroup>
              <Label>Theory Hours</Label>
              <Input type="number" placeholder="Please enter theory hours here..." required/>
            </FormGroup>
          </Col>

          <Col md="4">
            <FormGroup>
              <Label>Practical Hours</Label>
              <Input type="number" placeholder="Please enter practical hours here..." required/>
            </FormGroup>
          </Col>
          <Col md="8"></Col>
          {/* Title */}
          <Col md="4">
            <FormGroup>
              <Label>Class Name <span className="text-danger">*</span></Label>
              <Input placeholder="Please enter class name here..." required />
            </FormGroup>
          </Col>

          {/* Class Code */}
          <Col md="4">
            <FormGroup>
              <Label>Class Code</Label>
              <Input placeholder="Please enter class code here..." value='CL00001' required/>
            </FormGroup>
          </Col>

          {/* Instructor */}
          {/* <Col md="4">
            <FormGroup>
              <Label>Select Instructor <span className="text-danger">*</span></Label>
              <SelectAllMultiSelect
                options={optionsInstructor}
                placeholderText="Select Instructor"
                classNamePrefix="select"
                required
              />
            </FormGroup>
          </Col> */}
          <Col md="4">
            <FormGroup>
              <Label>
                Select Instructor <span className="text-danger">*</span>
              </Label>

              <SelectAllMultiSelect2
                options={optionsInstructor}
                // placeholderText="Select Instructor"
                classNamePrefix="select"
                components={{
                  Option: CustomOption,
                  MultiValueLabel: CustomMultiValueLabel
                }}
                required
              />
            </FormGroup>
          </Col>
          {/* Description */}
          <Col md="12">
            <FormGroup>
              <Label>Description <span className="text-danger">*</span></Label>
                <CommonEditor
                editorState={editorState}
                onChange={setEditorState}
                height={180}
                placeholder="Enter description here..."
              />
            </FormGroup>
          </Col>


          {/* Venue */}
          
        </Row>
      </CardBody>

    </Card>
    <Card className="mb-2">
      <CardBody>

        {/* ================= Venue & Fees ================= */}
        <h5 className="mb-2">Venue & Fees</h5>

        <Row className="gx-4 align-items-start">
          {/* Fees */}
          <Col md="6">
            <FormGroup>
              <Label className="fw-semibold">
                Fees <span className="text-danger">*</span>
              </Label>
              <Select
                options={optionsFees}
                classNamePrefix="select"
                isSearchable={false}
                onChange={(val) => {
                  setFeeType(val?.value)
                  setIsEarlyBird(false)
                }}
              />
            </FormGroup>
          </Col>
          {/* Venue */}
          <Col md="6">
            <Label className="fw-semibold">
              Venue <span className="text-danger">*</span>
            </Label>

            <div className="d-flex gap-4 mt-1">
              {["online", "offline", "hybrid"].map((v) => (
                <FormGroup check key={v}>
                  <Input
                    type="radio"
                    name="venue"
                    value={v}
                    onChange={(e) => setVenue(e.target.value)}
                    className="mr-3"
                  />
                  <Label check className="ms-1 text-capitalize mr-2">{v}</Label>
                </FormGroup>
              ))}
            </div>

            <FormGroup check className="mt-2">
              <Input
                type="checkbox"
                checked={isEarlyBird}
                onChange={(e) => setIsEarlyBird(e.target.checked)}
              />
              <Label check className="ms-2">Is Class Early Bird</Label>
            </FormGroup>
          </Col>
        </Row>

        {/* ================= Location / Platform ================= */}
        <h5 className="mb-3 mt-2">Location / Platform</h5>
        <Row className="gx-4">
          {/* Physical */}
          {(venue === "online" || venue === 'hybrid') && (
            <>
              <Col md="6">
                <FormGroup>
                  <Label className="fw-semibold">Physical Location</Label>
                  <SelectAllMultiSelect
                    options={optionsPhysicalLocation}
                    placeholderText="Select Physical Location"
                    classNamePrefix="select"
                    required
                  />
                </FormGroup>

                <Label className="fw-semibold mt-2">Room</Label>
                <div className="d-flex gap-4 mt-1">
                  {["Yoga Hall", "Therapy Room", "Massage Room"].map((r) => (
                    <FormGroup check key={r}>
                      <Input type="radio" name="room" />
                      <Label check className="ms-1  mr-2">{r}</Label>
                    </FormGroup>
                  ))}
                </div>
              </Col> 
            </>
          )}
          {(venue === "offline" || venue === 'hybrid') && (
            <>
              {/* Online */}
              <Col md="4">
                <Label className="fw-semibold">Online Platform</Label>
                <div className="d-flex gap-4 mt-2">
                  {["Zoom", "Google Meet"].map((p) => (
                    <FormGroup check key={p}>
                      <Input type="checkbox" />
                      <Label check className="ms-1 mr-2">{p}</Label>
                    </FormGroup>
                  ))}
                </div>
              </Col>    
          </>
          )}
        </Row>
        <Row>
        {/* ================= Fee Structure ================= */}
        {/* <Col md="12"> */}
          {feeType === "paid" && (
            <>
              <h5 className="mb-3 mt-2">Fee Structure</h5>

              <div className="fee-table">
                {/* Header */}
                <div className="fee-header">
                  <div></div>
                  <div>Normal</div>
                  <div>Early Bird</div>
                  <div>Early Expire (Days)</div>
                </div>

                {/* Offline */}
                <Col md="12">
                  <div className={`fee-row ${venue === "online" ? "d-none" : ""}`}>
                    <div className="fee-label">Offline</div>
                    <Input type="number" className="fee-input" />
                    <Input
                      type="number"
                      className="fee-input"
                      disabled={!isEarlyBird}
                    />
                    <Input type="number" className="fee-input" />
                  </div>
                </Col>
                {/* Online */}
                <Col md="12">
                  <div className={`fee-row ${venue === "offline" ? "d-none" : ""}`}>
                    <div className="fee-label">Online</div>
                    <Input type="number" className="fee-input" />
                    <Input
                      type="number"
                      className="fee-input"
                      disabled={!isEarlyBird}
                    />
                    <Input type="number" className="fee-input" />
                  </div>
                </Col>
              </div>
            </>
          )}
          {/* </Col> */}
        </Row>
      </CardBody>
    </Card>
    <Card className="mb-3">
      <CardBody>

        {/* ================= Visibility & Booking ================= */}
        <h5 className="mb-3">Visibility & Booking Settings</h5>

        <Row className="gx-4">
          {/* Left options */}
          <Col md="6">
            <Label className="fw-semibold">Class Listing Display</Label>
            <div className="option-stack">
              <FormGroup check>
                <Input type="radio" name="display" />
                <Label check className="ms-2 mb-1">Display Instructor full name (Photo)</Label>
              </FormGroup>
              <FormGroup check>
                <Input type="radio" name="display" defaultChecked />
                <Label check className="ms-2  mb">Display Class image</Label>
              </FormGroup>
            </div>

            <div className="option-stack mt-1">
              {/* <div className="custom-checkbox-wrapper"> */}
                <FormGroup check>
                  <Input type="checkbox" className="custom-checkbox" defaultChecked/>
                  <Label check className="ms-2  mb-1 custom-lebal-style">Member Allowed</Label>
                </FormGroup>
                <FormGroup check>
                  <Input type="checkbox" defaultChecked className="custom-checkbox"/>
                  <Label check className="ms-2 custom-lebal-style">Allowed Package</Label>
                </FormGroup>
              {/* </div> */}
            </div>
          </Col>

          {/* Booking rules */}
         <Col md="6">
                <Label className="fw-semibold">Booking Rules</Label>
              <div className="custom-checkbox-wrapper">
                <div className="option-stack">
                  {[
                    "Allow Bookings",
                    "Default Close Booking Time",
                    "Bookings Paid",
                    "Display online seats in calendar",
                    "Display bookings in calendar",
                    "Display fees in calendar",
                    "This is Featured Class"
                  ].map((t) => (
                    <FormGroup check key={t}>
                      <Input type="checkbox" className="custom-checkbox" defaultChecked/>
                      <Label check className="ms-2 custom-lebal-style">{t}</Label>
                    </FormGroup>
                  ))}
                </div>
            </div>
          </Col>
        </Row>

        {/* ================= Seat Allocation ================= */}
        <h5 className="mb-3 mt-4">Seat Allocation</h5>

        <Row className="gx-4">
          <Col md="6">
            <FormGroup>
              <Label className="fw-semibold">
                Total Seats <span className="text-danger">*</span>
              </Label>
              {/* <Input
                type="number"
                className="seat-input"
                placeholder="e.g. 50"
                required
              /> */}
              <Input
                type="number"
                className="seat-input"
                placeholder="e.g. 50"
                value={totalSeats}
                onChange={(e) => handleTotalSeatsChange(e.target.value)}
                required
              />
              <small className="text-muted">
                Seats will be distributed below
              </small>
            </FormGroup>
          </Col>
        </Row>

        {/* ================= Seat Grid ================= */}
        <div className="seat-grid">

          {/* <div className="seat-item">
            <Label>For Online Booking<span className="text-danger">*</span></Label>
            <Input type="number" className="seat-input" />
          </div> */}
          <div className="seat-item">
            <Label>
              For Online Booking <span className="text-danger">*</span>
            </Label>
            <Input
              type="number"
              className="seat-input"
              value={seatDistribution.online}
              onChange={(e) => handleSeatChange("online", e.target.value)}
              required
            />
          </div>
          {/* <div className="seat-item">
            <Label>Call Booking</Label>
            <Input type="number" className="seat-input" />
          </div> */}
          <div className="seat-item">
            <Label>Call Booking</Label>
            <Input
              type="number"
              className="seat-input"
              value={seatDistribution.call}
              onChange={(e) => handleSeatChange("call", e.target.value)}
            />
          </div>
          {/* <div className="seat-item">
            <Label>Member Booking</Label>
            <Input type="number" className="seat-input" />
          </div> */}
          
          <div className="seat-item">
            <Label>Member Booking</Label>
            <Input
              type="number"
              className="seat-input"
              value={seatDistribution.member}
              onChange={(e) => handleSeatChange("member", e.target.value)}
            />
          </div>

          {/* <div className="seat-item">
            <Label>VIP Booking</Label>
            <Input type="number" className="seat-input" />
          </div> */}
          <div className="seat-item">
            <Label>VIP Booking</Label>
            <Input
              type="number"
              className="seat-input"
              value={seatDistribution.vip}
              onChange={(e) => handleSeatChange("vip", e.target.value)}
              min="0"
            />
          </div>
          {/* <div className="seat-item">
            <Label>Guest Booking</Label>
            <Input type="number" className="seat-input" />
          </div> */}
          <div className="seat-item">
            <Label>Guest Booking</Label>
            <Input
              type="number"
              className="seat-input"
              value={seatDistribution.guest}
              onChange={(e) => handleSeatChange("guest", e.target.value)}
              min="0"
            />
          </div>
          {/* <div className="seat-item">
            <Label>Staff Booking</Label>
            <Input type="number" className="seat-input" />
          </div> */}
          <div className="seat-item">
            <Label>Staff Booking</Label>
            <Input
              type="number"
              className="seat-input"
              value={seatDistribution.staff}
              onChange={(e) => handleSeatChange("staff", e.target.value)}
              min="0"
            />
          </div>
          {/* <div className="seat-item">
            <Label>Walk-in Booking</Label>
            <Input type="number" className="seat-input" />
          </div> */}
          <div className="seat-item">
            <Label>Walk-in Booking</Label>
            <Input
              type="number"
              className="seat-input"
              value={seatDistribution.walkin}
              onChange={(e) => handleSeatChange("walkin", e.target.value)}
              min="0"
            />
          </div>
          {/* <div className="seat-item">
            <Label>Waiting Booking</Label>
            <Input type="number" className="seat-input" />
          </div> */}
        <div className="seat-item">
          <Label>Waiting Booking</Label>
          <Input
            type="number"
            className="seat-input"
            value={seatDistribution.waiting}
            onChange={(e) => handleSeatChange("waiting", e.target.value)}
            min="0"
          />
        </div>
        </div>

      </CardBody>
    </Card>

    <Card className="mb-3">
      <CardBody>
        <h5 className="mb-3">Additional Information</h5>

        <Row className="gx-3">

          {/* More Info URL */}
          <Col md="6">
            <FormGroup>
              <Label>More Info Link URL</Label>
              <Input
                type="url"
                placeholder="https://example.com"
              />
            </FormGroup>
          </Col>

          {/* Video URL */}
          <Col md="6">
            <FormGroup>
              <Label>Video URL</Label>
              <Input
                type="url"
                placeholder="https://youtube.com/..."
              />
            </FormGroup>
          </Col>

          {/* Attachment */}
          <Col md="6">
            <FormGroup>
              <Label>Attach File</Label>
              <Input
                type="file"
                accept=".pdf,.ppt,.pptx,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png"
              />
              <small className="text-muted">
                Allowed: PDF, PPT, DOC, XLS, JPG
              </small>
            </FormGroup>
          </Col>

          {/* Special Instructions */}
          <Col md="6">
            <FormGroup>
              <Label>Special Instructions</Label>
              <Input
                type="textarea"
                rows="4"
                placeholder="This message will be delivered to your guests in confirmation email(s). If you have special instructions (what clothing to wear, etc.), remind them here."
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <label className="custom-switch">
              <input
                type="checkbox"
                checked={status}
                onChange={() => setStatus(!status)}
              />
              <span className="slider"></span>
              <span className="switch-label">Status</span>
            </label>
          </Col>
          {/* Submit Button */}
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

export default AddClass
