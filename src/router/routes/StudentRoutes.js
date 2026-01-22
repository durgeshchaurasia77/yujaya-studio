import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const StudentRoutes = [

  {
        path: '/student-auth/login',
        component: lazy(() => import('../../views/student/auth/Login')),
        layout: 'BlankLayout',
            meta: {
            authRoute: true,
            action: 'read',
            resource: 'Student'
            }
        },
    {
        path: '/student-auth/dashboard/ecommerce',
        component: lazy(() => import('../../views/student/dashboard/ecommerce')),
            meta: {
            action: 'read',
            resource: 'Student'
        }
    }

]

export default StudentRoutes
