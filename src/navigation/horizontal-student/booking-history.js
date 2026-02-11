import {
  Calendar,
  List
} from 'react-feather'

export default [
  {
    id: 'studentBookingHistory',
    title: 'Booking History',
    icon: <Calendar size={20} />,
    navLink: '/student-auth/booking-history/list',
    action: 'read',
    resource: 'Student',
    children: [
      {
        id: 'studentCoursesPrograms',
        title: 'Courses & Programs',
        icon: <List size={16} />,
        navLink: '/student-auth/booking-history/list',
        action: 'read',
        resource: 'Student'
      }
    ]
  }
]
