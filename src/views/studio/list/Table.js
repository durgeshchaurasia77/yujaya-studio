import { useState, useEffect } from 'react'
import DataTable from 'react-data-table-component'
import ReactPaginate from 'react-paginate'
import { Card, Row, Col, Label, Input, Button, Modal, ModalBody, ModalFooter } from 'reactstrap'
import CustomInput from 'reactstrap/lib/CustomInput'
import { useHistory } from 'react-router-dom'
// import { columns } from './columns'
import { studioData } from './data'
import { getColumns } from './columns'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import '@styles/react/libs/tables/react-dataTable-component.scss'
const MySwal = withReactContent(Swal)
import StudioForm from './StudioForm'
const Table = () => {
  const history = useHistory()
  // States
  const [currentPage, setCurrentPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredData, setFilteredData] = useState(studioData)
  const [viewModal, setViewModal] = useState(false)
  const [editModal, setEditModal] = useState(false)
  const [selectedRow, setSelectedRow] = useState(null)

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    country: '',
    state: '',
    city: '',
    zipcode: '',
    photo: null
  })
  const [rooms, setRooms] = useState([{ roomName: '', paxCapacity: '' }])
  const [photoPreview, setPhotoPreview] = useState(null)
useEffect(() => {
  if (selectedRow) {
    setFormData({
      name: selectedRow.fullName || '',
      phone: selectedRow.phone || '',
      email: selectedRow.email || '',
      address: selectedRow.address || '',
      country: selectedRow.country || '',
      state: selectedRow.state || '',
      city: selectedRow.city || '',
      zipcode: selectedRow.zipcode || '',
      photo: null
    })

    setRooms(selectedRow.rooms?.length ? selectedRow.rooms : [{ roomName: '', paxCapacity: '' }])
    setPhotoPreview(selectedRow.photo || null)
  }
}, [selectedRow])


const handleChange = e => {
  const { name, value } = e.target
  setFormData(prev => ({ ...prev, [name]: value }))
}

const handlePhotoChange = e => {
  const file = e.target.files[0]
  if (file) {
    setFormData(prev => ({ ...prev, photo: file }))
    setPhotoPreview(URL.createObjectURL(file))
  }
}

const handleRoomChange = (index, e) => {
  const { name, value } = e.target
  const updated = [...rooms]
  updated[index][name] = value
  setRooms(updated)
}

const addRoom = () => {
  setRooms([...rooms, { roomName: '', paxCapacity: '' }])
}

const removeRoom = index => {
  if (rooms.length > 1) {
    setRooms(rooms.filter((_, i) => i !== index))
  }
}

const handleSubmit = e => {
  e.preventDefault()
  console.log('UPDATE DATA', { formData, rooms })
  MySwal.fire('Updated!', 'Studio updated successfully', 'success')
}

  const openView = row => {
    setSelectedRow(row)
    setViewModal(true)
  }

  const openEdit = row => {
    setSelectedRow(row)
    setEditModal(true)
  }
   const handleDelete = row => {
    MySwal.fire({
      title: 'Delete Studio?',
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
    text: `Studio will be marked as ${nextStatus.toUpperCase()}`,
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
  // Search & filter
useEffect(() => {
  let data = studioData

  if (searchTerm.length) {
   data = data.filter(item => {
      return (
        item.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.email.toLowerCase().includes(searchTerm.toLowerCase())
      )
    })
  }

  setFilteredData(data)
  setCurrentPage(1)
}, [searchTerm])


  // Pagination slice
  const paginatedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  )

  // Page change
const handlePagination = page => {
  setCurrentPage(page.selected + 1)
}
  // Rows per page
  const handlePerPage = e => {
    setRowsPerPage(Number(e.currentTarget.value))
    setCurrentPage(1)
  }

  // Search input
  const handleFilter = value => {
    setSearchTerm(value)
  }
const studioFormProps = {
  formData,
  setFormData,
  rooms,
  setRooms,
  photoPreview,
  handleChange,
  handlePhotoChange,
  handleRoomChange,
  addRoom,
  removeRoom,
  handleSubmit
}
  // Custom pagination
  const CustomPagination = () => {
    const pageCount = Math.ceil(filteredData.length / rowsPerPage)

    return (
      <ReactPaginate
        previousLabel=''
        nextLabel=''
        pageCount={pageCount || 1}
        activeClassName='active'
        forcePage={currentPage - 1}
        onPageChange={handlePagination}
        pageClassName='page-item'
        pageLinkClassName='page-link'
        previousClassName='page-item prev'
        nextClassName='page-item next'
        previousLinkClassName='page-link'
        nextLinkClassName='page-link'
        containerClassName='pagination react-paginate justify-content-end my-2 pr-1'
      />
    )
  }

  return (
    <Card>
      {/* HEADER */}
      <div className='invoice-list-table-header w-95 ml-3  mr-5  mt-2 mb-75'>
        <Row>
          <Col xl='6' className='d-flex align-items-center p-0'>
            <div className='d-flex align-items-center w-100'>
              <Label for='rows-per-page'>Show</Label>
              <CustomInput
                className='form-control mx-50'
                type='select'
                id='rows-per-page'
                value={rowsPerPage}
                onChange={handlePerPage}
                style={{ width: '5rem' }}
              >
                <option value='10'>10</option>
                <option value='25'>25</option>
                <option value='50'>50</option>
              </CustomInput>
              <Label for='rows-per-page'>Entries</Label>
            </div>
          </Col>

          <Col
            xl='6'
            className='d-flex align-items-sm-center justify-content-lg-end justify-content-start flex-lg-nowrap flex-wrap flex-sm-row flex-column pr-lg-1 p-0 mt-lg-0 mt-1'
          >
            <div className='d-flex align-items-center mb-sm-0 mb-1 mr-1'>
              <Label className='mb-0' for='search-invoice'>
                Search:
              </Label>
              <Input
                id='search-invoice'
                className='ml-50 w-100'
                type='text'
                value={searchTerm}
                onChange={e => handleFilter(e.target.value)}
              />
            </div>

            {/* <Button.Ripple color='primary'>
              Add New Studio
            </Button.Ripple> */}
            <Button.Ripple
              color='primary'
              onClick={() => history.push('/studio/add')}
            >
              Add New Studio
            </Button.Ripple>
          </Col>
        </Row>
      </div>

      {/* TABLE */}
      <DataTable
        noHeader
        responsive
        columns={columns}
        data={paginatedData}
        className='react-dataTable'
      />
      <Modal isOpen={viewModal} toggle={() => setViewModal(false)} size="lg">
        {/* <ModalBody> */}
          <StudioForm mode="view" {...studioFormProps} />
          <ModalFooter>
            <Button color="secondary" onClick={() => setViewModal(false)}>
              Close
            </Button>
          </ModalFooter>
        {/* </ModalBody> */}
      </Modal>
      <Modal isOpen={editModal} toggle={() => setEditModal(false)} size="lg">
        {/* <ModalBody> */}
          <StudioForm mode="edit" {...studioFormProps} />
        {/* </ModalBody> */}
        <ModalFooter>
          <Button color="secondary" onClick={() => setEditModal(false)}>
            Cancel
          </Button>
          <Button color="primary" onClick={handleSubmit}>
            Update Studio
          </Button>
        </ModalFooter>
      </Modal>
      {/* PAGINATION */}
      <CustomPagination />
    </Card>
  )
}

export default Table
