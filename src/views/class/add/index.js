// import { useState, useRef } from 'react'
import { useEffect, useRef, useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Card,
  CardBody,
  Button,
  Row, Col, FormGroup, Label, Input, CardFooter
} from 'reactstrap'
import Stepper from 'bs-stepper'
import 'bs-stepper/dist/css/bs-stepper.min.css'
import Select from 'react-select'
import '../../../assets/css.css'
const optionsCountry = [
  { value: '', label: 'Please select one' },
  { value: 'india', label: 'India' },
  { value: 'usa', label: 'USA' },
  { value: 'china', label: 'China' }
]
const optionsProgramLevel = [
  { value: '', label: 'Please select one' },
  { value: 'beginer', label: 'Beginer' },
  { value: 'intermediate', label: ' Intermediate' },
  { value: 'advanced', label: 'Advanced' }
]
const optionsCategory = [
  { value: 'yoga', label: 'Yoga' },
  { value: 'yoga_therapy', label: 'Yoga Therapy' },
  { value: 'ayurveda', label: 'Ayurveda' },
  { value: 'healing', label: 'Healing' },
  { value: 'retreat', label: 'Retreat' },
  { value: 'meditation', label: 'Meditation' },
  { value: 'wisdom', label: 'Wisdom' },
  { value: 'spirituality', label: 'Spirituality' }
]

const optionsSubCategory = [
  { value: 'class', label: 'Class' },
  { value: 'course', label: 'Course' },
  { value: 'workshop', label: 'Workshop' },
  { value: 'personal_training', label: 'Personal Training' },
  { value: 'private_therapy', label: 'Private Therapy' },
  { value: 'home_training', label: 'Home Training' },
  { value: 'trial', label: 'Trial' },
  { value: 'student', label: 'Student' },
  { value: 'counseling', label: 'Counseling' },
  { value: 'seminar', label: 'Seminar' },
  { value: 'talk', label: 'Talk' }
]


const optionsInstructor = [
  { value: '', label: 'Please select one' },
  { value: 'aron', label: 'Aron' },
  { value: 'kuldeep', label: 'Kuldeep' },
  { value: 'manoj', label: 'Manoj' }
]
const optionsPhysicalLocation = [
  { value: '', label: 'Please select one' },
  { value: 'vyasa_yoga', label: 'Vyasa Yoga' },
  { value: 'ashram', label: 'Ashram' },
  { value: 'online', label: 'Online' }
]
const optionsFees = [
  { value: '', label: 'Please select one' },
  { value: 'free', label: 'Free' },
  { value: 'paid', label: 'Paid' }
]
const AddClass = () => {
  const [venue, setVenue] = useState('')
  const [feeType, setFeeType] = useState(null)
  const [isEarlyBird, setIsEarlyBird] = useState(false)
  const [offlineEarlyBirdFee, setOfflineEarlyBirdFee] = useState('')
  const [offlineEarlyExpireDays, setOfflineEarlyExpireDays] = useState('')

  const [onlineEarlyBirdFee, setOnlineEarlyBirdFee] = useState('')
  const [onlineEarlyExpireDays, setOnlineEarlyExpireDays] = useState('')
  const [status, setStatus] = useState(true)

useEffect(() => {
  if (!isEarlyBird) {
    setOfflineEarlyBirdFee('')
    setOfflineEarlyExpireDays('')
    setOnlineEarlyBirdFee('')
    setOnlineEarlyExpireDays('')
  }
}, [isEarlyBird])

  return (
  <>
    <Card>
      <CardBody>
        <h4 className="mb-2">Add Class Type</h4>
        <Row className="gx-2">
          {/* Language */}
          <Col md="4">
            <FormGroup>
              <Label>Language</Label>
              <Select
                options={optionsCountry}
                placeholder="Select country"
                className="react-select"
                classNamePrefix="select"
                isSearchable={false}
                required 
              />
            </FormGroup>
          </Col>

          {/* Program Level */}
          <Col md="4">
            <FormGroup>
              <Label>Program Level <span className="text-danger">*</span></Label>
              <Select
                options={optionsProgramLevel}
                placeholder="Select Program Level"
                className="react-select"
                classNamePrefix="select"
                isSearchable={false}
                required 
              />
            </FormGroup>
          </Col>

          {/* Category */}
          <Col md="4">
            <FormGroup>
              <Label>Class Category</Label>
              <Select
                options={optionsCategory}
                placeholder="Select Category"
                className="react-select"
                classNamePrefix="select"
                isMulti
                isSearchable
                closeMenuOnSelect={false}
                required
              />
            </FormGroup>
          </Col>


          {/* Sub Category */}
          <Col md="4">
            <FormGroup>
              <Label>Class Sub Category</Label>
              <Select
                options={optionsSubCategory}
                placeholder="Select Sub Category"
                className="react-select"
                classNamePrefix="select"
                isMulti
                isSearchable
                isClearable
                closeMenuOnSelect={false}
                required
              />
            </FormGroup>
          </Col>


          {/* Hours */}
          <Col md="4">
            <FormGroup>
              <Label>Theory Hours</Label>
              <Input type="number" placeholder="Please enter hours here..." required/>
            </FormGroup>
          </Col>

          <Col md="4">
            <FormGroup>
              <Label>Practical Hours</Label>
              <Input type="number" placeholder="Please enter hours here..." required/>
            </FormGroup>
          </Col>

          {/* Title */}
          <Col md="6">
            <FormGroup>
              <Label>Class Name <span className="text-danger">*</span></Label>
              <Input placeholder="Please enter calss name here..." required />
            </FormGroup>
          </Col>

          {/* Class Code */}
          <Col md="6">
            <FormGroup>
              <Label>Class Code</Label>
              <Input placeholder="Please enter code here..." />
            </FormGroup>
          </Col>

          {/* Description */}
          <Col md="6">
            <FormGroup>
              <Label>Description <span className="text-danger">*</span></Label>
              <Input
                type="textarea"
                rows="3"
                placeholder="Special notes for guests (reservation deadline, etc.)"
                required
              />
            </FormGroup>
          </Col>

          {/* Instructor */}
          <Col md="6">
            <FormGroup>
              <Label>Select Instructor <span className="text-danger">*</span></Label>
              <Select
                options={optionsInstructor}
                placeholder="Select Category"
                className="react-select"
                classNamePrefix="select"
                isMulti
                isSearchable
                closeMenuOnSelect={false}
                required
              />
            </FormGroup>
          </Col>

          {/* Venue */}
          
        </Row>
      </CardBody>

    </Card>
    <Card className="mb-3">
      <CardBody>
        <h5 className="mb-3">Venue & Fees </h5>

        <Row className="gx-3">
          {/* Venue */}
          <Col md="6">
            <FormGroup>
              <Label>Venue<span className="text-danger">*</span></Label>

              <div className="option-group">
                <label className="radio-option">
                  <input
                    type="radio"
                    name="venue"
                    value="online"
                    required
                    onChange={(e) => setVenue(e.target.value)}
                  />
                  <span>Online</span>
                </label>

                <label className="radio-option">
                  <input
                    type="radio"
                    name="venue"
                    value="offline"
                    required
                    onChange={(e) => setVenue(e.target.value)}
                  />
                  <span>Offline</span>
                </label>

                <label className="radio-option">
                  <input
                    type="radio"
                    name="venue"
                    value="hybrid"
                    required
                    onChange={(e) => setVenue(e.target.value)}
                  />
                  <span>Hybrid</span>
                </label>
              </div>
            </FormGroup>
          </Col>

          {/* Fees */}
          <Col md="6">
            <FormGroup>
              <Label>Fees <span className="text-danger">*</span></Label>
              <Select
                options={optionsFees}
                placeholder="Select Fee"
                className="react-select"
                classNamePrefix="select"
                isSearchable={false}
                required
                onChange={(val) => {
                  setFeeType(val?.value)
                  setIsEarlyBird(false)
                }}
              />
            </FormGroup>
          </Col>
        </Row>

        {/* Early Bird */}
        <Row className="mt-1">
          <Col md="6">
          <div className='option-group'>

            <FormGroup check className="option-item">
              <Input
                type="checkbox"
                // disabled={feeType !== 'paid'}
                checked={isEarlyBird}
                onChange={(e) => setIsEarlyBird(e.target.checked)}
              />{' '}
              <Label check className="ms-2">Is Class Early Bird</Label>
            </FormGroup>
          </div>
          </Col>
        </Row>

        <h5 className="mb-3 mt-1">Location / Platform</h5>

        <Row className="gx-3">
          {(venue === 'offline' || venue === 'hybrid') && (
            <>
              <Col md="6">
                <Label>Physical Location</Label>
                <Select
                  options={optionsPhysicalLocation}
                  className="react-select"
                  classNamePrefix="select"
                  isMulti
                />
              </Col>

              <Col md="6">
                <Label>Room</Label>
                <div className="d-flex gap-3 mt-1 option-group">
                  <FormGroup check className="option-item"><Input type="radio" /> Yoga Hall</FormGroup>
                  <FormGroup check className="option-item"><Input type="radio" /> Therapy Room</FormGroup>
                  <FormGroup check className="option-item"><Input type="radio" /> Massage Room</FormGroup>
                </div>
              </Col>
            </>
          )}

          {(venue === 'online' || venue === 'hybrid') && (
            <Col md="6">
              <Label>Online Platform</Label>
              <div className="d-flex gap-3 mt-1 option-group">
                <FormGroup check className="option-item"><Input type="checkbox" /> Zoom</FormGroup>
                <FormGroup check className="option-item"><Input type="checkbox" /> Google Meet</FormGroup>
              </div>
            </Col>
          )}
        </Row>
      </CardBody>
    </Card>
    {/* <Card className="mb-3">
      <CardBody>
        
      </CardBody>
    </Card> */}
    <Card className="mb-3">
      <CardBody>
        <h5 className="mb-3">Fee Structure</h5>

        {/* Header */}
        <Row className="fw-bold text-center border-bottom pb-2">
          <Col md="2"></Col>
          <Col md="3">Normal</Col>
          <Col md="3">Early Bird</Col>
          <Col md="4">Early Expire (Days)</Col>
        </Row>

        {/* Offline */}
        {(venue === 'offline' || venue === 'hybrid') && (
          <Row className="align-items-center mt-2">
            <Col md="2"><strong>Offline</strong></Col>
            <Col md="3"><Input type="number"/></Col>
            <Col md="3"><Input type="number" disabled={!isEarlyBird} /></Col>
            <Col md="4"><Input type="number"/></Col>
          </Row>
        )}

        {/* Online */}
        {(venue === 'online' || venue === 'hybrid') && (
          <Row className="align-items-center mt-2">
            <Col md="2"><strong>Online</strong></Col>
            <Col md="3"><Input type="number"/></Col>
            <Col md="3"><Input type="number" disabled={!isEarlyBird} /></Col>
            <Col md="4"><Input type="number"/></Col>
          </Row>
        )}
      </CardBody>
    </Card>
    <Card className="mb-3">
      <CardBody>
        <h5 className="mb-3">Visibility & Booking Settings</h5>
        <Row className="gx-3 ">
          <Col md="6">
          <div className='option-group1'>
              <Label>Class Listing Display</Label>
              <FormGroup check className="option-item">
                <Input type="radio" name="display" /> Display Instructor full name (Photo)
              </FormGroup>
              <FormGroup check className="option-item">
                <Input type="radio" name="display" defaultChecked /> Display Class image
              </FormGroup>
          </div>
          </Col>

          <Col md="6">
          <div className='option-group1'>
            <FormGroup check className="option-item"><Input type="checkbox" /> Member Allowed</FormGroup>
            <FormGroup check className="option-item"><Input type="checkbox" defaultChecked /> Allowed Package</FormGroup>
          </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
    <Card className="mb-3">
      <CardBody>
        <h5 className="mb-3">Bookings & Seat Allocation <span className="text-danger">*</span></h5>

        <Row className="gx-3">
          <Col md="6">
            <div className="booking-options option-group1">
              <FormGroup check className="option-item">
                <Input type="checkbox" defaultChecked />
                <Label check className="ms-2"> Allow Bookings</Label>
              </FormGroup>

              <FormGroup check className="option-item1">
                <Input type="checkbox" defaultChecked />
                <Label check className="ms-2"> Default Close Booking Time</Label>
              </FormGroup>

              <FormGroup check className="option-item1">
                <Input type="checkbox" />
                <Label check className="ms-2"> Bookings Paid</Label>
              </FormGroup>

              <FormGroup check className="option-item1">
                <Input type="checkbox" />
                <Label check className="ms-2"> Display online seats in calendar</Label>
              </FormGroup>

              <FormGroup check className="option-item1">
                <Input type="checkbox" />
                <Label check className="ms-2">Display bookings in calendar</Label>
              </FormGroup>

              <FormGroup check className="option-item1">
                <Input type="checkbox" />
                <Label check className="ms-2">Display fees in calendar</Label>
              </FormGroup>

              <FormGroup check className="option-item1">
                <Input type="checkbox" />
                <Label check className="ms-2">Featured Class</Label>
              </FormGroup>
            </div>
          </Col>

          <Col md="6">
            <FormGroup>
              <Label>
                Seat Allocation <span className="text-danger">*</span> <small className="text-muted">(Total seats)</small>
              </Label>
              <Input
                type="number"
                placeholder="e.g. 50"
                required
              />
              <small className="text-muted">
                Seats will be distributed below
              </small>
            </FormGroup>
          </Col>

          <Col md="12">
            <div className="seat-grid">

              <Row className="seat-header">
                <Col md="3">Online</Col>
                <Col md="3">Call</Col>
                <Col md="3">Member</Col>
                <Col md="3">VIP</Col>
              </Row>

              <Row className="seat-inputs">
                <Col md="3"><Input type="number" /></Col>
                <Col md="3"><Input type="number" /></Col>
                <Col md="3"><Input type="number" /></Col>
                <Col md="3"><Input type="number" /></Col>
              </Row>

              <Row className="seat-header mt-3">
                <Col md="3">Guest</Col>
                <Col md="3">Staff</Col>
                <Col md="3">Walk-in</Col>
                <Col md="3">Waiting</Col>
              </Row>

              <Row className="seat-inputs">
                <Col md="3"><Input type="number" /></Col>
                <Col md="3"><Input type="number" /></Col>
                <Col md="3"><Input type="number" /></Col>
                <Col md="3"><Input type="number" /></Col>
              </Row>

            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
    <Card className="mb-3">
      <CardBody>
        <h5 className="mb-3">Additional Information</h5>

        <Row className="gx-3">

          {/* More Info URL */}
          <Col md="6">
            <FormGroup>
              <Label>More Info Link URL</Label>
              <Input
                type="url"
                placeholder="https://example.com"
              />
            </FormGroup>
          </Col>

          {/* Video URL */}
          <Col md="6">
            <FormGroup>
              <Label>Video URL</Label>
              <Input
                type="url"
                placeholder="https://youtube.com/..."
              />
            </FormGroup>
          </Col>

          {/* Attachment */}
          <Col md="6">
            <FormGroup>
              <Label>Attach File</Label>
              <Input
                type="file"
                accept=".pdf,.ppt,.pptx,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png"
              />
              <small className="text-muted">
                Allowed: PDF, PPT, DOC, XLS, JPG
              </small>
            </FormGroup>
          </Col>

          {/* Special Instructions */}
          <Col md="6">
            <FormGroup>
              <Label>Special Instructions</Label>
              <Input
                type="textarea"
                rows="4"
                placeholder="This message will be delivered to your guests in confirmation email(s). If you have special instructions (what clothing to wear, etc.), remind them here."
              />
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
          {/* Submit Button */}
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

export default AddClass
