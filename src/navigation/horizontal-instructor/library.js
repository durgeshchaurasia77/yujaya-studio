import { Book } from 'react-feather'

export default [
  {
    id: 'library',
    title: 'Library',
    icon: <Book />,
    navLink: '/instructor-auth/library/resources/list',
    action: 'read',
    resource: 'Instructor',
    children: [
      {
        id: 'resources',
        title: 'Resources',
        navLink: '/instructor-auth/library/resources/list',
        action: 'read',
        resource: 'Instructor'
      },
      {
        id: 'upload-notes',
        title: 'Upload Notes',
        navLink: '/instructor-auth/library/upload-notes/list',
        action: 'read',
        resource: 'Instructor'
      }
    ]
  }
]
