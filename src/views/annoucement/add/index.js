// import { useState, useRef } from 'react'
import { useEffect, useRef, useState } from 'react'
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
  {
    value: '',
    label: 'Please select one',
    isDisabled: true
  },
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
              User Type <span className="text-danger">*</span>
            </Label>
            <Select
              options={optionUserType}
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
              Title <span className="text-danger">*</span>
            </Label>
            <Input type="text" placeholder="Enter title" required/>
          </FormGroup>
        </Col>


        {/* Start Date */}
        {/* <Col md="6">
          <FormGroup>
            <Label>Start Date & Time <span className="text-danger">*</span></Label>
            <Input type="datetime-local" required/>
          </FormGroup>
        </Col> */}

        {/* End Date */}
        {/* <Col md="6">
          <FormGroup>
            <Label>End Date & Time <span className="text-danger">*</span></Label>
            <Input type="datetime-local" required/>
          </FormGroup>
        </Col> */}

        {/* Start Date */}
        <Col md="6">
        <FormGroup>
          <Label>
            Start Date & Time <span className="text-danger">*</span>
          </Label>

          <InputGroup style={{ cursor: 'pointer' }}>
            <Flatpickr
              value={startDate}
              onChange={date => setStartDate(date[0])}
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
            <Select
              options={optionaUserList}
              placeholder="Fetch with ID, name & mobile"
              className="react-select"
              classNamePrefix="select"
              isMulti
              closeMenuOnSelect={false}
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
            <Select
              placeholder="-- Please Select --"
              className="react-select"
              classNamePrefix="select"
              isMulti
            />
          </FormGroup>
        </Col>

        {/* Select Package */}
        <Col md="6">
          <FormGroup>
            <Label>Select Package</Label>
            <Select
              placeholder="Please Select"
              className="react-select"
              classNamePrefix="select"
              isMulti
            />
          </FormGroup>
        </Col>

        {/* Select Membership Type */}
        <Col md="6">
          <FormGroup>
            <Label>Select Membership Type</Label>
            <Select
              placeholder="Please Select"
              className="react-select"
              classNamePrefix="select"
              isMulti
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
          <FormGroup check>
            <Input type="checkbox" />
            <Label check className="ms-1">
              Publish in Calendar
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
