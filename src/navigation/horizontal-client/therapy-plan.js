import { Book } from 'react-feather'

export default [
  {
    id: 'therapy-plan-courses',
    title: 'My Therapy Plan',
    icon: <Book />,
    navLink: '/client-auth/assigned-practice/list',
    action: 'read',
    resource: 'Client',
    children: [
      {
        id: 'assigned-practice',
        title: 'Assigned practices',
        navLink: '/client-auth/assigned-practice/list',
        action: 'read',
        resource: 'Client'
      }
    ]
  }
]
