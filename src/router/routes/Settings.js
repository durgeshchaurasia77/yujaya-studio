import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const SettingsRoutes = [
  {
    path: '/settings/global-setting',
    component: lazy(() => import('../../views/settings/global-setting'))
  },
  {
    path: '/settings/add-commision',
    component: lazy(() => import('../../views/settings/add-commision'))
  }

]

export default SettingsRoutes
