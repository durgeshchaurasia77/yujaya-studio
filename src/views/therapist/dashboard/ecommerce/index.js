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
  DropdownItem,
  UncontrolledDropdown,
  Progress
} from 'reactstrap'

import {
  Share,
  Printer,
  FileText,
  Grid,
  File,
  Copy,
  Plus,
  PlusSquare,
  MoreVertical
} from 'react-feather'
import webinarImg from '../../../../assets/images/avatars/girl-with-laptop.png'
import Chart from 'react-apexcharts'
import { useHistory } from 'react-router-dom'

import { useState, Fragment } from 'react'
import Select from 'react-select'
// import { ChevronDown } from 'react-feather'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import '@styles/react/libs/tables/react-dataTable-component.scss'
const MySwal = withReactContent(Swal)

const ClassList = () => {
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


const topicChart = {
  series: [
    {
      data: [35, 20, 14, 12, 10, 9]
    }
  ],
  options: {
    chart: {
      type: 'bar',
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '60%',
        borderRadius: 6,
        dataLabels: {
          position: 'center'
        }
      }
    },
    dataLabels: {
      enabled: true,
      style: {
        colors: ['#fff'],
        fontWeight: 600
      }
    },
    colors: ['#7367F0'],
    grid: {
      strokeDashArray: 6
    },
    xaxis: {
      max: 40,
      categories: [
        'UI Design',
        'UX Design',
        'Music',
        'Animation',
        'React',
        'SEO'
      ]
    }
  }
}

const instructors = [
  { name: 'Maven Analytics', field: 'Business Intelligence', courses: 33 },
  { name: 'Bentlee Emblin', field: 'Digital Marketing', courses: 52 },
  { name: 'Benedetto Rossiter', field: 'UI/UX Design', courses: 12 },
  { name: 'Beverlie Krabbe', field: 'React Native', courses: 8 },
  { name: 'Beverlie Krabbe', field: 'React Native', courses: 8 }
]


const topCourses = [
  { name: 'Videography Basic Design Course', views: '1.2k Views' },
  { name: 'Basic Front-end Development', views: '834 Views' },
  { name: 'Basic Fundamentals of Photography', views: '3.7k Views' },
  { name: 'Advance Dribbble Base Visual Design', views: '2.5k Views' },
  { name: 'Your First Singing Lesson', views: '948 Views' },
  { name: 'Your First Singing Lesson', views: '948 Views' },
  { name: 'Your First Singing Lesson', views: '948 Views' },
  { name: 'Your First Singing Lesson', views: '948 Views' },
  { name: 'Your First Singing Lesson', views: '948 Views' }
]

const assignments = [
  { name: 'User experience Design', progress: 72, tasks: 120 },
  { name: 'Basic fundamentals', progress: 48, tasks: 32 },
  { name: 'React native components', progress: 15, tasks: 182 },
  { name: 'Basic of music theory', progress: 24, tasks: 56 }
]
const columns = getColumns({
    openView,
    openEdit,
    handleDelete,
    handleStatusChange
  })
    const filteredData = userData.filter(item => {
    return item.course_name.toLowerCase().includes(searchValue.toLowerCase())
    })

  return (
    <Fragment>
        {/* <SummaryCards /> */}
      <Row>
        <Col md="8">
          <Row>
            <Col md="12">
            <Card>
              <CardBody>
                <div className="d-flex justify-content-between">
                  <h5>Topic you are interested in</h5>
                  {/* <MoreVertical size={18} /> */}
                  <UncontrolledDropdown>
                  <DropdownToggle
                    tag="span"
                    className="cursor-pointer"
                  >
                    <MoreVertical size={18} />
                  </DropdownToggle>

                  <DropdownMenu end className="shadow">

                    <DropdownItem>
                      Heighest Views
                    </DropdownItem>
                    <DropdownItem>
                      Select All
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                </div>

                <Chart
                  options={topicChart.options}
                  series={topicChart.series}
                  type="bar"
                  height={280}
                />
              </CardBody>
            </Card>
            </Col>
          </Row>
        </Col>

        <Col md="4">
          <Card>
            <CardBody>
              <div className="d-flex justify-content-between mb-2">
                <h5>Popular Instructors</h5>
                {/* <MoreVertical size={18} /> */}
                <UncontrolledDropdown>
                  <DropdownToggle
                    tag="span"
                    className="cursor-pointer"
                  >
                    <MoreVertical size={18} />
                  </DropdownToggle>

                  <DropdownMenu end className="shadow">
                    <DropdownItem>
                      Select All
                    </DropdownItem>

                    <DropdownItem>
                      Refresh
                    </DropdownItem>

                    <DropdownItem>
                      Share
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>

              {instructors.map((item, i) => (
                <div
                  key={i}
                  className="d-flex justify-content-between align-items-center py-50"
                >
                  <div>
                    <div className="fw-bold">{item.name}</div>
                    <small className="text-muted">{item.field}</small>
                  </div>
                  <span className="fw-bold">{item.courses}</span>
                </div>
              ))}
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row className="mt-2">
        {/* <Col md="12">
          <Card>
            <CardHeader>
              <CardTitle tag="h4">Follow-ups due</CardTitle>
            </CardHeader>
          </Card>
        </Col> */}
        <Col md="4">
          <Card>
            <CardBody>
              <div className="d-flex justify-content-between mb-2">
                <h5>Top Courses</h5>
                {/* <MoreVertical size={18} /> */}
                <UncontrolledDropdown>
                  <DropdownToggle
                    tag="span"
                    className="cursor-pointer"
                  >
                    <MoreVertical size={18} />
                  </DropdownToggle>

                  <DropdownMenu end className="shadow">
                    <DropdownItem>
                      Select All
                    </DropdownItem>

                    <DropdownItem>
                      Refresh
                    </DropdownItem>

                    <DropdownItem>
                      Share
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>

              {topCourses.map((item, i) => (
                <div key={i} className="d-flex justify-content-between mb-1">
                  <span>{item.name}</span>
                  <span className="text-muted">{item.views}</span>
                </div>
              ))}
            </CardBody>
          </Card>
        </Col>
        <Col md="4">
          <Card className="text-center">
            <CardBody>
              <img
                src={webinarImg}
                alt="Webinar"
                style={{ maxWidth: '170px' }}
                className="mb-1"
              />

              <h5>Upcoming Webinar</h5>
              <p className="text-muted">
                Next Generation Frontend Architecture Using React
              </p>
                <div className="d-flex justify-content-between my-2">
                  <span>📅 17 Nov 23</span>
                  <span>⏱ 32 minutes</span>
                </div>
              <Button color="primary" block>
                Join the event
              </Button>
            </CardBody>
          </Card>
        </Col>
        <Col md="4">
        <Card>
          <CardBody>
            <div className="d-flex justify-content-between mb-2">
              <h5>Assignment Progress</h5>
              {/* <MoreVertical size={18} /> */}
              <UncontrolledDropdown>
                  <DropdownToggle
                    tag="span"
                    className="cursor-pointer"
                  >
                    <MoreVertical size={18} />
                  </DropdownToggle>

                  <DropdownMenu end className="shadow">
                    <DropdownItem>
                      Select All
                    </DropdownItem>

                    <DropdownItem>
                      Refresh
                    </DropdownItem>

                    <DropdownItem>
                      Share
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
            </div>

            {assignments.map((item, i) => (
              <div key={i} className="mb-2">
                <div className="fw-bold">{item.name}</div>
                <small className="text-muted">{item.tasks} Tasks</small>

                <Progress
                  value={item.progress}
                  className="mt-50"
                  style={{ height: '6px' }}
                />
              </div>
            ))}
          </CardBody>
        </Card>
        </Col>
      </Row>
        <Card>
            <CardHeader>
              <CardTitle tag="h4">Today’s appointments</CardTitle>
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
  )
}

export default ClassList
