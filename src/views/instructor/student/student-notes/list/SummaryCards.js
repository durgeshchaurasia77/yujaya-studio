import { Card, CardBody, Row, Col } from 'reactstrap'
import { Users, UserCheck, UserPlus, Clock } from 'react-feather'

const SummaryCards = () => {
  const cards = [
    {
      title: 'Session',
      value: '21,459',
      sub: 'Total Users',
      growth: '+29%',
      growthColor: 'text-success',
      icon: <Users size={22} />,
      iconBg: 'bg-light-primary'
    },
    {
      title: 'Paid Users',
      value: '4,567',
      sub: 'Last week analytics',
      growth: '+18%',
      growthColor: 'text-success',
      icon: <UserPlus size={22} />,
      iconBg: 'bg-light-danger'
    },
    {
      title: 'Active Users',
      value: '19,860',
      sub: 'Last week analytics',
      growth: '-14%',
      growthColor: 'text-danger',
      icon: <UserCheck size={22} />,
      iconBg: 'bg-light-success'
    },
    {
      title: 'Pending Users',
      value: '237',
      sub: 'Last week analytics',
      growth: '+42%',
      growthColor: 'text-success',
      icon: <Clock size={22} />,
      iconBg: 'bg-light-warning'
    }
  ]

  return (
    <Row className="mb-0">
      {cards.map((item, index) => (
        <Col md="3" sm="6" xs="12" key={index}>
          <Card className="shadow-sm">
            <CardBody className="d-flex justify-content-between align-items-start">
              <div>
                <p className="mb-50 text-muted">{item.title}</p>
                <h3 className="fw-bold mb-0">
                  {item.value}{' '}
                  <span className={`fs-6 ${item.growthColor}`}>
                    ({item.growth})
                  </span>
                </h3>
                <small className="text-muted">{item.sub}</small>
              </div>

              <div
                className={`rounded-circle d-flex align-items-center justify-content-center ${item.iconBg}`}
                style={{ width: 42, height: 42 }}
              >
                {item.icon}
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default SummaryCards
