import { Book } from 'react-feather'

export default [
  {
    id: 'Staff',
    title: 'Student',
    icon: <Book />,
    navLink: '/staff-auth/student/enrolled-student/list',
    action: 'read',
    resource: 'Staff',
    children: [
      {
        id: 'my-courses',
        title: 'Enrolled Student',
        navLink: '/staff-auth/student/enrolled-student/list',
        action: 'read',
        resource: 'Staff'
      },
      {
        id: 'my-courses',
        title: 'Attandance Tracking',
        navLink: '/staff-auth/student/attandance-tracking/list',
        action: 'read',
        resource: 'Staff'
      },
      {
        id: 'my-courses',
        title: 'Student Notes',
        navLink: '/staff-auth/student/student-notes/list',
        action: 'read',
        resource: 'Staff'
      }
    ]
  }
]
