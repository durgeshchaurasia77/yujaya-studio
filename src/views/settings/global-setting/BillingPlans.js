import { Fragment, useState } from 'react'
import classnames from 'classnames'
import { useForm, Controller } from 'react-hook-form'
// import { Button, Media, Label, Row, Col, Input, FormGroup, Alert, Form } from 'reactstrap'
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Row,
  Col,
  Media,
  Button,
  Label,
  Input,
  Form,
  FormGroup,
  Alert,
  Progress,
  CustomInput,
  Badge
} from 'reactstrap'
import './style.css'
const BillingPlansTabs = ({ data }) => {
  const { register, errors, handleSubmit, control, setValue, trigger } = useForm()

  const [avatar, setAvatar] = useState(data.avatar ? data.avatar : '')

  const onChange = e => {
    const reader = new FileReader(),
      files = e.target.files
    reader.onload = function () {
      setAvatar(reader.result)
    }
    reader.readAsDataURL(files[0])
  }

  const onSubmit = data => trigger()

return (
  <Fragment>
    <Row>
      {/* ===== CURRENT PLAN ===== */}
      <Col md="12" className="billing-section">
        <Card className="billing-card">
          <CardHeader>
            <CardTitle tag="h4">Current Plan</CardTitle>
          </CardHeader>

          <CardBody>
            <Row>
              {/* LEFT CONTENT */}
              <Col md="7">
                <h6>Your Current Plan is Basic</h6>
                <p className="text-muted">
                  A simple start for everyone
                </p>

                <h6 className="mt-1">Active until Dec 09, 2021</h6>
                <p className="text-muted">
                  We will send you a notification upon subscription expiration
                </p>

                <h5 className="mt-1">
                  $199 <small className="text-muted">/ month</small>
                  <span className="badge badge-light-primary ml-1">
                    Popular
                  </span>
                </h5>

                <p className="text-muted">
                  Standard plan for small to medium businesses
                </p>

                <div className="mt-2">
                  <Button.Ripple color="primary" className="mr-1">
                    Upgrade Plan
                  </Button.Ripple>
                  <Button.Ripple color="danger" outline>
                    Cancel Subscription
                  </Button.Ripple>
                </div>
              </Col>

              {/* RIGHT CONTENT */}
              <Col md="5">
                <Alert color="warning" className="warning-style">
                  <div className="attention-align">
                    <span className="alert-icon rounded">
                      <i className="icon-base ti tabler-alert-triangle icon-md" />
                    </span>
                    <div>
                      <h6 className="mb-25">We need your attention!</h6>
                      <small>Your plan requires update</small>
                    </div>
                  </div>
                </Alert>

                <div className="mt-2">
                  <div className="d-flex justify-content-between mb-25">
                    <small>Days</small>
                    <small>12 of 30 Days</small>
                  </div>
                  <Progress value="40" />
                  <small className="text-muted d-block mt-50">
                    18 days remaining until your plan requires update
                  </small>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
    <Row className="payment-divider">
      {/* ===== PAYMENT METHODS ===== */}
      <Col md="12" className="billing-section mt-2">
        <Card className="billing-card">
          <CardHeader>
            <CardTitle tag="h4">Payment Methods</CardTitle>
          </CardHeader>

          <CardBody>
            <Row>
              {/* LEFT – FORM */}
              <Col md="6">
                <Form>
                  <FormGroup className="mb-2">
                    <div className="d-flex">
                      <CustomInput
                        type="radio"
                        id="card"
                        name="payment"
                        label="Credit/Debit/ATM Card"
                        defaultChecked
                        className="mr-2"
                      />
                      <CustomInput
                        type="radio"
                        id="paypal"
                        name="payment"
                        label="Paypal account"
                      />
                    </div>
                  </FormGroup>

                  <FormGroup>
                    <Label>Card Number</Label>
                    <Input placeholder="2434 34" />
                  </FormGroup>

                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <Label>Name</Label>
                        <Input placeholder="John Doe" />
                      </FormGroup>
                    </Col>
                    <Col md="3">
                      <FormGroup>
                        <Label>Exp. Date</Label>
                        <Input placeholder="MM/YY" />
                      </FormGroup>
                    </Col>
                    <Col md="3">
                      <FormGroup>
                        <Label>CVV Code</Label>
                        <Input placeholder="654" />
                      </FormGroup>
                    </Col>
                  </Row>

                  <FormGroup className="mt-1">
                    <CustomInput
                      type="switch"
                      id="saveCard"
                      label="Save card for future billing?"
                    />
                  </FormGroup>

                  <div className="mt-2">
                    <Button.Ripple color="primary" className="mr-1">
                      Save Changes
                    </Button.Ripple>
                    <Button.Ripple color="secondary" outline>
                      Cancel
                    </Button.Ripple>
                  </div>
                </Form>
              </Col>

              {/* RIGHT – MY CARDS */}
              <Col md="6">
                <h6 className="mb-2">My Cards</h6>

                <div className="my-card-item">
                  <CardBody>
                    <div className="d-flex justify-content-between">
                      <div>
                        <h6 className="mb-25">
                          Tom McBride{' '}
                          <Badge color="light-primary" pill>
                            Primary
                          </Badge>
                        </h6>
                        <small className="text-muted">
                          **** **** 9856
                        </small>
                      </div>
                      <div className="text-right">
                        <Button color="light-primary" size="sm" className="mr-50">
                          Edit
                        </Button>
                        <Button color="light-danger" size="sm">
                          Delete
                        </Button>
                        <div>
                          <small className="text-muted">
                            Card expires at 12/26
                          </small>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </div>

                <Card className="bg-light border-0">
                  <CardBody>
                    <div className="d-flex justify-content-between">
                      <div>
                        <h6 className="mb-25">Mildred Wagner</h6>
                        <small className="text-muted">
                          **** **** 5896
                        </small>
                      </div>
                      <div className="text-right">
                        <Button color="light-primary" size="sm" className="mr-50">
                          Edit
                        </Button>
                        <Button color="light-danger" size="sm">
                          Delete
                        </Button>
                        <div>
                          <small className="text-muted">
                            Card expires at 10/27
                          </small>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
    {/* ===== BILLING ADDRESS ===== */}
    <Col md="12" className="mt-2">
      <Card className="billing-card">
        <CardHeader>
          <CardTitle tag="h4">Billing Address</CardTitle>
        </CardHeader>

        <CardBody>
          <Row>
            <Col md="6">
              <FormGroup>
                <Label>Company Name</Label>
                <Input placeholder="Pixinvent" />
              </FormGroup>
            </Col>

            <Col md="6">
              <FormGroup>
                <Label>Billing Email</Label>
                <Input placeholder="john.doe@example.com" />
              </FormGroup>
            </Col>

            <Col md="6">
              <FormGroup>
                <Label>Tax ID</Label>
                <Input placeholder="Enter Tax ID" />
              </FormGroup>
            </Col>

            <Col md="6">
              <FormGroup>
                <Label>VAT Number</Label>
                <Input placeholder="Enter VAT Number" />
              </FormGroup>
            </Col>

            <Col md="6">
              <FormGroup>
                <Label>Mobile</Label>
                <Input placeholder="US (+1) 202 555 0111" />
              </FormGroup>
            </Col>

            <Col md="6">
              <FormGroup>
                <Label>Country</Label>
                <Input type="select">
                  <option>USA</option>
                  <option>India</option>
                  <option>UK</option>
                </Input>
              </FormGroup>
            </Col>

            <Col md="12">
              <FormGroup>
                <Label>Billing Address</Label>
                <Input placeholder="Billing Address" />
              </FormGroup>
            </Col>

            <Col md="6">
              <FormGroup>
                <Label>State</Label>
                <Input placeholder="California" />
              </FormGroup>
            </Col>

            <Col md="6">
              <FormGroup>
                <Label>Zip Code</Label>
                <Input placeholder="231465" />
              </FormGroup>
            </Col>

            <Col md="12" className="mt-1">
              <Button.Ripple color="primary" className="mr-1">
                Save changes
              </Button.Ripple>
              <Button.Ripple color="secondary" outline>
                Discard
              </Button.Ripple>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  </Fragment>
)

}

export default BillingPlansTabs
