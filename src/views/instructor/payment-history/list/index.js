import SummaryCards from './SummaryCards'
import DataTable from 'react-data-table-component'
// import { columns } from './columns'
import { getColumns } from './columns'
import { userData } from './data'
import { addRecordOptions } from './dropdownAdd'
import { modeOptions, bookingStatusOptions, paymentStatusOptions } from './filters'
import ResourceDetails from './ResourceDetails'
import ResourceDetails1 from './ResourceDetails1'
import classnames from 'classnames'
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
  DropdownItem
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

const PaymentHistoryList = () => {
    const [searchValue, setSearchValue] = useState('')
    const history = useHistory()
    const [viewResoucesModal, setViewResoucesModal] = useState(false)
    const [selectedRow, setSelectedRow] = useState(null)
    const [activeTab, setActiveTab] = useState('practice')
    const [viewDetailsModal, setViewDetailsModal] = useState(false)

const openView = row => {
    // setSelectedRow(row)
    // setViewModal(true)
    console.log('VIEW', row)
  }
  const openViewResouces = row => {
    setSelectedRow(row)
    setViewResoucesModal(true)
  }
  const openEdit = row => {
    // setSelectedRow(row)
    // setEditModal(true)
    console.log('Edit', row)
  }
   const handleDelete = row => {
    MySwal.fire({
      title: 'Delete User?',
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
  const openViewDetails = row => {
    setSelectedRow(row)
    setViewDetailsModal(true)
  }

const columns = getColumns({
    history,
    openView,
    openEdit,
    openViewDetails,
    openViewResouces,
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
              <CardTitle tag="h4">Payment History</CardTitle>
                <Row className="table-header-style mb-2">
                  <Col md="2">
                      <Input type="select">
                      <option>10</option>
                      <option>25</option>
                      <option>50</option>
                      </Input>
                  </Col>
                  <Col md="5">
                      <Input
                      placeholder="Search Class Name"
                      value={searchValue}
                      onChange={e => setSearchValue(e.target.value)}
                      />
                  </Col>
                  <Col md="3" className="table-header-alignment ml-2 header-option-export">
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
        isOpen={viewDetailsModal}
        toggle={() => setViewDetailsModal(!viewDetailsModal)}
        size="lg"
        centered
      >
        <ModalHeader toggle={() => setViewDetailsModal(false)}>
          View Payment Details
        </ModalHeader>

        <ModalBody>

          <div className="view-details-wrapper">
            <Row>
              <Col md="3" className="label">Instructor / Therapist</Col>
              <Col md="9">Kuldeep</Col>
            </Row>

            <Row>
              <Col md="3" className="label">Category</Col>
              <Col md="9">Therapy</Col>
            </Row>

            <Row>
              <Col md="3" className="label">Class</Col>
              <Col md="9">
                Yoga: need of the hour, Yoga: concept and definitions
              </Col>
            </Row>

            <Row>
              <Col md="3" className="label">Date & Time</Col>
              <Col md="9">
                12 January 2026, 5:12pm to 12:23
              </Col>
            </Row>

            <Row>
              <Col md="3" className="label">Type</Col>
              <Col md="9">Virtual</Col>
            </Row>

            <Row>
              <Col md="3" className="label">Fee</Col>
              <Col md="9">34</Col>
            </Row>

            <Row>
              <Col md="3" className="label">Status</Col>
              <Col md="9">
                <a href="#" className="text-primary mr-1">Download Invoice</a> |
                <span className="text-success mx-1"> Active </span> |
                <a href="#" className="text-primary mx-1">See Details</a> |
                <a href="#" className="text-warning mx-1">Refund</a> |
                <a href="#" className="text-primary ml-1">Remarks</a>
              </Col>
            </Row>

          </div>

        </ModalBody>

        <ModalFooter>
          <Button color="secondary" onClick={() => setViewDetailsModal(false)}>
            Close
          </Button>
        </ModalFooter>
      </Modal>

    </>
  )
}

export default PaymentHistoryList
