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
import CommonEditor from '../../../../../component/common/CommonEditor'
const MySwal = withReactContent(Swal)
import '../../../../../assets/css.css'

const CientParameterList = () => {
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
    return item.parameter_id.toLowerCase().includes(searchValue.toLowerCase())
    })

  return (
    <>
    <Fragment>
        {/* <SummaryCards /> */}
        <Card>
            <CardHeader>
            <CardTitle tag="h4">All Parameters</CardTitle>    
                <Button
                  color="primary"
                  className="d-flex align-items-center"
                      onClick={() => history.push('/therapist-auth/client/parameter/add')}
                >
                  <Plus size={14} className="me-50" />
                  Add Parameters
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
                    placeholder="Search By Parameter Id"
                    className="mr-2"
                    onChange = {e => setSearchValue(e.target.value)}
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
    </>
  )
}

export default CientParameterList
