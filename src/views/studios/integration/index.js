import { useState } from 'react'
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
} from 'reactstrap'
import Select from 'react-select'
import RoomRow from './RoomRow'
import '../styles.css'
import '../../../assets/css.css'
import SelectAllMultiSelect from "../../../component/SelectAllMultiSelect/SelectAllMultiSelect.js"

/* -------------------- OPTIONS -------------------- */

const optionUserType = [
  { value: '', label: 'Please select one' },
  { value: '1', label: 'Employee' },
  { value: '2', label: 'Student' },
  { value: '3', label: 'Yoga Instructor' },
  { value: '4', label: 'Yoga Therapist' },
  { value: '5', label: 'Client (Patient)' },
  { value: '6', label: 'Affiliate Partner' }
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
const yesNoOptions = [
  { value: 'zoom', label: 'Zoom' },
  { value: 'google_meet', label: 'Google Meet' },
  { value: 'youtube', label: 'YouTube' },
  { value: 'facebook', label: 'Facebook' },
  { value: 'other', label: 'Other' }
]

const amenitiesList = [
  'Lockers',
  'Showers',
  'Parking',
  'Mat',
  'Towel',
  'Cafe',
  'Residential Room'
]

const combineClassOptions = [
  // { value: '', label: 'Please Select', isDisabled: true },
  { value: 'all_event', label: 'All Event' },
  { value: 'morning_yoga', label: 'Morning Yoga' },
  { value: 'hatha_yoga', label: 'Hatha Yoga for kuldeep' },
  { value: 'meditations', label: 'Meditations' }
]

/* -------------------- COMPONENT -------------------- */

const AddIntegration = () => {
  const [shareType, setShareType] = useState('link')


  /* -------------------- UI -------------------- */

  return (
    <Card>
      <CardBody>
        <h4 className="mb-3">Integration</h4>

        {/* <p className="text-muted">
          We need to check how we can display integration code or link.
          Based on program type, code can be generated using single or
          combination selection.
        </p> */}

        {/* SHARE STUDIO PAGE */}
        <FormGroup className="mb-3">
          <Label>Share Studio Page</Label>
          <Input type="url"
            value="https://www.yujaya.com/realyoga"
            
          />
        </FormGroup>

        <hr />

        {/* INTEGRATION TYPE */}
        <FormGroup className="mb-3">
          <Label className="fw-bold">Integration and Share Type</Label>
          <div className="d-flex gap-2 mt-1">
            <FormGroup check>
              <Input
                type="radio"
                checked={shareType === 'link'}
                onChange={() => setShareType('link')}
              />
              <Label check>Sharable Link</Label>
            </FormGroup>

            <FormGroup check>
              <Input
                type="radio"
                checked={shareType === 'button'}
                onChange={() => setShareType('button')}
              />
              <Label check>Button</Label>
            </FormGroup>

            <FormGroup check>
              <Input
                type="radio"
                checked={shareType === 'embed'}
                onChange={() => setShareType('embed')}
              />
              <Label check>Embed Code</Label>
            </FormGroup>
          </div>
        </FormGroup>
        <hr />
        {/* FULL CALENDAR */}
        <h5 className="mb-2">Full Calendar</h5>

        {['List View', 'Calendar View'].map(view => (
          <div key={view} className="mb-4">
            <Label className="fw-bold">
              {/* Calendar ({view}) */}
            </Label>

            <Row className="gy-2 mt-1">
              <Col md="4">
                <Label>Sharable Link</Label>
                <Input
                  type="textarea"
                  rows="3"
                  value="https://www.ihoko.com/open_reservations?host_id=371688"
                />
              </Col>

              <Col md="4">
                <Label>Button</Label>
                <Input
                  type="textarea"
                  rows="3"
                  value="https://www.ihoko.com/open_reservations?host_id=371688"
                  
                />
              </Col>

              <Col md="4">
                <Label>Embed Code</Label>
                <Input
                  type="textarea"
                  rows="3"
                  value='<iframe width="560" height="315" src="https://www.youtube.com/embed/oF6Vk"></iframe>'
                />
              </Col>
            </Row>
          </div>
        ))}
        <hr />
        {/* SELECTED PROGRAM */}
        <h5 className="mb-3">Selected Program</h5>
        <Row className="gy-3">
          <Col md="4" className='mb-2'>
            <Label>Classes</Label>
            {/* <Select
              options={combineClassOptions}
              classNamePrefix="select"
              required
            /> */}
            <SelectAllMultiSelect
                options={combineClassOptions}
                placeholderText="Select Classes"
                classNamePrefix="select"
                required
              />
          </Col>

          <Col md="4" className='mb-1'>
            <Label>Workshops</Label>
            
            <SelectAllMultiSelect
                options={combineClassOptions}
                placeholderText="Select Workshops"
                classNamePrefix="select"
                required
              />
          </Col>

          <Col md="4" className='mb-1'>
            <Label>Courses</Label>
            
            <SelectAllMultiSelect
                options={combineClassOptions}
                placeholderText="Select Courses"
                classNamePrefix="select"
                required
              />
          </Col>

          <Col md="6" className='mb-1'>
            <Label>Class Category</Label>
            
            <SelectAllMultiSelect
                options={combineClassOptions}
                placeholderText="Select Class Category"
                classNamePrefix="select"
                required
              />
          </Col>

          <Col md="6" className='mb-1'>
            <Label>Class Sub Category</Label>
            
            <SelectAllMultiSelect
                options={combineClassOptions}
                placeholderText="Select Class Sub Category"
                classNamePrefix="select"
                required
              />
          </Col>

          <Col md="6" className='mb-1'>
            <Label>Package Category</Label>
            
            <SelectAllMultiSelect
                options={combineClassOptions}
                placeholderText="Select Package Category"
                classNamePrefix="select"
                required
              />
          </Col>

          <Col md="6" className='mb-1'>
            <Label>Package Sub Category</Label>
            
            <SelectAllMultiSelect
                options={combineClassOptions}
                placeholderText="Select Package Sub Category"
                classNamePrefix="select"
                required
              />
          </Col>

          <Col md="6" className='mb-1'>
            <Label>Membership</Label>
            
            <SelectAllMultiSelect
                options={combineClassOptions}
                placeholderText="Select Membership"
                classNamePrefix="select"
                required
              />
          </Col>

          <Col md="6" className="d-flex align-items-center mt-2">
            <FormGroup check>
              <Input type="radio" />
              <Label check>Instructor List / Directory</Label>
            </FormGroup>
          </Col>
        </Row>
      </CardBody>

      <CardFooter className="text-end">
        <Button color="primary" className="button-alignment-accouncement">
          Create Generate Code
        </Button>
      </CardFooter>
    </Card>
  )
}

export default AddIntegration
 