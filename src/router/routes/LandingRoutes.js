import { lazy } from 'react'

const LandingRoutes = [
  {
    path: '/landing-page',
    component: lazy(() => import('../../views/landing-page/calendar')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true,
      action: 'read',
      resource: 'Landing'
    }
  }
]

export default LandingRoutes
