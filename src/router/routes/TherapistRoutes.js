
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
        path: '/therapist-auth/therapy-session/list',
        component: lazy(() => import('../../views/therapist/therapy-session/list')),
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
        path: '/therapist-auth/client/therapy-plan/add',
        component: lazy(() => import('../../views/therapist/client/therapy-plan/add')),
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
    },
    {
        path: '/therapist-auth/earning-payment/earning-history/list',
        component: lazy(() => import('../../views/therapist/earning-payment/earning-history/list')),
            meta: {
            action: 'read',
            resource: 'Therapist'
        }
    },
    {
        path: '/therapist-auth/earning-payment/payment-history/list',
        component: lazy(() => import('../../views/therapist/earning-payment/payment-history/list')),
            meta: {
            action: 'read',
            resource: 'Therapist'
        }
    }

]

export default TherapistRoutes
