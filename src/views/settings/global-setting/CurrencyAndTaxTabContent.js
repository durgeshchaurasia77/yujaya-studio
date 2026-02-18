import * as yup from 'yup'
import classnames from 'classnames'
import { useForm, useFieldArray  } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import InputPasswordToggle from '@components/input-password-toggle'
import {
  Form,
  FormGroup,
  Row,
  Col,
  Button,
  Label,
  Input
} from 'reactstrap'
import Select from 'react-select'
import './style.css'
const timeZoneOptions = [
  { value: 'IST', label: 'IST (India Standard Time)' },
  { value: 'GMT', label: 'GMT' },
  { value: 'EST', label: 'EST' }
]

const currencyOptions = [
  { value: 'INR', label: 'INR - Indian Rupee' },
  { value: 'USD', label: 'USD - US Dollar' },
  { value: 'EUR', label: 'EUR - Euro' }
]

const currencyConversionOptions = [
  { value: 'fixed', label: 'Fixed' },
  { value: 'auto', label: 'Auto' }
]

const languageOptions = [
  { value: 'en', label: 'English' },
  { value: 'hi', label: 'Hindi' }
]
const CurrencyAndTaxTabContent = () => {
  // const Schema = yup.object().shape({
  //   timeZone: yup.string().required(),
  //   currency: yup.string().required(),
  //   currencyConversion: yup.string().required(),
  //   language: yup.string().required(),
  //   salesTax: yup.number().required(),
  //   taxType: yup.string().required()
  // })
const Schema = yup.object().shape({
  timeZone: yup.string().required(),
  currency: yup.string().required(),
  currencyConversion: yup.string().required(),
  language: yup.string().required(),
  taxes: yup.array().of(
    yup.object().shape({
      salesTax: yup
        .number()
        .typeError("Required")
        .required("Sales tax required"),
      taxType: yup.string().required("Tax type required")
    })
  )
})
  // const { register, errors, handleSubmit } = useForm({
  //   resolver: yupResolver(Schema)
  // })
const {
    register,
    control,
    errors,
    handleSubmit
  } = useForm({
    resolver: yupResolver(Schema),
    defaultValues: {
      taxes: [{ salesTax: "", taxType: "" }]
    }
  })

  const { fields, append, remove } = useFieldArray({
  control,
  name: "taxes"
})

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
        <h5 className="mb-2">Currency And Tax</h5>
      <Row>
        {/* TIME ZONE */}
        <Col md="6">
          {/* <FormGroup>
            <Label>Time Zone</Label>
            <Input type="select" name="timeZone" innerRef={register()}>
              <option value="">-- Please Select --</option>
              <option value="IST">IST</option>
              <option value="GMT">GMT</option>
              <option value="EST">EST</option>
            </Input>
          </FormGroup> */}
          <FormGroup>
            <Label>Time Zone</Label>
            <Select
              options={timeZoneOptions}
              classNamePrefix="select"
              placeholder="-- Please Select --"
            />
          </FormGroup>
        </Col>

        {/* CURRENCY */}
        <Col md="6">
          <FormGroup>
            <Label>Currency</Label>
            <Select
              options={currencyOptions}
              classNamePrefix="select"
              placeholder="-- Please Select --"
            />
          </FormGroup>
        </Col>

        {/* CURRENCY CONVERSION */}
        <Col md="6">
          {/* <FormGroup>
            <Label>Currency Conversion</Label>
            <Input
              type="select"
              name="currencyConversion"
              innerRef={register()}
            >
              <option value="fixed">Fixed</option>
              <option value="auto">Auto</option>
            </Input>
          </FormGroup> */}
          <FormGroup>
            <Label>Currency Conversion</Label>
            <Select
              options={currencyConversionOptions}
              classNamePrefix="select"
            />
          </FormGroup>
        </Col>

        {/* LANGUAGE */}
        <Col md="6">
          {/* <FormGroup>
            <Label>Language</Label>
            <Input type="select" name="language" innerRef={register()}>
              <option value="">-- Please Select --</option>
              <option value="en">English</option>
              <option value="hi">Hindi</option>
            </Input>
          </FormGroup> */}
          <FormGroup>
            <Label>Language</Label>
            <Select
              options={languageOptions}
              classNamePrefix="select"
              placeholder="-- Please Select --"
            />
          </FormGroup>
        </Col>

        {/* SALES TAX */}
        {/* {fields.map((item, index) => (
  <Row key={item.id} className="align-items-end mb-2"> */}
  {/* <Col md="12"> */}
  {fields.map((item, index) => (
    <Row key={item.id} className="align-items-end mb-2">

    <Col md="5">
      <FormGroup>
        <Label>Sales Tax Percent (%)</Label>
        <Input
          type="number"
          step="0.01"
          name={`taxes[${index}].salesTax`}
          placeholder="Enter percent"
          innerRef={register()}
        />
      </FormGroup>
    </Col>

    <Col md="5">
      <FormGroup>
        <Label>Tax Type</Label>
        <Input
          name={`taxes[${index}].taxType`}
          placeholder="GST"
          innerRef={register()}
        />
      </FormGroup>
    </Col>

    <Col md="2">
      <Button
        color="danger"
        type="button"
        className='cross-button-style'
        onClick={() => remove(index)}
      >
        X
      </Button>
    </Col>
  </Row>
))}
<Button
className='button-currancy-alignment'
  color="primary"
  type="button"
  onClick={() => append({ salesTax: "", taxType: "" })}
>
  ADD TAX
</Button>
        {/* ACTION BUTTONS */}
        <Col sm="12" className="mt-2">
          <Button.Ripple type="submit" color="primary" className="mr-1">
            Save Changes
          </Button.Ripple>
          <Button.Ripple color="secondary" outline>
            Cancel
          </Button.Ripple>
        </Col>
      </Row>
    </Form>
  )
}

export default CurrencyAndTaxTabContent
