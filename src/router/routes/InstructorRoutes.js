
import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const InstructorRoutes = [

  {
    path: '/instructor-auth/login',
    component: lazy(() => import('../../views/instructor/auth/Login')),
    layout: 'BlankLayout',
        meta: {
        authRoute: true,
        action: 'read',
        resource: 'Instructor'
        }
    },
    {
        path: '/instructor-auth/dashboard/ecommerce',
        component: lazy(() => import('../../views/instructor/dashboard/ecommerce')),
            meta: {
            action: 'read',
            resource: 'Instructor'
        }
    },
    {
        path: '/instructor-auth/online-class/list',
        component: lazy(() => import('../../views/instructor/online-class/list')),
            meta: {
            action: 'read',
            resource: 'Instructor'
        }
    },
    {
        path: '/instructor-auth/studio-class',
        component: lazy(() => import('../../views/instructor/studio-class')),
            meta: {
            action: 'read',
            resource: 'Instructor'
        }
    },
    {
        path: '/instructor-auth/studio-class-details/:id',
        component: lazy(() => import('../../views/instructor/studio-class/detail')),
            meta: {
            action: 'read',
            resource: 'Instructor'
        }
    },
    {
        path: '/instructor-auth/book-appointment/list',
        component: lazy(() => import('../../views/instructor/book-appointment/list')),
            meta: {
            action: 'read',
            resource: 'Instructor'
        }
    },
    {
        path: '/instructor-auth/book-appointment/add',
        component: lazy(() => import('../../views/instructor/book-appointment/add')),
            meta: {
            action: 'read',
            resource: 'Instructor'
        }
    },
    {
        path: '/instructor-auth/student/enrolled-student/list',
        component: lazy(() => import('../../views/instructor/student/enrolled-student/list')),
            meta: {
            action: 'read',
            resource: 'Instructor'
        }
    },
    {
        path: '/instructor-auth/student/attandance-tracking/list',
        component: lazy(() => import('../../views/instructor/student/attandance-tracking/list')),
            meta: {
            action: 'read',
            resource: 'Instructor'
        }
    },
    {
        path: '/instructor-auth/student/student-notes/list',
        component: lazy(() => import('../../views/instructor/student/student-notes/list')),
            meta: {
            action: 'read',
            resource: 'Instructor'
        }
    },
    {
        path: '/instructor-auth/booking-history/list',
        component: lazy(() => import('../../views/instructor/booking-history/list')),
            meta: {
            action: 'read',
            resource: 'Instructor'
        }
    },
    {
        path: '/instructor-auth/booking-history/upcomming-class/list',
        component: lazy(() => import('../../views/instructor/booking-history/upcomming-class/list')),
            meta: {
            action: 'read',
            resource: 'Instructor'
        }
    },
    {
        path: '/instructor-auth/booking-history/cancel-class/list',
        component: lazy(() => import('../../views/instructor/booking-history/cancel-class/list')),
            meta: {
            action: 'read',
            resource: 'Instructor'
        }
    },
    {
        path: '/instructor-auth/booking-history/attendent-class/list',
        component: lazy(() => import('../../views/instructor/booking-history/attendent-class/list')),
            meta: {
            action: 'read',
            resource: 'Instructor'
        }
    },
    {
        path: '/instructor-auth/booking-history/attendent-class/rating-review/add/:id',
        component: lazy(() => import('../../views/instructor/booking-history/attendent-class/rating-review/add')),
            meta: {
            action: 'read',
            resource: 'Instructor'
        }
    },
    {
        path: '/instructor-auth/library/resources/list',
        component: lazy(() => import('../../views/instructor/library/resources/list')),
            meta: {
            action: 'read',
            resource: 'Instructor'
        }
    },
    {
        path: '/instructor-auth/library/upload-notes/list',
        component: lazy(() => import('../../views/instructor/library/upload-notes/list')),
            meta: {
            action: 'read',
            resource: 'Instructor'
        }
    },
    {
        path: '/instructor-auth/library/upload-notes/add',
        component: lazy(() => import('../../views/instructor/library/upload-notes/add')),
            meta: {
            action: 'read',
            resource: 'Instructor'
        }
    },
    {
        path: '/instructor-auth/earning-payment/earning-history/list',
        component: lazy(() => import('../../views/instructor/earning-payment/earning-history/list')),
            meta: {
            action: 'read',
            resource: 'Instructor'
        }
    },
    {
        path: '/instructor-auth/earning-payment/payment-history/list',
        component: lazy(() => import('../../views/instructor/earning-payment/payment-history/list')),
            meta: {
            action: 'read',
            resource: 'Instructor'
        }
    }

]

export default InstructorRoutes
