import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const StudioRoutes = [
  {
    path: '/studio/list',
    component: lazy(() => import('../../views/studio/list'))
  },
  {
    path: '/studio/add',
    component: lazy(() => import('../../views/studio/add'))
  },
  {
    path: '/staff/add',
    component: lazy(() => import('../../views/staff/add'))
  }

]

export default StudioRoutes
