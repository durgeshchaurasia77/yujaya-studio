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

const upcommingClassList = () => {
    const [searchValue, setSearchValue] = useState('')
    const history = useHistory()
    const [cancelModal, setCancelModal] = useState(false)
    const [selectedRow, setSelectedRow] = useState(null)
    
const openView = row => {
    // setSelectedRow(row)
    // setViewModal(true)
    console.log('VIEW', row)
  }

  const openCancelClass = row => {
    setSelectedRow(row)
    setCancelModal(true)
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

const columns = getColumns({
    openView,
    openCancelClass,
    handleDelete,
    handleStatusChange
  })
    const filteredData = userData.filter(item => {
    return item.user_name.toLowerCase().includes(searchValue.toLowerCase())
    })
const classTypeOptions = [
  { value: '', label: 'Please Select', isDisabled: true },
  { value: 'all_event', label: 'All Event' },
  { value: 'morning_yoga', label: 'Morning Yoga' },
  { value: 'hatha_yoga', label: 'Hatha Yoga for kuldeep' },
  { value: 'meditations', label: 'Meditations' }
]


  return (
    <>
    <Fragment>
        {/* <SummaryCards /> */}
        <Card>
            <CardHeader>
            <CardTitle tag="h4">Upcomming Class</CardTitle>    
                {/* <Button
                  color="primary"
                  className="d-flex align-items-center"
                  onClick={() => history.push('/class/rating-review/add')}
                >
                  <Plus size={14} className="me-50" />
                  Add Class Review
                </Button> */}
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
        isOpen={cancelModal}
        toggle={() => setCancelModal(!cancelModal)}
        centered
      >
        <ModalHeader toggle={() => setCancelModal(!cancelModal)}>
          Cancel Class
        </ModalHeader>

        <ModalBody>
          <Form>

            {/* CLASS TYPE */}
            <FormGroup>
              <Label className='font-weight-bold'>
                Select Class to cancel
              </Label>

              <div className='cancel-type-wrapper'>
                {[
                  'Class',
                  'Workshop',
                  'Course',
                  'Teacher Training',
                  'Retreat',
                  'Private Therapy'
                ].map((item, index) => (
                  <CustomInput
                    key={index}
                    type='radio'
                    id={`cancelType${index}`}
                    name='cancelType'
                    label={item}
                    className="gap-cancle-popup"
                    defaultChecked={item === 'Class'}
                    inline
                  />
                ))}
              </div>
            </FormGroup>

            {/* SELECT CLASS */}
            <FormGroup>
              <Label className='font-weight-bold'>Select Class</Label>
              {/* <Input type='select'>
                <option>All Event</option>
                <option>{selectedRow?.className}</option>
              </Input> */}
              <Select
                options={classTypeOptions}
                placeholder="Select Class"
                className="react-select"
                classNamePrefix="select"
                isSearchable={false}
                required 
              />
            </FormGroup>

            {/* REASON */}
            <FormGroup>
              <Label className='font-weight-bold'>
                Reason for cancelling?
              </Label>
              <Input type='textarea' rows='4' />
            </FormGroup>

          </Form>
        </ModalBody>

        <ModalFooter>
          <Button color='secondary' onClick={() => setCancelModal(false)}>
            Close
          </Button>
          <Button color='primary'>
            Submit
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default upcommingClassList
