import { Book } from 'react-feather'

export default [
  {
    id: 'therapist',
    title: 'Session Notes',
    icon: <Book />,
    navLink: '/therapist-auth/session-notes/resources/list',
    action: 'read',
    resource: 'Therapist',
    children: [
      {
        id: 'my-courses',
        title: 'Resources',
        navLink: '/therapist-auth/session-notes/resources/list',
        action: 'read',
        resource: 'Therapist'
      },
      {
        id: 'my-courses',
        title: 'Upload Notes',
        navLink: '/therapist-auth/session-notes/upload-notes/list',
        action: 'read',
        resource: 'Therapist'
      }
    ]
  }
]
