import { Book } from 'react-feather'

export default [
  {
    id: 'booking-history',
    title: 'Booking History',
    icon: <Book />,
    navLink: '/student-auth/booking-history/list',
    action: 'read',
    resource: 'Student',
    children: [
      {
        id: 'my-courses',
        title: 'Courses & Programs',
        navLink: '/student-auth/booking-history/list',
        action: 'read',
        resource: 'Student'
      }
    ]
  }
]
