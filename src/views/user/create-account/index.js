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
const optionUserType = [
  { value: '', label: 'Please select one' },
  { value: '1', label: 'Employee' },
  { value: '2', label: 'Student' },
  { value: '3', label: 'Yoga Instructor' },
  { value: '4', label: 'Yoga Therapist' },
  { value: '5', label: 'Client (Patient)' },
  { value: '6', label: 'Affiliate Partner' }
]

const optionaUserList = [
  {
    value: 'U001',
    label: 'U001-Rahul Sharma-rahul@gmail.com'
  },
  {
    value: 'U002',
    label: 'U002-Priya Verma-priya@gmail.com'
  },
  {
    value: 'U003',
    label: 'U003-Amit Singh-amit@gmail.com'
  },
  {
    value: 'U004',
    label: 'U004-Neha Gupta-neha@gmail.com'
  },
  {
    value: 'U005',
    label: 'U005-Karan Mehta-karan@gmail.com'
  }
]

const optionsClassList = [
  // { value: '', label: 'Please select one', isDisabled: true},
  { value: 'hatha_yoga', label: 'Hatha Yoga' },
  { value: 'morning_meditation', label: 'Morning Meditation' },
  { value: 'ashtanga_yoga', label: 'Ashtanga Yoga' },
  { value: 'yin_yoga', label: 'Yin Yoga' }
]

const optionsPackageList = [
  { value: "limited", label: "Limited" },
  { value: "unlimited", label: "Unlimited" },
  { value: "multi_class_bundles", label: "Multi-Class Bundles" },
  { value: "trial", label: "Trial" },
  { value: "introductory_packages", label: "Introductory Packages" },
  { value: "drop_in", label: "Drop-in" },
  { value: "online_only", label: "Online-Only" },
  { value: "student", label: "Student" },
  { value: "personal_training", label: "Personal Training" },
  { value: "therapy", label: "Therapy" },
  { value: "workshop", label: "Workshop" },
  { value: "corporate", label: "Corporate" },
  { value: "retreat", label: "Retreat" },
  { value: "seminar", label: "Seminar" },
  { value: "specialized", label: "Specialized" }
]

const AddAccount = () => {
  const [venue, setVenue] = useState('')
  const [feeType, setFeeType] = useState(null)
  const [isEarlyBird, setIsEarlyBird] = useState(false)
  const [offlineEarlyBirdFee, setOfflineEarlyBirdFee] = useState('')
  const [offlineEarlyExpireDays, setOfflineEarlyExpireDays] = useState('')

  const [onlineEarlyBirdFee, setOnlineEarlyBirdFee] = useState('')
  const [onlineEarlyExpireDays, setOnlineEarlyExpireDays] = useState('')
  const [status, setStatus] = useState(true)
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [picker, setPicker] = useState(new Date())
  return (
    <>
      <Card>
        <CardBody>

          <h4 className="fw-bold mb-2">Create Account</h4>

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
                  Studio / Academy Name <span className="text-danger">*</span>
                </Label>
                <Input type="text" placeholder="Enter Studio or Academy Name" required />
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

            <Col md="6">
              <FormGroup>
                <Label>
                  Mobile <span className="text-danger">*</span>
                </Label>
                <Input type="tel" placeholder="Enter Mobile Number" required />
              </FormGroup>
            </Col>

            <Col md="6">
              <FormGroup>
                <Label>
                  Country <span className="text-danger">*</span>
                </Label>
                <Select
                  placeholder="Please Select"
                  className="react-select"
                  classNamePrefix="select"
                  isSearchable={false}
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
                <Button color="primary">Create Account</Button>
              </div>
          </CardFooter>
      </Card>
    </>
  )
}

export default AddAccount
