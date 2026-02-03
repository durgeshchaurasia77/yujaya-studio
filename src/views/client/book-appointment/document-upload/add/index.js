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
import SelectAllMultiSelect from "../../../../component/SelectAllMultiSelect/SelectAllMultiSelect.js"
import '../../../../assets/css.css'
import { EditorState } from 'draft-js'
import Flatpickr from 'react-flatpickr'
import 'flatpickr/dist/themes/material_blue.css'
import CommonEditor from '../../../../component/common/CommonEditor.js'
import { Calendar } from 'react-feather'
const optionsCountry = [
  { value: '', label: 'Please select one', isDisabled: true},
  { value: 'india', label: 'India' },
  { value: 'usa', label: 'USA' },
  { value: 'china', label: 'China' }
]
const optionsClassLevel = [
  { value: '', label: 'Please select one', isDisabled: true},
  { value: 'beginer', label: 'Beginer' },
  { value: 'intermediate', label: ' Intermediate' },
  { value: 'advanced', label: 'Advanced' }
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


const optionsInstructor = [
  // { value: '', label: 'Please select one', isDisabled: true},
  { value: 'aron', label: 'Aron' },
  { value: 'kuldeep', label: 'Kuldeep' },
  { value: 'manoj', label: 'Manoj' }
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

const optionsRating = [
  { value: '', label: 'Select', isDisabled: true },
  { value: 'needs_improvement', label: 'Needs Improvement' },
  { value: 'fair', label: 'Fair' },
  { value: 'good', label: 'Good' },
  { value: 'very_good', label: 'Very Good' },
  { value: 'excellent', label: 'Excellent' }
]

const classTypeOptions = [
  { value: '', label: 'Please Select', isDisabled: true },
  { value: 'all_event', label: 'All Event' },
  { value: 'morning_yoga', label: 'Morning Yoga' },
  { value: 'hatha_yoga', label: 'Hatha Yoga for kuldeep' },
  { value: 'meditations', label: 'Meditations' }
]
const optionsDocumentType = [
  { value: '', label: 'Please Select', isDisabled: true },
  { value: 'syllabus', label: 'Syllabus' },
  { value: 'class_notes', label: 'Class Notes' },
  { value: 'recorded_classes', label: 'Recorded Classes' },
  { value: 'practice_kit', label: 'Practice Kit' },
  { value: 'course_materials', label: 'Course Materials' },
  { value: 'meditation_kit', label: 'Meditation Kit' },
  { value: 'mantras_vedic_chanting', label: 'Mantras & Vedic Chanting' },
  { value: 'certificate', label: 'Certificate' },
  { value: 'library', label: 'Library' },
  { value: 'assignments', label: 'Assignments' },
  { value: 'other', label: 'Other' }
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
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [picker, setPicker] = useState(new Date())
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
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
    <Card>
      <CardBody>
        <h4 className="mb-3">Upload Documents</h4>

        <Row>
          {/* Category */}
          <Col md="4">
            <FormGroup>
              <Label>
                Category <span className="text-danger">*</span>
              </Label>
              {/* <Input type="select" required>
                <option>Please Select</option>
                <option>Yoga</option>
              </Input> */}
              <Select
                options={optionsCategory}
                placeholder="Select Category"
                className="react-select"
                classNamePrefix="select"
                isSearchable={false}
                required 
              />
            </FormGroup>
          </Col>

          {/* Subcategory */}
          <Col md="4">
            <FormGroup>
              <Label>
                Subcategory <span className="text-danger">*</span>
              </Label>
              <Select
                options={optionsSubCategory}
                placeholder="Select Sub Category"
                className="react-select"
                classNamePrefix="select"
                isSearchable={false}
                required 
              />
            </FormGroup>
          </Col>

          {/* Class / Course */}
          <Col md="4">
            <FormGroup>
              <Label>
                Class / Course <span className="text-danger">*</span>
              </Label>
                <Select
                  options={optionsCategory}
                  placeholder="Select Class / Course"
                  className="react-select"
                  classNamePrefix="select"
                  isSearchable={false}
                  required 
                />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          {/* Class Code */}
          <Col md="4">
            <FormGroup>
              <Label>Class Code</Label>
              <Input type="text" placeholder="Enter class code" value="WQ123"/>
            </FormGroup>
          </Col>

          {/* Document Title */}
          <Col md="4">
            <FormGroup>
              <Label>
                Document Title <span className="text-danger">*</span>
              </Label>
              <Input placeholder="Enter document title" required />
            </FormGroup>
          </Col>

          {/* Document Type */}
          <Col md="4">
            <FormGroup>
              <Label>
                Document Type <span className="text-danger">*</span>
              </Label>
              <Select
                options={optionsDocumentType}
                placeholder="Select Document Type"
                className="react-select"
                classNamePrefix="select"
                isSearchable={false}
                required 
              />
            </FormGroup>
          </Col>
        </Row>

        {/* Upload Document */}
        <Col md="6">
          <FormGroup>
            <Label>
              Upload Document <span className="text-danger">*</span>
            </Label>
            <Input type="file" required />
          </FormGroup>
        </Col>
        <Col md="6">
        {/* Video Link */}
          <FormGroup tag="fieldset" className="mt-3">
            <Label className="d-block">Youtube / Vimeo link</Label>

            <FormGroup check inline>
              <Input type="radio" name="videoType" defaultChecked />{' '}
              <Label check>Vimeo</Label>
            </FormGroup>

            <FormGroup check inline>
              <Input type="radio" name="videoType" />{' '}
              <Label check>Youtube</Label>
            </FormGroup>

            <FormGroup check inline>
              <Input type="radio" name="videoType" />{' '}
              <Label check>Other</Label>
            </FormGroup>

            <Input
              className="mt-2"
              placeholder="Paste video link here"
            />
          </FormGroup>
        </Col>
        <Col md="6">
        {/* Remarks */}
        <FormGroup>
          <Label>Remarks</Label>
          <Input type="textarea" rows="3" />
        </FormGroup>
        </Col>

        {/* Dates */}
        <Row>
          <Col md="6">
            {/* <FormGroup>
              <Label>
                Available Date <span className="text-danger">*</span>
              </Label>
              <Input type="datetime-local" required />
            </FormGroup> */}
            <FormGroup>
                <Fragment>
                <Label>
                  Available Date <span className="text-danger">*</span>
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
                    placeholder="Select Available Date"
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

          <Col md="6">
            {/* <FormGroup>
              <Label>
                Expiry Date <span className="text-danger">*</span>
              </Label>
              <Input type="datetime-local" />
              <FormGroup check className="mt-1">
                <Input type="checkbox" />{' '}
                <Label check>No Expiry</Label>
              </FormGroup>
            </FormGroup> */}
            <FormGroup>
              <Label>
                Expiry Date <span className="text-danger">*</span>
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
                  placeholder="Select Expiry Date"
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
