import { Book } from 'react-feather'

export default [
  {
    id: 'staff-courses',
    title: 'Class',
    icon: <Book />,
    navLink: '/staff-auth/online-class/list',
    action: 'read',
    resource: 'Staff',
    children: [
      {
        id: 'my-courses',
        title: 'Online Class',
        navLink: '/staff-auth/online-class/list',
        action: 'read',
        resource: 'Staff'
      },
      {
        id: 'studio-class',
        title: 'Studio Class',
        navLink: '/staff-auth/studio-class/list',
        action: 'read',
        resource: 'Staff'
      },
      {
        id: 'book-appointment',
        title: 'Book Appointment',
        navLink: '/staff-auth/book-appointment/list',
        action: 'read',
        resource: 'Staff'
      }
    ]
  }
]
