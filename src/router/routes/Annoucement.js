import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const AnnoucementRoutes = [
  {
    path: '/annoucement/add',
    component: lazy(() => import('../../views/annoucement/add'))
  }

]

export default AnnoucementRoutes
