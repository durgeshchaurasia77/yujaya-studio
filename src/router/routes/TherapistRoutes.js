
import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const TherapistRoutes = [

  {
    path: '/therapist-auth/login',
    component: lazy(() => import('../../views/therapist/auth/Login')),
    layout: 'BlankLayout',
        meta: {
        authRoute: true,
        action: 'read',
        resource: 'Therapist'
        }
    },
    {
        path: '/therapist-auth/dashboard/ecommerce',
        component: lazy(() => import('../../views/therapist/dashboard/ecommerce')),
            meta: {
            action: 'read',
            resource: 'Therapist'
        }
    },
    {
        path: '/therapist-auth/book-appointment/list',
        component: lazy(() => import('../../views/therapist/book-appointment/list')),
            meta: {
            action: 'read',
            resource: 'Therapist'
        }
    },
    {
        path: '/therapist-auth/book-appointment/add',
        component: lazy(() => import('../../views/therapist/book-appointment/add')),
            meta: {
            action: 'read',
            resource: 'Therapist'
        }
    },
    {
        path: '/therapist-auth/session-notes/resources/list',
        component: lazy(() => import('../../views/therapist/session-notes/resources/list')),
            meta: {
            action: 'read',
            resource: 'Therapist'
        }
    },
    {
        path: '/therapist-auth/session-notes/upload-notes/add',
        component: lazy(() => import('../../views/therapist/session-notes/upload-notes/add')),
            meta: {
            action: 'read',
            resource: 'Therapist'
        }
    },
    {
        path: '/therapist-auth/session-notes/upload-notes/list',
        component: lazy(() => import('../../views/therapist/session-notes/upload-notes/list')),
            meta: {
            action: 'read',
            resource: 'Therapist'
        }
    },
    {
        path: '/therapist-auth/client/therapy-plan/list',
        component: lazy(() => import('../../views/therapist/client/therapy-plan/list')),
            meta: {
            action: 'read',
            resource: 'Therapist'
        }
    },
    {
        path: '/therapist-auth/client/parameter/list',
        component: lazy(() => import('../../views/therapist/client/parameter/list')),
            meta: {
            action: 'read',
            resource: 'Therapist'
        }
    },
    {
        path: '/therapist-auth/client/parameter/add',
        component: lazy(() => import('../../views/therapist/client/parameter/add')),
            meta: {
            action: 'read',
            resource: 'Therapist'
        }
    },
    {
        path: '/therapist-auth/client/parameter/edit',
        component: lazy(() => import('../../views/therapist/client/parameter/edit')),
            meta: {
            action: 'read',
            resource: 'Therapist'
        }
    },
    {
        path: '/therapist-auth/document/list',
        component: lazy(() => import('../../views/therapist/document/list')),
            meta: {
            action: 'read',
            resource: 'Therapist'
        }
    }
    // {
    //     path: '/therapist-auth/student/attandance-tracking/list',
    //     component: lazy(() => import('../../views/therapist/student/attandance-tracking/list')),
    //         meta: {
    //         action: 'read',
    //         resource: 'Therapist'
    //     }
    // },
    // {
    //     path: '/therapist-auth/student/student-notes/list',
    //     component: lazy(() => import('../../views/therapist/student/student-notes/list')),
    //         meta: {
    //         action: 'read',
    //         resource: 'Therapist'
    //     }
    // },
    // {
    //     path: '/therapist-auth/booking-history/list',
    //     component: lazy(() => import('../../views/therapist/booking-history/list')),
    //         meta: {
    //         action: 'read',
    //         resource: 'Therapist'
    //     }
    // },
    // {
    //     path: '/therapist-auth/booking-history/upcomming-class/list',
    //     component: lazy(() => import('../../views/therapist/booking-history/upcomming-class/list')),
    //         meta: {
    //         action: 'read',
    //         resource: 'Therapist'
    //     }
    // },
    // {
    //     path: '/therapist-auth/booking-history/cancel-class/list',
    //     component: lazy(() => import('../../views/therapist/booking-history/cancel-class/list')),
    //         meta: {
    //         action: 'read',
    //         resource: 'Therapist'
    //     }
    // },
    // {
    //     path: '/therapist-auth/booking-history/attendent-class/list',
    //     component: lazy(() => import('../../views/therapist/booking-history/attendent-class/list')),
    //         meta: {
    //         action: 'read',
    //         resource: 'Therapist'
    //     }
    // },
    // {
    //     path: '/therapist-auth/booking-history/attendent-class/rating-review/add/:id',
    //     component: lazy(() => import('../../views/therapist/booking-history/attendent-class/rating-review/add')),
    //         meta: {
    //         action: 'read',
    //         resource: 'Therapist'
    //     }
    // },
    // {
    //     path: '/therapist-auth/library/resources/list',
    //     component: lazy(() => import('../../views/therapist/library/resources/list')),
    //         meta: {
    //         action: 'read',
    //         resource: 'Therapist'
    //     }
    // },
    // {
    //     path: '/therapist-auth/library/upload-notes/list',
    //     component: lazy(() => import('../../views/therapist/library/upload-notes/list')),
    //         meta: {
    //         action: 'read',
    //         resource: 'Therapist'
    //     }
    // },
    // {
    //     path: '/therapist-auth/library/upload-notes/add',
    //     component: lazy(() => import('../../views/therapist/library/upload-notes/add')),
    //         meta: {
    //         action: 'read',
    //         resource: 'Therapist'
    //     }
    // },
    // {
    //     path: '/therapist-auth/earning-payment/earning-history/list',
    //     component: lazy(() => import('../../views/therapist/earning-payment/earning-history/list')),
    //         meta: {
    //         action: 'read',
    //         resource: 'Therapist'
    //     }
    // },
    // {
    //     path: '/therapist-auth/earning-payment/payment-history/list',
    //     component: lazy(() => import('../../views/therapist/earning-payment/payment-history/list')),
    //         meta: {
    //         action: 'read',
    //         resource: 'Therapist'
    //     }
    // }

]

export default TherapistRoutes
