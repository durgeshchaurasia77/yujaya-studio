import { Card, CardBody, Button } from 'reactstrap'
import { Users } from 'react-feather'

const StudentCountCard = ({ total = 0, active = 0 }) => {
  return (
    <Card className='text-center h-100 d-flex flex-column'>
      <CardBody className='d-flex flex-column'>

        <Users size={40} className='mb-1 text-primary' />

        <h5 className='mb-0'>Students</h5>
        <p className='text-muted mb-2'>
          Total enrolled & active students
        </p>

        {/* Counts */}
        <div className='mb-2'>
          <h3 className='mb-0'>{total}</h3>
          <small className='text-muted'>
            Active: {active}
          </small>
        </div>

        <Button
          color='primary'
          className='mt-auto'
          block
        >
          View Students
        </Button>

      </CardBody>
    </Card>
  )
}

export default StudentCountCard
