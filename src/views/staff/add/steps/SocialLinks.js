import { Row, Col, FormGroup, Label, Input } from 'reactstrap'

const SocialLinks = () => (
  <>
    <h5>Mailing Address</h5>
    <Row>
      <Col md="6">
        <FormGroup>
          <Label>Address</Label>
          <Input />
        </FormGroup>
      </Col>

      <Col md="6">
        <FormGroup>
          <Label>City</Label>
          <Input />
        </FormGroup>
      </Col>

      <Col md="6">
        <FormGroup>
          <Label>Postal Code</Label>
          <Input />
        </FormGroup>
      </Col>

      <Col md="6">
        <FormGroup>
          <Label>Country</Label>
          <Input type="select">
            <option>India</option>
            <option>USA</option>
          </Input>
        </FormGroup>
      </Col>
    </Row>
  </>
)

export default SocialLinks
