import { useContext } from 'react'
import { Row, Col } from 'reactstrap'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import StatsCard from '@src/views/ui-elements/cards/statistics/StatsCard'

import { dashboardStats } from './statsData'
import UpcomingClassesTable from './UpcomingClassesTable'
import TodayScheduleTable from './TodayScheduleTable'
import AnnouncementsTable from './AnnouncementsTable'

import '@styles/base/pages/dashboard-ecommerce.scss'

const EcommerceDashboard = () => {
  const { colors } = useContext(ThemeColors)

  return (
    <div id='dashboard-ecommerce'>

      {/* 🔝 TOP STATISTICS */}
      <Row className='match-height'>
        <Col xl='12' md='12' xs='12'>
          <StatsCard cols={{ xl: '4', sm: '6' }} data={dashboardStats} />
        </Col>
      </Row>

      {/* 📊 TABLE LISTINGS */}
      <Row className='match-height'>
        <Col lg='12'>
          <h4 className='mb-1'>Upcoming Classes</h4>
          <UpcomingClassesTable />
        </Col>
      </Row>

      <Row className='match-height'>
        <Col lg='6'>
          <h4 className='mb-1'>Today’s Schedule</h4>
          <TodayScheduleTable />
        </Col>
        <Col lg='6'>
          <h4 className='mb-1'>Announcements</h4>
          <AnnouncementsTable />
        </Col>
      </Row>

    </div>
  )
}

export default EcommerceDashboard
