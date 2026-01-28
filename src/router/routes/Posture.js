import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const PostureRoutes = [
  {
    path: '/posture/practice-category/list',
    component: lazy(() => import('../../views/posture/practice-category/list'))
  }

]

export default PostureRoutes
