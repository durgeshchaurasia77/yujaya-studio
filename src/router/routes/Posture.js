import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const PostureRoutes = [
  {
    path: '/posture/practice-category/list',
    component: lazy(() => import('../../views/posture/practice-category/list'))
  },
  {
    path: '/posture/practice-category/add',
    component: lazy(() => import('../../views/posture/practice-category/add'))
  },
  {
    path: '/posture/posture/list',
    component: lazy(() => import('../../views/posture/posture/list'))
  },
  {
    path: '/posture/posture/add',
    component: lazy(() => import('../../views/posture/posture/add'))
  },
  {
    path: '/posture/posture/edit',
    component: lazy(() => import('../../views/posture/posture/edit'))
  },
  {
    path: '/posture/posture/view',
    component: lazy(() => import('../../views/posture/posture/view'))
  },
  {
    path: '/posture/assign-posture-practice/list',
    component: lazy(() => import('../../views/posture/assign-posture-practice/list'))
  },
  {
    path: '/posture/assign-posture-practice/add',
    component: lazy(() => import('../../views/posture/assign-posture-practice/add'))
  },
  {
    path: '/posture/assign-posture-practice/edit',
    component: lazy(() => import('../../views/posture/assign-posture-practice/edit'))
  },
  {
    path: '/posture/posture-sequence/list',
    component: lazy(() => import('../../views/posture/posture-sequence/list'))
  },
  {
    path: '/posture/posture-sequence/add',
    component: lazy(() => import('../../views/posture/posture-sequence/add'))
  },
  {
    path: '/posture/client-parameters/list',
    component: lazy(() => import('../../views/posture/client-parameters/list'))
  },
  {
    path: '/posture/client-parameters/add',
    component: lazy(() => import('../../views/posture/client-parameters/add'))
  },
  {
    path: '/posture/client-parameters/edit',
    component: lazy(() => import('../../views/posture/client-parameters/edit'))
  }

]

export default PostureRoutes
