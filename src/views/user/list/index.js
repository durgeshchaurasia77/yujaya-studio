import SummaryCards from './SummaryCards'
import DataTable from 'react-data-table-component'
// import { columns } from './columns'
import { getColumns } from './columns'
import { userData } from './data'
import { addRecordOptions } from './dropdownAdd'
import { roleOptions, planOptions, statusOptions } from './filters'
import './styles.css'
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Row,
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

const UserList = () => {
    const [searchValue, setSearchValue] = useState('')
    const history = useHistory()

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
      text: `Delete "${row.fullName}"?`,
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

const columns = getColumns({
    openView,
    openEdit,
    handleDelete,
    handleStatusChange
  })
    const filteredData = userData.filter(item => {
    return item.name.toLowerCase().includes(searchValue.toLowerCase())
    })

  return (
    <Fragment>
        <SummaryCards />

        <Card>
            <CardHeader>
            <CardTitle tag="h4">Filter</CardTitle>
            </CardHeader>

            <CardBody>
            <Row className="gy-2 mb-3">
                <Col md="4">
                <Select
                    options={roleOptions}
                    placeholder="Select Role"
                    classNamePrefix="select"
                    menuPlacement="auto"
                    menuPosition="fixed"
                    menuPortalTarget={document.body}
                    styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                />
                </Col>

                <Col md="4">
                <Select
                    options={planOptions}
                    placeholder="Select Plan"
                    classNamePrefix="select"
                    menuPlacement="auto"
                    menuPosition="fixed"
                    menuPortalTarget={document.body}
                    styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                />
                </Col>

                <Col md="4">
                <Select
                    options={statusOptions}
                    placeholder="Select Status"
                    classNamePrefix="select"
                    menuPlacement="auto"
                    menuPosition="fixed"
                    menuPortalTarget={document.body}
                    styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                />
                </Col>
            </Row>

            <Row className="table-header-style mb-2">
                <Col md="2">
                    <Input type="select">
                    <option>10</option>
                    <option>25</option>
                    <option>50</option>
                    </Input>
                </Col>

                <Col md="3" />

                <Col md="3">
                    <Input
                    placeholder="Search User"
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

                    {/* 🔹 Add Button */}
                    {/* <Button color="primary" className="d-flex align-items-center">
                    <Plus size={14} className="me-50" />
                    Add New Record
                    </Button> */}
                    <UncontrolledButtonDropdown>
                        <DropdownToggle
                            color="primary"
                            className="d-flex align-items-center ml-2"
                            caret
                        >
                            <Plus size={14} className="me-50" />
                            Add New Record
                        </DropdownToggle>

                        <DropdownMenu end className="add-record-dropdown">
                            {addRecordOptions.map(item => (
                            <DropdownItem
                                key={item.id}
                                onClick={() => history.push(item.navLink)}
                                className="d-flex align-items-center"
                            >
                                <PlusSquare size={14} className="me-1 text-primary" />
                                {item.title}
                            </DropdownItem>
                            ))}
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
  )
}

export default UserList
