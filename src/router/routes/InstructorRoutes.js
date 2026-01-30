
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
    }
    // {
    //     path: '/instructor-auth/book-class-details/:id',
    //     component: lazy(() => import('../../views/instructor/book-class/ClassDetail')),
    //         meta: {
    //         action: 'read',
    //         resource: 'Instructor'
    //     }
    // },
    // {
    //     path: '/instructor-auth/courses-programs',
    //     component: lazy(() => import('../../views/instructor/courses-programs')),
    //         meta: {
    //         action: 'read',
    //         resource: 'Instructor'
    //     }
    // },
    // {
    //     path: '/instructor-auth/upcomming-class/list',
    //     component: lazy(() => import('../../views/instructor/upcomming-class/list')),
    //         meta: {
    //         action: 'read',
    //         resource: 'Instructor'
    //     }
    // },
    // {
    //     path: '/instructor-auth/cancel-class/list',
    //     component: lazy(() => import('../../views/instructor/cancel-class/list')),
    //         meta: {
    //         action: 'read',
    //         resource: 'Instructor'
    //     }
    // },
    // {
    //     path: '/instructor-auth/attendent-class/list',
    //     component: lazy(() => import('../../views/instructor/attendent-class/list')),
    //         meta: {
    //         action: 'read',
    //         resource: 'Instructor'
    //     }
    // },
    // {
    //     path: '/instructor-auth/attendent-class/rating-review/add/:id',
    //     component: lazy(() => import('../../views/instructor/attendent-class/rating-review/add')),
    //         meta: {
    //         action: 'read',
    //         resource: 'Instructor'
    //     }
    // },
    // {
    //     path: '/instructor-auth/resources/list',
    //     component: lazy(() => import('../../views/instructor/resources/list')),
    //         meta: {
    //         action: 'read',
    //         resource: 'Instructor'
    //     }
    // },
    // {
    //     path: '/instructor-auth/resources/upload-notes/list',
    //     component: lazy(() => import('../../views/instructor/resources/upload-notes/list')),
    //         meta: {
    //         action: 'read',
    //         resource: 'Instructor'
    //     }
    // },
    // {
    //     path: '/instructor-auth/payment-history/list',
    //     component: lazy(() => import('../../views/instructor/payment-history/list')),
    //         meta: {
    //         action: 'read',
    //         resource: 'Instructor'
    //     }
    // }

]

export default InstructorRoutes
