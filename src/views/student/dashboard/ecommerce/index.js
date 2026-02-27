import { useContext } from 'react'
import { Row, Col } from 'reactstrap'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import StatsCard from '@src/views/ui-elements/cards/statistics/StatsCard'

import { dashboardStats } from '../card/statsData'
import UpcomingClassesTable from '../card/UpcomingClassesTable'
import TodayScheduleTable from '../card/TodayScheduleTable'
import AnnouncementsTable from '../card/AnnouncementsTable'

import ActionBookingCalendar from '../card/ActionBookingCalendar'
import ActionJoinOnlineClass from '../card/ActionJoinOnlineClass'
import ActionBuyGiftCard from '../card/ActionBuyGiftCard'

import '@styles/base/pages/dashboard-ecommerce.scss'

const EcommerceDashboard = () => {
  const { colors } = useContext(ThemeColors)

  return (
    <div id='dashboard-ecommerce'>

      {/* 🔝 TOP: OVERVIEW + UPCOMING */}
      <Row className='match-height'>
        <Col xl='6'>
          <div className='mb-1'>
            <h4 className='mb-0'>Overview</h4>
            <small className='text-muted'>Your learning at a glance</small>
          </div>
          <StatsCard cols={{ xl: '3', sm: '6' }} data={dashboardStats} />
        </Col>

        <Col xl='6'>
          <h4 className='mb-1'>Upcoming Classes</h4>
          <UpcomingClassesTable />
        </Col>
      </Row>

      {/* 📊 MIDDLE: TABLES */}
      <Row className='match-height mt-2'>
        <Col lg='6'>
          <h4 className='mb-1'>Today’s Classes</h4>
          <TodayScheduleTable />
        </Col>
        <Col lg='6'>
          <h4 className='mb-1'>Latest Announcements</h4>
          <AnnouncementsTable />
        </Col>
      </Row>

      {/* ⚡ BOTTOM: QUICK ACTIONS */}
      <Row className='mt-2'>
        <Col xs='12' className='mb-1'>
          <h4 className='mb-0'>Quick Actions</h4>
          <small className='text-muted'>
            Access your classes and tools quickly
          </small>
        </Col>
      </Row>

      <Row className='match-height'>
        <Col lg='4' md='6'>
          <ActionJoinOnlineClass />
        </Col>
        <Col lg='4' md='6'>
          <ActionBookingCalendar />
        </Col>
        <Col lg='4' md='6'>
          <ActionBuyGiftCard />
        </Col>
      </Row>

    </div>
  )
}

export default EcommerceDashboard
