// import { useState, useRef } from 'react'
import { useEffect, useRef, useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Card,
  CardBody,
  Button,
  Row, Col, FormGroup, Label, Input, CardFooter, Form
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

const categoryOptions = [
  { label: "Specialized", value: "specialized" },
  { label: "Therapy", value: "therapy" }
]

const subCategoryOptions = [
  { label: "Back Pain", value: "back_pain" },
  { label: "Neck Pain", value: "neck_pain" }
]

const practiceOptions = [
  { label: "Tadasana", value: "tadasana" },
  { label: "Bhujangasana", value: "bhujangasana" },
  { label: "Vajrasana", value: "vajrasana" }
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
  const [category, setCategory] = useState(null)
  const [subCategory, setSubCategory] = useState(null)
  const [practice, setPractice] = useState(null)
  const [sequence, setSequence] = useState([])
  const history = useHistory()
  // const [selectedCountry, setSelectedCountry] = useState(
  //   optionsCountry.find(o => o.value === 'india')
  // )

  const addPractice = () => {
  if (!practice) return

  const exists = sequence.find(p => p.value === practice.value)
  if (exists) return alert("Practice already added")

  setSequence([...sequence, practice])
  setPractice(null)
}

const clearSequence = () => {
  setSequence([])
}


const viewSequence = () => {
  if (!sequence.length) {
    alert("No practices added")
    return
  }

  alert(sequence.map((s, i) => `${i + 1}. ${s.label}`).join("\n"))
}
const saveSequence = () => {
  const payload = {
    category: category?.value,
    subCategory: subCategory?.value,
    sequence: sequence.map(s => s.value)
  }
  console.log("SAVE PAYLOAD:", payload)
  alert("Sequence Saved (dummy)")
}


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
        {/* <h4 className="mb-3">Class Review</h4> */}
          <Form>
          {/* Header */}
          <Row className="mb-3">
            <Col md={12}>
              <h4 className="font-weight-bold">Create Posture Sequence</h4>
            </Col>
          </Row>
          <Row>
          {/* LEFT */}
          <Col md={6}>
            <FormGroup>
              <Label>Category <span className="text-danger">*</span></Label>
              <Select
                value={category}
                onChange={setCategory}
                options={categoryOptions}
                placeholder="Please Select"
              />
            </FormGroup>

            <FormGroup>
              <Label>Sub Category <span className="text-danger">*</span></Label>
              <Select
                value={subCategory}
                onChange={setSubCategory}
                options={subCategoryOptions}
                placeholder="Please Select"
              />
            </FormGroup>

            <FormGroup>
              <Label>Practice <span className="text-danger">*</span></Label>
              <Select
                value={practice}
                onChange={setPractice}
                options={practiceOptions}
                placeholder="Select Practice"
              />
            </FormGroup>

            <Button
              color="secondary"
              disabled={!practice}
              onClick={addPractice}
            >
              ADD PRACTICE
            </Button>
          </Col>

          {/* RIGHT */}
          <Col md={6} className="text-right">
            <div className="mb-2">
              <strong>Preset Sequence</strong>
            </div>

            <div className="mb-2">
              Practice Added: <b>{sequence.length}</b>
            </div>

            <div className="mb-3">
              <Button color="link" onClick={viewSequence}>
                View Sequence
              </Button>
              <Button
                color="link"
                className="text-danger"
                disabled={!sequence.length}
                onClick={clearSequence}
              >
                Clear Sequence
              </Button>
            </div>

            <Button
              color="secondary"
              disabled={!sequence.length}
              onClick={saveSequence}
            >
              SAVE
            </Button>
          </Col>
        </Row>

        {/* Preset Sequence List */}
        <Row className="mt-4">
          <Col md={12}>
            <Label className="font-weight-bold">Preset Sequence:</Label>

            {sequence.length === 0 ? (
              <div className="text-muted">No practices added</div>
            ) : (
              sequence.map((item, index) => (
                <div
                  key={item.value}
                  className="border rounded p-2 mb-1"
                >
                  {index + 1}. {item.label}
                </div>
              ))
            )}
          </Col>
        </Row>
        </Form>
        </CardBody>
        <CardFooter className="text-end">
          <div className="d-flex justify-content-between align-end button-alignment-accouncement">
              <Button color="primary"   onClick={() => history.push('/posture/posture-sequence/list')}>Submit</Button>
            </div>
        </CardFooter>
    </Card>
  </>
  )
}

export default AddClass
