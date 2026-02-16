// import { useState, useRef } from 'react'
import { useEffect, useRef, useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Card,
  CardBody,
  Button,
  Row, Col, FormGroup, Label, Input, CardFooter,
  CardHeader, Form
} from 'reactstrap'
import Stepper from 'bs-stepper'
import 'bs-stepper/dist/css/bs-stepper.min.css'
import Select from 'react-select'
import SelectAllMultiSelect from "../../../../component/SelectAllMultiSelect/SelectAllMultiSelect.js"
import '../../../../assets/css.css'
import { EditorState } from 'draft-js'
import { useHistory } from 'react-router-dom'
import CommonEditor from '../../../../component/common/CommonEditor'
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


const parentCategoryOptions = [
  { label: "Limited", value: "limited" },
  { label: "Unlimited", value: "unlimited" },
  { label: "Multi-Class Bundles", value: "multi_class_bundles" },
  { label: "Trial", value: "trial" },
  { label: "Introductory Packages", value: "introductory_packages" },
  { label: "Drop-in", value: "drop_in" },
  { label: "Online-Only", value: "online_only" },
  { label: "Student", value: "student" },
  { label: "Personal Training", value: "personal_training" },
  { label: "Therapy", value: "therapy" },
  { label: "Workshop", value: "workshop" },
  { label: "Corporate", value: "corporate" },
  { label: "Retreat", value: "retreat" },
  { label: "Seminar", value: "seminar" },
  { label: "Specialized", value: "specialized" }
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
  const history = useHistory()
  const [venue, setVenue] = useState('')
  const [feeType, setFeeType] = useState(null)
  const [isEarlyBird, setIsEarlyBird] = useState(false)
  const [offlineEarlyBirdFee, setOfflineEarlyBirdFee] = useState('')
  const [offlineEarlyExpireDays, setOfflineEarlyExpireDays] = useState('')

  const [onlineEarlyBirdFee, setOnlineEarlyBirdFee] = useState('')
  const [onlineEarlyExpireDays, setOnlineEarlyExpireDays] = useState('')
  const [status, setStatus] = useState(true)
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const [categoryTypes, setCategoryTypes] = useState([''])
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

  const addCategoryType = () => {
  setCategoryTypes([...categoryTypes, ''])
}

const removeCategoryType = (index) => {
  if (categoryTypes.length === 1) return

  const updated = categoryTypes.filter((_, i) => i !== index)
  setCategoryTypes(updated)
}

const updateCategoryType = (index, value) => {
  const updated = [...categoryTypes]
  updated[index] = value
  setCategoryTypes(updated)
}

  return (
  <>
    <Card>
        <CardHeader toggle={() => setAddCategoryModal(false)}>
            Add Practice Category
        </CardHeader>
      <CardBody>
        
        <Form>
        <Row>
          {/* Parent Category */}
          <Col md='5'>
            <FormGroup>
              <Label className="font-weight-bold">
                Parent Category <span className="text-danger">*</span>
              </Label>
              <Select
                placeholder="Please Select Parent Category"
                className="react-select"
                classNamePrefix="select"
                isSearchable={true}
                options={parentCategoryOptions}
              />
            </FormGroup>
          </Col>
          <Col md='5'>
          {/* Sub Category */}
          <FormGroup>
            <Label className="font-weight-bold">
              Sub Category <span className="text-danger">*</span>
            </Label>
            <Select
              placeholder="Please Select Sub Category"
              className="react-select"
              classNamePrefix="select"
              isSearchable={true}
              options={parentCategoryOptions}
            />
          </FormGroup>

          </Col>
          <Col md='2'>
          {/* Choose Color */}
          <FormGroup>
            <Label className="font-weight-bold">Choose Color</Label>
            <Input type="color" />
          </FormGroup>

          </Col>
          <Col md='6'>
          {/* Add Icon / Image */}
          <FormGroup>
            <Label className="font-weight-bold">Add Icon / Image</Label>
            <Input type="file" />
          </FormGroup>

          </Col>
          <Col md='6'>

          {/* Description */}
          <FormGroup>
            <Label className="font-weight-bold">Description</Label>
            <Input
              type="textarea"
              rows="4"
              placeholder="Enter description"
            />
          </FormGroup>

          </Col>
          
          <Col md='6'>
          {/* Add Category Type */}
          <FormGroup>
          <Label className="font-weight-bold">Add Category Type</Label>

          {categoryTypes.map((type, index) => (
            <Row key={index} className="align-items-center mb-2">
              <Col md="8">
                <Input
                  type="text"
                  value={type}
                  placeholder="Enter category type"
                  onChange={(e) => updateCategoryType(index, e.target.value)}
                  required
                />
              </Col>

              <Col md="4">
                {index === 0 ? (
                  <Button
                    color="secondary"
                    block
                    onClick={addCategoryType}
                  >
                    ADD MORE TYPE
                  </Button>
                ) : (
                  <Button
                    color="danger"
                    block
                    onClick={() => removeCategoryType(index)}
                  >
                    REMOVE
                  </Button>
                )}
              </Col>
            </Row>
          ))}

          {categoryTypes.length === 1 && categoryTypes[0].trim() === '' && (
            <small className="text-danger">
              At least one category type is required
            </small>
          )}
        </FormGroup>

          </Col>
          <Col md='12'>
          {/* Status */}
          <FormGroup check>
            <label className="custom-switch">
              <input
                type="checkbox"
                checked={status}
                onChange={() => setStatus(!status)}
              />
              <span className="slider"></span>
              <span className="switch-label">Status</span>
            </label>
          </FormGroup>

          </Col>
          </Row>
        </Form>
      </CardBody>

      <CardFooter>
        <div className='button-alignment-accouncement'>
          <Button color="secondary"  onClick={() => history.push('/posture/practice-category/list')}>
            Cancel
          </Button>
          <Button color="primary" className='ml-2' onClick={() => history.push('/posture/practice-category/list')}>
            Submit
          </Button>
        </div>
      </CardFooter>
    </Card>
  </>
  )
}

export default AddClass
