import { Card, CardBody, Button } from 'reactstrap'
import { Gift } from 'react-feather'

const ActionBuyGiftCard = () => {
  return (
    <Card className='text-center h-100 d-flex flex-column'>
      <CardBody className='d-flex flex-column'>
        <Gift size={40} className='mb-1 text-danger' />

        <h5>Buy Gift Card</h5>
        <p className='text-muted'>
          Gift learning to someone special
        </p>

        <Button color='danger' className='mt-auto' block>
          Buy Now
        </Button>
      </CardBody>
    </Card>
  )
}

export default ActionBuyGiftCard
