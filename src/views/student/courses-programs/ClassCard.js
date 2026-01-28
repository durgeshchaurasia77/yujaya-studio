import { Card, CardBody, Button, Badge, Progress } from 'reactstrap'
import { Star } from 'react-feather'
import { useHistory, useParams } from 'react-router-dom'
import './style.css'
const ClassCard = ({ item }) => {
    const history = useHistory()
  return (
    <Card
        className='h-100 cursor-pointer'
        onClick={() => history.push(`/student-auth/courses-programs-details/${item.id}`)}
        >
      {/* <img
        src={item.image}
        alt={item.title}
        className='img-fluid rounded-top'
      /> */}
        <div className='class-img-wrapper'>
            <img
                src={item.image}
                alt={item.title}
                className='class-img'
            />
        </div>

      <CardBody>
        <div className='d-flex justify-content-between mb-1'>
          <Badge color={item.type === 'Live' ? 'light-danger' : 'light-primary'}>
            {item.type}
          </Badge>
          <div className='text-warning d-flex align-items-center'>
            <Star size={14} fill='#FFC107' />
            <small className='ml-25'>{item.rating}</small>
          </div>
        </div>

        <h5 className='mb-50'>{item.title}</h5>
        <p className='text-muted font-small-2'>
          {item.description}
        </p>

        <small className='text-muted'>{item.duration}</small>

        <Progress value={item.progress} className='my-1' />

        <div className='d-flex justify-content-between'>
          <Button size='sm' outline color='secondary'>
            Start Over
          </Button>
          <Button size='sm' color='primary'>
            Continue
          </Button>
        </div>
      </CardBody>
    </Card>
  )
}

export default ClassCard
