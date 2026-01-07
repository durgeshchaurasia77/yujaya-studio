// import { useState, useRef } from 'react'
import { useEffect, useRef, useState, Fragment } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
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
const optionUserType = [
  { value: '', label: 'Please select one' },
  { value: '1', label: 'Employee' },
  { value: '2', label: 'Student' },
  { value: '3', label: 'Yoga Instructor' },
  { value: '4', label: 'Yoga Therapist' },
  { value: '5', label: 'Client (Patient)' },
  { value: '6', label: 'Affiliate Partner' }
]

const optionaUserList = [
  // {
  //   value: '',
  //   label: 'Please select one',
  //   isDisabled: true
  // },
  {
    value: 'U001',
    label: 'U001-Rahul Sharma-rahul@gmail.com'
  },
  {
    value: 'U002',
    label: 'U002-Priya Verma-priya@gmail.com'
  },
  {
    value: 'U003',
    label: 'U003-Amit Singh-amit@gmail.com'
  },
  {
    value: 'U004',
    label: 'U004-Neha Gupta-neha@gmail.com'
  },
  {
    value: 'U005',
    label: 'U005-Karan Mehta-karan@gmail.com'
  }
]

const optionsClassList = [
  // { value: '', label: 'Please select one', isDisabled: true},
  { value: 'hatha_yoga', label: 'Hatha Yoga' },
  { value: 'morning_meditation', label: 'Morning Meditation' },
  { value: 'ashtanga_yoga', label: 'Ashtanga Yoga' },
  { value: 'yin_yoga', label: 'Yin Yoga' }
]

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

const AddAnnoucement = () => {
  const [venue, setVenue] = useState('')
  const [feeType, setFeeType] = useState(null)
  const [isEarlyBird, setIsEarlyBird] = useState(false)
  const [offlineEarlyBirdFee, setOfflineEarlyBirdFee] = useState('')
  const [offlineEarlyExpireDays, setOfflineEarlyExpireDays] = useState('')

  const [onlineEarlyBirdFee, setOnlineEarlyBirdFee] = useState('')
  const [onlineEarlyExpireDays, setOnlineEarlyExpireDays] = useState('')
  const [status, setStatus] = useState(true)
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [picker, setPicker] = useState(new Date())
  return (
  <>
  <Card>
    <CardBody>
      <h4 className="mb-3">Post Announcement</h4>

      <Row className="g-3">

        {/* User Type */}
        <Col md="6">
          <FormGroup>
            <Label>
              Package Type <span className="text-danger">*</span>
            </Label>
            <Select
              options={optionsPackageList}
              placeholder="-- Please Select --"
              className="react-select"
              classNamePrefix="select"
              isSearchable={false}
              required
            />
          </FormGroup>
        </Col>

        {/* Title */}
        <Col md="6">
          <FormGroup>
            <Label>
              Package Name <span className="text-danger">*</span>
            </Label>
            <Input type="text" placeholder="Enter Package Name..." required/>
          </FormGroup>
        </Col>

        {/* Start Date */}
        <Col md="6">
        <FormGroup>
          <Fragment>
          <Label>
            Start Date & Time <span className="text-danger">*</span>
          </Label>

          <InputGroup style={{ cursor: 'pointer' }}>
            <Flatpickr
              value={startDate}
              // onChange={date => setStartDate(date[0])}
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
        <Col md="6">
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
                  dateFormat: 'Y-m-d H:i',
                  time_24hr: true,
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


        {/* User */}
        <Col md="6">
          <FormGroup>
            <Label>User</Label>
            {/* <Select
              options={optionaUserList}
              placeholder="Fetch with ID, name & mobile"
              className="react-select"
              classNamePrefix="select"
              isMulti
              closeMenuOnSelect={false}
            /> */}
            <SelectAllMultiSelect
                options={optionaUserList}
                placeholderText="Fetch with ID, name & mobile"
                classNamePrefix="select"
                required
              />
            <FormGroup check className="mt-1">
              <Input type="checkbox" />
              <Label check className="ms-1">Exclude</Label>
            </FormGroup>
          </FormGroup>
        </Col>

        {/* Select Class */}
        <Col md="6">
          <FormGroup>
            <Label>Select Class</Label>
            {/* <Select
              placeholder="-- Please Select --"
              className="react-select"
              classNamePrefix="select"
              isMulti
            /> */}
            <SelectAllMultiSelect
                options={optionsClassList}
                placeholderText="Please Select"
                classNamePrefix="select"
                required
              />
          </FormGroup>
        </Col>

        {/* Select Package */}
        <Col md="6">
          <FormGroup>
            <Label>Select Package</Label>
            {/* <Select
              placeholder="Please Select"
              className="react-select"
              classNamePrefix="select"
              isMulti
            /> */}
            
            <SelectAllMultiSelect
                options={optionsPackageList}
                placeholderText="Please Package"
                classNamePrefix="select"
                required
              />
          </FormGroup>
        </Col>

        {/* Select Membership Type */}
        <Col md="6">
          <FormGroup>
            <Label>Select Membership Type</Label>
            {/* <Select
              placeholder="Please Select"
              className="react-select"
              classNamePrefix="select"
              isMulti
            /> */} 
            <SelectAllMultiSelect
                options={optionsPackageList}
                placeholderText="Please Membership Type"
                classNamePrefix="select"
                required
              />
          </FormGroup>
        </Col>

        {/* Poster Image */}
        <Col md="6">
          <FormGroup>
            <Label>Poster Image</Label>
            <Input type="file" />
          </FormGroup>
        </Col>

        {/* Publish in Calendar */}
        <Col md="6">
          <FormGroup check className="d-flex align-items-center mt-2 gap-2">
            <Input type="checkbox" id="publishCalendar" />
            <Label check for="publishCalendar" className="mb-0">
              Publish in Calendar?
            </Label>
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
              height={180}
            />
          </FormGroup>
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
