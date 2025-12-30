import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Form,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap'

const StudioForm = ({
  mode = 'view', // view | edit | add
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
}) => {
  const isView = mode === 'view'

  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h4">
          {/* {mode === 'view'
            ? 'View Studio'
            : mode === 'edit'
            ? 'Edit Studio'
            : 'Add New Studio'} */}
            {mode === 'view' ? 'View Studio' : mode === 'edit' ? 'Edit Studio' : 'Add New Studio'}
        </CardTitle>
      </CardHeader>

      <CardBody>
        <Form onSubmit={handleSubmit}>
          <Row>
            {/* BASIC DETAILS */}
            <Col md="6">
              <FormGroup>
                <Label>Studio Name *</Label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isView}
                />
              </FormGroup>
            </Col>

            <Col md="6">
              <FormGroup>
                <Label>Phone *</Label>
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={isView}
                />
              </FormGroup>
            </Col>

            <Col md="6">
              <FormGroup>
                <Label>Email *</Label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isView}
                />
              </FormGroup>
            </Col>

            <Col md="6">
              <FormGroup>
                <Label>Address *</Label>
                <Input
                  type="textarea"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  disabled={isView}
                />
              </FormGroup>
            </Col>

            <Col md="6">
              <FormGroup>
                <Label>Country *</Label>
                <Input
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  disabled={isView}
                />
              </FormGroup>
            </Col>

            <Col md="6">
              <FormGroup>
                <Label>State *</Label>
                <Input
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  disabled={isView}
                />
              </FormGroup>
            </Col>

            <Col md="6">
              <FormGroup>
                <Label>City *</Label>
                <Input
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  disabled={isView}
                />
              </FormGroup>
            </Col>

            <Col md="6">
              <FormGroup>
                <Label>Zipcode *</Label>
                <Input
                  name="zipcode"
                  value={formData.zipcode}
                  onChange={handleChange}
                  disabled={isView}
                />
              </FormGroup>
            </Col>

            {/* PHOTO */}
            <Col md="6">
              <FormGroup>
                <Label>Studio Photo *</Label>

                {!isView && (
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoChange}
                  />
                )}

                {photoPreview && (
                  <img
                    src={photoPreview}
                    alt="preview"
                    className="mt-1"
                    style={{
                      width: '100%',
                      maxHeight: 200,
                      objectFit: 'cover',
                      borderRadius: 6
                    }}
                  />
                )}
              </FormGroup>
            </Col>

            {/* ROOMS */}
            <Col xs="12">
              <h5>Rooms</h5>
            </Col>

            {rooms.map((room, index) => (
              <Row key={index} className="w-100">
                <Col md="5">
                  <FormGroup>
                    <Label>Room Name *</Label>
                    <Input
                      value={room.roomName}
                      onChange={e => handleRoomChange(index, e)}
                      disabled={isView}
                    />
                  </FormGroup>
                </Col>

                <Col md="5">
                  <FormGroup>
                    <Label>Pax Capacity *</Label>
                    <Input
                      type="number"
                      value={room.paxCapacity}
                      onChange={e => handleRoomChange(index, e)}
                      disabled={isView}
                    />
                  </FormGroup>
                </Col>

                {!isView && (
                  <Col md="2" className="mb-1">
                    <Button
                      color="danger"
                      outline
                      disabled={rooms.length === 1}
                      onClick={() => removeRoom(index)}
                    >
                      Delete
                    </Button>
                  </Col>
                )}
              </Row>
            ))}

            {!isView && (
              <Col xs="12">
                <Button color="success" outline onClick={addRoom}>
                  + Add Room
                </Button>
              </Col>
            )}
          </Row>
        </Form>
      </CardBody>
    </Card>
  )
}

export default StudioForm
