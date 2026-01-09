import { useState } from 'react'
import {
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  FormGroup,
  Label,
  Input,
  Button
  
} from 'reactstrap'
import Select from 'react-select'
const optionsMarital = [
  { value: '', label: 'Please select one' },
  { value: 'single', label: 'Single' },
  { value: 'married', label: 'Married' }
]
const optionsNationalType = [
  { value: '', label: 'Please select one' },
  { value: 'aadhar', label: 'Aadhar' },
  { value: 'passport', label: 'Passport' },
  { value: 'driving', label: 'Driving License' }
]
const optionsCountry = [
  { value: '', label: 'Please select one' },
  { value: 'india', label: 'India' },
  { value: 'usa', label: 'USA' },
  { value: 'china', label: 'China' }
]

const MailingAddress = () => {
  
  const [qualifications, setQualifications] = useState([
  { 
    type: 'yoga_instructor',
    courseName: '',
    institute: '',
    passingYear: '',
    duration: '',
    durationType: 'month',
    file: null
  }
  ])

  const updateQualification = (index, field, value) => {
    // alert(value)
    const data = [...qualifications]
    data[index][field] = value
    setQualifications(data)
  }

  const addQualification = () => {
    setQualifications([
      ...qualifications,
      {
        type: 'yoga_instructor',
        courseName: '',
        institute: '',
        passingYear: '',
        duration: '',
        durationType: 'month',
        file: null
      }
    ])
  }

  const removeQualification = index => {
    if (qualifications.length > 1) {
      setQualifications(qualifications.filter((_, i) => i !== index))
    }
  }
  return (
  <>
    {/* TOP TWO CARDS */}
    <Row className="gx-1">
      {/* Mailing Address */}
      <Col md="6">
        <Card className="step-inner-card">
          <CardHeader>
            <CardTitle tag="h5">Mailing Address</CardTitle>
            <small className="text-muted">
              Enter your mailing address details.
            </small>
          </CardHeader>

          <CardBody>
            <Row className="gx-2">
              <Col md="6">
                <FormGroup>
                  <Label>Address</Label>
                  <Input placeholder="Enter address" required />
                </FormGroup>
              </Col>

              <Col md="6">
                <FormGroup>
                  <Label>City</Label>
                  <Input placeholder="Enter city" required />
                </FormGroup>
              </Col>

              <Col md="6">
                <FormGroup>
                  <Label>Postal Code</Label>
                  <Input placeholder="Enter postal code" required />
                </FormGroup>
              </Col>

              <Col md="6">
                <FormGroup>
                  <Label>Country</Label>
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
            </Row>
          </CardBody>
        </Card>
      </Col>

      {/* Personal Information */}
      <Col md="6">
        <Card className="step-inner-card">
          <CardHeader>
            <CardTitle tag="h5">Personal Information</CardTitle>
            <small className="text-muted">
              Enter your personal details.
            </small>
          </CardHeader>

          <CardBody>
            <Row className="gx-2">
              <Col md="6">
                <FormGroup>
                  <Label>Occupation</Label>
                  <Input placeholder="Enter occupation" required />
                </FormGroup>
              </Col>

              <Col md="6">
                <FormGroup>
                  <Label>Date of Birth</Label>
                  <Input type="date" required />
                </FormGroup>
              </Col>

              <Col md="6">
                  <FormGroup>
                    <Label>Marital Status</Label>
                    <Select
                      options={optionsMarital}
                      placeholder="Select status"
                      className="react-select"
                      classNamePrefix="select"
                      isSearchable={false}
                      required 
                    />
                  </FormGroup>
                </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>

    {/* FULL WIDTH CARD */}
    <Row className="">
      <Col md="12">
        <Card className="step-inner-card">
          <CardHeader>
            <CardTitle tag="h5">Type of National ID</CardTitle>
            <small className="text-muted">
              Enter your national ID details.
            </small>
          </CardHeader>

          <CardBody>
            <Row className="gx-2">
              <Col md="6">
                <FormGroup>
                  <Label>National ID Type<span className="text-danger">*</span></Label>                  
                    <Select
                      options={optionsNationalType}
                      placeholder="Select national type"
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
                  <Input placeholder="Enter ID number" required />
                </FormGroup>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
    {/* EDUCATION / YOGA QUALIFICATION CARD */}
<Row>
      <Col md="12">
        <Card className="step-inner-card">
          <CardHeader>
            <CardTitle tag="h5">
              Education / Yoga Qualification Details
            </CardTitle>
            <small className="text-muted">
              Enter your education or yoga qualification details.
            </small>
          </CardHeader>

          <CardBody>
            {qualifications.map((q, index) => (
              <div key={index} className="mb-2 p-2 border rounded">
                <Row className="gx-2">

                  {/* QUALIFICATION TYPE */}
                  <Col md="12" className="mb-1">
                    <Label className="d-block mb-50">
                      Qualification Type 
                    </Label>

                    {[
                      { label: 'Yoga Instructor', value: 'yoga_instructor' },
                      { label: 'Master Teacher', value: 'master_teacher' },
                      { label: 'Yoga Therapist', value: 'yoga_therapist' },
                      { label: 'Other', value: 'other' }
                    ].map(opt => (
                      <Label key={opt.value} className="radio-label mr-1 ">
                        <Input
                          type="radio"
                          name={`type-${index}`}
                          value={opt.value}
                          checked={q.type === opt.value}
                          required 
                          onChange={e => updateQualification(index, 'type', e.target.value)}
                        />{' '}
                        <span>{opt.label}</span>
                      </Label>
                    ))}
                  </Col>

                  <Col md="6">
                    <FormGroup>
                      <Label>Course Name</Label>
                      <Input
                        value={q.courseName}
                        required
                        onChange={e => updateQualification(index, 'courseName', e.target.value)}
                      />
                    </FormGroup>
                  </Col>

                  <Col md="6">
                    <FormGroup>
                      <Label>Institute</Label>
                      <Input
                        value={q.institute}
                        required
                        onChange={e => updateQualification(index, 'institute', e.target.value)}
                      />
                    </FormGroup>
                  </Col>

                  <Col md="4">
                    <FormGroup>
                      <Label>Passing Year</Label>
                      <Input
                        value={q.passingYear}
                        required
                        onChange={e => updateQualification(index, 'passingYear', e.target.value)}
                      />
                    </FormGroup>
                  </Col>

                  <Col md="4">
                    <FormGroup>
                      <Label>Duration</Label>
                      <Input
                        value={q.duration}
                        required
                        onChange={e => updateQualification(index, 'duration', e.target.value)}
                      />
                    </FormGroup>
                  </Col>

                  {/* DURATION TYPE */}
                  <Col md="4">
                    <Label className="d-block mb-50">Duration Type</Label>

                    <Label className="radio-label mr-1">
                      <Input
                        type="radio"
                        name={`duration-${index}`}
                        value="month"
                        checked={q.durationType === 'month'}
                        required
                        onChange={e => updateQualification(index, 'durationType', e.target.value)}
                      />{' '}
                      Month
                    </Label>

                    <Label className="radio-label">
                      <Input
                        type="radio"
                        name={`duration-${index}`}
                        value="year"
                        required 
                        checked={q.durationType === 'year'}
                        onChange={e => updateQualification(index, 'durationType', e.target.value)}
                      />{' '}
                      Year
                    </Label>
                  </Col>

                  <Col md="8">
                    <FormGroup>
                      <Label>Upload Certificate (PDF)</Label>
                      <Input
                        type="file"
                        accept="application/pdf"
                        required
                        onChange={e => updateQualification(index, 'file', e.target.files[0])}
                      />
                    </FormGroup>
                  </Col>

                  <Col
                    md="4"
                    className="d-flex align-items-end justify-content-end"
                  >
                    <Button
                      color="danger"
                      outline
                      disabled={qualifications.length === 1}
                      onClick={() => removeQualification(index)}
                    >
                      Delete
                    </Button>
                  </Col>
                </Row>
              </div>
            ))}

            <Button color="primary" onClick={addQualification}>
              + Add New
            </Button>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </>
  )
}

export default MailingAddress
