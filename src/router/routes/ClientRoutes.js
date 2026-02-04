
import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const ClientRoutes = [

  {
    path: '/client-auth/login',
    component: lazy(() => import('../../views/client/auth/Login')),
    layout: 'BlankLayout',
        meta: {
        authRoute: true,
        action: 'read',
        resource: 'Client'
        }
    },
    {
        path: '/client-auth/dashboard/ecommerce',
        component: lazy(() => import('../../views/client/dashboard/ecommerce')),
            meta: {
            action: 'read',
            resource: 'Client'
        }
    },
    {
        path: '/client-auth/book-appointment/list',
        component: lazy(() => import('../../views/client/book-appointment/list')),
            meta: {
            action: 'read',
            resource: 'Client'
        }
    },
    {
        path: '/client-auth/book-appointment/add',
        component: lazy(() => import('../../views/client/book-appointment/add')),
            meta: {
            action: 'read',
            resource: 'Client'
        }
    },
    {
        path: '/client-auth/therapy-session/list',
        component: lazy(() => import('../../views/client/therapy-session/list')),
            meta: {
            action: 'read',
            resource: 'Client'
        }
    },
    {
        path: '/client-auth/assigned-practice/list',
        component: lazy(() => import('../../views/client/assigned-practice/list')),
            meta: {
            action: 'read',
            resource: 'Client'
        }
    },
    {
        path: '/client-auth/session-notes/resources/list',
        component: lazy(() => import('../../views/client/session-notes/resources/list')),
            meta: {
            action: 'read',
            resource: 'Client'
        }
    },
    {
        path: '/client-auth/session-notes/upload-notes/list',
        component: lazy(() => import('../../views/client/session-notes/upload-notes/list')),
            meta: {
            action: 'read',
            resource: 'Client'
        }
    },
    {
        path: '/client-auth/session-notes/upload-notes/add',
        component: lazy(() => import('../../views/client/session-notes/upload-notes/add')),
            meta: {
            action: 'read',
            resource: 'Client'
        }
    },
    {
        path: '/client-auth/earning-payment/earning-history/list',
        component: lazy(() => import('../../views/client/earning-payment/earning-history/list')),
            meta: {
            action: 'read',
            resource: 'Client'
        }
    },
    {
        path: '/client-auth/earning-payment/payment-history/list',
        component: lazy(() => import('../../views/client/earning-payment/payment-history/list')),
            meta: {
            action: 'read',
            resource: 'Client'
        }
    }

]

export default ClientRoutes
