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

const optionMaritalStatusList = [
  { value: 'married', label: 'Married' },
  { value: 'unmarried', label: 'Unmarried' },
  { value: 'other', label: 'Other' }
]
const optionMobileType = [
  { value: '0', label: 'IND(+91)' },
  { value: '1', label: 'SING(+65)' }
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
const optionsNationalId = [
  { value: '', label: 'Please select one', isDisabled: true},
  { value: 'Passport', label: 'Passport' },
  { value: 'National Id', label: 'National Id' },
  { value: 'Driving License', label: 'Driving License' }
]

const AddStaff = () => {
  const [status, setStatus] = useState(true)
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [picker, setPicker] = useState(new Date())
  return (
    <>
      <Card>
        <CardBody>
          <h4 className="fw-bold mb-2">Add Employee or  Affiliate Partner</h4>
          {/* Mailing Address */}
          <h6 className="fw-semibold mb-2">Mailing Address</h6>
          <Row className="gy-3">
            <Col md="6">
              <FormGroup>
                <Label>
                  Address<span className="text-danger">*</span>
                </Label>
                <Input type="text" placeholder="Enter Address" required />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label>
                  Country <span className="text-danger">*</span>
                </Label>
                <Select
                  options={optionCountryList}
                  placeholder="Please Select"
                  className="react-select"
                  classNamePrefix="select"
                  isSearchable={false}
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label>
                  State <span className="text-danger">*</span>
                </Label>
                <Input type="text" placeholder="Enter State" required />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label>
                  City <span className="text-danger">*</span>
                </Label>
                <Input type="text" placeholder="Enter City" required />
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label>Zip Code <span className="text-danger">*</span></Label>
                <Input type="text" placeholder="Enter zip code" required/>
              </FormGroup>
            </Col>
          </Row>
          {/* Personal Information */}
          <hr className="my-2" />
          <h6 className="fw-semibold mb-2">Personal Information</h6>
          <Row className="gy-3">
            <Col md="6">
            <FormGroup>
              <Label>National ID Type<span className="text-danger">*</span></Label>
              <Select
                options={optionsNationalId}
                placeholder="Select National ID Type"
                className="react-select"
                classNamePrefix="select"
                isSearchable={false}
                required 
              />
            </FormGroup>
          </Col>

          <Col md="6">
            <FormGroup>
              <Label>National ID Number<span className="text-danger">*</span></Label>
              <Input type="text" placeholder="Enter ID number" required/>
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label>Occupation<span className="text-danger">*</span></Label>
              <Input type="text" placeholder="Enter Occupation" required/>
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label>Maritial Status<span className="text-danger">*</span></Label>
              <Select
                options={optionMaritalStatusList}
                placeholder="Select Maritial Status"
                className="react-select"
                classNamePrefix="select"
                isSearchable={false}
                required 
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label>Education Qualification<span className="text-danger">*</span></Label>
              <Input type="text" placeholder="Enter Education Qualification" required/>
            </FormGroup>
          </Col>
        </Row>
        </CardBody>        
          <CardFooter className="text-end">
            <div className="d-flex justify-content-between align-end button-alignment-accouncement">
                <Button color="primary">Submit</Button>
            </div>
          </CardFooter>
      </Card>
    </>
  )
}

export default AddStaff
