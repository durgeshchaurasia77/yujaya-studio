// import { useState, useRef } from 'react'
import { useEffect, useRef, useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  CardTitle,
  Row,
  Modal,
  ModalHeader,
  ModalBody,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  ModalFooter,
  Form,
  FormGroup,
  CustomInput,
  Button,
  Col,
  Label,
  Input,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, 
  InputGroup, 
  InputGroupText, 
  InputGroupAddon
} from 'reactstrap'
import Stepper from 'bs-stepper'
import 'bs-stepper/dist/css/bs-stepper.min.css'
import Select from 'react-select'
import SelectAllMultiSelect from "../../../../component/SelectAllMultiSelect/SelectAllMultiSelect.js"
import '../../../../assets/css.css'
import { EditorState } from 'draft-js'
import CommonEditor from '../../../../component/common/CommonEditor.js'
import { useHistory } from 'react-router-dom'

const parentPostureOptions = [
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

const postureTypeOptions = [
  { label: "Standing", value: "standing" },
  { label: "Sitting", value: "sitting" },
  { label: "Prone", value: "prone" },
  { label: "Supine", value: "supine" },
  { label: "Inversions", value: "inversions" },
  { label: "Balancing", value: "balancing" },
  { label: "Forward Bends", value: "forward_bends" },
  { label: "Backbends", value: "backbends" },
  { label: "Twists", value: "twists" }
]

const postureOptions = [
  { label: "Cultural", value: "cultural" },
  { label: "Meditative", value: "meditative" },
  { label: "Relaxing", value: "relaxing" },
  { label: "Therapeutic", value: "therapeutic" },
  { label: "Stimulating", value: "stimulating" },
  { label: "Energizing", value: "energizing" }
]
const styleOptions = [
  { label: "Hatha", value: "hatha" },
  { label: "Ashtanga", value: "ashtanga" },
  { label: "Vinyasa", value: "vinyasa" },
  { label: "Iyengar", value: "iyengar" },
  { label: "Tantra", value: "tantra" },
  { label: "Kundalini", value: "kundalini" },
  { label: "Yin", value: "yin" },
  { label: "Kriya", value: "kriya" },
  { label: "Nada", value: "nada" },
  { label: "Bikram/Hot Yoga", value: "bikram_hot_yoga" },
  { label: "Power", value: "power" },
  { label: "Aerial", value: "aerial" },
  { label: "Acro", value: "acro" },
  { label: "Jnana", value: "jnana" },
  { label: "Karma", value: "karma" },
  { label: "Bhakti", value: "bhakti" },
  { label: "Raja", value: "raja" }
]
const AddPosture = () => {
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
  const [PostureTypes, setPostureTypes] = useState([''])
  const [doshaRemarks, setDoshaRemarks] = useState()
  const [dietLifestyle, setDietLifestyle] = useState()
  const [benefits, setBenefits] = useState()
  const [limitations, setLimitations] = useState()
  const [subtlePoints, setSubtlePoints] = useState()
  const [remarks, setRemarks] = useState()
  // const [selectedCountry, setSelectedCountry] = useState(
  //   optionsCountry.find(o => o.value === 'india')
  // )

  const [steps, setSteps] = useState([
  {
    position: "",
    step: "",
    notes: "",
    image: null
  }
])

const addStep = () => {
  setSteps([
    ...steps,
    { position: "", step: "", notes: "", image: null }
  ])
}

const removeStep = (index) => {
  if (steps.length > 1) {
    setSteps(steps.filter((_, i) => i !== index))
  }
}

const handleStepChange = (index, field, value) => {
  const updatedSteps = [...steps]
  updatedSteps[index][field] = value
  setSteps(updatedSteps)
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
      <CardHeader>
        <h4 className="mb-3">Add Assign Posture Practice</h4>
      </CardHeader>
      <CardBody>
        <Form>

          <Row>
            
          {/* Title */}
            <Col md={6}>
              <FormGroup>
                <Label>Title <span className="text-danger">*</span></Label>
                <Input type="text" placeholder="Please Enter Title" />
              </FormGroup>
            </Col>
            
          {/* Select Ailment */}
            <Col md={6}>
              <FormGroup>
                <Label>Select Ailment <span className="text-danger">*</span></Label>
                {/* <Input type="text" placeholder="Please Enter Ailment" /> */}
                <SelectAllMultiSelect
                  options={postureOptions}
                  placeholderText="Select Ailment"
                  classNamePrefix="select"
                  required
                />
              </FormGroup>
            </Col>
          </Row>
          {/* Category / Sub Category */}
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label>Category <span className="text-danger">*</span></Label>
                <Select
                  placeholder="Please Select"
                  options={parentPostureOptions}
                />
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup>
                <Label>Sub Category <span className="text-danger">*</span></Label>
                <Select
                  placeholder="Please Select"
                  options={parentPostureOptions}
                />
              </FormGroup>
            </Col>
          </Row>

          {/* Select Posture (Multiple) */}
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label>Select Posture <span className="text-danger">*</span></Label>
                <SelectAllMultiSelect
                  options={postureOptions}
                  placeholderText="Select Posture (Multiple Allowed)"
                  classNamePrefix="select"
                  required
                />
              </FormGroup>
            </Col>
            
            <Col md={6}>
              <FormGroup>
                <Label>Preparatory Poses</Label>
                {/* <Input type="text" placeholder="Enter Preparatory Poses" /> */}
                <SelectAllMultiSelect
                  options={postureOptions}
                  placeholderText="Select Preparatory Poses"
                  classNamePrefix="select"
                  required
                />
              </FormGroup>
            </Col>
          </Row>

          {/* Preparatory / Complementary */}
          <Row>

            <Col md={6}>
              <FormGroup>
                <Label>Complementary Posture</Label>
                {/* <Input type="text" placeholder="Enter Complementary Posture" /> */}
                <SelectAllMultiSelect
                  options={postureOptions}
                  placeholderText="Select Complementary Posture"
                  classNamePrefix="select"
                  required
                />
              </FormGroup>
            </Col>
          </Row>

          {/* Description */}
          <Row>
            <Col md={12}>
              <FormGroup>
                <Label>Description</Label>
                <CommonEditor
                  editorState={editorState}
                  onChange={setEditorState}
                  height={180}
                />
              </FormGroup>
            </Col>
          </Row>

          {/* Add Step */}
          <Row>
            <Col md={12}>
              <Label className="font-weight-bold mb-2">Add Steps</Label>
            </Col>

            {steps.map((item, index) => (
              <Col md={12} key={index}>
                <div className="border rounded p-3 mb-3 bg-light">

                  {/* Step Header */}
                  <Row className="align-items-center mb-2">
                    <Col md={6}>
                      <strong>Step {index + 1}</strong>
                    </Col>

                    <Col md={6} className="text-right">
                      {steps.length > 1 && (
                        <Button
                          color="danger"
                          size="sm"
                          onClick={() => removeStep(index)}
                        >
                          Remove
                        </Button>
                      )}
                    </Col>
                  </Row>

                  {/* Step Fields */}
                  <Row>
                    <Col md={3}>
                      <FormGroup>
                        <Label>Initial / Posture Position</Label>
                        <Input
                          type="text"
                          value={item.position}
                          onChange={(e) => handleStepChange(index, "position", e.target.value)}
                        />
                      </FormGroup>
                    </Col>

                    <Col md={3}>
                      <FormGroup>
                        <Label>Step</Label>
                        <Input
                          type="text"
                          value={item.step}
                          onChange={(e) => handleStepChange(index, "step", e.target.value)}
                        />
                      </FormGroup>
                    </Col>

                    <Col md={3}>
                      <FormGroup>
                        <Label>Notes</Label>
                        <Input
                          type="textarea"
                          rows="2"
                          value={item.notes}
                          onChange={(e) => handleStepChange(index, "notes", e.target.value)}
                        />
                      </FormGroup>
                    </Col>

                    <Col md={3}>
                      <FormGroup>
                        <Label>Image</Label>
                        <Input
                          type="file"
                          onChange={(e) => handleStepChange(index, "image", e.target.files[0])}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
              </Col>
            ))}

            {/* Add Button */}
            <Col md={12} className="text-right">
              <Button color="primary" onClick={addStep}>
                + ADD STEP
              </Button>
            </Col>
          </Row>


          {/* Dosha Imbalance */}
          <Row className="mt-3">
            <Col md={12}>
                <div className="custom-checkbox-wrapper">
                  <FormGroup>
                    <Label className="font-weight-bold">Dosha Imbalance</Label>
                    <div className='ml-2'>
                        <Input type="checkbox" className="custom-checkbox"/> 
                        <Label check className="mr-3 custom-lebal-style">Vata
                        </Label>
                        <Input type="checkbox" className="custom-checkbox"/> 
                        <Label check className="mr-3 custom-lebal-style">Pitta
                        </Label>
                        <Input type="checkbox" className="custom-checkbox"/> 
                        <Label check className='custom-lebal-style'>Kapha
                        </Label>
                    </div>
                  </FormGroup>
              </div>
            </Col>
          </Row>

          {/* Dosha Remarks / Diet */}
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label className="font-weight-bold">Dosha Remarks</Label>
                <CommonEditor
                  editorState={doshaRemarks}
                  onChange={setDoshaRemarks}
                  height={180}
                />
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup>
                <Label className="font-weight-bold">
                  Diet & Lifestyle Recommendations
                </Label>
                <CommonEditor
                  editorState={dietLifestyle}
                  onChange={setDietLifestyle}
                  height={180}
                />
              </FormGroup>
            </Col>
          </Row>

        </Form>
      </CardBody>

      <CardFooter>
        <div className='button-alignment-accouncement'>
        <Button color="secondary" onClick={() => history.push('/posture/assign-posture-practice/list')}>
            Cancel
          </Button>
          <Button color="primary" className='ml-2'>
            Submit
          </Button>
          </div>
      </CardFooter>
    </Card>
  </>
  )
}

export default AddPosture
