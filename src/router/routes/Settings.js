import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const SettingsRoutes = [
  {
    path: '/settings/add-location',
    component: lazy(() => import('../../views/settings/add-location'))
  },
  {
    path: '/settings/add-access-card',
    component: lazy(() => import('../../views/settings/add-access-card'))
  },
  {
    path: '/settings/add-gift-card',
    component: lazy(() => import('../../views/settings/add-gift-card'))
  },
  {
    path: '/settings/list-gift-card',
    component: lazy(() => import('../../views/settings/list-gift-card'))
  },
  {
    path: '/settings/integration',
    component: lazy(() => import('../../views/settings/integration'))
  },
  {
    path: '/settings/list-promo-code',
    component: lazy(() => import('../../views/settings/list-promo-code'))
  },
  {
    path: '/settings/add-promo-code',
    component: lazy(() => import('../../views/settings/add-promo-code'))
  }

]

export default SettingsRoutes
