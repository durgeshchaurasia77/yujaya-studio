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

const effectTypeOptions = [
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
const ViewPosture = () => {
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
  const [deepenPose, setDeepenPose] = useState()
  const [variationPose, setVariationPose] = useState()
  const [benefits, setBenefits] = useState()
  const [limitations, setLimitations] = useState()
  const [subtlePoints, setSubtlePoints] = useState()
  const [remarks, setRemarks] = useState()
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
      <CardHeader>
        <h4 className="mb-3">View Assigned Posture Practice</h4>
      </CardHeader>
      <CardBody>
        <Form>

          {/* Row 1 */}
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label>Category</Label>
                <Select
                  options={parentPostureOptions}
                  isDisabled
                />
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup>
                <Label>Sub Category</Label>
                <Select
                  options={parentPostureOptions}
                  isDisabled
                />
              </FormGroup>
            </Col>
          </Row>

          {/* Row 2 */}
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label>Type</Label>
                <Select
                  options={postureTypeOptions}
                  isDisabled
                />
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup>
                <Label>Effects</Label>
                <Select
                  options={effectTypeOptions}
                  isDisabled
                />
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup>
                <Label>Style</Label>
                <Select
                  options={styleOptions}
                  isDisabled
                />
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup>
                <Label>Level</Label>
                <div>
                  <Label check className="mr-2 ml-2">
                    <Input type="checkbox" checked disabled /> Basic
                  </Label>
                  <Label check className="mr-2 ml-2">
                    <Input type="checkbox" checked disabled /> Intermediate
                  </Label>
                  <Label check className="ml-2">
                    <Input type="checkbox" checked disabled /> Advanced
                  </Label>
                </div>
              </FormGroup>
            </Col>
          </Row>

          {/* Row 3 */}
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label>Sanskrit Name</Label>
                <Input type="text"  readOnly />
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup>
                <Label>English Name</Label>
                <Input type="text"  readOnly />
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup>
                <Label>Time</Label>
                <Input type="number" readOnly />
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup className="mt-2">
                <Label check className="mr-2">
                  <Input type="radio" checked disabled /> Second
                </Label>
                <Label check className="mr-2">
                  <Input type="radio" checked disabled /> Minute
                </Label>
                <Label check>
                  <Input type="radio" checked disabled /> Hour
                </Label>
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
                  onChange={() => {}}
                  height={180}
                  readOnly
                />
              </FormGroup>
            </Col>
          </Row>

          {/* Row 4 */}
          <Row>
            <Col md={4}>
              <FormGroup>
                <Label>Add Image</Label>
                <Input type="file" disabled />
              </FormGroup>
            </Col>

            <Col md={4}>
              <FormGroup>
                <Label>More Information Link</Label>
                <Input type="text" readOnly />
              </FormGroup>
            </Col>

            <Col md={4}>
              <FormGroup>
                <Label>Video Link</Label>
                <Input type="text"  readOnly />
              </FormGroup>
            </Col>
          </Row>

          {/* Deepen / Variation */}
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label className="font-weight-bold">How to Deepen the Pose</Label>
                <CommonEditor
                  editorState={deepenPose}
                  onChange={() => {}}
                  height={180}
                  readOnly
                />
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup>
                <Label className="font-weight-bold">
                  Variation / Modifications of the Pose & Props
                </Label>
                <CommonEditor
                  editorState={variationPose}
                  onChange={() => {}}
                  height={180}
                  readOnly
                />
              </FormGroup>
            </Col>
          </Row>

          {/* Benefits */}
          <Row>
            <Col md={12}>
              <FormGroup className="ml-2">
                <Label check className="mr-3">
                  <Input type="checkbox" checked disabled /> Cultural
                </Label>
                <Label check className="mr-3">
                  <Input type="checkbox" checked disabled /> Anatomical Focus
                </Label>
                <Label check className="mr-3">
                  <Input type="checkbox" checked disabled /> Therapeutic
                </Label>
                <Label check>
                  <Input type="checkbox" checked disabled /> Spiritual
                </Label>
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup>
                <Label className="font-weight-bold">Add Benefits</Label>
                <CommonEditor
                  editorState={benefits}
                  onChange={() => {}}
                  height={180}
                  readOnly
                />
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup>
                <Label className="font-weight-bold">Any Limitation</Label>
                <CommonEditor
                  editorState={limitations}
                  onChange={() => {}}
                  height={180}
                  readOnly
                />
              </FormGroup>
            </Col>
          </Row>

          {/* Subtle / Remarks */}
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label className="font-weight-bold">Subtle Points</Label>
                <CommonEditor
                  editorState={subtlePoints}
                  onChange={() => {}}
                  height={180}
                  readOnly
                />
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup>
                <Label className="font-weight-bold">Remarks</Label>
                <CommonEditor
                  editorState={remarks}
                  onChange={() => {}}
                  height={180}
                  readOnly
                />
              </FormGroup>
            </Col>
          </Row>

          {/* Status */}
          <Row>
            <Col md={6}>
              <FormGroup check>
                <label className="custom-switch">
                  <input type="checkbox"  disabled />
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
          <Button color="secondary" onClick={() => history.push('/posture/client-parameters/list')}>
            Cancel
          </Button>
          </div>
      </CardFooter>
    </Card>
  </>
  )
}

export default ViewPosture
