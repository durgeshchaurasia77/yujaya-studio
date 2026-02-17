import { useState } from 'react'
import Select from 'react-select'
import '../../../assets/css.css'
import SelectAllMultiSelect from "../../../component/SelectAllMultiSelect/SelectAllMultiSelect.js"
import './style.css'
const notificationType = [
  { value: 'only_i_am', label: 'Only when I,am online' },
  { value: 'any_time', label: 'Any Time' }
]
const statusType = [
  { value: 'active', label: 'Active' },
  { value: 'inactive', label: 'In Active' }
]

import {
  Row,
  Col,
  Nav,
  Label,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  CustomInput,
  Button,
  Input,
  FormGroup
} from 'reactstrap'
import classnames from 'classnames'

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


const ComissionTabContent = ({ data }) => {
  const [followMe, setFollowMe] = useState(data.followMe)
  const [isPaypalEnabled, setIsPaypalEnabled] = useState(false)
  const [isStripeEnabled, setIsStripeEnabled] = useState(false)
  const [isRazorPayEnabled, setIsRazorPayEnabled] = useState(false)
  const [isHitPayEnabled, setIsHitPayEnabled] = useState(false)
  const [activeTab, setActiveTab] = useState('payment_gateway')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [userType, setUserType] = useState('')
  const [searchUser, setSearchUser] = useState([])
  const [commissionFor, setCommissionFor] = useState('')
  const [paymentType, setPaymentType] = useState('')
  const [amount, setAmount] = useState('')
  const toggleTab = tab => {
    if (activeTab !== tab) setActiveTab(tab)
  }

return (
  <Row>
    {/* TAB CONTENT */}
    <Col sm="12">
      <TabContent >
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
          <Col md="6" className='mt-2'>
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
              </div>
            </div>
          </Col>
          {/* EVENT */}
          <Col md="5" className='mt-2 ml-1'>
            <div className="form-row">
              <div className="form-label-col1">Event</div>

              <div className="form-field-col" style={{ maxWidth: '350px' }}>
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
          
          <Col md="12" className='mt-2'>
            <div className="form-row">
            <div className="form-label-col">Commission / Payment For</div>

            <div className="form-field-col">
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
        
          <Col md="12" className='mt-2'>
            <div className="form-row">
            <div className="form-label-col">Payment Type</div>
              <div className="form-field-col">
                <div
                  className={`d-flex align-items-center gap-4 flex-wrap ${
                    isSubmitted && !paymentType ? 'border border-danger rounded' : ''
                  }`}
                >
                  {['Fixed', 'Percentage', 'Hourly'].map(item => (
                    <FormGroup check key={item} className="m-0">
                      <Input
                        type="radio"
                        name="paymentType"
                        className='mr-2'
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
      </TabContent>
      <div className="mt-2 button-alignment-accouncement">
        <Button.Ripple color="primary" className="mr-1">
          Save changes
        </Button.Ripple>
        <Button.Ripple color="secondary" outline>
          Discard
        </Button.Ripple>
      </div>
    </Col>
  </Row>
)

}

export default ComissionTabContent
