import SummaryCards from './SummaryCards'
import DataTable from 'react-data-table-component'
// import { columns } from './columns'
import { getColumns } from './columns'
import { giftData } from './data'
import { addRecordOptions } from './dropdownAdd'
import { roleOptions, planOptions, statusOptions } from './filters'
import { useHistory } from 'react-router-dom'
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

import { useState, Fragment } from 'react'
import Select from 'react-select'
// import { ChevronDown } from 'react-feather'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import '@styles/react/libs/tables/react-dataTable-component.scss'
const MySwal = withReactContent(Swal)

const GiftCardList = () => {
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

  const filteredData = giftData.filter(item => {
    const search = searchValue.toLowerCase()
    return (
      item.code.toLowerCase().includes(search) ||
      item.remail.toLowerCase().includes(search) ||
      item.type.toLowerCase().includes(search)
    )
  })

  return (
    <Fragment>
        {/* <SummaryCards /> */}
        <Card>
            <CardHeader>
              <CardTitle tag="h4">Gift Card List</CardTitle>
              {/* <Button color="primary" className="button-alignment-accouncement">
                <Plus size={16} className="me-40" />
                Add Gift Card
              </Button> */}
              <Button
                color="primary"
                className="button-alignment-accouncement"
                onClick={() => history.push('/settings/add-gift-card')}
              >
                <Plus size={16} className="me-40" />
                Add Gift Card
              </Button>
            </CardHeader>

            <CardBody>

            <Row className="table-header-style mb-0">
                <Col md="2">
                    <Input type="select">
                    <option>10</option>
                    <option>25</option>
                    <option>50</option>
                    </Input>
                </Col>
                </Row>
            </CardBody>
            {/* 🔹 Data Table */}
            <DataTable
                columns={columns}
                data={searchValue ? filteredData : giftData}
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

export default GiftCardList
