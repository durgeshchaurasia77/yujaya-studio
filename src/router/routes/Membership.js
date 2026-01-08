import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const MembershipRoutes = [
  {
    path: '/membership/add',
    component: lazy(() => import('../../views/membership/add'))
  },
  {
    path: '/membership/policy/add',
    component: lazy(() => import('../../views/membership/policy/add'))
  },
  {
    path: '/members/add',
    component: lazy(() => import('../../views/members/add'))
  },
  {
    path: '/membership/payment/add',
    component: lazy(() => import('../../views/membership/payment/add'))
  }

]

export default MembershipRoutes
