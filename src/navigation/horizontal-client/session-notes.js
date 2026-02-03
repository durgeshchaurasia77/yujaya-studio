import { Book } from 'react-feather'

export default [
  {
    id: 'client',
    title: 'Session Notes',
    icon: <Book />,
    navLink: '/client-auth/session-notes/resources/list',
    action: 'read',
    resource: 'Client',
    children: [
      {
        id: 'my-courses',
        title: 'Resources',
        navLink: '/client-auth/session-notes/resources/list',
        action: 'read',
        resource: 'Client'
      },
      {
        id: 'my-courses',
        title: 'Upload Notes',
        navLink: '/client-auth/session-notes/upload-notes/list',
        action: 'read',
        resource: 'Client'
      }
    ]
  }
]
