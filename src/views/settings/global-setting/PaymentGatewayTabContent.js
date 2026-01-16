import { useState } from 'react'
import Select from 'react-select'
import '../../../assets/css.css'
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

const PaymentGatewayTabContent = ({ data }) => {
  const [followMe, setFollowMe] = useState(data.followMe)
  const [activeTab, setActiveTab] = useState('payment_gateway')
  const toggleTab = tab => {
    if (activeTab !== tab) setActiveTab(tab)
  }

return (
  <Row>
    {/* TABS HEADER */}
    <Col sm="12">
      <Nav tabs className="mb-2 nav-bar-payment">
        {[
          { id: 'payment_gateway', label: 'Payment Gateway' },
          { id: 'payment_terminal', label: 'Payment Terminal' }
        ].map(tab => (
          <NavItem key={tab.id}>
            <NavLink
              className={classnames({ active: activeTab === tab.id })}
              onClick={() => toggleTab(tab.id)}
            >
              {tab.label}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
    </Col>

    {/* TAB CONTENT */}
    <Col sm="12">
      <TabContent activeTab={activeTab}>
        {/* ================= BASIC TAB ================= */}
        <TabPane tabId="payment_gateway">
          <h5 className="mb-2">Payment Gateway</h5>

          {/* ================= PAYPAL ================= */}
          <Row className="mb-2">
            <Col md="12">
              <CustomInput
                type="switch"
                id="paypal-active"
                label="PayPal Standard"
              />
            </Col>
          </Row>

          <Row>
            <Col md="6">
              <FormGroup>
                <Label>Gateway Account Email</Label>
                <Input />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label>Client ID</Label>
                <Input />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label>Client Secret</Label>
                <Input type="password" />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label>Webhook ID</Label>
                <Input />
              </FormGroup>
            </Col>
          </Row>

          <hr />

          {/* ================= STRIPE ================= */}
          <Row className="mb-2">
            <Col md="12">
              <CustomInput
                type="switch"
                id="stripe-active"
                label="Stripe"
              />
            </Col>
          </Row>

          <Row>
            <Col md="6">
              <FormGroup>
                <Label>Publishable Key</Label>
                <Input />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label>Secret Key</Label>
                <Input type="password" />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label>Webhook Secret</Label>
                <Input />
              </FormGroup>
            </Col>
          </Row>

          <hr />

          {/* ================= RAZOR PAY ================= */}
          <Row className="mb-2">
            <Col md="12">
              <CustomInput
                type="switch"
                id="razorpay-active"
                label="Razor Pay"
              />
            </Col>
          </Row>

          <Row>
            <Col md="6">
              <FormGroup>
                <Label>Key ID</Label>
                <Input />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label>Key Secret</Label>
                <Input type="password" />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label>Webhook Secret</Label>
                <Input />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label>Merchant Name</Label>
                <Input />
              </FormGroup>
            </Col>
          </Row>

          <hr />

          {/* ================= HIT PAY ================= */}
          <Row className="mb-2">
            <Col md="12">
              <CustomInput
                type="switch"
                id="hitpay-active"
                label="Hit Pay"
              />
            </Col>
          </Row>

          <Row>
            <Col md="6">
              <FormGroup>
                <Label>API Key</Label>
                <Input />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label>Salt Key</Label>
                <Input type="password" />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label>Webhook URL</Label>
                <Input />
              </FormGroup>
            </Col>
          </Row>
        </TabPane>

        {/* ================= CLASS TAB ================= */}
      <TabPane tabId="payment_terminal">
        <h5 className="mb-1">Payment Terminal</h5>
        <p className="text-muted mb-2">
          Pay students, vendors or suppliers. This helps maintain clean outflow records.
        </p>

        {/* ===== BASIC DETAILS ===== */}
        <Row>
          <Col md="3">
            <FormGroup>
              <Label>Amount</Label>
              <Input type="number" />
            </FormGroup>
          </Col>

          <Col md="3">
            <FormGroup>
              <Label>Currency</Label>
              <Input type="select">
                <option>-- Select --</option>
                <option>INR</option>
                <option>USD</option>
              </Input>
            </FormGroup>
          </Col>

          <Col md="6">
            <FormGroup>
              <Label>Payment To</Label>
              <Input placeholder="Name / Mobile / Email" />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col md="6">
            <FormGroup>
              <Label>Payment For</Label>
              <Input type="select">
                <option>-- Select --</option>
                <option>Student Fee</option>
                <option>Vendor Payment</option>
                <option>Instructor Payment</option>
              </Input>
            </FormGroup>
          </Col>

          <Col md="6">
            <FormGroup>
              <Label>Upload Documents</Label>
              <Input type="file" />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col md="12">
            <FormGroup>
              <Label>Remarks</Label>
              <Input type="textarea" rows="2" />
            </FormGroup>
          </Col>
        </Row>

        <hr className="my-2" />

        {/* ===== PAYMENT MODE ===== */}
        <h6 className="mb-1">Payment Mode</h6>

        <Row>
          {/* ONLINE */}
          <Col md="3">
            <div className="border p-1 h-100">
              <CustomInput
                type="radio"
                id="mode-online"
                name="paymentMode"
                label="ONLINE"
              />
              <div className="ml-1 mt-1">
                <CustomInput type="radio" id="g-paypal" name="gateway" label="PayPal" />
                <CustomInput type="radio" id="g-stripe" name="gateway" label="Stripe" />
                <CustomInput type="radio" id="g-razor" name="gateway" label="Razor Pay" />
                <CustomInput type="radio" id="g-hitpay" name="gateway" label="Hit Pay" />
                <CustomInput type="radio" id="g-apple" name="gateway" label="Apple Pay" />
              </div>
            </div>
          </Col>

          {/* CHEQUE */}
          <Col md="3">
            <div className="border p-1 h-100">
              <CustomInput
                type="radio"
                id="mode-cheque"
                name="paymentMode"
                label="CHEQUE"
              />
              <FormGroup className="mt-1">
                <Label>Cheque Name</Label>
                <Input />
              </FormGroup>
              <FormGroup>
                <Label>Cheque Number</Label>
                <Input />
              </FormGroup>
            </div>
          </Col>

          {/* BANK TRANSFER */}
          <Col md="4">
            <div className="border p-1 h-100">
              <CustomInput
                type="radio"
                id="mode-bank"
                name="paymentMode"
                label="BANK TRANSFER"
              />
              <Row className="mt-1">
                <Col md="6"><Input placeholder="Bank Name" /></Col>
                <Col md="6"><Input placeholder="A/C No." /></Col>
              </Row>
              <Row className="mt-1">
                <Col md="6"><Input placeholder="IFSC" /></Col>
                <Col md="6"><Input placeholder="Swift Code" /></Col>
              </Row>
              <Row className="mt-1">
                <Col md="6"><Input placeholder="Branch Name" /></Col>
                <Col md="6"><Input placeholder="Branch Code" /></Col>
              </Row>
            </div>
          </Col>

          {/* CASH */}
          <Col md="2">
            <div className="border p-1 h-100 d-flex align-items-center">
              <CustomInput
                type="radio"
                id="mode-cash"
                name="paymentMode"
                label="CASH"
              />
            </div>
          </Col>
        </Row>
      </TabPane>

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

export default PaymentGatewayTabContent
