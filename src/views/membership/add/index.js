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
import CommonEditor from '../../../component/common/CommonEditor'
import Flatpickr from 'react-flatpickr'
import 'flatpickr/dist/themes/material_blue.css'
import { Calendar } from 'react-feather'
import SelectAllMultiSelect from "../../../component/SelectAllMultiSelect/SelectAllMultiSelect.js"

const optionsMembershipTypeList = [
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

const includeClassesOptions = [
  { value: 'hatha_yoga', label: 'Hatha Yoga' },
  { value: 'morning_meditation', label: 'Morning Meditation' },
  { value: 'ashatanga_yoga', label: 'Ashtanga Yoga' },
  { value: 'yin_yoga', label: 'Yin Yoga' }
]

const includePackagesOptions = [
  { value: 'beginer', label: 'Beginer' },
  { value: 'intermediate', label: 'Intermediate' },
  { value: 'advance', label: 'Advance' }
]
const durationTypeOptions = [
  { value: 'day', label: 'Day' },
  { value: 'week', label: 'Week' },
  { value: 'month', label: 'Month' },
  { value: 'year', label: 'Year' }
]

const AddAnnoucement = () => {
  const [venue, setVenue] = useState('')
  const [feeType, setFeeType] = useState(null)
  const [isEarlyBird, setIsEarlyBird] = useState(false)
  const [offlineEarlyBirdFee, setOfflineEarlyBirdFee] = useState('')
  const [offlineEarlyExpireDays, setOfflineEarlyExpireDays] = useState('')

  const [onlineEarlyBirdFee, setOnlineEarlyBirdFee] = useState('')
  const [onlineEarlyExpireDays, setOnlineEarlyExpireDays] = useState('')
  const [recurringStatus, setRecurringStatus] = useState(true)
  const [dateTimeStatus, setDateTimeStatus] = useState(true)
  const [bookLimit, setBookLimit] = useState(true)
  const [status, setStatus] = useState(true)
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [picker, setPicker] = useState(new Date())
  const [isCustomDate, setIsCustomDate] = useState(false)
  const [validityStart, setValidityStart] = useState("purchase")
  return (
  <>
    <Card>
      <CardBody>
        <h4 className="mb-4 fw-bold">Create Membership</h4>

        <Row className="gy-3">
    
          {/* Package Type */}
          <Col md="3">
            <FormGroup>
              <Label>
                Membership Type <span className="text-danger">*</span>
              </Label>
              <Select
                options={optionsMembershipTypeList}
                placeholder="Please Select"
                classNamePrefix="select"
                isSearchable={false}
              />
            </FormGroup>
          </Col>
          <Col md="3">
            <FormGroup>
              <Label>
                Membership Plan <span className="text-danger">*</span>
              </Label>
              <Input type="number" defaultValue={60} />
            </FormGroup>
          </Col>

          {/* Duration Type */}
          <Col md="3">
            <FormGroup>
              <Label>Duration Type</Label>
              <Select
                options={durationTypeOptions}
                placeholder="Please Duration Type"
                classNamePrefix="select"
                isSearchable={false}
              />
            </FormGroup>
          </Col>
          {/* Package Name */}
          <Col md="3">
            <FormGroup>
              <Label>
                Membership Tier Name <span className="text-danger">*</span>
              </Label>
              <Input type="text" placeholder="Please Enter Membership Tier Name"/>
            </FormGroup>
          </Col>
          <Col md="12">
            <FormGroup>
              <div className="d-flex gap-5 flex-wrap">
                <FormGroup check>
                  <Input type="checkbox" className="custom-checkbox"  id="loc1" defaultChecked />
                  <Label for="loc1" check className="mr-2 custom-lebal-style">In-Studio</Label>
                </FormGroup>

                <FormGroup check>
                  <Input type="checkbox" className="custom-checkbox"  id="loc2" />
                  <Label for="loc2" check className="mr-2 custom-lebal-style">Virtual</Label>
                </FormGroup>

                <FormGroup check>
                  <Input type="checkbox" className="custom-checkbox"  id="loc3" />
                  <Label for="loc3" check className="mr-2 custom-lebal-style">Hybrid</Label>
                </FormGroup>
              </div>
            </FormGroup>
          </Col>
        
          {/* Description */}
          <Col md="12">
            <FormGroup>
              <Label>
                Description <span className="text-danger">*</span>
              </Label>
              <CommonEditor
                editorState={editorState}
                onChange={setEditorState}
                height={90}
                placeholder="Please Enter Description"
              />
            </FormGroup>
          </Col>

          {/* Package Price */}
          <Col md="6">
            <FormGroup>
              <Label>
                Total Eligible Maximum Classes<span className="text-danger">*</span>
              </Label>
              <div className="d-flex align-items-center gap-2">
                <Input type="number" placeholder="Please Enter Total Eligible Maximum Classes"/>
              
              </div>
            </FormGroup>
          </Col>
            <Col md="6">
            <FormGroup>
              <Label>
                Include Class
                <span className="text-danger">*</span>
              </Label>
              <SelectAllMultiSelect
                  options={includeClassesOptions}
                  placeholderText="Select Include Class"
                  classNamePrefix="select"
                  required
                />
            </FormGroup>
          </Col>
          {/* Membership Checkbox */}
          <Col md="12" className="d-flex align-items-end">
            <FormGroup check className="mb-2">
              <Input type="checkbox" className="custom-checkbox" id="isMembership" />
              <Label for="isMembership" check className="fw-semibold custom-lebal-style">
                For Unlimited
              </Label>
            </FormGroup>
          </Col>
          
          <Col md="6">
            <FormGroup>
              <Label>
                Include Packages
                <span className="text-danger">*</span>
              </Label>
              <SelectAllMultiSelect
                  options={includePackagesOptions}
                  placeholderText="Select Include Packages"
                  classNamePrefix="select"
                  required
                />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label className="fw-semibold">Membership Badge</Label>
              <Input type="file" />
            </FormGroup>
          </Col>
          {/* Status */}
          <Col md="12">
            <label className="custom-switch mt-2">
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
            <Button color="primary">Submit</Button>
          </div>
        </CardFooter>
    </Card>
  </>
  )
}

export default AddAnnoucement
