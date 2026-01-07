import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const PackageRoutes = [
  {
    path: '/package/add',
    component: lazy(() => import('../../views/package/add'))
  }

]

export default PackageRoutes
