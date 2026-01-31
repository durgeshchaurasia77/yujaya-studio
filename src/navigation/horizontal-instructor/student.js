import { Book } from 'react-feather'

export default [
  {
    id: 'instructor',
    title: 'Student',
    icon: <Book />,
    navLink: '/instructor-auth/student/enrolled-student/list',
    action: 'read',
    resource: 'Instructor',
    children: [
      {
        id: 'my-courses',
        title: 'Enrolled Student',
        navLink: '/instructor-auth/student/enrolled-student/list',
        action: 'read',
        resource: 'Instructor'
      },
      {
        id: 'my-courses',
        title: 'Attandance Tracking',
        navLink: '/instructor-auth/student/attandance-tracking/list',
        action: 'read',
        resource: 'Instructor'
      },
      {
        id: 'my-courses',
        title: 'Student Notes',
        navLink: '/instructor-auth/student/student-notes/list',
        action: 'read',
        resource: 'Instructor'
      }
    ]
  }
]
