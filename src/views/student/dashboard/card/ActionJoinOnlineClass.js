import { Card, CardBody, Button, Badge, CardHeader } from 'reactstrap'
import { Video } from 'react-feather'

const ActionJoinOnlineClass = () => {
  return (
    <Card className='text-center border-success h-100 d-flex flex-column'>
      <CardHeader className='border-0 pb-0'>
        <Badge color='light-success'>LIVE</Badge>
      </CardHeader>

      <CardBody className='d-flex flex-column'>
        <div className='mb-1'>
          <Video size={40} className='text-success' />
        </div>

        <h5>Join Online Class</h5>
        <p className='text-muted'>
          Your class is currently live
        </p>

        {/* 👇 THIS LINE IS IMPORTANT */}
        <Button color='success' className='mt-auto' block>
          Join Now
        </Button>
      </CardBody>
    </Card>
  )
}

export default ActionJoinOnlineClass
