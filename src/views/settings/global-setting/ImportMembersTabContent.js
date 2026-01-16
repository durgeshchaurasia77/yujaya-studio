import { Form, Row, Col, FormGroup, Label, Input, Button, CustomInput } from 'reactstrap'

const ImportMembersTabContent = () => {
  return (
    <Form>
      {/* INTRO */}
      <p className="mb-2">
        Migrate your members and their existing packages with a simple upload of their details.
        Contact your Account Manager if you're unsure how to proceed.
      </p>

      <hr />

      {/* HEADER */}
      <h5 className="mb-1">Upload Members – View Migrated Members</h5>
      <h6 className="mb-2 text-muted">Import a CSV file</h6>

      {/* INSTRUCTIONS */}
      <p>
        To migrate your members, please upload a CSV file with the following columns:
      </p>

      <p className="font-weight-bold">
        Email, Full name, Package name, Date purchased, Classes left, Expiry date
      </p>

      <p className="mb-1">
        You may also include the following optional values in your CSV file, else leave them blank:
      </p>

      <ul className="pl-2">
        <li>
          <strong>Price:</strong> Previous package price, if it is different from the current price.
          This price influences Sales Reports and is used for billing future payments for recurring packages.
        </li>
        <li>
          <strong>Renewal Cycles Left:</strong> Number of remaining renewal cycles (for recurring packages).
        </li>
      </ul>

      {/* NOTE */}
      <p className="mt-1">
        <strong>Note:</strong> The date format <strong>MUST</strong> be in the following format:
        <br />
        <strong>Day Month Year</strong>, where Year is in the form of YYYY.
        <br />
        Example: <strong>15 January 2019</strong>
      </p>

      {/* DOWNLOAD SAMPLE */}
      <div className="mb-2">
        <a href="/" onClick={e => e.preventDefault()}>
          Download sample migration file below for reference
        </a>
        <br />
        <a href="/" onClick={e => e.preventDefault()} className="font-weight-bold">
          DOWNLOAD SAMPLE FILE
        </a>
      </div>

      {/* UPLOAD CSV */}
      <Row className="align-items-center mb-2">
        <Col md="6">
          <FormGroup>
            <Label>Upload CSV</Label>
            <Input type="file" />
          </FormGroup>
        </Col>
      </Row>

      {/* INFO AFTER UPLOAD */}
      <p className="mb-2">
        After uploading the CSV file, your members will be able to sign up for an account
        with the same email address as the one stated in the file. The migrated package
        will be automatically deposited into their accounts once they have signed up.
      </p>

      {/* EMAIL OPTION */}
      <FormGroup>
        <CustomInput
          type="checkbox"
          id="send-email"
          label="Send email to members on how to redeem their migrated package"
        />
      </FormGroup>

      {/* ACTION */}
      <Row className="mb-2">
        <Col>
          <div className="mt-2 button-alignment-accouncement">
          <Button.Ripple color="primary" className="mr-1">
            Upload & Migrate
          </Button.Ripple>
          <Button.Ripple color="secondary" outline>
            Discard
          </Button.Ripple>
        </div>
        </Col>
      </Row>
    </Form>
  )
}

export default ImportMembersTabContent
