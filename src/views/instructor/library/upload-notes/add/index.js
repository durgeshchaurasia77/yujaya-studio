// import { useState, useRef } from 'react'
import { useEffect, useRef, useState, Fragment } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Card,
  CardBody,
  Button,
  Form,
  CustomInput,
  InputGroup, 
  InputGroupText, 
  InputGroupAddon,
  Row, Col, FormGroup, Label, Input, CardFooter
} from 'reactstrap'

import {
  Calendar
} from 'react-feather'

import Stepper from 'bs-stepper'
import 'bs-stepper/dist/css/bs-stepper.min.css'
import Select from 'react-select'
import SelectAllMultiSelect from "../../../../../component/SelectAllMultiSelect/SelectAllMultiSelect.js"
import '../../../../../assets/css.css'
import { EditorState } from 'draft-js'
import CommonEditor from '../../../../../component/common/CommonEditor'
import Flatpickr from 'react-flatpickr'
import 'flatpickr/dist/themes/material_blue.css'
import { useHistory } from 'react-router-dom'
import '../list/styles.css'

const AddClass = () => {
  const [isEarlyBird, setIsEarlyBird] = useState(false)
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const history = useHistory()
  const [videoLinks, setVideoLinks] = useState([''])
  const [websiteLinks, setWebsiteLinks] = useState([''])
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [picker, setPicker] = useState(new Date())

const addVideoLink = () => {
  setVideoLinks([...videoLinks, ''])
}

const updateVideoLink = (index, value) => {
  const updatedLinks = [...videoLinks]
  updatedLinks[index] = value
  setVideoLinks(updatedLinks)
}


const addWebsiteLink = () => {
  setWebsiteLinks([...websiteLinks, ''])
}

const updateWebsiteLink = (index, value) => {
  const updatedLinks = [...websiteLinks]
  updatedLinks[index] = value
  setWebsiteLinks(updatedLinks)
}

const removeWebsiteLink = index => {
  setWebsiteLinks(websiteLinks.filter((_, i) => i !== index))
}
  return (
  <>
    <Card>
      <CardBody>
        <h4 className="mb-3">Upload Notes</h4>
          <Form>
            {/* CLASS / COURSE */}
            <FormGroup>
              <Row className="align-items-center">
                <Col md="8">
                  <Label className="font-weight-bold">
                    Class / Course / Workshop / Teacher training<span className="text-danger">*</span>
                  </Label>
                  <Input type="select">
                    <option>Please Select</option>
                    <option>Class</option>
                    <option>Course</option>
                    <option>Workshop</option>
                    <option>Teacher Training</option>
                  </Input>
                </Col>
                <Col md="4">
                  <small className="text-muted">
                  <Label className="font-weight-bold">or Search Class Code: </Label>
                    
                    {/* <Col md="3"> */}
                      <Input
                        type="text"
                        placeholder="Search Class Code"
                        defaultValue="12345"
                      />
                    {/* </Col> */}
                  </small>
                </Col>
              </Row>
            </FormGroup>

            {/* NOTES TITLE */}
            <FormGroup>
              <Row>
                <Col md="6">
                  <Label className="font-weight-bold">Notes Title<span className="text-danger">*</span></Label>
                  <Input
                    type="text"
                    placeholder="Please enter notes title here..."
                    required
                  />
                </Col>
                <Col md="6">
                  <Label className="font-weight-bold">Notes Type<span className="text-danger">*</span></Label>
                  <Input type="select">
                    <option>Please Select</option>
                    <option>Class Practice Kit</option>
                    <option>Course Material</option>
                  </Input>
                </Col>
              </Row>
            </FormGroup>


            {/* UPLOAD DOCUMENT */}
            <FormGroup>
              <Row>
                <Col md="6">
                  <Label className="font-weight-bold">Upload Document<span className="text-danger">*</span></Label>
                  <Input type="file" required />
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
                <Row>
                  <Col md="12">
                    <div className="d-flex gap-2 mb-1">
                      <Label className="font-weight-bold">Video link</Label>
                        <CustomInput type="radio" id="vimeo" name="videoType" label="Vimeo" />
                        <CustomInput type="radio" id="youtube" name="videoType" label="Youtube" />
                        <CustomInput type="radio" id="other" name="videoType" label="Other" />
                    </div>
                  </Col>
                </Row>
                {videoLinks.map((link, index) => (
                  <Row key={index} className="mb-1 align-items-center">
                    <Col md="8">
                      <Input
                        value={link}
                        placeholder="Enter video link"
                        onChange={e => updateVideoLink(index, e.target.value)}
                      />
                    </Col>

                    <Col md="4">
                      {index === 0 ? (
                        <Button
                          outline
                          color="primary"
                          block
                          onClick={addVideoLink}
                        >
                          ADD More Video Links
                        </Button>
                      ) : (
                        <Button
                          outline
                          color="danger"
                          block
                          onClick={() => setVideoLinks(videoLinks.filter((_, i) => i !== index))}
                        >
                          Remove
                        </Button>
                      )}
                    </Col>
                  </Row>
                ))}
            </FormGroup>

            {/* WEBSITE LINK */}
            <FormGroup>
              <Row>
                <Col md="12">
                  <Label className="font-weight-bold">Website link</Label>
                </Col>
              </Row>
              {websiteLinks.map((link, index) => (
                <Row key={index} className="mb-1 align-items-center">
                  <Col md="8">
                    <Input
                      value={link}
                      placeholder="Enter website link"
                      onChange={e => updateWebsiteLink(index, e.target.value)}
                    />
                  </Col>
                  <Col md="4">
                    {index === 0 ? (
                      <Button
                        outline
                        color="primary"
                        block
                        onClick={addWebsiteLink}
                      >
                        ADD More Links
                      </Button>
                    ) : (
                      <Button
                        outline
                        color="danger"
                        block
                        onClick={() => removeWebsiteLink(index)}
                      >
                        Remove
                      </Button>
                    )}
                  </Col>
                </Row>
              ))}
            </FormGroup>
            {/* REMARKS */}
            <FormGroup>
              <Label className="font-weight-bold">Remarks</Label>
              <Row>
                <Col md="12">
                  <CommonEditor
                    editorState={editorState}
                    onChange={setEditorState}
                    height={90}
                    placeholder="Please Enter Remarks"
                  />
                </Col>
              </Row>
            </FormGroup>

            {/* UPLOADED ON */}
            <FormGroup>
              <Label className="font-weight-bold">
                Uploaded on<span className="text-danger">*</span>
              </Label>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Fragment>
                    <Label>
                      Date of Starting <span className="text-danger">*</span>
                    </Label>
        
                    <InputGroup style={{ cursor: 'pointer' }}>
                      <Flatpickr
                        value={startDate}
                        onChange={date => setPicker(date)}
                        className="form-control"
                        data-enable-time
                        id='date-time-picker'
                        options={{
                          enableTime: true,
                          dateFormat: 'd-m-Y H:i',
                          minDate: startDate,
                          allowInput: true
                        }}
                        placeholder="Select Date of Starting"
                      />
                      <InputGroupAddon addonType="append">
                        <InputGroupText>
                          <Calendar size={16} />
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                    </Fragment>
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label>
                      Date of Expiring <span className="text-danger">*</span>
                    </Label>
        
                  <InputGroup style={{ cursor: 'pointer' }}>
                      <Flatpickr
                        value={endDate}
                        onChange={date => setEndDate(date[0])}
                        className="form-control"
                        options={{
                          enableTime: true,
                          dateFormat: 'Y-m-d H:i',
                          minDate: startDate,
                          allowInput: true
                        }}
                        placeholder="Select Date of Expiring"
                      />
                      <InputGroupAddon addonType="append">
                        <InputGroupText>
                          <Calendar size={16} />
                        </InputGroupText>
                      </InputGroupAddon>
                      </InputGroup>
                    </FormGroup>
                </Col>
              </Row>
            </FormGroup>
          </Form>
      </CardBody>
      <CardFooter className="text-end">
        <div className="d-flex justify-content-between align-end button-alignment-accouncement">
          <Button color="secondary" className='mr-2' onClick={() => history.push('/instructor-auth/library/upload-notes/list')}>
            Cancel
          </Button>
          <Button color="primary" onClick={() => history.push('/instructor-auth/library/upload-notes/list')}>
            Submit
          </Button>
        </div>
            
        </CardFooter>
    </Card>
  </>
  )
}

export default AddClass
