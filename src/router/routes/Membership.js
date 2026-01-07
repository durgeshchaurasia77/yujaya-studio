import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const MembershipRoutes = [
  {
    path: '/membership/add',
    component: lazy(() => import('../../views/membership/add'))
  }

]

export default MembershipRoutes
