import { Book } from 'react-feather'

export default [
  {
    id: 'student-courses',
    title: 'Courses',
    icon: <Book />,
    navLink: '/student-auth/dashboard/ecommerce', // ✅ ADD THIS
    action: 'read',
    resource: 'Student',
    children: [
      {
        id: 'my-courses',
        title: 'My Courses',
        navLink: '/student-auth/dashboard/ecommerce',
        action: 'read',
        resource: 'Student'
      }
    ]
  }
]
