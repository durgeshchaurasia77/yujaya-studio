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
  }

]

export default SettingsRoutes
