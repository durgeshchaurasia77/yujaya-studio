import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const StudiosRoutes = [
  {
    path: '/studios/add-location',
    component: lazy(() => import('../../views/studios/add-location'))
  },
  {
    path: '/studios/add-access-card',
    component: lazy(() => import('../../views/studios/add-access-card'))
  },
  {
    path: '/studios/add-gift-card',
    component: lazy(() => import('../../views/studios/add-gift-card'))
  },
  {
    path: '/studios/list-gift-card',
    component: lazy(() => import('../../views/studios/list-gift-card'))
  },
  {
    path: '/studios/integration',
    component: lazy(() => import('../../views/studios/integration'))
  },
  {
    path: '/studios/list-promo-code',
    component: lazy(() => import('../../views/studios/list-promo-code'))
  },
  {
    path: '/studios/add-promo-code',
    component: lazy(() => import('../../views/studios/add-promo-code'))
  }

]

export default StudiosRoutes
