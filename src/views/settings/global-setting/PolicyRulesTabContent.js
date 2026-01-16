import { useState } from 'react'
import { Form, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap'
import '../../../assets/css.css'
import './style.css'
import { EditorState } from 'draft-js'
import CommonEditor from '../../../component/common/CommonEditor'

const PolicyRulesTabContent = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  
  return (
    <Form>
      <h5 className="mb-2">Student Class Policies</h5>

      {/* ===== TIME RULES ===== */}
      <Row className="mb-2">
        <Col md="2">
          <FormGroup>
            <Label>Hours</Label>
            <Input type="number" defaultValue={24} />
          </FormGroup>
        </Col>
        <Col md="10" className="d-flex align-items-center">
          <p className="mb-0">
            Students must book classes in advance before starting of the class.
          </p>
        </Col>
      </Row>

      <Row className="mb-2">
        <Col md="2">
          <FormGroup>
            <Label>Minutes</Label>
            <Input type="number" defaultValue={15} />
          </FormGroup>
        </Col>
        <Col md="10" className="d-flex align-items-center">
          <p className="mb-0">
            Late entry allowed only within minutes
          </p>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md="2">
          <FormGroup>
            <Label>Hours</Label>
            <Input type="number" defaultValue={2} />
          </FormGroup>
        </Col>
        <Col md="10" className="d-flex align-items-center">
          <p className="mb-0">
            Cancellation allowed up to X hours before class
          </p>
        </Col>
      </Row>

      {/* ===== POLICIES TEXT ===== */}
      <Row>
        <Col md="12">
          <FormGroup>
            <Label className="font-weight-bold">Details</Label>
            <CommonEditor
                editorState={editorState}
                onChange={setEditorState}
                height={180}
            />
          </FormGroup>
        </Col>
      </Row>

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

export default PolicyRulesTabContent
