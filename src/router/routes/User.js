import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const UserRoutes = [
  {
    path: '/user/create-account',
    component: lazy(() => import('../../views/user/create-account'))
  },
  {
    path: '/user/create-student',
    component: lazy(() => import('../../views/user/create-student'))
  }
  // {
  //   path: '/members/add',
  //   component: lazy(() => import('../../views/members/add'))
  // },
  // {
  //   path: '/user/payment/add',
  //   component: lazy(() => import('../../views/user/payment/add'))
  // }

]

export default UserRoutes
