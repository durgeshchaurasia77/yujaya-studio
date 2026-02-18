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
import b1Image from '../../../../assets/images/asan/b1.jpeg'
import b2Image from '../../../../assets/images/asan/b2.png'
import b3Image from '../../../../assets/images/asan/b3.jpeg'
import b4Image from '../../../../assets/images/asan/b4.jpeg'
import b5Image from '../../../../assets/images/asan/b5.jpeg'
import b6Image from '../../../../assets/images/asan/b6.jpeg'
import b7Image from '../../../../assets/images/asan/b7.jpeg'
import b8Image from '../../../../assets/images/asan/b8.jpeg'
import b9Image from '../../../../assets/images/asan/b9.jpeg'
import b10Image from '../../../../assets/images/asan/b10.jpeg'
import b11Image from '../../../../assets/images/asan/b11.jpeg'
import b12Image from '../../../../assets/images/asan/b12.webp'


const postureList = [
  {
    value: "tadasana",
    label: "Tadasana",
    image: b1Image,
    category: "specialized",
    subCategory: "back_pain"
  },
  {
    value: "bhujangasana",
    label: "Bhujangasana",
    image: b2Image,
    category: "specialized",
    subCategory: "back_pain"
  },
  {
    value: "vajrasana",
    label: "Vajrasana",
    image: b3Image,
    category: "therapy",
    subCategory: "neck_pain"
  },
  {
    value: "vajrasana1",
    label: "Vajrasana1",
    image: b4Image,
    category: "therapy",
    subCategory: "neck_pain"
  },
  {
    value: "vajrasana2",
    label: "Vajrasana2",
    image: b5Image,
    category: "therapy",
    subCategory: "neck_pain"
  },
  {
    value: "vajrasana3",
    label: "Vajrasana3",
    image: b6Image,
    category: "therapy",
    subCategory: "neck_pain"
  },
  {
    value: "vajrasana4",
    label: "Vajrasana4",
    image: b7Image,
    category: "therapy",
    subCategory: "neck_pain"
  },
  {
    value: "vajrasana5",
    label: "Vajrasana5",
    image: b8Image,
    category: "therapy",
    subCategory: "neck_pain"
  },
  {
    value: "vajrasana6",
    label: "Vajrasana6",
    image: b9Image,
    category: "therapy",
    subCategory: "neck_pain"
  },
  {
    value: "vajrasana7",
    label: "Vajrasana7",
    image: b10Image,
    category: "therapy",
    subCategory: "neck_pain"
  },
  {
    value: "vajrasana8",
    label: "Vajrasana8",
    image: b11Image,
    category: "therapy",
    subCategory: "neck_pain"
  },
  {
    value: "vajrasana9",
    label: "Vajrasana9",
    image: b12Image,
    category: "therapy",
    subCategory: "neck_pain"
  }
]


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
  // const [practice, setPractice] = useState(null)
  const [practice, setPractice] = useState([])
  const [selectedPostures, setSelectedPostures] = useState([])
  const [sequence, setSequence] = useState([])
  const history = useHistory()
  // const [selectedCountry, setSelectedCountry] = useState(
  //   optionsCountry.find(o => o.value === 'india')
  // )

  const togglePostureSelection = (item) => {
  setSelectedPostures((prev) => {
    const exists = prev.find((p) => p.value === item.value)

    if (exists) {
      // Remove if already selected
      return prev.filter((p) => p.value !== item.value)
    } else {
      // Add if not selected
      return [...prev, item]
    }
  })
}

  const filteredPostures = postureList.filter((item) => {
    return (
      (!category || item.category === category.value) &&
      (!subCategory || item.subCategory === subCategory.value)
    )
  })
const addPractice = () => {
  if (!selectedPostures.length) {
    alert("Select at least one practice")
    return
  }

  const newItems = selectedPostures.filter(
    (item) => !sequence.find((p) => p.value === item.value)
  )

  if (!newItems.length) {
    alert("All selected practices already added")
    return
  }

  // setSequence([...sequence, ...newItems])
  setSequence((prev) => [...prev, ...newItems])
  setPractice([]) // clear dropdown
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
// const saveSequence = () => {
//   const payload = {
//     category: category?.value,
//     subCategory: subCategory?.value,
//     sequence: sequence.map(s => s.value)
//   }
//   console.log("SAVE PAYLOAD:", payload)
//   alert("Sequence Saved (dummy)")
// }
const saveSequence = () => {
  if (!category || !subCategory || sequence.length === 0) {
    alert("Please complete required fields")
    return
  }

  const payload = {
    category: category.value,
    subCategory: subCategory.value,
    sequence
  }

  console.log(payload)
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

            {/* <FormGroup>
              <Label>Practice <span className="text-danger">*</span></Label>
              <Select
                value={practice}
                onChange={setPractice}
                options={practiceOptions}
                placeholder="Select Practice"
              />
            </FormGroup> */}
            <FormGroup>
              <Label>Practice <span className="text-danger">*</span></Label>
              <Select
                value={practice}
                onChange={setPractice}
                options={practiceOptions}
                placeholder="Select Practice"
                isMulti
              />
            </FormGroup>
            {/* <Row>
              {filteredPostures.map(item => (
                <Col md={3} key={item.value} className="mb-3">
                  <div
                    className={`border p-2 text-center practice-border cursor-pointer ${practice?.value === item.value ? "border-primary" : ""}`}
                    onClick={() => setPractice(item)}
                  >
                    <img
                      src={item.image}
                      alt={item.label}
                      style={{ width: "50%", minHeight:"100px", maxHeight: "100px", objectFit: "contain" }}
                    />
                    <div style={{ width: "100px", fontSize:"small", fontWeight:"500" }} className="mt-1">{item.label}</div>
                  </div>
                </Col>
              ))}
              </Row> */}
              <Row>
                {filteredPostures.map((item) => {
                  const isSelected = selectedPostures.find(
                    (p) => p.value === item.value
                  )

                  return (
                    <Col md={4} key={item.value} className="mb-3">
                      <div
                        className={`border p-2 text-center cursor-pointer ${
                          isSelected ? "practice-border bg-light" : ""
                        }`}
                        onClick={() => togglePostureSelection(item)}
                        style={{ position: "relative" }}
                      >
                        {isSelected && (
                        <div
                          style={{
                            position: "absolute",
                            top: 5,
                            right: 5,
                            // border: "1px solid #c3a9ef",
                            // background: "#c3a9ef",
                            // color: "#fff",
                            padding: "2px 6px",
                            fontSize: "12px",
                            borderRadius: "4px"
                          }}
                        >
                          {/* Selected */}
                        </div>
                      )}
                        <img
                          src={item.image}
                          alt={item.label}
                          style={{
                            width: "100%",
                            height: "120px",
                            objectFit: "contain"
                          }}
                        />
                        <div className="mt-1">{item.label}</div>
                      </div>
                    </Col>
                  )
                })}
              </Row>
            {/* <Button
              color="secondary"
              disabled={!practice}
              onClick={addPractice}
            >
              ADD PRACTICE
            </Button> */}
            <Button
              color="secondary"
              disabled={!selectedPostures.length}
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
        {/* <Row className="mt-4">
          <Col md={12}>
            <Label className="font-weight-bold">Preset Sequence:</Label>
            {sequence.length === 0 ? (
              <div className="text-muted">No practices added</div>
            ) : (
              <Row>
                {sequence.map((item, index) => (
                  <Col md={4} key={item.value} className="mb-3">
                    <div className="border p-2 text-center">
                      <img
                        src={item.image}
                        alt={item.label}
                        style={{ width: "100%", height: "100px", objectFit: "contain" }}
                      />
                      <div>{index + 1}. {item.label}</div>
                    </div>
                  </Col>
                ))}
              </Row>
            )}
          </Col>
        </Row> */}
        <Row className="mt-4">
        <Col md={12}>
          <Label className="font-weight-bold mb-3">
            Preset Sequence:
          </Label>

          {sequence.length === 0 ? (
            <div className="text-muted">No practices added</div>
          ) : (
            <Row>
              {sequence.map((item, index) => (
                <Col md={3} sm={4} xs={6} key={item.value} className="mb-4">
                  {/* <div
                    className="shadow-sm border rounded text-center h-100 d-flex flex-column justify-content-between"
                    style={{ padding: "10px" }}
                  >
                    <div>
                      <img
                        src={item.image}
                        alt={item.label}
                        style={{
                          width: "100%",
                          height: "120px",
                          objectFit: "contain"
                        }}
                      />
                    </div>

                    <div
                      className="mt-2 font-weight-500"
                      style={{ fontSize: "14px" }}
                    >
                      {index + 1}. {item.label}
                    </div>
                  </div> */}
                  <div
                  className="shadow-sm border rounded text-center d-flex flex-column"
                  style={{
                    padding: "12px",
                    height: "220px",
                    justifyContent: "space-between"
                  }}
                  >
                  <div className="d-flex justify-content-center align-items-center" style={{ height: "140px" }}>
                    <img
                      src={item.image}
                      alt={item.label}
                      style={{
                        maxHeight: "120px",
                        maxWidth: "100%",
                        objectFit: "contain"
                      }}
                    />
                  </div>

                  <div className="mt-2 font-weight-500" style={{ fontSize: "14px" }}>
                    {index + 1}. {item.label}
                  </div>
                  </div>

                </Col>
              ))}
            </Row>
          )}
        </Col>
      </Row>

        </Form>
        </CardBody>
        <CardFooter className="text-end">
          <div className="d-flex justify-content-between align-end button-alignment-accouncement">
            
            <Button color="secondary" className="mr-1" onClick={() => history.push('/posture/posture-sequence/list')}>
              Cancel
            </Button>

              <Button color="primary"   onClick={() => history.push('/posture/posture-sequence/list')}>Submit</Button>
            </div>
        </CardFooter>
    </Card>
  </>
  )
}

export default AddClass
