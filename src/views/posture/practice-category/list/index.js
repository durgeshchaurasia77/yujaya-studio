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
const MySwal = withReactContent(Swal)
import '../../../../assets/css.css'

const BookingHistoryList = () => {
    const [searchValue, setSearchValue] = useState('')
    const history = useHistory()
    const [selectedRow, setSelectedRow] = useState(null)
    const [addCategoryModal, setAddCategoryModal] = useState(false)
    const [viewCategoryModal, setViewCategoryModal] = useState(false)
    const [editCategoryModal, setEditCategoryModal] = useState(false)
    const [categoryTypes, setCategoryTypes] = useState([''])
    const [status, setStatus] = useState(true)


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
  const openViewCategory = row => {
    setSelectedRow(row)
    setViewCategoryModal(true)
  }
  const openEditCategory = row => {
    setSelectedRow(row)
    setEditCategoryModal(true)
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
    openViewCategory,
    openEditCategory,
    openView,
    openEdit,
    handleDelete,
    handleStatusChange
  })
    const filteredData = userData.filter(item => {
    return item.category.toLowerCase().includes(searchValue.toLowerCase())
    })

  return (
    <>
    <Fragment>
        {/* <SummaryCards /> */}
        <Card>
            <CardHeader>
            <CardTitle tag="h4">Practice Category</CardTitle>    
                <Button
                  color="primary"
                  className="d-flex align-items-center"
                      // onClick={() => setAddCategoryModal(true)}
                      onClick={() => history.push('/posture/practice-category/add')}
                >
                  <Plus size={14} className="me-50" />
                  Add Practice Category
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
                    placeholder="Search Parent Category"
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
      isOpen={addCategoryModal}
      toggle={() => setAddCategoryModal(!addCategoryModal)}
      size="lg"
      centered
    >
      <ModalHeader toggle={() => setAddCategoryModal(false)}>
        Add Practice Category
      </ModalHeader>

      <ModalBody>
        <Form>

          {/* Parent Category */}
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
            <Input type="color" />
          </FormGroup>

          {/* Add Icon / Image */}
          <FormGroup>
            <Label className="font-weight-bold">Add Icon / Image</Label>
            <Input type="file" />
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
        <Button color="secondary" onClick={() => setAddCategoryModal(false)}>
          Cancel
        </Button>
        <Button color="primary">
          Submit
        </Button>
      </ModalFooter>
    </Modal>
      <Modal
      isOpen={viewCategoryModal}
      toggle={() => setViewCategoryModal(!viewCategoryModal)}
      size="lg"
      centered
      >
      <ModalHeader toggle={() => setViewCategoryModal(!viewCategoryModal)}>
      View Practice Category
      </ModalHeader>

      <ModalBody>
      <Form>

        {/* Parent Category */}
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
            isDisabled={true}
          />
        </FormGroup>

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
            isDisabled={true}
          />
        </FormGroup>

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
                disabled
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
      <Button color="secondary" onClick={() => setViewCategoryModal(false)}>
      Cancel
      </Button>
      </ModalFooter>

      </Modal>
      <Modal
          isOpen={editCategoryModal}
          toggle={() => setEditCategoryModal(!editCategoryModal)}
          size="lg"
          centered
          >
          <ModalHeader toggle={() => setEditCategoryModal(!editCategoryModal)}>
          Edit Practice Category
          </ModalHeader>

          <ModalBody>
            <Form>

              {/* Parent Category */}
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
            <Button color="secondary" onClick={() => setEditCategoryModal(false)}>
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

export default BookingHistoryList
