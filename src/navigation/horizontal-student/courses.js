import { Book } from 'react-feather'

export default [
  {
    id: 'student-courses',
    title: 'Book a Class',
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
      }
    ]
  }
]
