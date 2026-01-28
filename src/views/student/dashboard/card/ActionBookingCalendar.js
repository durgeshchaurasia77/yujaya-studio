import { Card, CardBody, Button } from 'reactstrap'
import { Calendar } from 'react-feather'

const ActionBookingCalendar = () => {
  return (
    <Card className='text-center h-100 d-flex flex-column'>
      <CardBody className='d-flex flex-column'>
        <Calendar size={40} className='mb-1 text-primary' />

        <h5>Booking Calendar</h5>
        <p className='text-muted'>
          View & manage your class bookings
        </p>

        <Button color='primary' className='mt-auto' block>
          Open Calendar
        </Button>
      </CardBody>
    </Card>
  )
}

export default ActionBookingCalendar
