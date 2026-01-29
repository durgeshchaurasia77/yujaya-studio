import SummaryCards from './SummaryCards'
import DataTable from 'react-data-table-component'
// import { columns } from './columns'
import { getColumns } from './columns'
import { userData } from './data'
import { addRecordOptions } from './dropdownAdd'
import { modeOptions, bookingStatusOptions, paymentStatusOptions } from './filters'
import './styles.css'
import {
  Card,
  CardBody,
  CardHeader,
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

import {
  Share,
  Printer,
  FileText,
  Grid,
  File,
  Copy,
  Plus,
  PlusSquare
} from 'react-feather'
import { useHistory } from 'react-router-dom'

import { useState, Fragment } from 'react'
import Select from 'react-select'
// import { ChevronDown } from 'react-feather'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import '@styles/react/libs/tables/react-dataTable-component.scss'
import { EditorState } from 'draft-js'
import CommonEditor from '../../../../component/common/CommonEditor'
const MySwal = withReactContent(Swal)
import '../../../../assets/css.css'

const AssignPosturePracticeList = () => {
    const [searchValue, setSearchValue] = useState('')
    const history = useHistory()
    const [selectedRow, setSelectedRow] = useState(null)
    const [addpostureModal, setAddPostureModal] = useState(false)
    const [viewpostureModal, setViewPostureModal] = useState(false)
    const [editpostureModal, setEditPostureModal] = useState(false)
    const [PostureTypes, setPostureTypes] = useState([''])
    const [status, setStatus] = useState(true)
    const [editorState, setEditorState] = useState(EditorState.createEmpty())
    const [deepenPose, setDeepenPose] = useState()
    const [variationPose, setVariationPose] = useState()
    const [benefits, setBenefits] = useState()
    const [limitations, setLimitations] = useState()
    const [subtlePoints, setSubtlePoints] = useState()
    const [remarks, setRemarks] = useState()


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


  const openViewPosture = row => {
    setSelectedRow(row)
    setViewPostureModal(true)
  }
  const openEditPosture = row => {
    setSelectedRow(row)
    setEditPostureModal(true)
  }
const openView = row => {
    console.log('VIEW', row)
  }

  const openEdit = row => {
    console.log('Edit', row)
  }
   const handleDelete = row => {
    MySwal.fire({
      title: 'Delete Item?',
      text: `Delete "${row.class_name}"?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete',
      customClass: {
        confirmButton: 'btn btn-danger',
        cancelButton: 'btn btn-outline-secondary ml-1'
      },
      buttonsStyling: false
    }).then(res => {
      if (res.isConfirmed) {
        MySwal.fire('Deleted!', '', 'success')
      }
    })
  }

  const addPostureType = () => {
  setPostureTypes([...PostureTypes, ''])
}

const removePostureType = (index) => {
  if (PostureTypes.length === 1) return

  const updated = PostureTypes.filter((_, i) => i !== index)
  setPostureTypes(updated)
}

const updatePostureType = (index, value) => {
  const updated = [...PostureTypes]
  updated[index] = value
  setPostureTypes(updated)
}
const handleStatusChange = row => {
  const nextStatus = row.status === 'active' ? 'inactive' : 'active'

  MySwal.fire({
    title: 'Change Status?',
    text: `User will be marked as ${nextStatus.toUpperCase()}`,
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: `Yes, set ${nextStatus}`,
    cancelButtonText: 'Cancel',
    customClass: {
      confirmButton: 'btn btn-primary',
      cancelButton: 'btn btn-outline-secondary ml-1'
    },
    buttonsStyling: false
  }).then(result => {
    if (result.isConfirmed) {
      // 🔥 API call here
      MySwal.fire({
        icon: 'success',
        title: 'Updated!',
        text: `Status changed to ${nextStatus}`,
        customClass: {
          confirmButton: 'btn btn-success'
        },
        buttonsStyling: false
      })
    }
  })
}

const columns = getColumns({
    history,
    openViewPosture,
    openEditPosture,
    openView,
    openEdit,
    handleDelete,
    handleStatusChange
  })
    const filteredData = userData.filter(item => {
    return item.posture_name.toLowerCase().includes(searchValue.toLowerCase())
    })

  return (
    <>
    <Fragment>
        {/* <SummaryCards /> */}
        <Card>
            <CardHeader>
            <CardTitle tag="h4">Posture</CardTitle>    
                <Button
                  color="primary"
                  className="d-flex align-items-center"
                      // onClick={() => setAddPostureModal(true)}
                      onClick={() => history.push('/posture/posture/add')}
                >
                  <Plus size={14} className="me-50" />
                  Add Posture
                </Button>
            </CardHeader>
            
            <CardBody>

            <Row className="table-header-style mb-2">
                <Col md="2">
                    <Input type="select">
                    <option>10</option>
                    <option>25</option>
                    <option>50</option>
                    </Input>
                </Col>

                {/* <Col md="1" /> */}

                <Col md="5">
                    <Input
                    placeholder="Search Parent Posture"
                    value={searchValue}
                    className="mr-2"
                    onChange={e => setSearchValue(e.target.value)}
                    />
                </Col>
                <Col md="3" className="table-header-alignment ml-4 header-option-export">
                    {/* 🔹 Export Dropdown */}
                    <UncontrolledButtonDropdown>
                    <DropdownToggle
                        color="secondary"
                        outline
                        caret
                        className="header-option-export"
                    >
                        <Share size={14} className="me-50" />
                        Export
                    </DropdownToggle>
                    <DropdownMenu end className="shadow-sm">
                        <DropdownItem className="d-flex align-items-center">
                        <Printer size={14} className="me-1" /> Print
                        </DropdownItem>
                        <DropdownItem className="d-flex align-items-center">
                        <FileText size={14} className="me-1" /> CSV
                        </DropdownItem>
                        <DropdownItem className="d-flex align-items-center">
                        <Grid size={14} className="me-1" /> Excel
                        </DropdownItem>
                        <DropdownItem className="d-flex align-items-center">
                        <File size={14} className="me-1" /> PDF
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem className="d-flex align-items-center">
                        <Copy size={14} className="me-1" /> Copy
                        </DropdownItem>
                    </DropdownMenu>
                    </UncontrolledButtonDropdown>
                </Col>
                </Row>
            </CardBody>
            {/* 🔹 Data Table */}
            <DataTable
                columns={columns}
                data={searchValue ? filteredData : userData}
                pagination
                selectableRows
                highlightOnHover
                persistTableHead
                className="react-dataTable"
                noDataComponent={
                    <div className="py-4 text-center text-muted">
                    <h6 className="mb-0">No matching records found</h6>
                    <small>Try adjusting your search or filters</small>
                    </div>
                }
            />
        </Card>
    </Fragment>
      <Modal
        isOpen={addpostureModal}
        toggle={() => setAddPostureModal(!addpostureModal)}
        size="lg"
        centered
      >
        <ModalHeader toggle={() => setAddPostureModal(false)}>
          Add Posture
        </ModalHeader>

        <ModalBody>
          <Form>

            {/* Row 1 */}
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label>Category <span className="text-danger">*</span></Label>
                  <Select
                    placeholder="Please Select Category"
                    options={parentPostureOptions}
                  />
                </FormGroup>
              </Col>

              <Col md={6}>
                <FormGroup>
                  <Label>Sub Category <span className="text-danger">*</span></Label>
                  <Select
                    placeholder="Please Select Sub Category"
                    options={parentPostureOptions}
                  />
                </FormGroup>
              </Col>

            </Row>

            {/* Row 2 */}
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label>Type <span className="text-danger">*</span></Label>
                  <Select
                    placeholder="Please Select Type"
                    options={postureTypeOptions}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>Effects <span className="text-danger">*</span></Label>
                  <Select
                    placeholder="Please Select Effects"
                    options={effectTypeOptions}
                  />
                </FormGroup>
              </Col>

              <Col md={6}>
                <FormGroup>
                  <Label>Style <span className="text-danger">*</span></Label>
                  <Select
                    placeholder="Please Select Style"
                    options={styleOptions}
                  />
                </FormGroup>
              </Col>

              <Col md={6}>
                <FormGroup>
                  <Label>Level <span className="text-danger">*</span></Label>
                  <div>
                    <Label check className="mr-2 ml-2">
                      <Input type="checkbox" /> Basic
                    </Label>
                    <Label check className="mr-2 ml-2">
                      <Input type="checkbox" /> Intermediate
                    </Label>
                    <Label check className=' ml-2'>
                      <Input type="checkbox" /> Advanced
                    </Label>
                  </div>
                </FormGroup>
              </Col>
            </Row>

            {/* Row 3 */}
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label>Sanskrit Name <span className="text-danger">*</span></Label>
                  <Input type="text" placeholder="Please Enter Sanskrit Name..."/>
                </FormGroup>
              </Col>

              <Col md={6}>
                <FormGroup>
                  <Label>English Name <span className="text-danger">*</span></Label>
                  <Input type="text" placeholder="Please Enter English Name..."/>
                </FormGroup>
              </Col>

              <Col md={6}>
                <FormGroup>
                  <Label>Time</Label>
                  <Input type="number" placeholder="Please Enter Time..."/>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <div className='mt-2'>
                    <Label check className="mr-2">
                      <Input type="radio" name="time" /> Second
                    </Label>
                    <Label check className="mr-2">
                      <Input type="radio" name="time" /> Minute
                    </Label>
                    <Label check>
                      <Input type="radio" name="time" /> Hour
                    </Label>
                    </div>
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

            {/* Row 4 */}
            <Row>
              <Col md={4}>
                <FormGroup>
                  <Label>Add Image</Label>
                  <Input type="file" />
                </FormGroup>
              </Col>

              <Col md={4}>
                <FormGroup>
                  <Label>More Information Link</Label>
                  <Input type="text" placeholder='Please Enter Information Link'/>
                </FormGroup>
              </Col>

              <Col md={4}>
                <FormGroup>
                  <Label>Video Link</Label>
                  <Input type="text" placeholder='Please Enter Video Link'/>
                </FormGroup>
              </Col>
            </Row>
            {/* Row 1 */}
            <Row>
              <Col md={12}>
                <FormGroup>
                  <Label className="font-weight-bold">How to Deepen the Pose</Label>
                  <CommonEditor
                    editorState={deepenPose}
                    onChange={setDeepenPose}
                    height={180}
                  />
                </FormGroup>
              </Col>

              <Col md={12}>
                <FormGroup>
                  <Label className="font-weight-bold">
                    Variation / Modifications of the Pose & Props
                  </Label>
                  <CommonEditor
                    editorState={variationPose}
                    onChange={setVariationPose}
                    height={180}
                  />
                </FormGroup>
              </Col>
            </Row>

            {/* Row 2 */}
            <Row>
              <Col md={12}>
                <FormGroup>
                  <Label className="font-weight-bold">Add Benefits</Label>

                  <div className="mb-2 ml-2">
                    <Label check className="mr-3">
                      <Input type="checkbox" /> Cultural
                    </Label>
                    <Label check className="mr-3">
                      <Input type="checkbox" /> Anatomical Focus
                    </Label>
                    <Label check className="mr-3">
                      <Input type="checkbox" /> Therapeutic
                    </Label>
                    <Label check>
                      <Input type="checkbox" /> Spiritual
                    </Label>
                  </div>

                  <CommonEditor
                    editorState={benefits}
                    onChange={setBenefits}
                    height={150}
                  />
                </FormGroup>
              </Col>

              <Col md={12}>
                <FormGroup>
                  <Label className="font-weight-bold">Any Limitation</Label>
                  <CommonEditor
                    editorState={limitations}
                    onChange={setLimitations}
                    height={190}
                  />
                </FormGroup>
              </Col>
            </Row>

            {/* Row 3 */}
            <Row>
              <Col md={12}>
                <FormGroup>
                  <Label className="font-weight-bold">Subtle Points</Label>
                  <CommonEditor
                    editorState={subtlePoints}
                    onChange={setSubtlePoints}
                    height={180}
                  />
                </FormGroup>
              </Col>

              <Col md={12}>
                <FormGroup>
                  <Label className="font-weight-bold">Remarks</Label>
                  <CommonEditor
                    editorState={remarks}
                    onChange={setRemarks}
                    height={180}
                  />
                </FormGroup>
              </Col>
            </Row>

            {/* Status */}
            <Row>
              <Col md={12}>
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
        </ModalBody>

        <ModalFooter>
          <Button color="secondary" onClick={() => setAddPostureModal(false)}>
            Cancel
          </Button>
          <Button color="primary">
            Submit
          </Button>
        </ModalFooter>
      </Modal>

      <Modal
      isOpen={viewpostureModal}
      toggle={() => setViewPostureModal(!viewpostureModal)}
      size="lg"
      centered
      >
      <ModalHeader toggle={() => setViewPostureModal(!viewpostureModal)}>
      View Practice Posture
      </ModalHeader>

      <ModalBody>
      <Form>

        {/* Parent Posture */}
        <FormGroup>
          <Label className="font-weight-bold">
            Parent Posture <span className="text-danger">*</span>
          </Label>
          <Select
            placeholder="Please Select Parent Posture"
            className="react-select"
            classNamePrefix="select"
            isSearchable={true}
            options={parentPostureOptions}
            isDisabled={true}
          />
        </FormGroup>

        {/* Sub Posture */}
        <FormGroup>
          <Label className="font-weight-bold">
            Sub Posture <span className="text-danger">*</span>
          </Label>
          <Select
            placeholder="Please Select Sub Posture"
            className="react-select"
            classNamePrefix="select"
            isSearchable={true}
            options={parentPostureOptions}
            isDisabled={true}
          />
        </FormGroup>

        {/* Add Posture Type */}
        <FormGroup>
        <Label className="font-weight-bold">Add Posture Type</Label>

        {PostureTypes.map((type, index) => (
          <Row key={index} className="align-items-center mb-2">
            <Col md="8">
              <Input
                type="text"
                value={type}
                placeholder="Enter Posture type"
                onChange={(e) => updatePostureType(index, e.target.value)}
                disabled
                required
              />
            </Col>

            <Col md="4">
              {index === 0 ? (
                <Button
                  color="secondary"
                  block
                  onClick={addPostureType}
                >
                  ADD MORE TYPE
                </Button>
              ) : (
                <Button
                  color="danger"
                  block
                  onClick={() => removePostureType(index)}
                >
                  REMOVE
                </Button>
              )}
            </Col>
          </Row>
        ))}

        {PostureTypes.length === 1 && PostureTypes[0].trim() === '' && (
          <small className="text-danger">
            At least one Posture type is required
          </small>
        )}
      </FormGroup>


        {/* Description */}
        <FormGroup>
          <Label className="font-weight-bold">Description</Label>
          <Input
            type="textarea"
            rows="4"
            placeholder="Enter description"
            disabled
          />
        </FormGroup>

        {/* Choose Color */}
        <FormGroup>
          <Label className="font-weight-bold">Choose Color</Label>
          <Input type="color" disabled/>
        </FormGroup>

        {/* Add Icon / Image */}
        <FormGroup>
          <Label className="font-weight-bold">Add Icon / Image</Label>
          <Input type="file" disabled/>
        </FormGroup>

        {/* Status */}
        <FormGroup check>
          <label className="custom-switch">
            <input
              type="checkbox"
              checked={status}
              disabled
              onChange={() => setStatus(!status)}
            />
            <span className="slider"></span>
            <span className="switch-label">Status</span>
          </label>
        </FormGroup>

      </Form>
      </ModalBody>
      <ModalFooter>
      <Button color="secondary" onClick={() => setViewPostureModal(false)}>
      Cancel
      </Button>
      </ModalFooter>

      </Modal>
      <Modal
          isOpen={editpostureModal}
          toggle={() => setEditPostureModal(!editpostureModal)}
          size="lg"
          centered
          >
          <ModalHeader toggle={() => setEditPostureModal(!editpostureModal)}>
          Edit Practice Posture
          </ModalHeader>

          <ModalBody>
            <Form>

              {/* Parent Posture */}
              <FormGroup>
                <Label className="font-weight-bold">
                  Parent Posture <span className="text-danger">*</span>
                </Label>
                <Select
                  placeholder="Please Select Parent Posture"
                  className="react-select"
                  classNamePrefix="select"
                  isSearchable={true}
                  options={parentPostureOptions}
                />
              </FormGroup>

              {/* Sub Posture */}
              <FormGroup>
                <Label className="font-weight-bold">
                  Sub Posture <span className="text-danger">*</span>
                </Label>
                <Select
                  placeholder="Please Select Sub Posture"
                  className="react-select"
                  classNamePrefix="select"
                  isSearchable={true}
                  options={parentPostureOptions}
                />
              </FormGroup>

              {/* Add Posture Type */}
              <FormGroup>
              <Label className="font-weight-bold">Add Posture Type</Label>

              {PostureTypes.map((type, index) => (
                <Row key={index} className="align-items-center mb-2">
                  <Col md="8">
                    <Input
                      type="text"
                      value={type}
                      placeholder="Enter Posture type"
                      onChange={(e) => updatePostureType(index, e.target.value)}
                      required
                    />
                  </Col>

                  <Col md="4">
                    {index === 0 ? (
                      <Button
                        color="secondary"
                        block
                        onClick={addPostureType}
                      >
                        ADD MORE TYPE
                      </Button>
                    ) : (
                      <Button
                        color="danger"
                        block
                        onClick={() => removePostureType(index)}
                      >
                        REMOVE
                      </Button>
                    )}
                  </Col>
                </Row>
              ))}

              {PostureTypes.length === 1 && PostureTypes[0].trim() === '' && (
                <small className="text-danger">
                  At least one Posture type is required
                </small>
              )}
            </FormGroup>


              {/* Description */}
              <FormGroup>
                <Label className="font-weight-bold">Description</Label>
                <Input
                  type="textarea"
                  rows="4"
                  placeholder="Enter description"
                />
              </FormGroup>

              {/* Choose Color */}
              <FormGroup>
                <Label className="font-weight-bold">Choose Color</Label>
                <Input type="color"/>
              </FormGroup>

              {/* Add Icon / Image */}
              <FormGroup>
                <Label className="font-weight-bold">Add Icon / Image</Label>
                <Input type="file"/>
              </FormGroup>

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

            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => setEditPostureModal(false)}>
            Cancel
            </Button>
            <Button color="primary">
            Update
            </Button>
          </ModalFooter>
      </Modal>
    </>
  )
}

export default AssignPosturePracticeList
