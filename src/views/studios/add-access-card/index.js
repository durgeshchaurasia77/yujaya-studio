import { useState } from "react"
import {
  Card,
  CardBody,
  Row,
  Col,
  Label,
  Input,
  Button,
  FormGroup,
  CardFooter
} from "reactstrap"
import "../styles.css"
import "../../../assets/css.css"

import cloudImg from "../../../assets/images/access-card/cloud.png"
import energyImg from "../../../assets/images/access-card/energy.png"
import greyImg from "../../../assets/images/access-card/grey.png"
import paperImg from "../../../assets/images/access-card/paper.png"
import waterImg from "../../../assets/images/access-card/water.png"
import yogaLogo from "../../../assets/images/access-card/logo.jpg"
import qrImg from "../../../assets/images/access-card/qr-img.png"

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
const AddAccessCard = () => {
  const [selectedDesign, setSelectedDesign] = useState(1)
  const [uploadedDesign, setUploadedDesign] = useState(null)
  const [cardTitle, setCardTitle] = useState("")
  const [showTitle, setShowTitle] = useState(false)
  const [terms, setTerms] = useState("")
  const [textColor, setTextColor] = useState("#ffffff")

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
        <h4 className="mb-3 text-uppercase">
          Design Access Card | Generate Access Card
        </h4>

        {/* CARD TITLE */}
        <Row className="mb-3">
          <Col md="6">
            <FormGroup>
              <Label>Card Title</Label>
              <Input
                value={cardTitle}
                onChange={e => setCardTitle(e.target.value)}
                type="text"
                placeholder="Please Enter Card Title"
              />
            </FormGroup>
          </Col>

          <Col md="6" className="d-flex align-items-center mt-4">
            <FormGroup check>
              <Input
                type="checkbox"
                className="custom-checkbox"
                checked={showTitle}
                onChange={e => setShowTitle(e.target.checked)}
              />
              <Label check className='custom-lebal-style'>Show Title on access card</Label>
            </FormGroup>
          </Col>
        </Row>

        <Row className="gy-4">
          {/* TERMS */}
          <Col md="6">
            <FormGroup>
              <Label>
                <span className="text-danger">*</span> Add Terms &
                Instructions
              </Label>
              <Input
                type="textarea"
                rows="4"
                maxLength={60}
                value={terms}
                onChange={e => setTerms(e.target.value)}
              />
              <small className="text-muted">
                Maximum 60 Characters
              </small>
            </FormGroup>
          </Col>

          {/* TEXT COLOR */}
          <Col md="6">
            <FormGroup>
              <Label className="fw-bold">Text Color</Label>
              <div className="d-flex gap-2 flex-wrap mt-1">
                {textColors.map(color => (
                  <div
                    key={color.id}
                    className={`color-swatch ${
                      textColor === color.value ? "active" : ""
                    }`}
                    style={{ backgroundColor: color.value }}
                    onClick={() => setTextColor(color.value)}
                    title={color.label}
                  />
                ))}
              </div>
            </FormGroup>
          </Col>

          {/* DESIGN SELECT */}
          <Col md="6">
            <FormGroup>
              <Label className="fw-bold">Select Card Design</Label>
              <div className="d-flex gap-3 flex-wrap mt-1">
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

          {/* UPLOAD */}
          <Col md="6">
            <FormGroup>
              <Label>Upload Own Card Design</Label>
              <Input
                type="file"
                accept="image/*"
                onChange={handleUpload}
              />
              <small className="text-muted d-block mt-1">
                1011 × 638 px | JPG / PNG
              </small>
            </FormGroup>
          </Col>
        </Row>
        {/* PREVIEW */}
        <FormGroup className="mt-4">
          <Label className="fw-bold">Preview Access Card</Label>

          <div className="preview-wrapper mt-2">
            <div
              className="access-card-preview structured"
              style={{
                backgroundImage: `url(${previewBackground})`,
                color: textColor
              }}
            >
              {/* LEFT SIDE */}
              <div className="card-left">
                <img src={yogaLogo} className="logo" alt="Logo" />

                {/* <h5 className="member-name">Andrew Lim</h5> */}
                {showTitle && (
                  <div className="member-name">{cardTitle}</div>
                )}

                <div className="member-details">
                  <p>GOLD Member</p>
                  <p>RY-23423456</p>
                  <p>Validity: 12-11-2025 to 12-12-2027</p>
                  <p>Prepaid 24 months Package</p>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="card-right">
                <img src={qrImg} className="qr-img" alt="QR Code" />

                <div className="right-details mt-2">
                  <p>92234 23456 / 98123 22334</p>
                  <p>www.realyoga.com.sg</p>
                  <p>
                    9 Tampines Grande Level 1, #01-14/15,
                    Singapore
                  </p>
                </div>
              </div>

              {/* BOTTOM CENTER */}
              <div className="card-terms">
                {terms ||
                  "This card is the property of Real Yoga. It must be returned upon request. Use of this card is subject to the terms and conditions."}
              </div>
            </div>
          </div>
        </FormGroup>

      </CardBody>

      <CardFooter className="text-end">
        <Button color="primary" className="button-alignment-accouncement">UPDATE CARD</Button>
      </CardFooter>
    </Card>
  )
}

export default AddAccessCard
