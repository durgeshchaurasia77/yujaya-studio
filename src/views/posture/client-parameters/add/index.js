// import { useState, useRef } from 'react'
import { useEffect, useRef, useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  CardTitle,
  Row,
  Form,
  FormGroup,
  CustomInput,
  Button,
  Col,
  Label,
  Input
} from 'reactstrap'
import Stepper from 'bs-stepper'
import 'bs-stepper/dist/css/bs-stepper.min.css'
import Select from 'react-select'
import SelectAllMultiSelect from "../../../../component/SelectAllMultiSelect/SelectAllMultiSelect.js"
import '../../../../assets/css.css'
import { EditorState } from 'draft-js'
import CommonEditor from '../../../../component/common/CommonEditor.js'
import { useHistory } from 'react-router-dom'
import Flatpickr from 'react-flatpickr'
import 'flatpickr/dist/themes/material_blue.css'

const AddClientParameter = () => {
  const history = useHistory()
  const [isEarlyBird, setIsEarlyBird] = useState(false)
  const [status, setStatus] = useState(true)
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const [admissionDate, setAdmissionDate] = useState(null)
  const [dischargeDate, setDischargeDate] = useState(null)
  // const [selectedCountry, setSelectedCountry] = useState(
  //   optionsCountry.find(o => o.value === 'india')
  // )
const [parameters, setParameters] = useState({
  pulse: { by: "", ay: "" },
  respiratory: { by: "", ay: "" },
  sysBP: { by: "", ay: "" },
  diaBP: { by: "", ay: "" },
  breathHold: { by: "", ay: "" },
  symptom: { by: "", ay: "" },
  medication: { by: "", ay: "" }
})

const calculateChange = (by, ay) => {
  if (!by || !ay || Number(by) === 0) return ""
  return (((by - ay) / by) * 100).toFixed(2)
}
  const [steps, setSteps] = useState([
  {
    position: "",
    step: "",
    notes: "",
    image: null
  }
])

const optionaUserList = [
  {
    value: 'CL001',
    label: 'CL001-Rahul Sharma-rahul@gmail.com'
  },
  {
    value: 'CL002',
    label: 'CL002-Priya Verma-priya@gmail.com'
  },
  {
    value: 'CL003',
    label: 'CL003-Amit Singh-amit@gmail.com'
  },
  {
    value: 'CL004',
    label: 'CL004-Neha Gupta-neha@gmail.com'
  },
  {
    value: 'CL005',
    label: 'CL005-Karan Mehta-karan@gmail.com'
  }
]

  return (
  <>
    <Card>
      <CardHeader>
        <h4 className="mb-2">Add Client Parameter</h4>
      </CardHeader>
      <CardBody>
        <Form>

          {/* Vital Signs */}
          <Row>
            
            <Col md={12}>
              <h5 className="font-weight-bold">Vital Sign</h5>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label>
                  Client <span className="text-danger">*</span>
                </Label>
                <Select
                  options={optionaUserList}
                  placeholder="-- Please Select Client--"
                  className="react-select"
                  classNamePrefix="select"
                  isSearchable={false}
                  required
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label>Pulse</Label>
                <Input type="number" />
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup>
                <Label>Respiratory Rate</Label>
                <Input type="number" />
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup>
                <Label>Blood Pressure</Label>
                <Input type="text" />
              </FormGroup>
            </Col>
          </Row>

          {/* Diagnosis */}
          <Row>
            <Col md={4}>
              <FormGroup>
                <Label>Investigation Available</Label>
                <Input type="textarea" rows="2" />
              </FormGroup>
            </Col>

            <Col md={4}>
              <FormGroup>
                <Label>Provisional Diagnosis</Label>
                <Input type="textarea" rows="2" />
              </FormGroup>
            </Col>

            <Col md={4}>
              <FormGroup>
                <Label>Final Diagnosis</Label>
                <Input type="textarea" rows="2" />
              </FormGroup>
            </Col>
          </Row>

          {/* Parameters Table */}
          <Row className="mt-3">
            <Col md={12}>
              <h5 className="font-weight-bold">Parameters</h5>

              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Sr</th>
                    <th>Variable</th>
                    <th>Before Yoga (BY)</th>
                    <th>After Yoga (AY)</th>
                    <th>% Change</th>
                  </tr>
                </thead>
                <tbody>

                  {[
                    ["Pulse (Beats/Min)", "pulse"],
                    ["Respiratory Rate (Cycle/Min)", "respiratory"],
                    ["Sys Blood Pressure (mm Hg)", "sysBP"],
                    ["Dia Blood Pressure (mm Hg)", "diaBP"],
                    ["Breath Holding Time (Sec)", "breathHold"],
                    ["Symptom Score", "symptom"],
                    ["Medication Score", "medication"]
                  ].map(([label, key], i) => (
                    <tr key={key}>
                      <td>{i + 1}</td>
                      <td>{label}</td>
                      <td>
                        <Input
                          type="number"
                          value={parameters[key].by}
                          onChange={e => setParameters({ ...parameters, [key]: { ...parameters[key], by: e.target.value } }) }
                        />
                      </td>
                      <td>
                        <Input
                          type="number"
                          value={parameters[key].ay}
                          onChange={e => setParameters({ ...parameters, [key]: { ...parameters[key], ay: e.target.value } }) }
                        />
                      </td>
                      <td>
                        <Input
                          type="text"
                          readOnly
                          value={calculateChange(
                            parameters[key].by,
                            parameters[key].ay
                          )}
                        />
                      </td>
                    </tr>
                  ))}

                </tbody>
              </table>
            </Col>
          </Row>
          <Row className='mt-2'>
            <Col md={6}>
              <FormGroup>
                <div className="mt-2">
                <Label className="font-weight-bold">Pathogenesis</Label>
                </div>
              </FormGroup>
            </Col>
            
            <Col md={6}>
              <FormGroup>
                <Label className="font-weight-bold">Treatment</Label>
                <div className="ml-2">
                  <Input type="checkbox" className="custom-checkbox"/>
                  <Label check className="mr-3 custom-lebal-style"> Physical</Label>
                  <Input type="checkbox" className="custom-checkbox"/>
                  <Label check className="mr-3 custom-lebal-style"> Vital</Label>
                  <Input type="checkbox" className="custom-checkbox"/>
                  <Label check className="mr-3 custom-lebal-style"> Mental</Label>
                  <Input type="checkbox" className="custom-checkbox"/>
                  <Label check className="mr-3 custom-lebal-style"> Intellectual</Label>
                  <Input type="checkbox" className="custom-checkbox"/> 
                  <Label check className="mr-3 custom-lebal-style">Bliss</Label>
                </div>
              </FormGroup>
            </Col>
          </Row>
          {/* Discussion */}
          <Row>
            <Col md={6}>
              <FormGroup>
                <CommonEditor height={180} />
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup>
                <div className="">
                <CommonEditor height={180} />
                </div>
              </FormGroup>
            </Col>
          </Row>

          {/* Dates */}
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label>Date of Admission</Label>
                <Flatpickr
                  value={admissionDate}
                  onChange={date => setAdmissionDate(date)}
                  className="form-control"
                  options={{
                    dateFormat: "d-m-Y",
                    allowInput: true
                  }}
                  placeholder="Select admission date"
                />
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup>
                <Label>Date of Discharge</Label>
                <Flatpickr
                  value={dischargeDate}
                  onChange={date => setDischargeDate(date)}
                  className="form-control"
                  options={{
                    dateFormat: "d-m-Y",
                    minDate: admissionDate?.[0] || null,
                    allowInput: true
                  }}
                  placeholder="Select discharge date"
                />
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </CardBody>
      <CardFooter>
        <div className='button-alignment-accouncement'>
        <Button color="secondary" onClick={() => history.push('/posture/client-parameters/list')}>
            Cancel
          </Button>
          <Button color="primary" className='ml-2'>
            Submit
          </Button>
          </div>
      </CardFooter>
    </Card>
  </>
  )
}

export default AddClientParameter
