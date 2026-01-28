// import { useState, useRef } from 'react'
import { useEffect, useRef, useState, Fragment } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Card,
  CardBody,
  Button,
  Row, Col, FormGroup, Label, Input, CardFooter, InputGroup, InputGroupText, InputGroupAddon
} from 'reactstrap'
import Stepper from 'bs-stepper'
import 'bs-stepper/dist/css/bs-stepper.min.css'
import Select from 'react-select'
import '../../../assets/css.css'
import { Editor } from 'react-draft-wysiwyg'
import { EditorState } from 'draft-js'
import CommonEditor from '../../../component/common/CommonEditor.js'
import Flatpickr from 'react-flatpickr'
import 'flatpickr/dist/themes/material_blue.css'
import { Calendar } from 'react-feather'
import SelectAllMultiSelect from "../../../component/SelectAllMultiSelect/SelectAllMultiSelect.js"

const optionMobileType = [
  { value: '0', label: 'IND(+91)' },
  { value: '1', label: 'SING(+65)' }
]
const AddStudent = () => {
  const [status, setStatus] = useState(true)
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [picker, setPicker] = useState(new Date())
  return (
    <>
      <Card>
        <CardBody>

          <h4 className="fw-bold mb-2">Add Student</h4>

          {/* Personal Details */}
          <h6 className="fw-semibold mb-2">Personal Details</h6>

          <Row className="gy-3">

            <Col md="6">
              <FormGroup>
                <Label>
                  First Name <span className="text-danger">*</span>
                </Label>
                <Input type="text" placeholder="Enter First Name" required />
              </FormGroup>
            </Col>

            <Col md="6">
              <FormGroup>
                <Label>
                  Last Name <span className="text-danger">*</span>
                </Label>
                <Input type="text" placeholder="Enter Last Name" required />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label>
                  Gender <span className="text-danger">*</span>
                </Label>
                <Select
                  placeholder="Please Select"
                  className="react-select"
                  classNamePrefix="select"
                  isSearchable={false}
                  options={[
                    { label: "Male", value: "male" },
                    { label: "Female", value: "female" },
                    { label: "Other", value: "other" }
                  ]}
                />
              </FormGroup>
            </Col>
            {/* <Col md="6">
              <FormGroup>
                <Label>
                  Mobile <span className="text-danger">*</span>
                </Label>
                <Input type="tel" placeholder="Enter Mobile Number" required />
              </FormGroup>
            </Col> */}
            <Col md="6">
              <FormGroup>
                <Label>
                  Mobile <span className="text-danger">*</span>
                </Label>

                <div className="d-flex gap-2">
                  {/* Country Code */}
                  <Select
                    options={optionMobileType}
                    className="react-select"
                    classNamePrefix="select"
                    isSearchable={false}
                    placeholder="Code"
                    styles={{
                      container: base => ({
                        ...base,
                        width: '140px'
                      })
                    }}
                  />

                  {/* Mobile Number */}
                  <Input
                    type="tel"
                    placeholder="Enter Mobile Number"
                    className="ml-2"
                    required
                  />
                </div>
              </FormGroup>
            </Col>

            <Col md="6">
              <FormGroup>
                <Label>
                  Date of Birth<span className="text-danger">*</span>
                </Label>
                <Flatpickr
                  className="form-control"
                  placeholder="Select Date of Birth"
                  required
                  options={{
                    dateFormat: "d-m-Y",
                    allowInput: true
                  }}
                />

              </FormGroup>
            </Col>
          </Row>
          {/* Login Account Details */}
          <hr className="my-2" />
          <h6 className="fw-semibold mb-2">Login Account Details</h6>

          <Row className="gy-3">

            <Col md="6">
              <FormGroup>
                <Label>
                  Email <span className="text-danger">*</span>
                </Label>
                <Input type="email" placeholder="Enter Email Address" required />
              </FormGroup>
            </Col>

            <Col md="6">
              <FormGroup>
                <Label>
                  Password <span className="text-danger">*</span>
                </Label>
                <Input type="password" placeholder="Enter Password" required />
              </FormGroup>
            </Col>

            <Col md="6">
              <label className="custom-switch">
                <input
                  type="checkbox"
                  checked={status}
                  onChange={() => setStatus(!status)}
                />
                <span className="slider"></span>
                <span className="switch-label">Status</span>
              </label>
            </Col>

          </Row>

        </CardBody>        
          <CardFooter className="text-end">
            <div className="d-flex justify-content-between align-end button-alignment-accouncement">
                <Button color="primary">Add Student</Button>
              </div>
          </CardFooter>
      </Card>
    </>
  )
}

export default AddStudent
