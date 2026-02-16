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
import SelectAllMultiSelect from "../../../component/SelectAllMultiSelect/SelectAllMultiSelect.js"
// import RoomRow from './RoomRow'
import '../styles.css'
import '../../../assets/css.css'
import './style.css'
/* -------------------- OPTIONS -------------------- */

const optionUserType = [
  // { value: '', label: 'Please select one' },
  { value: '1', label: 'Employee' },
  { value: '2', label: 'Student' },
  { value: '3', label: 'Yoga Instructor' },
  { value: '4', label: 'Yoga Therapist' },
  { value: '5', label: 'Client (Patient)' },
  { value: '6', label: 'Affiliate Partner' }
]

const combineClassOptions = [
  { value: '', label: 'Please Select', isDisabled: true },
  { value: 'all_event', label: 'All Event' },
  { value: 'morning_yoga', label: 'Morning Yoga' },
  { value: 'hatha_yoga', label: 'Hatha Yoga for kuldeep' },
  { value: 'meditations', label: 'Meditations' }
]

/* -------------------- COMPONENT -------------------- */

const AddCommision = () => {
  const [isPhysical, setIsPhysical] = useState(true)
  const [isVirtual, setIsVirtual] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [userType, setUserType] = useState('')
  const [searchUser, setSearchUser] = useState([])
  const [commissionFor, setCommissionFor] = useState('')
  const [paymentType, setPaymentType] = useState('')
  const [amount, setAmount] = useState('')
  // const [rooms, setRooms] = useState([
  //   { name: '', capacity: '', photo: null }
  // ])

  const [rooms, setRooms] = useState([{ name: '', capacity: '', photo: null }])
  /* -------------------- ROOM HANDLERS -------------------- */

  const addRoom = () => {
    setRooms([...rooms, { name: '', capacity: '', photo: null }])
  }

  const updateRoom = (index, field, value) => {
    const updated = [...rooms]
    updated[index][field] = value
    setRooms(updated)
  }

  const removeRoom = index => {
    const updated = rooms.filter((_, i) => i !== index)
    setRooms(updated)
  }

  const handleSubmit = () => {
  setIsSubmitted(true)

  if (!userType || !commissionFor || !paymentType || !amount || !searchUser) {
    return
  }

  // API CALL HERE
  console.log('Form submitted successfully')
}

  /* -------------------- UI -------------------- */

  return (
<Card>
  <CardBody>
    <Row>
    <h4 className="mb-4">Add Commission & Payment Plan</h4>
    <Col md="12">
      <div className="form-row">
        <div className="form-label-col">Select User Type</div>
        <div className="form-field-col">
          <div
            className={`commission-payment-section ${
              isSubmitted && !userType ? 'border border-danger rounded' : ''
            }`}
          >
            {['Student', 'Instructor', 'Therapist', 'Staff', 'Affiliate Partner'].map(item => (
              <FormGroup check key={item} className="m-0">
                <Input
                  type="radio"
                  name="userType"
                  value={item}
                  onChange={e => setUserType(e.target.value)}
                />
                <Label check>{item}</Label>
              </FormGroup>
            ))}
          </div>
        </div>
      </div>
    </Col>

    {/* SEARCH USER */}
    <Col md="6">
      <div className="form-row">
        <div className="form-label-col">Search User</div>
        <div className="form-field-col">
          <Select
            isMulti
            options={optionUserType}
            placeholder="Select User"
            classNamePrefix="select"
            value={searchUser}
            onChange={setSearchUser}
            className={isSubmitted && searchUser.length === 0 ? 'is-invalid' : ''}
          />
          {/* <small className="text-muted mt-1">allow multiple</small> */}
        </div>
      </div>
    </Col>
    {/* EVENT */}
    <Col md="6">
      <div className="form-row">
        <div className="form-label-col">Event</div>

        <div className="form-field-col" style={{ maxWidth: '300px' }}>
          {/* <Input type="select">
            <option>All Event</option>
          </Input> */}
          {/* <Select
              options={combineClassOptions}
              placeholder="Select Event"
              classNamePrefix="select"
              isSearchable={false}
              menuPlacement="auto"
              menuPortalTarget={document.body}
              styles={{
                menuPortal: base => ({
                  ...base,
                  zIndex: 9999
                })
              }}
              required
            /> */}
            
            <SelectAllMultiSelect
              options={combineClassOptions}
              placeholderText="Select Event"
              classNamePrefix="select"
              required
            />
        </div>
      </div>
    </Col>
    {/* COMMISSION FOR */}
    
    <Col md="6" className='mt-3'>
      <div className="form-row">
      <div className="form-label-col">Commission / Payment For</div>

      <div className="form-field-col ml-2">
      <div
        className={`commission-payment-section ${
          isSubmitted && !commissionFor ? 'border border-danger rounded' : ''
        }`}
      >
        {[
          'Class',
          'Package',
          'Private Therapy',
          'Membership',
          'Instructor',
          'Therapist',
          'Student',
          'Affiliate Partner',
          'Staff'
        ].map(item => (
          <FormGroup check key={item} className="m-0">
            <Input
              type="radio"
              name="commissionFor"
              value={item}
              onChange={e => setCommissionFor(e.target.value)}
            />
            <Label check>{item}</Label>
          </FormGroup>
        ))}
      </div>
      </div>
      </div>
    </Col>
    
    
    {/* PAYMENT TYPE */}
   
    <Col md="6" className='mt-3'>
      <div className="form-row">
      <div className="form-label-col">Payment Type</div>
        <div className="form-field-col">
          <div
            className={`d-flex align-items-center gap-4 flex-wrap ${
              isSubmitted && !paymentType ? 'border border-danger rounded' : ''
            }`}
          >
            {['Fixed', 'Percentage', 'Hourly'].map(item => (
              <FormGroup check key={item} className="m-0 mr-2">
                <Input
                  type="radio"
                  name="paymentType"
                  value={item}
                  onChange={e => setPaymentType(e.target.value)}
                />
                <Label check>{item}</Label>
              </FormGroup>
            ))}

            <Input
              type="number"
              placeholder="Enter Amt"
              value={amount}
              onChange={e => setAmount(e.target.value)}
              className={isSubmitted && !amount ? 'is-invalid' : ''}
              style={{ width: '120px' }}
            />
          </div>
        </div>
      </div>
    </Col>
    </Row>
  </CardBody>

  <CardFooter className="pt-3">
    {/* <Button color="primary">Submit</Button> */}
    <Button color="primary" onClick={handleSubmit} className="button-alignment-accouncement">
      Submit
    </Button>
  </CardFooter>
</Card>
  )
}

export default AddCommision
