import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const AnnoucementRoutes = [
  {
    path: '/annoucement/add',
    component: lazy(() => import('../../views/annoucement/add'))
  },
  {
    path: '/schedule/calendar',
    component: lazy(() => import('../../views/schedule/calendar'))
  }

]

export default AnnoucementRoutes
