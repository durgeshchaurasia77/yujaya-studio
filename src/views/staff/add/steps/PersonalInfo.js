import {
  Row,
  Col,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Label,
  Input
} from 'reactstrap'
import Select from 'react-select'

const optionsDesignationType = [
  { value: '', label: 'Please select one' },
  { value: 'sales_manager', label: 'Sales Manager' },
  { value: 'centre_manager', label: 'Centre Manager' },
  { value: 'accountant', label: 'Accountant' },
  { value: 'manager', label: 'Manager' },
  { value: 'operation_manager', label: 'Operation Manager' },
  { value: 'sales_executive', label: 'Sales Executive' },
  { value: 'yoga_master', label: 'Yoga Master' },
  { value: 'yoga_teacher', label: 'Yoga Teacher' },
  { value: 'yoga_instructor', label: 'Yoga Instructor' },
  { value: 'other', label: 'Other' }
]

const PersonalInfo = () => (
  <>
    <h5>Personal Info</h5>

    <Row>
      <Col md="12">
        <Card className="step-inner-card">
          <CardHeader>
            <CardTitle tag="h5">Enter Your Personal Info.</CardTitle>
            <small className="text-muted">
              Teaching, Yoga, and Professional Details
            </small>
          </CardHeader>

          <CardBody>
            <Row className="gx-2">

              {/* Teaching Experience */}
              <Col md="6">
                <FormGroup>
                  <Label>Teaching Experience (Years)</Label>
                  <Input type="number" placeholder="Enter years" required />
                </FormGroup>
              </Col>

              {/* Area of Expertise */}
              <Col md="6">
                <FormGroup>
                  <Label>Area of Expertise</Label>
                  <Input placeholder="e.g. Therapy, Fitness, Meditation" required />
                </FormGroup>
              </Col>

              {/* Yoga Style */}
              <Col md="6">
                <FormGroup>
                  <Label>Yoga Style</Label>
                  <Input placeholder="e.g. Hatha, Ashtanga, Vinyasa" required />
                </FormGroup>
              </Col>

              {/* Language Speak */}
              <Col md="6">
                <FormGroup>
                  <Label>Language Speak</Label>
                  <Input placeholder="e.g. English, Hindi" required />
                </FormGroup>
              </Col>

              {/* Yoga Profile Detail */}
              <Col md="6">
                <FormGroup>
                  <Label>Yoga Profile Detail</Label>
                  <Input
                    type="textarea"
                    rows="4"
                    placeholder="Describe your yoga journey and expertise"
                    required
                  />
                </FormGroup>
              </Col>

              {/* Business / Profession */}
              <Col md="12">
                <h6 className="mt-2">Business / Profession</h6>
              </Col>

              {/* Company Name */}
              <Col md="6">
                <FormGroup>
                  <Label>Company Name</Label>
                  <Input placeholder="Enter company name" />
                </FormGroup>
              </Col>

              {/* Nature of Business */}
              <Col md="6">
                <FormGroup>
                  <Label>Nature of Business</Label>
                  <Input placeholder="e.g. Healthcare, Education" />
                </FormGroup>
              </Col>

              {/* Designation */}
              <Col md="6">
                <FormGroup>
                  <Label>Designation</Label>
                  <Select
                      options={optionsDesignationType}
                      placeholder="Select Designation"
                      className="react-select"
                      classNamePrefix="select"
                      isSearchable={false}
                      required 
                    />
                </FormGroup>
              </Col>

              {/* Website */}
              <Col md="6">
                <FormGroup>
                  <Label>Website</Label>
                  <Input type="url" placeholder="https://example.com" />
                </FormGroup>
              </Col>

              {/* Profile Photo */}
              <Col md="6">
                <FormGroup>
                  <Label>Profile Photo</Label>
                  <Input type="file" accept="image/*" required />
                </FormGroup>
              </Col>

            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </>
)

export default PersonalInfo
