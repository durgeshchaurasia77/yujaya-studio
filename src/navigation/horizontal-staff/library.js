import { Book } from 'react-feather'

export default [
  {
    id: 'library',
    title: 'Library',
    icon: <Book />,
    navLink: '/staff-auth/library/resources/list',
    action: 'read',
    resource: 'Staff',
    children: [
      {
        id: 'resources',
        title: 'Resources',
        navLink: '/staff-auth/library/resources/list',
        action: 'read',
        resource: 'Staff'
      },
      {
        id: 'upload-notes',
        title: 'Upload Notes',
        navLink: '/staff-auth/library/upload-notes/list',
        action: 'read',
        resource: 'Staff'
      }
    ]
  }
]
