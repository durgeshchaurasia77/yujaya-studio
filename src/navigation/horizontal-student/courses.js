import { Book } from 'react-feather'

export default [
  {
    id: 'student-courses',
    title: 'Class',
    icon: <Book />,
    navLink: '/student-auth/book-class',
    action: 'read',
    resource: 'Student',
    children: [
      {
        id: 'my-courses',
        title: 'Book a Class',
        navLink: '/student-auth/book-class',
        action: 'read',
        resource: 'Student'
      },
      {
        id: 'upcomming-class',
        title: 'Upcomming Class',
        navLink: '/student-auth/upcomming-class/list',
        action: 'read',
        resource: 'Student'
      },
      {
        id: 'attendent-class',
        title: 'Attendent Class',
        navLink: '/student-auth/attendent-class/list',
        action: 'read',
        resource: 'Student'
      },
      {
        id: 'cancel-class',
        title: 'Cancel Class',
        navLink: '/student-auth/cancel-class/list',
        action: 'read',
        resource: 'Student'
      }
    ]
  }
]
