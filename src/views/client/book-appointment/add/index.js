// import { useState, useRef } from 'react'
import { useHistory, useParams } from 'react-router-dom'
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
import Flatpickr from 'react-flatpickr'
import 'flatpickr/dist/themes/material_blue.css'
import { Calendar } from 'react-feather'
import Select from 'react-select'
import SelectAllMultiSelect from "../../../../component/SelectAllMultiSelect/SelectAllMultiSelect.js"
import '../../../../assets/css.css'
import { EditorState } from 'draft-js'
import CommonEditor from '../../../../component/common/CommonEditor'
const optionsCountry = [
  { value: '', label: 'Please select one', isDisabled: true},
  { value: 'india', label: 'India' },
  { value: 'usa', label: 'USA' },
  { value: 'china', label: 'China' }
]
const typeOptions = [
  { value: '', label: 'Please select one', isDisabled: true},
  { value: 'type', label: 'Type' },
  { value: 'type1', label: 'Type 1' }
]
const durationOptions = [
  { value: '', label: 'Please select one', isDisabled: true},
  { value: '10', label: '10' },
  { value: '20', label: '20' },
  { value: '30', label: '30' },
  { value: '60', label: '60' }
]
const sessionFeeOptions = [
  { value: '', label: 'Please select one', isDisabled: true},
  { value: '$10', label: '$10' },
  { value: '$50', label: '$50' },
  { value: '$100', label: '$100' }
]
const statusOptions = [
  { value: '', label: 'Please select one', isDisabled: true},
  { value: 'Active', label: 'Active' },
  { value: 'Inactive', label: 'Inactive' },
  { value: 'Pending', label: 'Pending' }
]
const userTypeOptions = [
  { value: 'yoga_therapy', label: 'Yoga Therapy' },
  { value: 'personal_training', label: 'Personal Training' },
  { value: 'meditation_mantra', label: 'Meditation / Mantra Therapy' },
  { value: 'yantra_therapy', label: 'Yantra Therapy' },
  { value: 'singing_bowl', label: 'Singing Bowl Therapy' },
  { value: 'ayurveda_therapy', label: 'Ayurveda Therapy' },
  { value: 'yogic_counselling', label: 'Yogic Counselling' },
  { value: 'sujok_therapy', label: 'Sujok Therapy' },
  { value: 'acupoints_meridians', label: 'Acupoints & Meridians' },
  { value: 'art_music_therapy', label: 'Art and Music Therapy' },
  { value: 'somatic_therapy', label: 'Somatic Therapy' },
  { value: 'integrative_holistic', label: 'Integrative or Holistic Therapy' },
  { value: 'other', label: 'Other' }
]
const AddBookingAppointment = () => {
  const [venue, setVenue] = useState('')
  const [feeType, setFeeType] = useState(null)
  const [isEarlyBird, setIsEarlyBird] = useState(false)
  const [offlineEarlyBirdFee, setOfflineEarlyBirdFee] = useState('')
  const [offlineEarlyExpireDays, setOfflineEarlyExpireDays] = useState('')
  const [startDate, setStartDate] = useState(null)

  const [onlineEarlyBirdFee, setOnlineEarlyBirdFee] = useState('')
  const [onlineEarlyExpireDays, setOnlineEarlyExpireDays] = useState('')
  const [status, setStatus] = useState(true)
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const [picker, setPicker] = useState(new Date())
  const history = useHistory()
  // const [selectedCountry, setSelectedCountry] = useState(
  //   optionsCountry.find(o => o.value === 'india')
  // )
useEffect(() => {
  if (!isEarlyBird) {
    setOfflineEarlyBirdFee('')
    setOfflineEarlyExpireDays('')
    setOnlineEarlyBirdFee('')
    setOnlineEarlyExpireDays('')
  }
}, [isEarlyBird])

  return (
  <>
<Card className="mb-3">
  <CardBody>

    <h4 className="mb-3">BOOK NEW APPOINTMENT</h4>

    {/* Search */}
    <Row className="mb-2">
      <Col md="6">
        <FormGroup>
          <Label>Student / Client / Therapist / Instructor Search</Label>
          <Select
            options={userTypeOptions}
            placeholder={`Select User Type`}
            className="react-select"
            classNamePrefix="select"
            isSearchable={false}
            required 
          />
        </FormGroup>
      </Col>

      <Col md="6">
        <FormGroup>
          <Label>&nbsp;</Label>
          <Input type="text" placeholder="Search name..." />
        </FormGroup>
      </Col>
    </Row>

    {/* Appointment Type */}
    <Row className="mb-2">
      <Col md="6">
        <FormGroup>
          <Label>Appointment Types</Label>
          <Select
            options={typeOptions}
            placeholder={`Select User Type`}
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
              value={startDate}
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
    </Row>

    {/* Duration */}
    <Row className="mb-2">
      <Col md="6">
        <FormGroup>
          <Label>Duration (Minutes)</Label>
          <Select
            options={durationOptions}
            placeholder={`Select Duration`}
            className="react-select"
            classNamePrefix="select"
            isSearchable={false}
            required 
          />
        </FormGroup>
      </Col>
    </Row>

    {/* Location */}
    <Row className="mb-2">
      <Col md="6">
        <FormGroup>
          <Label>Location</Label>
          <div className="book-appointment-location">
            <Label check className="me-2">
              <Input type="radio" name="location" defaultChecked /> Studio
            </Label>
            <Label check>
              <Input type="radio" name="location" /> Online
            </Label>
          </div>
        </FormGroup>
      </Col>

      <Col md="6">
        <FormGroup>
          <Label>&nbsp;</Label>
          <Input type="text" placeholder="Enter studio / meeting link" />
        </FormGroup>
      </Col>
    </Row>

    {/* Timezone */}
    <Row className="mb-2">
      <Col md="6">
        <FormGroup>
          <Label>Client Local Timezone</Label>
          <Input type="text" placeholder="e.g. GMT -5 (EST)" />
        </FormGroup>
      </Col>
    </Row>

    {/* Country / State */}
    <Row className="mb-2">
      <Col md="6">
        <FormGroup>
          <Label>Country</Label>
          <Select
            options={optionsCountry}
            placeholder={`Select Country`}
            className="react-select"
            classNamePrefix="select"
            isSearchable={false}
            required 
          />
        </FormGroup>
      </Col>

      <Col md="6">
        <FormGroup>
          <Label>State</Label>
          <Select
            options={optionsCountry}
            placeholder={`Select State`}
            className="react-select"
            classNamePrefix="select"
            isSearchable={false}
            required 
          />
        </FormGroup>
      </Col>
    </Row>

    {/* Remarks */}
    <Row className="mb-2">
      <Col md="6">
        <FormGroup>
          <Label>Session Fee</Label>
          <Select
            options={sessionFeeOptions}
            placeholder={`Select Session Fee`}
            className="react-select"
            classNamePrefix="select"
            isSearchable={false}
            required 
          />
        </FormGroup>
      </Col>
      <Col md="6">
        <FormGroup>
          <Label>Appointment ID</Label>
          <Input type="text" value="TA-12sd" readOnly />
        </FormGroup>
      </Col>
    </Row>

    {/* Status */}
    <Row className="mb-2">
      <Col md="6">
        <FormGroup>
          <Label>Remarks</Label>
          <Input type="textarea" rows="3" />
        </FormGroup>
      </Col>
      <Col md="6">
        <FormGroup>
          <Label>Status</Label>
          <Select
            options={statusOptions}
            placeholder={`Select Status`}
            className="react-select"
            classNamePrefix="select"
            isSearchable={false}
            required 
          />
        </FormGroup>
      </Col>
    </Row>
  </CardBody>

  <CardFooter className="text-end">
    <div className='button-alignment-accouncement'>
      <Button
        className='btn btn-primary ml-auto header-back-button  mr-2'
        onClick={() => history.push('/client-auth/book-appointment/list')}
      >Back
      </Button>
      <Button color="primary" size="" className=''>
        Submit
      </Button>
    </div>
  </CardFooter>
</Card>

  </>
  )
}

export default AddBookingAppointment
