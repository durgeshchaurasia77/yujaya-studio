
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
    },
    {
        path: '/student-auth/book-class',
        component: lazy(() => import('../../views/student/book-class')),
            meta: {
            action: 'read',
            resource: 'Student'
        }
    },
    {
        path: '/student-auth/book-class-details/:id',
        component: lazy(() => import('../../views/student/book-class/ClassDetail')),
            meta: {
            action: 'read',
            resource: 'Student'
        }
    },
    {
        path: '/student-auth/courses-programs',
        component: lazy(() => import('../../views/student/courses-programs')),
            meta: {
            action: 'read',
            resource: 'Student'
        }
    },
    {
        path: '/student-auth/courses-programs-details/:id',
        component: lazy(() => import('../../views/student/courses-programs/detail')),
            meta: {
            action: 'read',
            resource: 'Student'
        }
    },
    {
        path: '/student-auth/booking-history/list',
        component: lazy(() => import('../../views/student/booking-history/list')),
            meta: {
            action: 'read',
            resource: 'Student'
        }
    },
    {
        path: '/student-auth/upcomming-class/list',
        component: lazy(() => import('../../views/student/upcomming-class/list')),
            meta: {
            action: 'read',
            resource: 'Student'
        }
    },
    {
        path: '/student-auth/cancel-class/list',
        component: lazy(() => import('../../views/student/cancel-class/list')),
            meta: {
            action: 'read',
            resource: 'Student'
        }
    },
    {
        path: '/student-auth/attendent-class/list',
        component: lazy(() => import('../../views/student/attendent-class/list')),
            meta: {
            action: 'read',
            resource: 'Student'
        }
    },
    {
        path: '/student-auth/attendent-class/rating-review/add/:id',
        component: lazy(() => import('../../views/student/attendent-class/rating-review/add')),
            meta: {
            action: 'read',
            resource: 'Student'
        }
    },
    {
        path: '/student-auth/resources/list',
        component: lazy(() => import('../../views/student/resources/list')),
            meta: {
            action: 'read',
            resource: 'Student'
        }
    },
    {
        path: '/student-auth/resources/upload-notes/list',
        component: lazy(() => import('../../views/student/resources/upload-notes/list')),
            meta: {
            action: 'read',
            resource: 'Student'
        }
    },
    {
        path: '/student-auth/payment-history/list',
        component: lazy(() => import('../../views/student/payment-history/list')),
            meta: {
            action: 'read',
            resource: 'Student'
        }
    }

]

export default StudentRoutes
