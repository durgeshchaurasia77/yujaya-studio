// import { useState, useRef } from 'react'
import { useEffect, useRef, useState } from 'react'
import {
  Card,
  CardBody,
  Button,
  Row, Col, FormGroup, Label, Input
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

useEffect(() => {
  if (!isEarlyBird) {
    setOfflineEarlyBirdFee('')
    setOfflineEarlyExpireDays('')
    setOnlineEarlyBirdFee('')
    setOnlineEarlyExpireDays('')
  }
}, [isEarlyBird])

  return (
    <Card>
      <CardBody>
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
              <Label>Program Level</Label>
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
              <Label>Category</Label>
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
              <Label>Sub Category</Label>
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
              <Label>Title</Label>
              <Input placeholder="Please enter title here..." required />
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
              <Label>Description</Label>
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
              <Label>Select Instructor</Label>
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
          <Col md="6">
            <FormGroup>
              <Label>Venue</Label>
              <div>
                <FormGroup check inline>
                  <Input
                    type="radio"
                    name="venue"
                    value="online"
                    onChange={(e) => setVenue(e.target.value)}
                  />{' '}
                  Online
                </FormGroup>

                <FormGroup check inline>
                  <Input
                    type="radio"
                    name="venue"
                    value="offline"
                    onChange={(e) => setVenue(e.target.value)}
                  />{' '}
                  Offline
                </FormGroup>

                <FormGroup check inline>
                  <Input
                    type="radio"
                    name="venue"
                    value="hybrid"
                    onChange={(e) => setVenue(e.target.value)}
                  />{' '}
                  Hybrid
                </FormGroup>
              </div>
            </FormGroup>
          </Col>


          {/* Physical Location */}
          {(venue === 'offline' || venue === 'hybrid') && (
            <Col md="6">
              <FormGroup>
                <Label>Physical Location</Label>
                <Select
                  options={optionsPhysicalLocation}
                  placeholder="Select Location"
                  className="react-select"
                  classNamePrefix="select"
                  isMulti
                  isSearchable
                  closeMenuOnSelect={false}
                  required
                />
              </FormGroup>
            </Col>
          )}


          {/* Room */}
          {(venue === 'offline' || venue === 'hybrid') && (
            <Col md="6">
              <FormGroup>
                <Label>Room</Label>
                <div>
                  <FormGroup check inline>
                    <Input type="radio" name="room" /> Yoga Hall
                  </FormGroup>
                  <FormGroup check inline>
                    <Input type="radio" name="room" /> Therapy Room
                  </FormGroup>
                  <FormGroup check inline>
                    <Input type="radio" name="room" /> Massage Room
                  </FormGroup>
                </div>
              </FormGroup>
            </Col>
          )}


          {/* Online Platform */}
            {(venue === 'online' || venue === 'hybrid') && (
              <Col md="6">
                <FormGroup>
                  <Label>Online Platform</Label>
                  <div>
                    <FormGroup check inline>
                      <Input type="checkbox" /> Zoom
                    </FormGroup>
                    <FormGroup check inline>
                      <Input type="checkbox" /> Google Meet
                    </FormGroup>
                  </div>
                </FormGroup>
              </Col>
            )}

          {/* Fees */}
          <Col md="6">
            <FormGroup>
              <Label>Fees</Label>
              <Select
                options={optionsFees}
                placeholder="Select Fee"
                className="react-select"
                classNamePrefix="select"
                isSearchable={false}
                onChange={(val) => {
                  setFeeType(val?.value)
                  setIsEarlyBird(false)
                }}
                required
              />
            </FormGroup>
          </Col>

          {/* {feeType === 'paid' && ( */}
            <Col md="12" className="d-flex align-items-center">
              <FormGroup check>
                <Input
                  type="checkbox"
                  checked={isEarlyBird}
                  onChange={(e) => setIsEarlyBird(e.target.checked)}
                />{' '}
                <Label check>Is Class Early Bird</Label>
              </FormGroup>
            </Col>
          {/* )} */}

          {/* Offline Fees */}
          {(venue === 'offline' || venue === 'hybrid') && (
            <>
              <Col md="2"><strong>Offline</strong></Col>

              <Col md="3">
                <FormGroup>
                  <Label>Normal</Label>
                  <Input type="number" min="0" disabled={feeType === 'free'} />
                </FormGroup>
              </Col>

              {/* {feeType === 'paid' && isEarlyBird && ( */}
                <>
                  <Col md="3">
                    <FormGroup>
                      <Label>Early Bird</Label>
                      <Input type="number" min="0" 
                      disabled={!isEarlyBird}
                      onChange={(e) => setOfflineEarlyBirdFee(e.target.value)}
                      />
                    </FormGroup>
                  </Col>

                  <Col md="4">
                    <FormGroup>
                      <Label>Early Expire (Days)</Label>
                      <Input
                        type="number"
                        min="1"
                        onChange={(e) => setOfflineEarlyBirdFee(e.target.value)}
                        onKeyDown={(e) => ['e', 'E', '+', '-', '.'].includes(e.key) && e.preventDefault()}
                      />
                    </FormGroup>
                  </Col>
                </>
              {/* )} */}
            </>
          )}

          {/* Online Fees */}
          {(venue === 'online' || venue === 'hybrid') && (
            <>
              <Col md="2"><strong>Online</strong></Col>

              <Col md="3">
                <FormGroup>
                  <Label>Normal</Label>
                  <Input type="number" min="0" disabled={feeType === 'free'} />
                </FormGroup>
              </Col>

              {/* {feeType === 'paid' && isEarlyBird && ( */}
                <>
                  <Col md="3">
                    <FormGroup>
                      <Label>Early Bird</Label>
                      <Input type="number" min="0" 
                      disabled={!isEarlyBird}
                          onChange={(e) => setOnlineEarlyBirdFee(e.target.value)} 
                          />
                    </FormGroup>
                  </Col>

                  <Col md="4">
                    <FormGroup>
                      <Label>Early Expire (Days)</Label>
                      <Input
                        type="number"
                        min="1"
                        onChange={(e) => setOnlineEarlyExpireDays(e.target.value)}
                        onKeyDown={(e) => ['e', 'E', '+', '-', '.'].includes(e.key) && e.preventDefault()}
                      />
                    </FormGroup>
                  </Col>
                </>
              {/* )} */}
            </>
          )}
          <Col md="6">
            <FormGroup>
              <Label>Class Listing Display</Label>

              <FormGroup check>
                <Input
                  type="radio"
                  name="classDisplay"
                  value="instructor"
                />{' '}
                Display Instructor full name (Photo) in class listing
              </FormGroup>

              <FormGroup check>
                <Input
                  type="radio"
                  name="classDisplay"
                  value="classImage"
                  defaultChecked
                />{' '}
                Display Class image in class listing
              </FormGroup>
            </FormGroup>
          </Col>
          <Col md="12"></Col>
          <Col md="6">
            <FormGroup check className="mt-2">
              <Input
                type="checkbox"
              />{' '}
              <Label check>
                Member Allowed (Can add this class in membership package or member can
                attend this class based on defined membership)
              </Label>
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup check className="mt-2">
              <Input
                type="checkbox"
                defaultChecked
              />{' '}
              <Label check>
                Allowed Package (Can add this class while creating package)
              </Label>
            </FormGroup>
          </Col>
        </Row>
          <Row className="gx-2">
              <Col md="6">
                <FormGroup check>
                  <Input type="checkbox" defaultChecked />{' '}
                  <Label check>Allow Bookings</Label>
                </FormGroup>

                <FormGroup check>
                  <Input type="checkbox" defaultChecked />{' '}
                  <Label check>Default Close Bookings Time</Label>
                </FormGroup>

                <FormGroup check>
                  <Input type="checkbox" />{' '}
                  <Label check>Bookings Paid</Label>
                </FormGroup>

                <FormGroup check>
                  <Input type="checkbox" />{' '}
                  <Label check>Display online seats in Calendar</Label>
                </FormGroup>

                <FormGroup check>
                  <Input type="checkbox" />{' '}
                  <Label check>Display Bookings in calendar</Label>
                </FormGroup>

                <FormGroup check>
                  <Input type="checkbox" />{' '}
                  <Label check>Display Fees in calendar</Label>
                </FormGroup>

                <FormGroup check>
                  <Input type="checkbox" />{' '}
                  <Label check>This is Featured Class</Label>
                </FormGroup>
            </Col>
             <Col md="12">
                <FormGroup>
                  <Label>Seat Allocation</Label>
                  <Input type="number" placeholder="Fetch from room selected" />
                </FormGroup>
              </Col>      
              <Col md="12">
                <Row className="border p-2 text-center fw-bold">
                  <Col md="3">For Online Booking*</Col>
                  <Col md="3">Call Booking</Col>
                  <Col md="3">Member Booking</Col>
                  <Col md="3">VIP Booking</Col>
                </Row>

                <Row className="border-start border-end border-bottom p-2">
                  <Col md="3">
                    <Input type="number" defaultValue="50" />
                  </Col>
                  <Col md="3">
                    <Input type="number" defaultValue="0" />
                  </Col>
                  <Col md="3">
                    <Input type="number" defaultValue="0" />
                  </Col>
                  <Col md="3">
                    <Input type="number" defaultValue="0" />
                  </Col>
                </Row>

                <Row className="border p-2 text-center fw-bold mt-2">
                  <Col md="3">Guest Booking</Col>
                  <Col md="3">Staff Booking</Col>
                  <Col md="3">Walk-in Booking</Col>
                  <Col md="3">Waiting list Seats</Col>
                </Row>

                <Row className="border-start border-end border-bottom p-2">
                  <Col md="3">
                    <Input type="number" defaultValue="0" />
                  </Col>
                  <Col md="3">
                    <Input type="number" defaultValue="0" />
                  </Col>
                  <Col md="3">
                    <Input type="number" defaultValue="0" />
                  </Col>
                  <Col md="3">
                    <Input type="number" defaultValue="0" />
                  </Col>
                </Row>
              </Col>
               <Col md="6" className="mt-2">
                  <FormGroup>
                    <Label>More Info Link URL</Label>
                    <Input type="url" placeholder="https://example.com" />
                  </FormGroup>
                </Col>
          </Row>
      </CardBody>

    </Card>
  )
}

export default AddClass
