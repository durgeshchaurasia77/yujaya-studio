import SummaryCards from './SummaryCards'
import DataTable from 'react-data-table-component'
import { columns } from './columns'
import { userData } from './data'
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
  Plus
} from 'react-feather'


import { useState, Fragment } from 'react'
import Select from 'react-select'
// import { ChevronDown } from 'react-feather'

const UserList = () => {
  const [searchValue, setSearchValue] = useState('')

    const filteredData = userData.filter(item => {
    return item.name.toLowerCase().includes(searchValue.toLowerCase())
    })

  return (
    <Fragment>
        <SummaryCards />

        <Card>
            <CardHeader>
            <CardTitle tag="h4">Filters</CardTitle>
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

                <Col md="4" />

                <Col md="3">
                    <Input
                    placeholder="Search User"
                    value={searchValue}
                    className="mr-2"
                    onChange={e => setSearchValue(e.target.value)}
                    />
                </Col>
                <Col md="3" className="table-header-alignment">
                    {/* 🔹 Export Dropdown */}
                    <UncontrolledButtonDropdown>
                    <DropdownToggle
                        color="secondary"
                        outline
                        caret
                        className="d-flex align-items-center"
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
                    <Button color="primary" className="d-flex align-items-center">
                    <Plus size={14} className="me-50" />
                    Add New Record
                    </Button>
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
