import { Fragment, useState, useEffect } from 'react'
import Tabs from './Tabs'
import axios from 'axios'
import InfoTabContent from './InfoTabContent'
import Breadcrumbs from '@components/breadcrumbs'
import SocialTabContent from './SocialTabContent'
import BillingPlans from './BillingPlans'
import PasswordTabContent from './PasswordTabContent'
import NotificationsTabContent from './NotificationsTabContent'
import { Row, Col, TabContent, TabPane, Card, CardBody } from 'reactstrap'

import '@styles/react/libs/flatpickr/flatpickr.scss'
import '@styles/react/pages/page-account-settings.scss'

const GeneralSettings = () => {
  const [activeTab, setActiveTab] = useState('1'),
    [data, setData] = useState(null)

  const toggleTab = tab => {
    setActiveTab(tab)
  }

  useEffect(() => {
    axios.get('/account-setting/data').then(response => setData(response.data))
  }, [])

  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='General Settings' breadCrumbParent='Pages' breadCrumbActive='General Settings' />
      {data !== null ? (
        <Row className="account-settings-layout">
          <Col className='mb-2 mb-md-0' md='3'>
            <Tabs activeTab={activeTab} toggleTab={toggleTab} />
          </Col>
          <Col md='9' className="account-content">
            <Card className="h-100">
              <CardBody className="account-content-body">
                <TabContent activeTab={activeTab}>
                  <TabPane tabId='1'>
                    <BillingPlans data={data.general} />
                  </TabPane>
                  <TabPane tabId='2'>
                    <SocialTabContent data={data.social} />
                  </TabPane>
                  <TabPane tabId='3'>
                    <NotificationsTabContent data={data.notification} />
                  </TabPane>
                  <TabPane tabId='4'>
                    <PasswordTabContent />
                  </TabPane>
                  <TabPane tabId='5'>
                    <InfoTabContent data={data.info} />
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
        </Row>
      ) : null}
    </Fragment>
  )
}

export default GeneralSettings
