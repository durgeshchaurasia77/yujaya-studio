import { useState } from 'react'
import {
  Form,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  CustomInput,
  Button
} from 'reactstrap'
import '../../../assets/css.css'
import './style.css'

const VideoPlateformTabContent = () => {
  const [integrationType, setIntegrationType] = useState('embed')
  const [hostType, setHostType] = useState('zoom')

  return (
    <Form>
      {/* ================= VIDEO PLATFORM ================= */}
      <h5 className="mb-2">Video Platform</h5>

      {/* Integration Type */}
      <Row className="mb-2">
        <Col md="3">
          <Label className="font-weight-bold">Integration Type</Label>
        </Col>
        <Col md="9">
          <CustomInput
            type="radio"
            id="embed"
            name="integrationType"
            label="Embed videos"
            checked={integrationType === 'embed'}
            onChange={() => setIntegrationType('embed')}
            inline
          />
          <CustomInput
            type="radio"
            id="api"
            name="integrationType"
            label="API integration (advanced)"
            checked={integrationType === 'api'}
            onChange={() => setIntegrationType('api')}
            inline
          />
        </Col>
      </Row>

      {/* Video URLs */}
      <Row className="mb-2">
        <Col md="6">
          <FormGroup>
            <Label>Vimeo Video URL</Label>
            <Input placeholder="https://vimeo.com/1234567" />
          </FormGroup>
        </Col>
        <Col md="6">
          <FormGroup>
            <Label>YouTube Video URL</Label>
            <Input placeholder="https://youtube.com/123456" />
          </FormGroup>
        </Col>
      </Row>

      {/* ================= VIMEO API ================= */}
      <h6 className="mt-3 mb-1 font-weight-bold">Vimeo API Integration</h6>

      <Row>
        <Col md="6">
          <FormGroup>
            <Label>Vimeo API</Label>
            <Input />
          </FormGroup>
        </Col>
        <Col md="6">
          <FormGroup>
            <Label>Vimeo Client ID</Label>
            <Input />
          </FormGroup>
        </Col>
        <Col md="6">
          <FormGroup>
            <Label>Client Secret</Label>
            <Input />
          </FormGroup>
        </Col>
        <Col md="6">
          <FormGroup>
            <Label>Access Token</Label>
            <Input />
          </FormGroup>
        </Col>
      </Row>

      {/* ================= YOUTUBE API ================= */}
      <h6 className="mt-3 mb-1 font-weight-bold">YouTube API Integration</h6>

      <Row>
        <Col md="6">
          <FormGroup>
            <Label>Google API Key</Label>
            <Input />
          </FormGroup>
        </Col>
      </Row>

      {/* ================= VIRTUAL CLASS HOST ================= */}
      <h5 className="mt-3 mb-2">Virtual Class Host</h5>

      <Row className="mb-2">
        <Col md="3">
          <Label className="font-weight-bold">Virtual Class Host Setup</Label>
        </Col>
        <Col md="9">
          <CustomInput
            type="radio"
            id="zoom"
            name="hostType"
            label="Zoom"
            checked={hostType === 'zoom'}
            onChange={() => setHostType('zoom')}
            inline
          />
          <CustomInput
            type="radio"
            id="googleMeet"
            name="hostType"
            label="Google Meet"
            checked={hostType === 'google'}
            onChange={() => setHostType('google')}
            inline
          />
        </Col>
      </Row>

      {/* ================= ZOOM API ================= */}
      {hostType === 'zoom' && (
        <>
          <h6 className="mt-2 mb-1 font-weight-bold">Zoom API Integration</h6>

          <Row>
            <Col md="6">
              <FormGroup>
                <Label>Zoom Account ID</Label>
                <Input />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label>Access Token (encrypted)</Label>
                <Input />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label>Refresh Token (encrypted)</Label>
                <Input />
              </FormGroup>
            </Col>
          </Row>
        </>
      )}

      {/* ACTIONS */}
      <Row className="mb-2">
        <Col>
          <div className="mt-2 button-alignment-accouncement">
          <Button.Ripple color="primary" className="mr-1">
            Save changes
          </Button.Ripple>
          <Button.Ripple color="secondary" outline>
            Discard
          </Button.Ripple>
        </div>
        </Col>
      </Row>
    </Form>
  )
}

export default VideoPlateformTabContent
