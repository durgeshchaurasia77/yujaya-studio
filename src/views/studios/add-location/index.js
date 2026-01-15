import { useState } from 'react'
import {
  Card,
  CardBody,
  Row,
  Col,
  Label,
  Input,
  Button,
  FormGroup,
  CardFooter
} from 'reactstrap'
import Select from 'react-select'
import RoomRow from './RoomRow'
import '../styles.css'
import '../../../assets/css.css'

/* -------------------- OPTIONS -------------------- */

const optionUserType = [
  { value: '', label: 'Please select one' },
  { value: '1', label: 'Employee' },
  { value: '2', label: 'Student' },
  { value: '3', label: 'Yoga Instructor' },
  { value: '4', label: 'Yoga Therapist' },
  { value: '5', label: 'Client (Patient)' },
  { value: '6', label: 'Affiliate Partner' }
]

const optionCountryList = [
  { value: 'India', label: 'India' },
  { value: 'United States', label: 'United States' },
  { value: 'United Kingdom', label: 'United Kingdom' },
  { value: 'Germany', label: 'Germany' },
  { value: 'Australia', label: 'Australia' },
  { value: 'Canada', label: 'Canada' },
  { value: 'Singapore', label: 'Singapore' },
  { value: 'United Arab Emirates', label: 'United Arab Emirates' },
  { value: 'France', label: 'France' },
  { value: 'Netherlands', label: 'Netherlands' }
]
const optionvertualServiceList = [
  { value: 'zoom', label: 'Zoom' },
  { value: 'google_meet', label: 'Google Meet' },
  { value: 'youtube', label: 'YouTube' },
  { value: 'facebook', label: 'Facebook' },
  { value: 'other', label: 'Other' }
]

const amenitiesList = [
  'Lockers',
  'Showers',
  'Parking',
  'Mat',
  'Towel',
  'Cafe',
  'Residential Room'
]

/* -------------------- COMPONENT -------------------- */

const AddLocation = () => {
  const [isPhysical, setIsPhysical] = useState(true)
  const [isVirtual, setIsVirtual] = useState(false)

  // const [rooms, setRooms] = useState([
  //   { name: '', capacity: '', photo: null }
  // ])

  const [rooms, setRooms] = useState([{ name: '', capacity: '', photo: null }])
  /* -------------------- ROOM HANDLERS -------------------- */

  const addRoom = () => {
    setRooms([...rooms, { name: '', capacity: '', photo: null }])
  }

  const updateRoom = (index, field, value) => {
    const updated = [...rooms]
    updated[index][field] = value
    setRooms(updated)
  }

  const removeRoom = index => {
    const updated = rooms.filter((_, i) => i !== index)
    setRooms(updated)
  }

  /* -------------------- UI -------------------- */

  return (
    <Card>
      <CardBody>
        <h4 className="mb-3">Add Location</h4>

        {/* LOCATION TYPE */}
        <FormGroup className="mb-3">
          <Label className="fw-bold mb-1">Location Type</Label>
          <div className="d-flex gap-2">
            <FormGroup check>
              <Input
                type="checkbox"
                checked={isPhysical}
                onChange={e => setIsPhysical(e.target.checked)}
              />
              <Label check>Physical</Label>
            </FormGroup>

            <FormGroup check>
              <Input
                type="checkbox"
                checked={isVirtual}
                onChange={e => setIsVirtual(e.target.checked)}
              />
              <Label check>Virtual</Label>
            </FormGroup>
          </div>
        </FormGroup>

        {/* VIRTUAL LOCATION */}
        {isVirtual && (
          <div className="border rounded p-3 mb-3 smooth-section">
            <h6 className="mb-2">Virtual Location Details</h6>
            <Row className="gy-2">
              <Col md="6">
                <Label>Service Provider<span className="text-danger">*</span></Label>
                <Select
                  options={optionvertualServiceList}
                  classNamePrefix="select"
                  required
                />
              </Col>
              <Col md="6">
                <Label>Merchant ID <span className="text-danger">*</span></Label>
                <Input type="text" placeholder="Enter Merchant ID" required/>
              </Col>

              <Col md="6">
                <Label>Passcode <span className="text-danger">*</span></Label>
                <Input type="password" placeholder="Enter Passcode" required/>
              </Col>

              <Col md="6">
                <Label>Meeting Link <span className="text-danger">*</span></Label>
                <Input type="url" placeholder="Enter Meeting Link" required/>
              </Col>
              <Col md="6">
                <Label>API? <span className="text-danger">*</span></Label>
                <Input type="url" placeholder="Enter Api Link" required/>
              </Col>
            </Row>
          </div>
        )}

        {/* PHYSICAL LOCATION */}
        {isPhysical && (
          <div className="border rounded p-3 smooth-section">
            <h6 className="mb-2">Physical Location Details</h6>

            <Row className="gy-2">
              <Col md="6">
                <Label>Address <span className="text-danger">*</span></Label>
                <Input type="text" placeholder="Enter Address" required/>
              </Col>

              <Col md="6">
                <Label>Country <span className="text-danger">*</span></Label>
                <Select
                  options={optionCountryList}
                  classNamePrefix="select"
                  required
                />
              </Col>

              <Col md="6">
                <Label>State <span className="text-danger">*</span></Label>
                <Input type="text" placeholder="Enter State" required/>
              </Col>

              <Col md="6">
                <Label>City <span className="text-danger">*</span></Label>
                <Input type="text" placeholder="Enter City" required/>
              </Col>

              <Col md="6">
                <Label>Zipcode <span className="text-danger">*</span></Label>
                <Input type="text" placeholder="Enter Zipcode" required/>
              </Col>
            </Row>

            {/* ROOMS */}
            <hr className="my-3" />
            <h6>Add Room</h6>
          <Row className="gy-2">
            <Col md="12">
            {rooms.map((room, index) => (
              <RoomRow
                key={index}
                index={index}
                room={room}
                updateRoom={updateRoom}
                removeRoom={removeRoom}
                canRemove={rooms.length > 1}
              />
            ))}
            
            <Button
              color="secondary"
              outline
              size="sm"
              className="mt-2 align-end button-alignment-accouncement"
              onClick={addRoom}
            >
              + Add Room
            </Button>

            </Col>

            {/* PHOTO */}
            <Col md="6">
              <FormGroup className="mt-2">
                <Label>Upload Location Photo</Label>
                <Input type="file" />
              </FormGroup>
            </Col>
            {/* AMENITIES */}
            <FormGroup className="mt-3">
              <Label>Amenities</Label>
              <Row className="gy-2">
                {amenitiesList.map(item => (
                  <Col md="4" sm="6" xs="12" key={item} className="gap-2">
                    <FormGroup check>
                      <Input type="checkbox" checked/>
                      <Label check>{item}</Label>
                    </FormGroup>
                  </Col>
                ))}
              </Row>
            </FormGroup>
            </Row>
          </div>
        )}
      </CardBody>      
      <CardFooter className="text-end">
          <div className="d-flex justify-content-between align-end button-alignment-accouncement">
            <Button color="primary">Create Location</Button>
          </div>
      </CardFooter>
    </Card>

  )
}

export default AddLocation
