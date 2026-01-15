import { useState, Fragment } from "react"
import {
  Card,
  CardBody,
  Row,
  Col,
  Label,
  Input,
  Button,
  FormGroup,
  CardFooter, InputGroup, InputGroupText, InputGroupAddon
} from "reactstrap"
import "../styles.css"
import "../../../assets/css.css"

import Select from 'react-select'
import SelectAllMultiSelect from "../../../component/SelectAllMultiSelect/SelectAllMultiSelect.js"

import Flatpickr from 'react-flatpickr'
import 'flatpickr/dist/themes/material_blue.css'
import { Calendar } from 'react-feather'


const discountTypeOptions = [
  { value: '', label: 'Please Select', isDisabled: true },
  { value: 'flat', label: 'Flat' },
  { value: 'percantage', label: 'Percantage' }
]

const optionsProgramLevel = [
  { value: '', label: 'Please select one' },
  { value: 'beginer', label: 'Beginer' },
  { value: 'intermediate', label: ' Intermediate' },
  { value: 'advanced', label: 'Advanced' }
]

const combineClassOptions = [
  { value: '', label: 'Please Select', isDisabled: true },
  { value: 'all_event', label: 'All Event' },
  { value: 'morning_yoga', label: 'Morning Yoga' },
  { value: 'hatha_yoga', label: 'Hatha Yoga for kuldeep' },
  { value: 'meditations', label: 'Meditations' }
]

const CreateGiftCard = () => {
  const [selectedDesign, setSelectedDesign] = useState(1)
  const [uploadedDesign, setUploadedDesign] = useState(null)
  const [giftType, setGiftType] = useState("package")
  const [deliveryType, setDeliveryType] = useState("now")
  const [startDateTime, setStartDateTime] = useState(null)
  const [endDateTime, setEndDateTime] = useState(null)
  const [picker, setPicker] = useState(new Date())
  const [status, setStatus] = useState(true)

  return (
  <Card>
    <CardBody>
      <h4 className="mb-4 text-uppercase">
        Create Promo Code
      </h4>

      <Row className="gy-3">

        {/* PROMO CODE */}
        <Col md="6">
          <FormGroup>
            <Label>
               Enter Promo Code<span className="text-danger">*</span>
            </Label>
            <Input type="text" required placeholder="RY-0203432" />
          </FormGroup>
        </Col>

        {/* NAME */}
        <Col md="6">
          <FormGroup>
            <Label>
              Name<span className="text-danger">*</span>
            </Label>
            <Input type="text" required placeholder="Promo Name" />
          </FormGroup>
        </Col>

        {/* DISCOUNT TYPE */}
        <Col md="6">
          <FormGroup>
            <Label>
              Discount Type<span className="text-danger">*</span>
            </Label>
            <Select
              options={discountTypeOptions}
              placeholder="Please select Discount Type"
              classNamePrefix="select"
              required
            />
          </FormGroup>
        </Col>

        {/* DISCOUNT VALUE */}
        <Col md="6">
          <FormGroup>
            <Label>
              Discount Value<span className="text-danger">*</span>
            </Label>
            <Input type="text" placeholder="Enter discount value" required/>
          </FormGroup>
        </Col>

        {/* START DATE */}
        <Col md="6">
          <FormGroup>
              <Fragment>
              <Label>
                Start Date & Time <span className="text-danger">*</span>
              </Label>
              <InputGroup style={{ cursor: 'pointer' }}>
                <Flatpickr
                  value={startDateTime}
                  onChange={date => setPicker(date)}
                  className="form-control"
                  data-enable-time
                  id='date-time-picker'
                  options={{
                    enableTime: true,
                    dateFormat: 'd-m-Y H:i',
                    allowInput: true
                  }}
                  placeholder="Select start date & time"
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
              <Fragment>
              <Label>
                End Date & Time <span className="text-danger">*</span>
              </Label>
              <InputGroup style={{ cursor: 'pointer' }}>
                <Flatpickr
                  value={endDateTime}
                  onChange={date => setPicker(date)}
                  className="form-control"
                  data-enable-time
                  id='date-time-picker'
                  options={{
                    enableTime: true,
                    dateFormat: 'd-m-Y H:i',
                    allowInput: true
                  }}
                  placeholder="Select End date & time"
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
        <Col md="6"></Col>
        {/* END DATE */}
        <Col md="6" className="d-flex justify-content-start">
          <FormGroup check className="mt-0 mb-2">
            <Input type="checkbox" />
            <Label check>No Expiry</Label>
          </FormGroup>
        </Col>

        {/* ELIGIBLE PACKAGE */}
        <Col md="6">
          <FormGroup>
            <Label>Eligible Package</Label>
            <Select
              options={optionsProgramLevel}
              placeholder="Select Eligible Package"
              className="react-select"
              classNamePrefix="select"
              isSearchable={false}
              required 
            />
          </FormGroup>
        </Col>

        {/* ELIGIBLE CLASS */}
        <Col md="6">
          <FormGroup>
            <Label>Eligible Class</Label>
            <Select
              options={combineClassOptions}
              placeholder="Select Eligible Class"
              className="react-select"
              classNamePrefix="select"
              isSearchable={false}
              required 
            />
          </FormGroup>
        </Col>

        {/* REDEEM LIMIT */}
        <Col md="6">
          <FormGroup>
            <Label>
              Redeem Limit
              <small className="text-muted ms-1">
                (Max times a single user can redeem)
              </small>
            </Label>
            <Input type="number" placeholder="Please Enter Redeem Limit"/>
          </FormGroup>
        </Col>

        {/* PEOPLE LIMIT */}
        <Col md="6">
          <FormGroup>
            <Label>
              Number of People Limit
              <small className="text-muted ms-1">
                (Max users can redeem)
              </small>
            </Label>
            <Input type="number" placeholder="Please Enter Number of People Limit"/>
          </FormGroup>
        </Col>

        {/* MIN PURCHASE */}
        <Col md="6">
          <FormGroup>
            <Label>Minimum Purchase Required Amount</Label>
            <Input type="number" placeholder="Please Enter Minimum Purchase Required Amount"/>
          </FormGroup>
        </Col>

        {/* STATUS */}
        <Col md="12">
          <FormGroup>
            <Label className="d-block mb-1">
              Do you want to activate the promo code immediately?
            </Label>

            <label className="custom-switch">
              <input type="checkbox" />
              <span className="slider"></span>
              <span className="switch-label">Status</span>
            </label>
          </FormGroup>
        </Col>

      </Row>
    </CardBody>

    <CardFooter className="text-end">
      <Button color="primary" className="button-alignment-accouncement">
        Add New Promo Code
      </Button>
    </CardFooter>
  </Card>
  )
}

export default CreateGiftCard
