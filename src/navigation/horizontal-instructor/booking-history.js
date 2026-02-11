import {
  Calendar,
  Clock,
  XCircle,
  CheckCircle,
  List
} from 'react-feather'

export default [
  {
    id: 'bookingHistory',
    title: 'Booking History',
    icon: <Calendar size={20} />,
    navLink: '/instructor-auth/booking-history/list',
    action: 'read',
    resource: 'Instructor',
    children: [
      {
        id: 'classBookingHistory',
        title: 'Class Booking History',
        icon: <List size={16} />,
        navLink: '/instructor-auth/booking-history/list',
        action: 'read',
        resource: 'Instructor'
      },
      {
        id: 'upcomingClass',
        title: 'Upcoming Class',
        icon: <Clock size={16} />,
        navLink: '/instructor-auth/booking-history/upcomming-class/list',
        action: 'read',
        resource: 'Instructor'
      },
      {
        id: 'cancelClass',
        title: 'Cancel Class',
        icon: <XCircle size={16} />,
        navLink: '/instructor-auth/booking-history/cancel-class/list',
        action: 'read',
        resource: 'Instructor'
      },
      {
        id: 'attendedClass',
        title: 'Attended Class',
        icon: <CheckCircle size={16} />,
        navLink: '/instructor-auth/booking-history/attendent-class/list',
        action: 'read',
        resource: 'Instructor'
      }
    ]
  }
]
