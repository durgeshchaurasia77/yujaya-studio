import { Book } from 'react-feather'

export default [
  {
    id: 'instructor-courses',
    title: 'Class',
    icon: <Book />,
    navLink: '/instructor-auth/online-class/list',
    action: 'read',
    resource: 'Instructor',
    children: [
      {
        id: 'my-courses',
        title: 'Online Class',
        navLink: '/instructor-auth/online-class/list',
        action: 'read',
        resource: 'Instructor'
      },
      {
        id: 'studio-class',
        title: 'Studio Class',
        navLink: '/instructor-auth/studio-class/list',
        action: 'read',
        resource: 'Instructor'
      },
      {
        id: 'book-appointment',
        title: 'Book Appointment',
        navLink: '/instructor-auth/book-appointment/list',
        action: 'read',
        resource: 'Instructor'
      }
      // {
      //   id: 'cancel-class',
      //   title: 'Cancel Class',
      //   navLink: '/student-auth/cancel-class/list',
      //   action: 'read',
      //   resource: 'Student'
      // }
    ]
  }
]
