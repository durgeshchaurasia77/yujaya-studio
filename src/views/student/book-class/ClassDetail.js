import { useHistory, useParams } from 'react-router-dom'
import { Row, Col, Card, CardBody, ListGroup, ListGroupItem, Badge } from 'reactstrap'
import { classesData } from './classesData'
import './style.css'
const ClassDetail = () => {
  const { id } = useParams()
  const history = useHistory()
  const course = classesData.find(item => item.id === Number(id))

  if (!course) {
    return <p>Course not found</p>
  }

  return (
    <div>

      {/* TITLE */}
      {/* <h3 className='mb-0'>{course.title}</h3>
      <small className='text-muted'>
        Instructor: Demo Instructor
      </small> */}
        <div className='d-flex align-items-center mb-2'>
          <div>
            <h3 className='mb-0'>{course.title}</h3>
            <small className='text-muted'>
              Instructor: Demo Instructor
            </small>
          </div>

          <button
            className='btn btn-primary ml-auto header-back-button'
            onClick={() => history.push('/student-auth/book-class')}
          >
            ← Back
          </button>
        </div>
      <Row className='mt-2'>
        {/* LEFT: VIDEO + INFO */}
        <Col lg='8'>
          <Card>
            <CardBody>
              {/* VIDEO */}
              {/* <div className='ratio ratio-16x9 mb-2'>
                <iframe
                  src='https://www.youtube.com/embed/dQw4w9WgXcQ'
                  title='Course Video'
                  allowFullScreen
                />
              </div> */}
              <div className='course-video-wrapper mb-2'>
                <video
                    className='course-video'
                    controls
                    poster={course.image}   // thumbnail from class image
                >
                    <source
                    src='https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4'
                    type='video/mp4'
                    />
                    Your browser does not support the video tag.
                </video>
                </div>

              {/* ABOUT */}
              <h5>About this course</h5>
              <p className='text-muted'>
                Learn everything you need to know about {course.title}.
                This course is designed to give practical knowledge.
              </p>

              {/* STATS */}
              <div className='d-flex flex-wrap gap-2'>
                <Badge color='light-primary'>Duration: {course.duration}</Badge>
                <Badge color='light-success'>Mode: {course.mode}</Badge>
                <Badge color='light-info'>Category: {course.category}</Badge>
              </div>
            </CardBody>
          </Card>
        </Col>

        {/* RIGHT: COURSE CONTENT */}
        <Col lg='4'>
          <Card>
            <CardBody>
              <h5>Course Content</h5>

              <ListGroup flush>
                <ListGroupItem>1. Welcome</ListGroupItem>
                <ListGroupItem>2. Introduction</ListGroupItem>
                <ListGroupItem>3. Core Concepts</ListGroupItem>
                <ListGroupItem>4. Practical Examples</ListGroupItem>
                <ListGroupItem>5. Final Project</ListGroupItem>
              </ListGroup>
            </CardBody>
          </Card>
        </Col>
      </Row>

    </div>
  )
}

export default ClassDetail
