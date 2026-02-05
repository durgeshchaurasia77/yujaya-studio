import { Book } from 'react-feather'

export default [
  {
    id: 'client',
    title: 'Client',
    icon: <Book />,
    navLink: '/therapist-auth/client/therapy-plan/list',
    action: 'read',
    resource: 'Therapist',
    children: [
      {
        id: 'my-courses',
        title: 'Therapy Plan',
        navLink: '/therapist-auth/client/therapy-plan/list',
        action: 'read',
        resource: 'Therapist'
      },
      {
        id: 'my-courses',
        title: 'Parameter',
        navLink: '/therapist-auth/client/parameter/list',
        action: 'read',
        resource: 'Therapist'
      }
    ]
  }
]
