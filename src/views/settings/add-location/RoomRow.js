import { Row, Col, Input, Button } from 'reactstrap'

const RoomRow = ({ room, index, updateRoom, removeRoom, canRemove }) => {
  return (
    <Row className="gy-2 align-items-end mb-1">
      <Col md="4">
        <Input
          placeholder={`Room ${index + 1}`}
          value={room.name}
          onChange={e => updateRoom(index, 'name', e.target.value)}
        />
      </Col>

      <Col md="3">
        <Input
          placeholder="Pax Capacity"
          type="number"
          value={room.capacity}
          onChange={e => updateRoom(index, 'capacity', e.target.value)}
        />
      </Col>

      <Col md="4">
        <Input
          type="file"
          onChange={e => updateRoom(index, 'photo', e.target.files[0])}
        />
      </Col>

      <Col md="1">
        {canRemove && (
          <Button
            color="danger"
            outline
            size="sm"
            onClick={() => removeRoom(index)}
          >
            Remove
          </Button>
        )}
      </Col>
    </Row>
  )
}

export default RoomRow
