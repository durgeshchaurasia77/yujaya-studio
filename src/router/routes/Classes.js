import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const ClassRoutes = [
  {
    path: '/class/add',
    component: lazy(() => import('../../views/class/add'))
  },
  {
    path: '/class/rating-review/list',
    component: lazy(() => import('../../views/class/rating-review/list'))
  },
  {
    path: '/class/rating-review/add',
    component: lazy(() => import('../../views/class/rating-review/add'))
  },
  {
    path: '/class/document-upload/list',
    component: lazy(() => import('../../views/class/document-upload/list'))
  },
  {
    path: '/class/document-upload/add',
    component: lazy(() => import('../../views/class/document-upload/add'))
  }

]

export default ClassRoutes
