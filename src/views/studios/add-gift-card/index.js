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

import cloudImg from "../../../assets/images/access-card/cloud.png"
import energyImg from "../../../assets/images/access-card/energy.png"
import greyImg from "../../../assets/images/access-card/grey.png"
import paperImg from "../../../assets/images/access-card/paper.png"
import waterImg from "../../../assets/images/access-card/water.png"
import yogaLogo from "../../../assets/images/access-card/logo.jpg"
import qrImg from "../../../assets/images/access-card/qr-img.png"
import Flatpickr from 'react-flatpickr'
import 'flatpickr/dist/themes/material_blue.css'
import { Calendar } from 'react-feather'

const cardDesigns = [
  { id: 1, img: cloudImg },
  { id: 2, img: energyImg },
  { id: 3, img: greyImg },
  { id: 4, img: paperImg },
  { id: 5, img: waterImg }
]

const textColors = [
  { id: 1, label: "White", value: "#ffffff" },
  { id: 2, label: "Light Yellow", value: "#FFD966" },
  { id: 3, label: "Gold", value: "#F4C430" },
  { id: 4, label: "Light Grey", value: "#E0E0E0" },
  { id: 5, label: "Black", value: "#000000" }
]
const optionsClassLevel = [
  { value: '', label: 'Please select one', isDisabled: true},
  { value: 'beginer', label: 'Beginer' },
  { value: 'intermediate', label: ' Intermediate' },
  { value: 'advanced', label: 'Advanced' }
]

const combinePriceOptions = [
  { value: '', label: 'Please select one', isDisabled: true},
  { value: '50', label: '50' },
  { value: '100', label: '100' },
  { value: '200', label: ' 200' }
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
  const [pickupDateTime, setPickupDateTime] = useState(null)
  const [picker, setPicker] = useState(new Date())
  const [status, setStatus] = useState(true)

  const previewBackground =
    uploadedDesign ||
    cardDesigns.find(d => d.id === selectedDesign)?.img

    const handleUpload = e => {
    const file = e.target.files[0]
    if (file) {
      setUploadedDesign(URL.createObjectURL(file))
    }
  }

  return (
    <Card>
      <CardBody>
        <h4 className="mb-4 text-uppercase">
          Create Gift Card
        </h4>

        {/* CARD DESIGN */}
        <Row className="gy-3">
          <Col md="6">
            <FormGroup>
              <Label>Gift Card Code</Label>
              <Input value="GC-RY-9087" disabled />
            </FormGroup>
          </Col>
          <Col md="6"></Col>
          <Col md="6">
            <FormGroup>
              <Label className="fw-bold">
                Select a Card Design
              </Label>

              <div className="d-flex gap-3 flex-wrap mt-2">
                {cardDesigns.map(item => (
                  <label
                    key={item.id}
                    className={`card-design-box ${
                      selectedDesign === item.id ? "active" : ""
                    }`}
                  >
                    <Input
                      type="radio"
                      className="d-none"
                      checked={selectedDesign === item.id}
                      onChange={() => {
                        setSelectedDesign(item.id)  
                        setUploadedDesign(null) 

                      }}
                    />
                    <img
                      src={item.img}
                      className="card-design-img"
                      alt=""
                    />
                  </label>
                ))}
              </div>
            </FormGroup>
          </Col>
          <Col md="6">
            {/* CARD PREVIEW */}
          <FormGroup>
            <Label className="fw-bold">Card Preview</Label>
            <p className="text-muted mb-2">
              Here is a gift for you. Hope you love it!
            </p>

            <div className="preview-wrapper1">
              <div
                className="gift-card-preview"
                style={{
                  backgroundImage: `url(${previewBackground})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat"
                }}
              />
            </div>
          </FormGroup>
          </Col>
        </Row>

        <hr />

        {/* GIFT TYPE */}
        <Row className="gy-3">
          <Col md="12">
            <Label className="fw-bold">
              Select Gift Type
            </Label>
          </Col>

          <Col md="4">
            <FormGroup check>
              <Input
                type="radio"
                checked={giftType === "package"}
                onChange={() => setGiftType("package")}
              />
              <Label check>Select Package</Label>
            </FormGroup>
              <Select
                  options={optionsClassLevel}
                  placeholder="Select Package"
                  className="react-select mt-1"
                  classNamePrefix="select"
                  isSearchable={false}
                  required 
              />
          </Col>

          <Col md="4">
            <FormGroup check>
              <Input
                type="radio"
                checked={giftType === "class"}
                onChange={() => setGiftType("class")}
              />
              <Label check>Select Class</Label>
            </FormGroup>
              <Select
                    options={combineClassOptions}
                    placeholder="Select Class"
                    className="react-select mt-1"
                    classNamePrefix="select"
                    isSearchable={false}
                    required 
                />
          </Col>

          <Col md="4">
            <FormGroup check>
              <Input
                type="radio"
                checked={giftType === "amount"}
                onChange={() => setGiftType("amount")}
              />
              <Label check>Select Amount</Label>
            </FormGroup>
              <Select
                  options={combinePriceOptions}
                  placeholder="Select Price"
                  className="react-select mt-1"
                  classNamePrefix="select"
                  isSearchable={false}
                  required 
              />
          </Col>
        </Row>

        <hr />

        {/* DELIVERY DETAILS */}
        <Row className="gy-3">
          <Col md="12">
            <Label className="fw-bold">
              Delivery Details
            </Label>
          </Col>

          <Col md="6">
            <FormGroup>
              <Label>To (Name)</Label>
              <Input type="text" placeholder="Please Enter Name(To)" required/>
            </FormGroup>
          </Col>

          <Col md="6">
            <FormGroup>
              <Label>From (Name)</Label>
              <Input type="text" placeholder="Please Enter Name(From)" required />
            </FormGroup>
          </Col>

          <Col md="6">
            <FormGroup>
              <Label>Recipient's Email Address</Label>
              <Input type="email" placeholder="Please Enter Email" required />
            </FormGroup>
          </Col>

          <Col md="6">
            <FormGroup>
              <Label>Personalize Your Gift Email Message</Label>
              <Input  type="text" placeholder="Please Gift Email Message" required/>
            </FormGroup>
          </Col>
        </Row>

        <hr />

        {/* DELIVERY SCHEDULE */}
        <Row className="gy-3">
          <Col md="12">
            <Label className="fw-bold">
              Gift Card Delivery
            </Label>
          </Col>

          <Col md="6">
            <FormGroup check>
              <Input
                type="radio"
                checked={deliveryType === "schedule"}
                onChange={() => setDeliveryType("schedule")}
              />
              <Label check>Schedule Gift Card Delivery</Label>
            </FormGroup>
          </Col>

          <Col md="6">
            <FormGroup check>
              <Input
                type="radio"
                checked={deliveryType === "now"}
                onChange={() => setDeliveryType("now")}
              />
              <Label check>Send Gift Card Now</Label>
            </FormGroup>
          </Col>

          {deliveryType === "schedule" && (
            <Col md="6">
              <FormGroup>
                <Fragment>
                <Label>
                  Start Date & Time <span className="text-danger">*</span>
                </Label>
      
                <InputGroup style={{ cursor: 'pointer' }}>
                  <Flatpickr
                    value={pickupDateTime}
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
          )}
        </Row>

        <hr />

        {/* CARD PREVIEW */}
        {/* <FormGroup>
          <Label className="fw-bold">Card Preview</Label>
          <p className="text-muted mb-2">
            Here is a gift for you. Hope you love it!
          </p>

          <div className="preview-wrapper1">
            <div
              className="gift-card-preview"
              style={{
                backgroundImage: `url(${previewBackground})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
              }}
            />
          </div>
        </FormGroup> */}
        <hr />
        {/* PLEASE NOTE */}
        {/* <div className="gift-note-box mt-4">
          <strong>Please Note:</strong>
          <ol className="mt-2 mb-0">
            <li>
              Once you have completed the form, click
              <strong> “Purchase Your Gift Card”</strong> to finish the purchase.
            </li>
            <li>
              The class, package or amount will be deposited into the recipient
              account based on the email address used for
              <strong> “Recipient's Email Address”.</strong>
            </li>
            <li>
              Gift card purchases are <strong>NOT refundable</strong>. Since the
              deposited cash points will not expire, recipients can use the
              points at any time on any offering.
            </li>
          </ol>
        </div> */}
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
      </CardBody>

      <CardFooter className="text-end">
        <Button color="primary" className="button-alignment-accouncement">
          CREATE GIFT CARD
        </Button>
      </CardFooter>
    </Card>
  )
}

export default CreateGiftCard
