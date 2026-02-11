import {
  Monitor,
  Calendar,
  Clock,
  CheckCircle,
  XCircle
} from 'react-feather'

export default [
  {
    id: 'studentClasses',
    title: 'Class',
    icon: <Monitor size={20} />,
    navLink: '/student-auth/book-class',
    action: 'read',
    resource: 'Student',
    children: [
      {
        id: 'bookClass',
        title: 'Book a Class',
        icon: <Calendar size={16} />,
        navLink: '/student-auth/book-class',
        action: 'read',
        resource: 'Student'
      },
      {
        id: 'upcomingClass',
        title: 'Upcoming Class',
        icon: <Clock size={16} />,
        navLink: '/student-auth/upcomming-class/list',
        action: 'read',
        resource: 'Student'
      },
      {
        id: 'attendedClass',
        title: 'Attended Class',
        icon: <CheckCircle size={16} />,
        navLink: '/student-auth/attendent-class/list',
        action: 'read',
        resource: 'Student'
      },
      {
        id: 'cancelledClass',
        title: 'Cancelled Class',
        icon: <XCircle size={16} />,
        navLink: '/student-auth/cancel-class/list',
        action: 'read',
        resource: 'Student'
      }
    ]
  }
]
