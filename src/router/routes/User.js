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
  },
  {
    path: '/user/create-staff',
    component: lazy(() => import('../../views/user/create-staff'))
  },
  {
    path: '/user/create-instructor',
    component: lazy(() => import('../../views/user/create-instructor'))
  },
  {
    path: '/user/create-members',
    component: lazy(() => import('../../views/user/create-members'))
  },
  {
    path: '/user/create-client',
    component: lazy(() => import('../../views/user/create-client'))
  }

]

export default UserRoutes
