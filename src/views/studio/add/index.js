import { useState } from 'react'
import '../../../assets/css.css'
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap'

const AddStudio = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    country: '',
    state: '',
    address: '',
    zipcode: '',
    photo: null
  })

  // const [rooms, setRooms] = useState([
  //   { roomName: '', paxCapacity: '' }
  // ])
  
  const [photoPreview, setPhotoPreview] = useState(null)
  const handlePhotoChange = e => {
    const file = e.target.files[0]

    if (file) {
      setFormData({ ...formData, photo: file })
      setPhotoPreview(URL.createObjectURL(file))
    }
  }
  const [rooms, setRooms] = useState([{ roomName: '', paxCapacity: '' }])
    const handleRoomChange = (index, e) => {
    const { name, value } = e.target
    const updatedRooms = [...rooms]
    updatedRooms[index][name] = value
    setRooms(updatedRooms)
  }
    const addRoom = () => {
    setRooms([...rooms, { roomName: '', paxCapacity: '' }])
  }
    const removeRoom = index => {
    if (rooms.length > 1) {
      setRooms(rooms.filter((_, i) => i !== index))
    }
  }
 const handleChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }


  const handleSubmit = e => {
    e.preventDefault()

    const payload = {
      ...formData,
      rooms
    }
    payload.append('photo', formData.photo)
    // payload.append('name', formData.name)
    console.log('Studio Data:', payload)
    alert('Studio added (static)')
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Add New Studio</CardTitle>
      </CardHeader>

      <CardBody>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md='6'>
              <FormGroup>
                <Label>Studio Name <span className="text-danger">*</span></Label>
                <Input
                  type='text'
                  name='name'
                  placeholder='Enter studio name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
            </Col>

            <Col md='6'>
              <FormGroup>
                <Label>Phone <span className="text-danger">*</span></Label>
                <Input
                  type='text'
                  name='phone'
                  placeholder='Enter phone number'
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
            </Col>

            <Col md='6'>
              <FormGroup>
                <Label>Email <span className="text-danger">*</span></Label>
                <Input
                  type='email'
                  name='email'
                  placeholder='Enter email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
            </Col>


            <Col md='6'>
              <FormGroup>
                <Label>Address <span className="text-danger">*</span></Label>
                <Input
                  type='textarea'
                  name='address'
                  placeholder='Enter address'
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
            </Col>
            <Col md='6'>
              <FormGroup>
                <Label>Country <span className="text-danger">*</span></Label>
                <Input
                  type='text'
                  name='country'
                  placeholder='Enter country'
                  value={formData.country}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
            </Col>
            <Col md='6'>
              <FormGroup>
                <Label>State <span className="text-danger">*</span></Label>
                <Input
                  type='text'
                  name='state'
                  placeholder='Enter state'
                  value={formData.state}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
            </Col>
            <Col md='6'>
              <FormGroup>
                <Label>City</Label>
                <Input
                  type='text'
                  name='city'
                  placeholder='Enter city'
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
            </Col>

            <Col md='6'>
              <FormGroup>
                <Label>Zipcode <span className="text-danger">*</span></Label>
                <Input
                  type='text'
                  name='zipcode'
                  placeholder='Enter zipcode'
                  value={formData.zipcode}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label>
                  Upload Studio Photo <span className="text-danger">*</span>
                </Label>

                <Input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  required
                  className="form-control"
                />

                {photoPreview && (
                  <div className="mt-1">
                    <img
                      src={photoPreview}
                      alt="Preview"
                      style={{
                        width: '100%',
                        maxHeight: '200px',
                        objectFit: 'cover',
                        borderRadius: '6px',
                        border: '1px solid #ddd'
                      }}
                    />
                  </div>
                )}
              </FormGroup>
            </Col>
          {/* Rooms Section */}
            <Col xs='12'>
              <h5 className='mt-2'>Rooms (Minimum 1 Room must be added)</h5>
            </Col>

            {rooms.map((room, index) => (
              <Row key={index} className='w-100 align-items-end'>
                <Col md='5'>
                  <FormGroup>
                    <Label>Room Name <span className="text-danger">*</span></Label>
                    <Input
                      name='roomName'
                      placeholder='Enter room name'
                      value={room.roomName}
                      onChange={e => handleRoomChange(index, e)}
                      required
                    />
                  </FormGroup>
                </Col>

                <Col md='5'>
                  <FormGroup>
                    <Label>Pax Capacity <span className="text-danger">*</span></Label>
                    <Input
                      type='number'
                      name='paxCapacity'
                      placeholder='Enter capacity'
                      value={room.paxCapacity}
                      onChange={e => handleRoomChange(index, e)}
                      required
                    />
                  </FormGroup>
                </Col>

                <Col md='2' className='mb-1'>
                  <Button
                    color='danger'
                    outline
                    disabled={rooms.length === 1}
                    onClick={() => removeRoom(index)}
                  >
                    Delete
                  </Button>
                </Col>
              </Row>
            ))}

            <Col xs='12' className='mb-2'>
              <Button color='success' outline onClick={addRoom}>
                + Add More Rooms
              </Button>
            </Col>
            <Col xs='12' className='mt-2'>
              <Button color='primary' type='submit'>
                Add Studio
              </Button>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </Card>
  )
}

export default AddStudio
