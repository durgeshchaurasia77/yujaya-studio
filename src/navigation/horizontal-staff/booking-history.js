import {
  Calendar,
  List,
  Clock,
  XCircle,
  CheckCircle
} from 'react-feather'

export default [
  {
    id: 'staffBookingHistory',
    title: 'Booking History',
    icon: <Calendar size={20} />,
    navLink: '/staff-auth/booking-history/list',
    action: 'read',
    resource: 'Staff',
    children: [
      {
        id: 'staffClassBookingHistory',
        title: 'Class Booking History',
        icon: <List size={16} />,
        navLink: '/staff-auth/booking-history/list',
        action: 'read',
        resource: 'Staff'
      },
      {
        id: 'staffUpcomingClass',
        title: 'Upcoming Class',
        icon: <Clock size={16} />,
        navLink: '/staff-auth/booking-history/upcomming-class/list',
        action: 'read',
        resource: 'Staff'
      },
      {
        id: 'staffCancelClass',
        title: 'Cancel Class',
        icon: <XCircle size={16} />,
        navLink: '/staff-auth/booking-history/cancel-class/list',
        action: 'read',
        resource: 'Staff'
      },
      {
        id: 'staffAttendedClass',
        title: 'Attended Class',
        icon: <CheckCircle size={16} />,
        navLink: '/staff-auth/booking-history/attendent-class/list',
        action: 'read',
        resource: 'Staff'
      }
    ]
  }
]
