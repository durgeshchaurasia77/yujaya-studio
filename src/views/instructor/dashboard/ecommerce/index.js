import { useContext } from 'react'
import { Row, Col } from 'reactstrap'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import StatsCard from '@src/views/ui-elements/cards/statistics/StatsCard'

import { dashboardStats } from '../card/statsData'
import UpcomingClassesTable from '../card/UpcomingClassesTable'
import StudentCountCard from '../card/StudentCountCard'
import AnnouncementsTable from '../card/AnnouncementsTable'

import EarningSummaryCard from '../card/EarningSummaryCard'
import ActionJoinOnlineClass from '../card/ActionJoinOnlineClass'
import ActionBuyGiftCard from '../card/ActionBuyGiftCard'

import '@styles/base/pages/dashboard-ecommerce.scss'

const EcommerceDashboard = () => {
  const { colors } = useContext(ThemeColors)

  return (
    <div id='dashboard-ecommerce'>

      {/* 🔝 TOP ROW */}
      <Row className='match-height'>
        
        {/* Today’s Upcoming Classes */}
        

        <Col lg='4' md='6'>
          <h4 className='mb-1'>Join Online Class</h4>
          <ActionJoinOnlineClass />
        </Col>
        {/* Student Count */}
        <Col lg='4'>
          <h4 className='mb-1'>Student Count</h4>
          <StudentCountCard total={128} active={96} />
        </Col>
        <Col lg='4'>
          <h4 className='mb-1'>Earning Summary</h4>
          <EarningSummaryCard totalEarning={124500} monthlyEarning={18200} growth={12}/>
        </Col>
      </Row>

      {/* 📊 MIDDLE ROW */}
      <Row className='match-height mt-2'>
        {/* Announcements */}
        <Col lg='6'>
          <h4 className='mb-1'>Announcements</h4>
          <AnnouncementsTable />
        </Col>

        <Col lg='6'>
          <h4 className='mb-1'>Today’s Upcoming Classes</h4>
          <UpcomingClassesTable />
        </Col>
      </Row>

    </div>

  )
}

export default EcommerceDashboard
