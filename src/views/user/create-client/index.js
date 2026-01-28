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
const AddClient = () => {
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
  const [country, setCountry] = useState(null)
  const [nationalIdType, setNationalIdType] = useState(null)

  return (
    <>
      <Card>
        <CardBody>
          <h4 className="fw-bold mb-2">Add Client (Patient)</h4>
          {/* Personal Details */}

          <h5 className="fw-bold mb-3">Astro / Vedic Therapy Info</h5>
            <Row className="gy-3">
              <Col md="6">
                <FormGroup>
                  <Label>
                    Time of Birth <span className="text-danger">*</span>
                  </Label>
                  <Flatpickr
                    className="form-control"
                    placeholder="Select Time of Birth"
                    options={{
                      enableTime: true,
                      allowInput: true,
                      noCalendar: true,
                      dateFormat: "h:i K"
                    }}
                  />
                </FormGroup>
              </Col>

              <Col md="6">
                <FormGroup>
                  <Label>
                    Place of Birth <span className="text-danger">*</span>
                  </Label>
                  <Input type="text" placeholder="Enter place of birth" />
                </FormGroup>
              </Col>
            </Row>

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
                  <Input type="text" placeholder="Enter zip code" />
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
                <Input type="text" placeholder="Enter Education Qualification"  required/>
              </FormGroup>
            </Col>
            </Row>
        </CardBody>
      </Card>
      <Row className="alignment-row">
        <Col md="6" >
          <Card className="mt-0 h-100" >
            <CardBody>

              {/* Health Issues */}
              <h5 className="fw-bold mb-2">Health Issues</h5>

              <Row className="gy-3 mb-2">
                <Col md="6">
                  <FormGroup>
                    <Label>
                      Chief Complaints <span className="text-danger">*</span>
                    </Label>
                    <Input
                      type="text"
                      placeholder="Backpain, indigestion etc."/>
                  </FormGroup>
                </Col>

                <Col md="6">
                  <FormGroup>
                    <Label>
                      How long <span className="text-danger">*</span>
                    </Label>
                    <div className="d-flex align-items-center custom-gap">
                      <Input type="number" style={{ maxWidth: "120px" }} />
                      <span className="text-muted">Month(s)</span>
                    </div>
                  </FormGroup>
                </Col>
              </Row>

              {/* History of Present Illness */}
              <h6 className="fw-semibold mb-2">History of Present Illness</h6>

              <Row className="gy-3 mb-0">
                <Col md="12">
                  <FormGroup>
                    <Label>History of Present Illness (if any)</Label>
                    <CommonEditor
                      editorState={editorState}
                      onChange={setEditorState}
                      height={120}
                      placeholder="Write NA if not applicable"
                    />
                  </FormGroup>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col md="6">
          <Card className="mt-0 h-100">
            <CardBody>
              {/* Past History */}
              <h6 className="fw-semibold mb-3">Past History</h6>
              <Row className="gy-3 mb-4">
                <Col md="6">
                  <FormGroup>
                    <Label>
                      Childhood Disease <span className="text-danger">*</span>
                    </Label>
                    <Input
                      type="text"
                      placeholder="Write NA if not applicable"
                    />
                  </FormGroup>
                </Col>

                <Col md="6">
                  <FormGroup>
                    <Label>
                      Allergies <span className="text-danger">*</span>
                    </Label>
                    <Input
                      type="text"
                      placeholder="Write NA if not applicable"
                    />
                  </FormGroup>
                </Col>

                <Col md="6">
                  <FormGroup>
                    <Label>
                      Accidents & Injuries <span className="text-danger">*</span>
                    </Label>
                    <Input
                      type="text"
                      placeholder="Write NA if not applicable"
                    />
                  </FormGroup>
                </Col>

                <Col md="6">
                  <FormGroup>
                    <Label>
                      Hospitalization <span className="text-danger">*</span>
                    </Label>
                    <Input
                      type="text"
                      placeholder="Frequency – Write NA if not applicable"
                    />
                  </FormGroup>
                </Col>

                <Col md="12">
                  <FormGroup>
                    <Label>
                      Medication <span className="text-danger">*</span>
                    </Label>
                    <Input
                      type="text"
                      placeholder="MG / Dose / Before / After Meal – Write NA if not applicable"
                    />
                  </FormGroup>
                </Col>
              </Row>

              {/* Family History Illness */}
              <h6 className="fw-semibold mb-3">Family History Illness</h6>

              <Row className="gy-3">
                <Col md="4">
                  <FormGroup>
                    <Label>
                      Paternal <span className="text-danger">*</span>
                    </Label>
                    <Select
                      placeholder="Please Select"
                      className="react-select"
                      classNamePrefix="select"
                      options={[
                        { label: "No Illness", value: "no_illness" },
                        { label: "Diabetes", value: "diabetes" },
                        { label: "Hypertension", value: "hypertension" },
                        { label: "Irritable Bowel Syndrome", value: "irritable_bowel_syndrome" },
                        { label: "Others", value: "others" }
                      ]}
                    />
                  </FormGroup>
                </Col>

                <Col md="4">
                  <FormGroup>
                    <Label>
                      Maternal <span className="text-danger">*</span>
                    </Label>
                    <Select
                      placeholder="Please Select"
                      className="react-select"
                      classNamePrefix="select"
                      options={[
                        { label: "No Illness", value: "no_illness" },
                        { label: "Diabetes", value: "diabetes" },
                        { label: "Hypertension", value: "hypertension" },
                        { label: "Irritable Bowel Syndrome", value: "irritable_bowel_syndrome" },
                        { label: "Others", value: "others" }
                      ]}
                    />
                  </FormGroup>
                </Col>

                <Col md="4">
                  <FormGroup>
                    <Label>
                      Siblings <span className="text-danger">*</span>
                    </Label>
                    <Select
                      placeholder="Please Select"
                      className="react-select"
                      classNamePrefix="select"
                      options={[
                        { label: "No Illness", value: "no_illness" },
                        { label: "Diabetes", value: "diabetes" },
                        { label: "Hypertension", value: "hypertension" },
                        { label: "Irritable Bowel Syndrome", value: "irritable_bowel_syndrome" },
                        { label: "Others", value: "others" }
                      ]}
                    />
                  </FormGroup>
                </Col>
              </Row>

            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="alignment-row">
        <Col md="12">
          <Card className="mt-2">
            <CardBody>

              <h5 className="fw-bold mb-2">Personal History</h5>

              {/* Addictions */}
              <h6 className="fw-semibold mb-2">Addictions</h6>

              <Row className="gy-3 mb-2">
                <Col md="4">
                  <FormGroup>
                    <Label>
                      Alcohol <span className="text-danger">*</span>
                    </Label>
                    <Select
                      placeholder="Yes / No"
                      className="react-select"
                      classNamePrefix="select"
                      options={[
                        { label: "Yes", value: "yes" },
                        { label: "No", value: "no" }
                      ]}
                    />
                  </FormGroup>
                </Col>

                <Col md="4">
                  <FormGroup>
                    <Label>
                      Smoking <span className="text-danger">*</span>
                    </Label>
                    <Select
                      placeholder="Yes / No"
                      className="react-select"
                      classNamePrefix="select"
                      options={[
                        { label: "Yes", value: "yes" },
                        { label: "No", value: "no" }
                      ]}
                    />
                  </FormGroup>
                </Col>
              </Row>

              {/* Nutritional Pattern */}
              <h6 className="fw-semibold mb-2">Nutritional Pattern</h6>

              <Row className="gy-3 mb-2">
                <Col md="4">
                  <FormGroup>
                    <Label>
                      Appetite <span className="text-danger">*</span>
                    </Label>
                    <Select
                      placeholder="Please Select"
                      className="react-select"
                      classNamePrefix="select"
                      options={[
                        { label: "Poor", value: "poor" },
                        { label: "Average", value: "average" },
                        { label: "Good", value: "good" }
                      ]}
                    />
                  </FormGroup>
                </Col>
              </Row>

              {/* Elimination Pattern */}
              <h6 className="fw-semibold mb-3">Elimination Pattern</h6>

              <Row className="gy-3 mb-2">
                <Col md="4">
                  <FormGroup>
                    <Label>
                      Bowel <span className="text-danger">*</span>
                    </Label>
                    <Select
                      placeholder="Please Select"
                      className="react-select"
                      classNamePrefix="select"
                      options={[
                        { label: "Regular", value: "regular" },
                        { label: "Constipations", value: "constipations" },
                        { label: "Dieheria", value: "dieheria" },
                        { label: "Irritaional Bowl Syndrome", value: "irritaional_bowl_syndrome" }
                      ]}
                    />
                  </FormGroup>
                </Col>

                <Col md="4">
                  <FormGroup>
                    <Label>
                      Bladder <span className="text-danger">*</span>
                    </Label>
                    <Select
                      placeholder="Please Select"
                      className="react-select"
                      classNamePrefix="select"
                      options={[
                        { label: "Normal", value: "normal" },
                        { label: "Burning", value: "burning" },
                        { label: "Frequesnt Urination", value: "frequesnt_urination" },
                        { label: "Scanty", value: "scanty" }
                      ]}
                    />
                  </FormGroup>
                </Col>

                <Col md="4">
                  <FormGroup>
                    <Label>
                      Sweat <span className="text-danger">*</span>
                    </Label>
                    <Select
                      placeholder="Please Select"
                      className="react-select"
                      classNamePrefix="select"
                      options={[
                        { label: "Normal", value: "normal" },
                        { label: "Profuse", value: "profuse" },
                        { label: "Bad Order", value: "bad_order" },
                        { label: "Scanty", value: "scanty" }
                      ]}
                    />
                  </FormGroup>
                </Col>

                <Col md="4">
                  <FormGroup>
                    <Label>
                      Menses <span className="text-danger">*</span>
                    </Label>
                    <Select
                      placeholder="Please Select"
                      className="react-select"
                      classNamePrefix="select"
                      options={[
                        { label: "Regular", value: "Regular" },
                        { label: "Irregular", value: "Irregular" },
                        { label: "Bad Order", value: "bad_order" },
                        { label: "Scanty - Bleeding", value: "scanty-bleeding" },
                        { label: "Profuse - Access Bleeding", value: "profuse-bleeding" }
                      ]}
                    />
                  </FormGroup>
                </Col>

                <Col md="4">
                  <FormGroup>
                    <Label>
                      Sleep-Rest Pattern <span className="text-danger">*</span>
                    </Label>
                    <Select
                      placeholder="Please Select"
                      className="react-select"
                      classNamePrefix="select"
                      options={[
                        { label: "Sound", value: "Sound" },
                        { label: "Distrubed", value: "distrubed" }
                      ]}
                    />
                  </FormGroup>
                </Col>
              </Row>

              {/* Other Information */}
              <Row className="gy-3">
                <Col md="6">
                  <FormGroup>
                    <Label>Stress History (if any)</Label>
                    <Input
                      type="text"
                      placeholder="Enter stress history or NA"
                    />
                  </FormGroup>
                </Col>

                <Col md="6">
                  <FormGroup>
                    <Label>Alternative Treatment Details (if any)</Label>
                    <Input
                      type="text"
                      placeholder="Enter details or NA"
                    />
                  </FormGroup>
                </Col>
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
        </Col>
      </Row>
    </>
  )
}

export default AddClient
