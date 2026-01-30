import { Book } from 'react-feather'

export default [
  {
    id: 'resources',
    title: 'Resources',
    icon: <Book />,
    navLink: '/student-auth/resources/list',
    action: 'read',
    resource: 'Student',
    children: [
      {
        id: 'resources',
        title: 'Resources',
        navLink: '/student-auth/resources/list',
        action: 'read',
        resource: 'Student'
      },
      {
        id: 'resources',
        title: 'Upload Notes',
        navLink: '/student-auth/resources/upload-notes/list',
        action: 'read',
        resource: 'Student'
      }
    ]
  }
]
