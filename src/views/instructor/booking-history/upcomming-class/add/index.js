// import { useState, useRef } from 'react'
import { useEffect, useRef, useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Card,
  CardBody,
  Button,
  Row, Col, FormGroup, Label, Input, CardFooter
} from 'reactstrap'
import Stepper from 'bs-stepper'
import 'bs-stepper/dist/css/bs-stepper.min.css'
import Select from 'react-select'
import SelectAllMultiSelect from "../../../../../component/SelectAllMultiSelect/SelectAllMultiSelect.js"
import '../../../../../assets/css.css'
import { EditorState } from 'draft-js'
import CommonEditor from '../../../../../component/common/CommonEditor'
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
        <h4 className="mb-3">Class Review</h4>

        {/* Review Type */}
        <FormGroup tag="fieldset" className="mb-3">
          <Label className="d-block mb-2">Select Review For</Label>
          <FormGroup check inline>
            <Input type="radio" name="reviewType" defaultChecked />{' '}
            <Label check>Class</Label>
          </FormGroup>
          <FormGroup check inline>
            <Input type="radio" name="reviewType" />{' '}
            <Label check>Workshop</Label>
          </FormGroup>
          <FormGroup check inline>
            <Input type="radio" name="reviewType" />{' '}
            <Label check>Course</Label>
          </FormGroup>
          <FormGroup check inline>
            <Input type="radio" name="reviewType" />{' '}
            <Label check>Teacher Training</Label>
          </FormGroup>
          <FormGroup check inline>
            <Input type="radio" name="reviewType" />{' '}
            <Label check>Retreat</Label>
          </FormGroup>
          <FormGroup check inline>
            <Input type="radio" name="reviewType" />{' '}
            <Label check>Private Therapy</Label>
          </FormGroup>
        </FormGroup>

        {/* Class Selection */}
        <Row className="mb-2">
          <Col md="4">
            <FormGroup>
              <Label>Select Class</Label>
              <Select
                options={classTypeOptions}
                placeholder="Select Class"
                className="react-select"
                classNamePrefix="select"
                isSearchable={false}
                required 
              />
            </FormGroup>
          </Col>
        </Row>

        {/* Class Experience */}
        <h5 className="mb-2">Class Experience Rating</h5>
        <Row>
          {[
            'Overall class experience',
            'Flow and pacing of the class',
            'Clarity of instructions & Time management',
            'Did the class meet your expectation?',
            'Did it help improve your health issue?',
            'How would you rate the entire experience?'
          ].map((label, index) => (
            <Col md="6" key={index}>
              <FormGroup>
                <Label>{label}</Label>
                {/* <Input type="select">
                  <option>Select</option>
                  <option>1 - Very Poor</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5 - Excellent</option>
                </Input> */}
                <Select
                  options={optionsRating}
                  placeholder={`Select ${label}`}
                  className="react-select"
                  classNamePrefix="select"
                  isSearchable={false}
                  required 
                />
              </FormGroup>
            </Col>
          ))}
        </Row>

        {/* Instructor Feedback */}
        <h5 className="mt-4 mb-2">Instructor Feedback</h5>
        <Row>
          {[
            'Instructor’s knowledge and guidance',
            'Personal attention & corrections',
            'Competency & professionalism'
          ].map((label, index) => (
            <Col md="6" key={index}>
              <FormGroup>
                <Label>{label}</Label>
                  <Select
                    options={optionsRating}
                    placeholder={`Select ${label}`}
                    className="react-select"
                    classNamePrefix="select"
                    isSearchable={false}
                    required 
                  />
              </FormGroup>
            </Col>
          ))}
        </Row>

        {/* Studio Environment */}
        <h5 className="mt-4 mb-2">Studio Environment</h5>
        <Row>
          {[
            'Cleanliness, temperature & ventilation',
            'Music / ambience / equipment',
            'Comfort and safety'
          ].map((label, index) => (
            <Col md="6" key={index}>
              <FormGroup>
                <Label>{label}</Label>
                  <Select
                    options={optionsRating}
                    placeholder={`Select ${label}`}
                    className="react-select"
                    classNamePrefix="select"
                    isSearchable={false}
                    required 
                  />
              </FormGroup>
            </Col>
          ))}
        </Row>
      </CardBody>
    </Card>

    <Card className="mb-3">
        <CardBody>
          <h5 className="mb-3">Final Rating & Recommendation</h5>
          <Row className="mt-3">
            
            <Col md="6">
              <FormGroup>
                <Label>
                  How do you find Yoga Instructor / Therapist approach, knowledge and teaching methods?
                </Label>
                <Input
                  type="textarea"
                  rows="3"
                  placeholder="Please share your feedback..."
                />
              </FormGroup>
            </Col>
             <Col md="6">
              <FormGroup>
                <Label>
                  Did Yoga Class / Workshop / Course / Retreat / Therapy help?
                  If yes, please explain in brief.
                </Label>
                <Input
                  type="textarea"
                  rows="3"
                  placeholder="Please explain briefly..."
                />
              </FormGroup>
            </Col>
             <Col md="6">
              <FormGroup>
                <Label>What did you enjoy most?</Label>
                <Input
                  type="textarea"
                  rows="3"
                  placeholder="Write here..."
                />
              </FormGroup>
            </Col>
             <Col md="6">
              <FormGroup>
                <Label>Kindly give suggestions, if any, for improvement</Label>
                <Input
                  type="textarea"
                  rows="3"
                  placeholder="Your suggestions..."
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label>Upload Hand Written Image</Label>
                <Input type="file" />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label>Upload Student Photo</Label>
                <Input type="file" />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label>Video Review Link</Label>
                <Input
                  type="url"
                  placeholder="https://"
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

export default AddClass
