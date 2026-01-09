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
const optionlanguageList = [
  { value: 'eng', label: 'English' },
  { value: 'spanish', label: 'Spanish' },
  { value: 'japanese', label: 'Japanese' }
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

const AddInstructor = () => {
  const [status, setStatus] = useState(true)
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const [passingYearDate, setPassingYearDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [picker, setPicker] = useState(new Date())
  const [practiceYoga, setPracticeYoga] = useState(null)
  const [isInstructor, setIsInstructor] = useState(null)
  const [role, setRole] = useState('')
  const [hasHealthIssue, setHasHealthIssue] = useState(null)
  const [sourceType, setSourceType] = useState('')

  const [courses, setCourses] = useState([
    {
      courseName: '',
      institute: '',
      passingYear: null,
      country: null,
      duration: '',
      durationType: 'month',
      certificate: null
    }
  ])

const addMoreCourse = () => {
  setCourses(prev => [
    ...prev,
    {
      courseName: '',
      institute: '',
      passingYear: null,
      country: null,
      duration: '',
      durationType: 'month',
      certificate: null
    }
  ])
}

const removeCourse = index => {
  setCourses(prev => prev.filter((_, i) => i !== index))
}

  return (
    <>
      <Card>
        <CardBody>
          <h4 className="fw-bold mb-2">Add Instructor or Therapist</h4>
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
              <Label>National ID Type <span className="text-danger">*</span></Label>
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
              <Label>National ID Number <span className="text-danger">*</span></Label>
              <Input type="text" placeholder="Enter ID number" />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label>Occupation <span className="text-danger">*</span></Label>
              <Input type="text" placeholder="Enter Occupation" />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label>Maritial Status <span className="text-danger">*</span></Label>
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
              <Label>Education Qualification <span className="text-danger">*</span></Label>
              <Input type="text" placeholder="Enter Education Qualification" required/>
            </FormGroup>
          </Col>
        </Row>

        </CardBody>    
      </Card>
      <Row className="alignment-row">
        <Col md="12">
          <Card className="mt-0">
            <CardBody>
              <h5 className="fw-bold mb-3">Yoga Qualification Details</h5>
              {/* Do you practice Yoga */}
              <FormGroup className="mb-3">
                <Label className="fw-semibold">
                  Do you practice YOGA? <span className="text-danger">*</span>
                </Label>

                <div className="d-flex custom-gap">
                  <FormGroup check>
                    <Input
                      type="radio"
                      name="practiceYoga"
                      checked={practiceYoga === true}
                      onChange={() => setPracticeYoga(true)}
                    />
                    <Label check>Yes</Label>
                  </FormGroup>

                  <FormGroup check>
                    <Input
                      type="radio"
                      name="practiceYoga"
                      checked={practiceYoga === false}
                      onChange={() => setPracticeYoga(false)}
                    />
                    <Label check>No</Label>
                  </FormGroup>
                </div>
              </FormGroup>

              {practiceYoga && (
                <>
                  {/* Are you Instructor */}
                  <FormGroup className="mb-4">
                    <Label className="fw-semibold">
                      Are you a Yoga Instructor?
                    </Label>

                    <div className="d-flex custom-gap">
                      <FormGroup check>
                        <Input
                          type="radio"
                          name="isInstructor"
                          checked={isInstructor === true}
                          onChange={() => setIsInstructor(true)}
                        />
                        <Label check>Yes</Label>
                      </FormGroup>

                      <FormGroup check>
                        <Input
                          type="radio"
                          name="isInstructor"
                          checked={isInstructor === false}
                          onChange={() => setIsInstructor(false)}
                        />
                        <Label check>No</Label>
                      </FormGroup>
                    </div>
                  </FormGroup>
                  {isInstructor && (
                    <>
                      {/* Instructor Type */}
                      <FormGroup className="mb-4">
                        <Label className="fw-semibold">
                          Select Role <span className="text-danger">*</span>
                        </Label>
                        <div className="d-flex custom-gap flex-wrap">
                          {[
                            'Yoga Instructor (Conducting Yoga Classes) ',
                            'Master Teacher (Who Train the Instructor)',
                            'Yoga Therapist',
                            'Other'
                          ].map(item => (
                            <FormGroup check key={item}>
                              <Input
                                type="radio"
                                name="role"
                                onChange={() => setRole(item)}
                              />
                              <Label check>{item}</Label>
                            </FormGroup>
                          ))}
                        </div>
                      </FormGroup>
                      <Row>
                        <Col>
                          {courses.map((course, index) => (
                            <div key={index} className="border rounded p-3 mb-3">

                              <div className="d-flex justify-content-between align-items-center mb-2">
                                <h6 className="fw-semibold mb-0">
                                  Course Details {index + 1}
                                </h6>

                                {courses.length > 1 && (
                                  <Button
                                    color="danger"
                                    size="sm"
                                    outline
                                    onClick={() => removeCourse(index)}
                                  >
                                    Remove
                                  </Button>
                                )}
                              </div>

                              <Row className="gy-3">

                                <Col md="6">
                                  <FormGroup>
                                    <Label>Course Name <span className="text-danger">*</span></Label>
                                    <Input
                                      value={course.courseName}
                                      onChange={e => {
                                        const updated = [...courses]
                                        updated[index].courseName = e.target.value
                                        setCourses(updated)
                                      }}
                                    />
                                  </FormGroup>
                                </Col>

                                <Col md="6">
                                  <FormGroup>
                                    <Label>Institute <span className="text-danger">*</span></Label>
                                    <Input
                                      value={course.institute}
                                      onChange={e => {
                                        const updated = [...courses]
                                        updated[index].institute = e.target.value
                                        setCourses(updated)
                                      }}
                                    />
                                  </FormGroup>
                                </Col>

                                <Col md="6">
                                  <FormGroup>
                                    <Label>Passing Year <span className="text-danger">*</span></Label>
                                    <InputGroup>
                                      <Flatpickr
                                        value={course.passingYear}
                                        onChange={date => {
                                          const updated = [...courses]
                                          updated[index].passingYear = date[0]
                                          setCourses(updated)
                                        }}
                                        options={{ 
                                          enableTime: false,
                                          dateFormat: 'Y',
                                          allowInput: true
                                        }}
                                        className="form-control"
                                        placeholder="Select Passing Year"
                                      />
                                      <InputGroupAddon addonType="append">
                                        <InputGroupText>
                                          <Calendar size={16} />
                                        </InputGroupText>
                                      </InputGroupAddon>
                                    </InputGroup>
                                  </FormGroup>
                                </Col>

                                <Col md="6">
                                  <FormGroup>
                                    <Label>Country <span className="text-danger">*</span></Label>
                                    <Select
                                      options={optionCountryList}
                                      value={course.country}
                                      onChange={val => {
                                        const updated = [...courses]
                                        updated[index].country = val
                                        setCourses(updated)
                                      }}
                                    />
                                  </FormGroup>
                                </Col>

                                <Col md="6">
                                  <FormGroup>
                                    <Label>Duration  <span className="text-danger">*</span></Label>
                                    <div className="d-flex custom-gap align-items-center">
                                      <Input
                                        type="number"
                                        value={course.duration}
                                        onChange={e => {
                                          const updated = [...courses]
                                          updated[index].duration = e.target.value
                                          setCourses(updated)
                                        }}
                                        style={{ maxWidth: 120 }}
                                      />

                                      <FormGroup check>
                                        <Input
                                          type="radio"
                                          name={`duration-${index}`}
                                          checked={course.durationType === 'month'}
                                          onChange={() => {
                                            const updated = [...courses]
                                            updated[index].durationType = 'month'
                                            setCourses(updated)
                                          }}
                                        />
                                        <Label check>Month</Label>
                                      </FormGroup>

                                      <FormGroup check>
                                        <Input
                                          type="radio"
                                          name={`duration-${index}`}
                                          checked={course.durationType === 'year'}
                                          onChange={() => {
                                            const updated = [...courses]
                                            updated[index].durationType = 'year'
                                            setCourses(updated)
                                          }}
                                        />
                                        <Label check>Year</Label>
                                      </FormGroup>
                                    </div>
                                  </FormGroup>
                                </Col>

                                <Col md="6">
                                  <FormGroup>
                                    <Label>Upload Certificate</Label>
                                    <Input
                                      type="file"
                                      accept=".jpg,.jpeg,.pdf"
                                      onChange={e => {
                                        const updated = [...courses]
                                        updated[index].certificate = e.target.files[0]
                                        setCourses(updated)
                                      }}
                                    />
                                  </FormGroup>
                                </Col>

                              </Row>
                            </div>
                          ))}
                          <Button color="primary" className="button-alignment-accouncement" outline onClick={addMoreCourse}>
                            Add More
                          </Button>
                        </Col>
                      </Row>
                      {/* Yoga Information */}
                      <hr className="my-4" />
                      <h6 className="fw-semibold mb-3">Yoga Information</h6>
                      <Row className="gy-3">
                        <Col md="6">
                          <FormGroup>
                            <Label>
                              Teaching Experience <span className="text-danger">*</span>
                            </Label>
                            <div className="d-flex custom-gap align-items-center">
                              <FormGroup check>
                                <Input type="radio" />
                                <Label check>Years</Label>
                              </FormGroup>
                              <FormGroup check>
                                <Input type="radio" />
                                <Label check>Month</Label>
                              </FormGroup>
                              <Input type="number" placeholder="Please Enter Value" style={{ maxWidth: '120px' }} />
                            </div>
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <Label>Area of Expertise <span className="text-danger">*</span></Label>
                            <SelectAllMultiSelect
                              options={optionlanguageList}
                              placeholderText="Select Expertise"
                              classNamePrefix="select"
                              required
                            />
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <Label>Yoga Style <span className="text-danger">*</span></Label>
                            <SelectAllMultiSelect
                                options={optionlanguageList}
                                placeholderText="Select Yoga Style"
                                classNamePrefix="select"
                                required
                              />
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <Label>Language Speak <span className="text-danger">*</span></Label>
                            <SelectAllMultiSelect
                              options={optionlanguageList}
                              placeholderText="Select Languages"
                              classNamePrefix="select"
                              required
                            />
                          </FormGroup>
                        </Col>
                        <Col md="12">
                          <FormGroup>
                            <Label>
                              Yoga Profile Detail <span className="text-danger">*</span>
                            </Label>
                            <CommonEditor
                              editorState={editorState}
                              onChange={setEditorState}
                              height={180}
                            />
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <Label>Upload Photo</Label>
                            <Input type="file" accept="image/*" />
                          </FormGroup>
                        </Col>
                      </Row>
                    </>
                  )}
                </>
              )}
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="alignment-row">
        <Col md="12">
          <Card className="mt-0">
            <CardBody>
              {/* Health Details */}
              <h5 className="fw-bold mb-3">Health Details</h5>
              {/* Health Ailment */}
              <FormGroup className="mb-3">
                <Label className="fw-semibold">
                  Are you suffering from any health ailment?{" "}
                  <span className="text-danger">*</span>
                </Label>

                <div className="d-flex custom-gap">
                  <FormGroup check>
                    <Input
                      type="radio"
                      name="healthIssue"
                      checked={hasHealthIssue === true}
                      onChange={() => setHasHealthIssue(true)}
                    />
                    <Label check>Yes</Label>
                  </FormGroup>

                  <FormGroup check>
                    <Input
                      type="radio"
                      name="healthIssue"
                      checked={hasHealthIssue === false}
                      onChange={() => setHasHealthIssue(false)}
                    />
                    <Label check>No</Label>
                  </FormGroup>
                </div>
              </FormGroup>
              {hasHealthIssue && (
                <Row className="gy-3 mb-0">
                  <Col md="6">
                    <FormGroup>
                      <Label>
                        Chief Complaints <span className="text-danger">*</span>
                      </Label>
                      <Select
                        isMulti
                        placeholder="Backpain, indigestion etc."
                        className="react-select"
                        classNamePrefix="select"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label>
                        How long <span className="text-danger">*</span>
                      </Label>
                      <div className="d-flex custom-gap align-items-center">
                        <Input type="number" style={{ maxWidth: "120px" }} />
                        <span className="text-muted">Month(s)</span>
                      </div>
                    </FormGroup>
                  </Col>
                  <Col md="12">
                    <FormGroup>
                      <Label>History of Present Illness (if any)</Label>
                      <Input
                        type="textarea"
                        rows="3"
                        placeholder="Enter illness history"
                      />
                    </FormGroup>
                  </Col>

                </Row>
              )}
              {/* How you find about us */}
              {/* <hr className="my-4" /> */}
              <h5 className="fw-bold mb-2">How you find about us?</h5>
              <Row className="gy-3">
                <Col md="6">
                  <FormGroup>
                    <Label>
                      How do you get to about us?{" "}
                      <span className="text-danger">*</span>
                    </Label>
                    <Select
                      placeholder="Please Select"
                      className="react-select"
                      classNamePrefix="select"
                      options={[
                        { label: "Friend", value: "friend" },
                        { label: "Social Media", value: "social" },
                        { label: "Google", value: "google" },
                        { label: "Others", value: "others" }
                      ]}
                      onChange={opt => setSourceType(opt?.value)}
                      menuPlacement="auto"
                    />
                  </FormGroup>
                </Col>
                {/* If Friend */}
                {sourceType === "friend" && (
                  <>
                    <Col md="6">
                      <FormGroup>
                        <Label>Friend Name</Label>
                        <Input type="text" placeholder="Enter name" />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label>Phone</Label>
                        <Input type="tel" placeholder="Enter phone number" />
                      </FormGroup>
                    </Col>
                  </>
                )}
                {/* If Others */}
                {sourceType === "others" && (
                  <Col md="6">
                    <FormGroup>
                      <Label>If Others</Label>
                      <Input
                        type="text"
                        placeholder="Please specify"
                      />
                    </FormGroup>
                  </Col>
                )}
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

export default AddInstructor
