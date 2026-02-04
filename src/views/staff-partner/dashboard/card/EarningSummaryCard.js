import { Card, CardBody, Button } from 'reactstrap'
import { DollarSign, TrendingUp } from 'react-feather'

const EarningSummaryCard = ({
  totalEarning = 0,
  monthlyEarning = 0,
  growth = 0
}) => {
  return (
    <Card className='text-center h-100 d-flex flex-column'>
      <CardBody className='d-flex flex-column'>

        <DollarSign size={40} className='mb-1 text-success' />

        <h5 className='mb-0'>Earning Summary</h5>
        <p className='text-muted mb-2'>
          Overview of your earnings
        </p>

        {/* Earnings */}
        <div className='mb-2'>
          <h3 className='mb-0'>₹ {totalEarning}</h3>
          <small className='text-muted'>
            This month: ₹ {monthlyEarning}
          </small>
        </div>

        {/* Growth */}
        {growth !== 0 && (
          <div className='d-flex justify-content-center align-items-center mb-2'>
            <TrendingUp size={16} className='text-success mr-1' />
            <small className='text-success'>
              {growth}% growth
            </small>
          </div>
        )}

        <Button
          color='success'
          className='mt-auto'
          block
        >
          View Earnings
        </Button>

      </CardBody>
    </Card>
  )
}

export default EarningSummaryCard
