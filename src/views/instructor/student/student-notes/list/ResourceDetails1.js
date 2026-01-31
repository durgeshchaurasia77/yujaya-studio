import {
  Row,
  Col
} from 'reactstrap'


const ResourceDetails1 = () => {
  return (
    <div className="resource-details">

      <Row>
        <Col md="4" className="label">Category</Col>
        <Col md="8">Yoga</Col>
      </Row>

      <Row>
        <Col md="4" className="label">Subcategory</Col>
        <Col md="8">Class</Col>
      </Row>

      <Row>
        <Col md="4" className="label">Class / Course</Col>
        <Col md="8">
          Yoga Instructor Training Course (YITC) - Weekday
        </Col>
      </Row>

      <Row>
        <Col md="4" className="label">Download</Col>
        <Col md="8">
          <a href="#" className="text-primary">
            Click here to download
          </a>
          <div className="text-muted font-small-2">
            before expiry on 12 January 2027 12:34 PM
          </div>
        </Col>
      </Row>

      <Row>
        <Col md="4" className="label">View Video</Col>
        <Col md="8">
          <a href="#" className="text-primary">
            Show Video Player
          </a>
        </Col>
      </Row>

      <Row>
        <Col md="4" className="label">Website Link</Col>
        <Col md="8">
          <a href="#" className="text-primary">
            Click here to Visit
          </a>
        </Col>
      </Row>

      <Row>
        <Col md="4" className="label">Remarks</Col>
        <Col md="8">
          This must before signing up new class once done upload photos via notes section
        </Col>
      </Row>

    </div>
  )
}

export default ResourceDetails1
