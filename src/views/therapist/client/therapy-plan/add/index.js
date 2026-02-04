import { useEffect, useRef, useState } from 'react'
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Form,
  FormGroup,
  CustomInput,
  Button,
  Col,
  Label,
  CardFooter
} from 'reactstrap'


import Stepper from 'bs-stepper'
import 'bs-stepper/dist/css/bs-stepper.min.css'
import { useHistory } from 'react-router-dom'
import Select from 'react-select'
import SelectAllMultiSelect from "../../../../../component/SelectAllMultiSelect/SelectAllMultiSelect.js"
import '../../../../../assets/css.css'
import { EditorState } from 'draft-js'
import CommonEditor from '../../../../../component/common/CommonEditor'

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

const AddTherapy = () => {
  const [venue, setVenue] = useState('')
  const [feeType, setFeeType] = useState(null)
  const history = useHistory()
  const [selectedRow, setSelectedRow] = useState(null)
  const [addCategoryModal, setAddCategoryModal] = useState(false)
  const [viewCategoryModal, setViewCategoryModal] = useState(false)
  const [editCategoryModal, setEditCategoryModal] = useState(false)
  const [categoryTypes, setCategoryTypes] = useState([''])
  const [status, setStatus] = useState(true)
  const [practiceCount, setPracticeCount] = useState(0)
  const [category, setCategory] = useState(null)
  const [subCategory, setSubCategory] = useState(null)
  const [practice, setPractice] = useState(null)
  const [sequence, setSequence] = useState([])

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

  return (
  <>
    <Card>
      <CardBody>
        {/* <h4 className="mb-3">List Plan</h4> */}
           <Form>
          {/* Header */}
          <Row className="mb-3">
            <Col md={12}>
              <h4 className="font-weight-bold">Create Plan</h4>
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
            <Button color="secondary" onClick={() => history.push('/therapist-auth/client/therapy-plan/list')} className='mr-2'>
            Cancel
            </Button>
              <Button color="primary" onClick={() => history.push('/therapist-auth/client/therapy-plan/list')}>Submit</Button>
            </div>
        </CardFooter>
    </Card>
  </>
  )
}

export default AddTherapy
