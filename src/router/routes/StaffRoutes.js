
import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const StaffRoutes = [

  {
    path: '/staff-auth/login',
    component: lazy(() => import('../../views/staff-partner/auth/Login')),
    layout: 'BlankLayout',
        meta: {
        authRoute: true,
        action: 'read',
        resource: 'Staff'
        }
    },
    {
        path: '/staff-auth/dashboard/ecommerce',
        component: lazy(() => import('../../views/staff-partner/dashboard/ecommerce')),
            meta: {
            action: 'read',
            resource: 'Staff'
        }
    },
    {
        path: '/staff-auth/online-class/list',
        component: lazy(() => import('../../views/staff-partner/online-class/list')),
            meta: {
            action: 'read',
            resource: 'Staff'
        }
    },
    {
        path: '/staff-auth/studio-class',
        component: lazy(() => import('../../views/staff-partner/studio-class')),
            meta: {
            action: 'read',
            resource: 'Staff'
        }
    },
    {
        path: '/staff-auth/studio-class-details/:id',
        component: lazy(() => import('../../views/staff-partner/studio-class/detail')),
            meta: {
            action: 'read',
            resource: 'Staff'
        }
    },
    {
        path: '/staff-auth/book-appointment/list',
        component: lazy(() => import('../../views/staff-partner/book-appointment/list')),
            meta: {
            action: 'read',
            resource: 'Staff'
        }
    },
    {
        path: '/staff-auth/book-appointment/add',
        component: lazy(() => import('../../views/staff-partner/book-appointment/add')),
            meta: {
            action: 'read',
            resource: 'Staff'
        }
    },
    {
        path: '/staff-auth/student/enrolled-student/list',
        component: lazy(() => import('../../views/staff-partner/student/enrolled-student/list')),
            meta: {
            action: 'read',
            resource: 'Staff'
        }
    },
    {
        path: '/staff-auth/student/attandance-tracking/list',
        component: lazy(() => import('../../views/staff-partner/student/attandance-tracking/list')),
            meta: {
            action: 'read',
            resource: 'Staff'
        }
    },
    {
        path: '/staff-auth/student/student-notes/list',
        component: lazy(() => import('../../views/staff-partner/student/student-notes/list')),
            meta: {
            action: 'read',
            resource: 'Staff'
        }
    },
    {
        path: '/staff-auth/booking-history/list',
        component: lazy(() => import('../../views/staff-partner/booking-history/list')),
            meta: {
            action: 'read',
            resource: 'Staff'
        }
    },
    {
        path: '/staff-auth/booking-history/upcomming-class/list',
        component: lazy(() => import('../../views/staff-partner/booking-history/upcomming-class/list')),
            meta: {
            action: 'read',
            resource: 'Staff'
        }
    },
    {
        path: '/staff-auth/booking-history/cancel-class/list',
        component: lazy(() => import('../../views/staff-partner/booking-history/cancel-class/list')),
            meta: {
            action: 'read',
            resource: 'Staff'
        }
    },
    {
        path: '/staff-auth/booking-history/attendent-class/list',
        component: lazy(() => import('../../views/staff-partner/booking-history/attendent-class/list')),
            meta: {
            action: 'read',
            resource: 'Staff'
        }
    },
    {
        path: '/staff-auth/booking-history/attendent-class/rating-review/add/:id',
        component: lazy(() => import('../../views/staff-partner/booking-history/attendent-class/rating-review/add')),
            meta: {
            action: 'read',
            resource: 'Staff'
        }
    },
    {
        path: '/staff-auth/library/resources/list',
        component: lazy(() => import('../../views/staff-partner/library/resources/list')),
            meta: {
            action: 'read',
            resource: 'Staff'
        }
    },
    {
        path: '/staff-auth/library/upload-notes/list',
        component: lazy(() => import('../../views/staff-partner/library/upload-notes/list')),
            meta: {
            action: 'read',
            resource: 'Staff'
        }
    },
    {
        path: '/staff-auth/library/upload-notes/add',
        component: lazy(() => import('../../views/staff-partner/library/upload-notes/add')),
            meta: {
            action: 'read',
            resource: 'Staff'
        }
    },
    {
        path: '/staff-auth/earning-payment/earning-history/list',
        component: lazy(() => import('../../views/staff-partner/earning-payment/earning-history/list')),
            meta: {
            action: 'read',
            resource: 'Staff'
        }
    },
    {
        path: '/staff-auth/earning-payment/payment-history/list',
        component: lazy(() => import('../../views/staff-partner/earning-payment/payment-history/list')),
            meta: {
            action: 'read',
            resource: 'Staff'
        }
    }

]

export default StaffRoutes
