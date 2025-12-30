// import { useState, useRef } from 'react'
import { useEffect, useRef, useState } from 'react'
import {
  Card,
  CardBody,
  Button
} from 'reactstrap'
import Stepper from 'bs-stepper'
import 'bs-stepper/dist/css/bs-stepper.min.css'

// Steps
import MailingAddress from './steps/MailingAddress'
import PersonalInfo from './steps/PersonalInfo'
import HealthIssues from './steps/HealthIssues'
import SocialLinks from './steps/SocialLinks'
import PastHistory from './steps/PastHistory'
import '../../../assets/css.css'
const AddStaff = () => {
  const stepperRef = useRef(null)
  const [stepper, setStepper] = useState(null)

  useEffect(() => {
    if (stepperRef.current) {
        const stepperInstance = new Stepper(stepperRef.current, {
        linear: false,
        animation: true
        })
        setStepper(stepperInstance)

        stepperInstance.to(1)
    }
    }, [])

    const handleNext = () => {
    if (stepper) stepper.next()
    }

    const handlePrev = () => {
    if (stepper) stepper.previous()
    }

  return (
    <Card>
      <CardBody>
        {/* STEPPER HEADER */}
        <div
          ref={stepperRef}
          className="bs-stepper"
        >
          <div className="bs-stepper-header">
            <div className="step" data-target="#mailing">
                <button className="step-trigger">
                    <span className="bs-stepper-circle">1</span>
                    <span className="bs-stepper-label">Mailing Address</span>
                </button>
            </div>

            <div className="line" />

            <div className="step" data-target="#personal">
                <button className="step-trigger">
                    <span className="bs-stepper-circle">2</span>
                    <span className="bs-stepper-label">Personal Info</span>
                </button>
            </div>

            <div className="line" />

            <div className="step" data-target="#health">
              <button className="step-trigger">
                <span className="bs-stepper-circle">3</span>
                <span className="bs-stepper-label">Health Issues</span>
              </button>
            </div>

            <div className="line" />

            <div className="step" data-target="#social">
              <button className="step-trigger">
                <span className="bs-stepper-circle">4</span>
                <span className="bs-stepper-label">Social Links</span>
              </button>
            </div>

            <div className="line" />

            <div className="step" data-target="#history">
              <button className="step-trigger">
                <span className="bs-stepper-circle">5</span>
                <span className="bs-stepper-label">Past History</span>
              </button>
            </div>
          </div>

          {/* STEPPER CONTENT */}
          <div className="bs-stepper-content mt-2">
            <div id="mailing" className="content">
              <MailingAddress />
              <div className="d-flex justify-content-end">
                <Button  color="primary" onClick={handleNext}>
                  Next
                </Button>
              </div>
            </div>

            <div id="personal" className="content">
              <PersonalInfo />
              <div className="d-flex justify-content-between">
                <Button onClick={handlePrev}>Previous</Button>
                <Button color="primary" onClick={handleNext}>Next</Button>
              </div>
            </div>

            <div id="health" className="content">
              <HealthIssues />
              <div className="d-flex justify-content-between">
                <Button onClick={handlePrev}>Previous</Button>
                <Button color="primary" onClick={handleNext}>Next</Button>
              </div>
            </div>

            <div id="social" className="content">
              <SocialLinks />
              <div className="d-flex justify-content-between">
                <Button onClick={handlePrev}>Previous</Button>
                <Button color="primary" onClick={handleNext}>Next</Button>
              </div>
            </div>

            <div id="history" className="content">
              <PastHistory />
              <div className="d-flex justify-content-between align-end">
                <Button onClick={handlePrev}>Previous</Button>
                <Button color="success">Submit</Button>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

export default AddStaff
