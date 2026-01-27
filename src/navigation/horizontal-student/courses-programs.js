import { Book } from 'react-feather'

export default [
  {
    id: 'courses-programs',
    title: 'Courses & Programs',
    icon: <Book />,
    navLink: '/student-auth/courses-programs',
    action: 'read',
    resource: 'Student',
    children: [
      {
        id: 'my-courses',
        title: 'Courses & Programs',
        navLink: '/student-auth/courses-programs',
        action: 'read',
        resource: 'Student'
      }
    ]
  }
]
