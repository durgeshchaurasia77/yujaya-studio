import { useState } from 'react'
import Select from 'react-select'
import '../../../assets/css.css'

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

const NotificationsTabContent = ({ data }) => {
  const [followMe, setFollowMe] = useState(data.followMe)
  const [blogDigest, setBlogDigest] = useState(data.blogDigest)
  const [answerOnForm, setAnswerOnForm] = useState(data.answerOnForm)
  const [productUpdates, setProductUpdates] = useState(data.productUpdates)
  const [newAnnouncements, setNewAnnouncements] = useState(data.newAnnouncements)
  const [commentOnArticle, setCommentOnArticle] = useState(data.commentOnArticle)
  const [activeTab, setActiveTab] = useState('class')
  const toggleTab = tab => {
    if (activeTab !== tab) setActiveTab(tab)
  }

return (
  <Row>
    {/* TABS HEADER */}
    <Col sm="12">
      <Nav tabs className="mb-2 nav-bar-notification">
        {[
          { id: 'basic', label: 'Basic' },
          { id: 'class', label: 'Class' },
          { id: 'packages', label: 'Packages' },
          { id: 'membership', label: 'Membership' },
          { id: 'therapy', label: 'Therapy' },
          { id: 'technical', label: 'Technical' },
          { id: 'marketing', label: 'Marketing' },
          { id: 'email', label: 'Email Notifications' }
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
        <TabPane tabId="basic">
          <h5 className="mb-50">Recent Devices</h5>
          <p className="text-muted">
            We need permission from your browser to show notifications.{' '}
            <a href="/" onClick={e => e.preventDefault()}>
              Request Permission
            </a>
          </p>

          <div className="table-responsive">
            <table className="table table-borderless">
              <thead>
                <tr>
                  <th>TYPE</th>
                  <th className="text-center">EMAIL</th>
                  <th className="text-center">BROWSER</th>
                  <th className="text-center">APP</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    label: 'New for you',
                    email: true,
                    browser: true,
                    app: true
                  },
                  {
                    label: 'Account activity',
                    email: true,
                    browser: true,
                    app: true
                  },
                  {
                    label: 'A new browser used to sign in',
                    email: true,
                    browser: true,
                    app: false
                  },
                  {
                    label: 'A new device is linked',
                    email: true,
                    browser: false,
                    app: false
                  }
                ].map((row, i) => (
                  <tr key={i}>
                    <td>{row.label}</td>
                    <td className="text-center">
                      <CustomInput
                        type="checkbox"
                        id={`email-${i}`}
                        defaultChecked={row.email}
                      />
                    </td>
                    <td className="text-center">
                      <CustomInput
                        type="checkbox"
                        id={`browser-${i}`}
                        defaultChecked={row.browser}
                      />
                    </td>
                    <td className="text-center">
                      <CustomInput
                        type="checkbox"
                        id={`app-${i}`}
                        defaultChecked={row.app}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Col sm="6" className="mt-2 p-0">
            <Label>When should we send you notifications?</Label>
            <Select
              options={notificationType}
              classNamePrefix="select"
              required
            />
          </Col>

          
        </TabPane>

        {/* ================= CLASS TAB ================= */}
        <TabPane tabId="class">
          <h5 className="mb-1">General Notifications</h5>
          {/* <h6 className="mb-2">Class Related</h6> */}

          <Row>
            {/* ===== LEFT COLUMN : STUDENT ===== */}
            <Col md="6" sm="12">
              <h6 className="font-weight-bold mb-1">Student</h6>

              {[
                'Class booked successfully',
                'Class reminder (24h / 2h / 30min before)',
                'Class rescheduled',
                'Class cancelled',
                'Class instructor changed',
                'Class moved to online / offline',
                'Class fully booked (waitlist)',
                'Spot available from waitlist',
                'Class feedback request',
                'Class recording available'
              ].map((item, i) => (
                <div key={i} className="student-notification-tab">
                  <CustomInput
                    type="switch"
                    id={`student-${i}`}
                     label={item}
                    defaultChecked
                  />
                  {/* <span className="ml-1">{item}</span> */}
                </div>
              ))}
            </Col>

            {/* ===== RIGHT COLUMN : INSTRUCTORS ===== */}
            <Col md="6" sm="12">
              <h6 className="font-weight-bold mb-1">For Instructors</h6>

              {[
                'New class assigned',
                'Class cancellation',
                'Class schedule updated',
                'Substitute assigned'
              ].map((item, i) => (
                <div key={i} className="student-notification-tab">
                  <CustomInput
                    type="switch"
                    id={`instructor-${i}`}
                     label={item}
                    defaultChecked
                  />
                  {/* <span className="ml-1">{item}</span> */}
                </div>
              ))}
            </Col>
          </Row>
        </TabPane>

        <TabPane tabId="packages">
          <h5 className="mb-1">General Notifications</h5>
          <Row>
            <Col md="12" sm="12">
              <h6 className="font-weight-bold mb-1">For Students</h6>

              {[
                'Package purchased successfully',
                'Package expiring soon',
                'Package expired',
                'Package upgraded / downgraded'
              ].map((item, i) => (
                <div key={i} className="student-notification-tab">
                  <CustomInput
                    type="switch"
                    id={`student-${i}`}
                     label={item}
                    defaultChecked
                  />
                  {/* <span className="ml-1">{item}</span> */}
                </div>
              ))}
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="membership">
          <h5 className="mb-1">General Notifications</h5>
          <Row>
            <Col md="12" sm="12">
              <h6 className="font-weight-bold mb-1">For Students</h6>

              {[
                'New membership signup',
                'Membership renewal reminder',
                'Membership expired',
                'Membership auto-renew success',
                'Payment failed (retry needed)',
                'Membership paused',
                'Membership cancelled'
              ].map((item, i) => (
                <div key={i} className="student-notification-tab">
                  <CustomInput
                    type="switch"
                    id={`student-${i}`}
                     label={item}
                    defaultChecked
                  />
                  {/* <span className="ml-1">{item}</span> */}
                </div>
              ))}
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="therapy">
          <h5 className="mb-1">General Notifications</h5>
          <Row>
            <Col md="6" sm="12">
              <h6 className="font-weight-bold mb-1">For Clients</h6>

              {[
                'Therapy session booked',
                'Session cancelled',
                'Feedback request'
              ].map((item, i) => (
                <div key={i} className="student-notification-tab">
                  <CustomInput
                    type="switch"
                    id={`student-${i}`}
                     label={item}
                    defaultChecked
                  />
                  {/* <span className="ml-1">{item}</span> */}
                </div>
              ))}
            </Col>
            <Col md="6" sm="12">
              <h6 className="font-weight-bold mb-1">For Therapists</h6>

              {[
                'New appointment booked',
                'Daily schedule summary'
              ].map((item, i) => (
                <div key={i} className="student-notification-tab">
                  <CustomInput
                    type="switch"
                    id={`student-${i}`}
                     label={item}
                    defaultChecked
                  />
                  {/* <span className="ml-1">{item}</span> */}
                </div>
              ))}
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="technical">
          <h5 className="mb-1">General Notifications</h5>
          <Row>
            <Col md="12" sm="12">
              <h6 className="font-weight-bold mb-1">Security</h6>
              {[
                'New device login detected',
                'Password changed',
                'Email / phone updated',
                'Suspicious activity detected'
              ].map((item, i) => (
                <div key={i} className="student-notification-tab">
                  <CustomInput
                    type="switch"
                    id={`student-${i}`}
                     label={item}
                    defaultChecked
                  />
                  {/* <span className="ml-1">{item}</span> */}
                </div>
              ))}
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="marketing">
          <h5 className="mb-1">General Notifications</h5>
          <Row>
            <Col md="12" sm="12">
              <h6 className="font-weight-bold mb-1">Marketing</h6>
              {[
                'New class launched',
                'Special offer / discount available',
                'Festival / holiday greeting',
                'Birthday greeting',
                'Re-engagement reminder (inactive user)'
              ].map((item, i) => (
                <div key={i} className="student-notification-tab">
                  <CustomInput
                    type="switch"
                    id={`student-${i}`}
                     label={item}
                    defaultChecked
                  />
                </div>
              ))}
            </Col>
          </Row>
        </TabPane>
       <TabPane tabId="email">
          <h5 className="mb-2">Email Notifications</h5>

          {/* ===== SEND EMAILS FROM ===== */}
          <h6 className="font-weight-bold mb-1">Send Emails From</h6>
          <Row>
            <Col md="6">
              <FormGroup>
                <Label>From Email</Label>
                <Input defaultValue="enquiry@ancientyogaacademy.com" />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label>From Name</Label>
                <Input defaultValue="Ancient Yoga Academy" />
              </FormGroup>
            </Col>
          </Row>

          <hr />

          {/* ===== SMTP CONFIGURATION ===== */}
          <h6 className="font-weight-bold mb-1">
            SMTP Configuration <small className="text-muted">(For Mass Mail)</small>
          </h6>

          <Row>
            <Col md="6">
              <FormGroup>
                <Label>SMTP From Name</Label>
                <Input defaultValue="System Admin" />
              </FormGroup>
            </Col>

            <Col md="6">
              <FormGroup>
                <Label>SMTP From Email</Label>
                <Input defaultValue="no-reply@studio.com" />
              </FormGroup>
            </Col>

            <Col md="6">
              <FormGroup>
                <Label>SMTP Host</Label>
                <Input defaultValue="smtp.mailtrap.io" />
              </FormGroup>
            </Col>

            <Col md="3">
              <FormGroup>
                <Label>SMTP Port</Label>
                <Input defaultValue="2525" />
              </FormGroup>
            </Col>

            <Col md="6">
              <FormGroup>
                <Label>Username</Label>
                <Input defaultValue="7afbe3a03cb8ec" />
              </FormGroup>
            </Col>

            <Col md="6">
              <FormGroup>
                <Label>Password</Label>
                <Input type="password" defaultValue="********" />
              </FormGroup>
            </Col>

            <Col md="4">
              <FormGroup>
                <Label>Encryption</Label>
                <Input type="select">
                  <option>TLS</option>
                  <option>SSL</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>

          {/* ===== SMTP ACTIONS ===== */}
          <Row className="mt-1">
            <Col md="12">
              <CustomInput
                type="radio"
                id="send-test"
                name="smtp-action"
                label="Send Test Email"
                className="mb-50"
              />
              <CustomInput
                type="radio"
                id="verify-connection"
                name="smtp-action"
                label="Verify Connection"
              />
            </Col>
          </Row>

          {/* ===== STATUS ===== */}
          <Row className="mt-1">
            <Col md="12">
              <Label>Status</Label>
              <ul className="text-muted ml-1">
                <li>Connected / Failed</li>
                <li>Error reason shown clearly</li>
              </ul>
            </Col>
          </Row>
          <hr />
          {/* ===== PHP MAIL ===== */}
          <h6 className="font-weight-bold mb-1">PHP Mail</h6>
          <Row>
            <Col md="6">
              <FormGroup>
                <Label>From Name</Label>
                <Input defaultValue="System Admin" />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label>From Email</Label>
                <Input defaultValue="admin@ims.com" />
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label>Active Status</Label>
                <Select
                  options={statusType}
                  classNamePrefix="select"
                  required
                />
              </FormGroup>
            </Col>
          </Row>
        </TabPane>

        {/* ================= OTHER TABS ================= */}
        {['packages', 'membership', 'therapy', 'technical', 'marketing', 'email'].map(tab => (
          <TabPane key={tab} tabId={tab}>
            <p className="text-muted mt-2">
              Settings for <strong>{tab}</strong> notifications will appear here.
            </p>
          </TabPane>
        ))}
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

export default NotificationsTabContent
