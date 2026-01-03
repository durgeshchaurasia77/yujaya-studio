import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const ClassRoutes = [
  {
    path: '/class/add',
    component: lazy(() => import('../../views/class/add'))
  }

]

export default ClassRoutes
