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
import '../../../../assets/css.css'
import { Editor } from 'react-draft-wysiwyg'
import { EditorState } from 'draft-js'
import CommonEditor from '../../../../component/common/CommonEditor'
import Flatpickr from 'react-flatpickr'
import 'flatpickr/dist/themes/material_blue.css'
import { Calendar } from 'react-feather'
import SelectAllMultiSelect from "../../../../component/SelectAllMultiSelect/SelectAllMultiSelect.js"

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
  const [editorTaC, setEditorTaC] = useState(EditorState.createEmpty())
  const [editorReturnRefund, setEditorReturnRefund] = useState(EditorState.createEmpty())
  const [editorMembership, setEditorMembership] = useState(EditorState.createEmpty())
  const [editorTransfers, setEditorTransfers] = useState(EditorState.createEmpty())
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [picker, setPicker] = useState(new Date())
  const [isCustomDate, setIsCustomDate] = useState(false)
  const [validityStart, setValidityStart] = useState("purchase")
  return (
  <>
    <Card>
      <CardBody>
        <h4 className="mb-2 fw-bold">Create Membership Policy</h4>
        <Row className="gy-3">
          {/* Description */}
          <Col md="12">
            <FormGroup>
              <Label>
                RETURN & REFUND <span className="text-danger">*</span>
              </Label>
              <CommonEditor
                editorState={editorReturnRefund}
                onChange={setEditorReturnRefund}
                height={200}
                placeholder="Please Enter RETURN & REFUND"
              />
            </FormGroup>
          </Col>
          <Col md="12">
            <FormGroup>
              <Label>
                MEMBERSHIPS <span className="text-danger">*</span>
              </Label>
              <CommonEditor
                editorState={editorMembership}
                onChange={setEditorMembership}
                height={200}
                placeholder="Please Enter MEMBERSHIPS"
              />
            </FormGroup>
          </Col>
          <Col md="12">
            <FormGroup>
              <Label>
                TRANSFERS <span className="text-danger">*</span>
              </Label>
              <CommonEditor
                editorState={editorTransfers}
                onChange={setEditorTransfers}
                height={200}
                placeholder="Please Enter TRANSFERS"
              />
            </FormGroup>
          </Col>
          
          <Col md="12">
            <FormGroup>
              <Label>
                TERMS AND CONDITIONS OF MEMBERSHIP AGREEMENT<span className="text-danger">*</span>
              </Label>
              <CommonEditor
                editorState={editorTaC}
                onChange={setEditorTaC}
                height={200}
                placeholder="Please Enter TERMS AND CONDITIONS OF MEMBERSHIP AGREEMENT"
              />
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

export default AddAnnoucement
