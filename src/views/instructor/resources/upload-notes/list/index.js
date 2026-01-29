
import { useState, Fragment } from 'react'
import SummaryCards from './SummaryCards'
import DataTable from 'react-data-table-component'
import { getColumns } from './columns'
import { userData } from './data'
import { addRecordOptions } from './dropdownAdd'
import CommonEditor from '../../../../../component/common/CommonEditor'
import { modeOptions, bookingStatusOptions, paymentStatusOptions } from './filters'
import Flatpickr from 'react-flatpickr'
import 'flatpickr/dist/themes/material_blue.css'
import './styles.css'
import '../../../../../assets/css.css'
import { Editor } from 'react-draft-wysiwyg'
import { EditorState } from 'draft-js'

import { useHistory } from 'react-router-dom'

import 'bs-stepper/dist/css/bs-stepper.min.css'
import Select from 'react-select'
// import { ChevronDown } from 'react-feather'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import '@styles/react/libs/tables/react-dataTable-component.scss'
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
  Calendar,
  Share,
  Printer,
  FileText,
  Grid,
  File,
  Copy,
  Plus,
  PlusSquare
} from 'react-feather'
const MySwal = withReactContent(Swal)

const uploadNotesList = () => {
    const [searchValue, setSearchValue] = useState('')
    const history = useHistory()
    const [uploadNotesModal, setUploadNotesModal] = useState(false)
    const [videoLinks, setVideoLinks] = useState([''])
    const [websiteLinks, setWebsiteLinks] = useState([''])
    const [editorState, setEditorState] = useState(EditorState.createEmpty())
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [picker, setPicker] = useState(new Date())

const openView = row => {
    // setSelectedRow(row)
    // setViewModal(true)
    console.log('VIEW', row)
  }

  const openEdit = row => {
    // setSelectedRow(row)
    // setEditModal(true)
    console.log('Edit', row)
  }
   const handleDelete = row => {
    MySwal.fire({
      title: 'Delete User?',
      text: `Delete Item?`,
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

const addVideoLink = () => {
  setVideoLinks([...videoLinks, ''])
}

const updateVideoLink = (index, value) => {
  const updatedLinks = [...videoLinks]
  updatedLinks[index] = value
  setVideoLinks(updatedLinks)
}


const addWebsiteLink = () => {
  setWebsiteLinks([...websiteLinks, ''])
}

const updateWebsiteLink = (index, value) => {
  const updatedLinks = [...websiteLinks]
  updatedLinks[index] = value
  setWebsiteLinks(updatedLinks)
}

const removeWebsiteLink = index => {
  setWebsiteLinks(websiteLinks.filter((_, i) => i !== index))
}

const columns = getColumns({
    history,
    openView,
    openEdit,
    handleDelete,
    handleStatusChange
  })
    const filteredData = userData.filter(item => {
    return item.class_name.toLowerCase().includes(searchValue.toLowerCase())
    })

  return (
    <>
    <Fragment>
        {/* <SummaryCards /> */}
        <Card>
            <CardHeader>
              <CardTitle tag="h4">Show History</CardTitle>
              <Row className="align-items-center g-1">
                {/* SHOW ENTRIES */}
                <Col md="2">
                  <Input type="select">
                    <option>10</option>
                    <option>25</option>
                    <option>50</option>
                  </Input>
                </Col>

                {/* SEARCH */}
                <Col md="3">
                  <Input
                    placeholder="Search Class Name"
                    value={searchValue}
                    onChange={e => setSearchValue(e.target.value)}
                  />
                </Col>

                {/* EXPORT */}
                <Col md="2">
                  <UncontrolledButtonDropdown>
                    <DropdownToggle
                      color="secondary"
                      outline
                      caret
                      className="w-100"
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

                {/* ADD REVIEW BUTTON (RIGHT ALIGNED) */}
                <Col md="5" className="d-flex justify-content-end">
                  <Button
                      color="primary"
                      className="d-flex align-items-center"
                      onClick={() => setUploadNotesModal(true)}
                    >
                      <Plus size={14} className="me-50" />
                      Upload Notes
                  </Button>
                </Col>

              </Row>
            </CardHeader>

            <CardBody>
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
        isOpen={uploadNotesModal}
        toggle={() => setUploadNotesModal(!uploadNotesModal)}
        size="lg"
        centered
      >
        <ModalHeader toggle={() => setUploadNotesModal(false)}>
          Upload Notes
        </ModalHeader>

        <ModalBody>
          <Form>

            {/* CLASS / COURSE */}
            <FormGroup>
              
              <Row className="align-items-center">
                <Col md="8">
                  <Label className="font-weight-bold">
                    Class / Course / Workshop / Teacher training<span className="text-danger">*</span>
                  </Label>
                  <Input type="select">
                    <option>Please Select</option>
                    <option>Class</option>
                    <option>Course</option>
                    <option>Workshop</option>
                    <option>Teacher Training</option>
                  </Input>
                </Col>
                <Col md="4">
                  <small className="text-muted">
                  <Label className="font-weight-bold">or Search Class Code: </Label>
                    
                    {/* <Col md="3"> */}
                      <Input
                        type="text"
                        placeholder="Search Class Code"
                        defaultValue="12345"
                      />
                    {/* </Col> */}
                  </small>
                </Col>
              </Row>
            </FormGroup>

            {/* NOTES TITLE */}
            <FormGroup>
              <Row>
                <Col md="6">
                  <Label className="font-weight-bold">Notes Title<span className="text-danger">*</span></Label>
                  <Input
                    type="text"
                    placeholder="Please enter notes title here..."
                    required
                  />
                </Col>
                <Col md="6">
                  <Label className="font-weight-bold">Notes Type<span className="text-danger">*</span></Label>
                  <Input type="select">
                    <option>Please Select</option>
                    <option>Class Practice Kit</option>
                    <option>Course Material</option>
                  </Input>
                </Col>
              </Row>
            </FormGroup>


            {/* UPLOAD DOCUMENT */}
            <FormGroup>
              <Row>
                <Col md="6">
                  <Label className="font-weight-bold">Upload Document<span className="text-danger">*</span></Label>
                  <Input type="file" required />
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
                <Row>
                  <Col md="12">
                    <div className="d-flex gap-2 mb-1">
                      <Label className="font-weight-bold">Video link</Label>
                        <CustomInput type="radio" id="vimeo" name="videoType" label="Vimeo" />
                        <CustomInput type="radio" id="youtube" name="videoType" label="Youtube" />
                        <CustomInput type="radio" id="other" name="videoType" label="Other" />
                    </div>
                  </Col>
                </Row>
                {videoLinks.map((link, index) => (
                  <Row key={index} className="mb-1 align-items-center">
                    <Col md="8">
                      <Input
                        value={link}
                        placeholder="Enter video link"
                        onChange={e => updateVideoLink(index, e.target.value)}
                      />
                    </Col>

                    <Col md="4">
                      {index === 0 ? (
                        <Button
                          outline
                          color="primary"
                          block
                          onClick={addVideoLink}
                        >
                          ADD More Video Links
                        </Button>
                      ) : (
                        <Button
                          outline
                          color="danger"
                          block
                          onClick={() => setVideoLinks(videoLinks.filter((_, i) => i !== index))}
                        >
                          Remove
                        </Button>
                      )}
                    </Col>
                  </Row>
                ))}
            </FormGroup>

            {/* WEBSITE LINK */}
            <FormGroup>
              <Row>
                <Col md="12">
                  <Label className="font-weight-bold">Website link</Label>
                </Col>
              </Row>
              {websiteLinks.map((link, index) => (
                <Row key={index} className="mb-1 align-items-center">
                  <Col md="8">
                    <Input
                      value={link}
                      placeholder="Enter website link"
                      onChange={e => updateWebsiteLink(index, e.target.value)}
                    />
                  </Col>
                  <Col md="4">
                    {index === 0 ? (
                      <Button
                        outline
                        color="primary"
                        block
                        onClick={addWebsiteLink}
                      >
                        ADD More Links
                      </Button>
                    ) : (
                      <Button
                        outline
                        color="danger"
                        block
                        onClick={() => removeWebsiteLink(index)}
                      >
                        Remove
                      </Button>
                    )}
                  </Col>
                </Row>
              ))}
            </FormGroup>
            {/* REMARKS */}
            <FormGroup>
              <Label className="font-weight-bold">Remarks</Label>
              <Row>
                <Col md="12">
                  <CommonEditor
                    editorState={editorState}
                    onChange={setEditorState}
                    height={90}
                    placeholder="Please Enter Remarks"
                  />
                </Col>
              </Row>
            </FormGroup>

            {/* UPLOADED ON */}
            <FormGroup>
              <Label className="font-weight-bold">
                Uploaded on<span className="text-danger">*</span>
              </Label>
              <Row>
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
                <Col md="6">
                  <FormGroup>
                    <Label>
                      Date of Expiring <span className="text-danger">*</span>
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
                        placeholder="Select Date of Expiring"
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
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={() => setUploadNotesModal(false)}>
            Close
          </Button>
          <Button color="primary">
            Submit
          </Button>
        </ModalFooter>
    </Modal>
  </>
  )
}

export default uploadNotesList
