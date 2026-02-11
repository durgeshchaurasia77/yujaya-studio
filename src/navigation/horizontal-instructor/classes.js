import {
  Monitor,
  Video,
  Home,
  Calendar
} from 'react-feather'

export default [
  {
    id: 'instructorClasses',
    title: 'Class',
    icon: <Monitor size={20} />,
    navLink: '/instructor-auth/online-class/list',
    action: 'read',
    resource: 'Instructor',
    children: [
      {
        id: 'onlineClass',
        title: 'Online Class',
        icon: <Video size={16} />,
        navLink: '/instructor-auth/online-class/list',
        action: 'read',
        resource: 'Instructor'
      },
      {
        id: 'studioClass',
        title: 'Studio Class',
        icon: <Home size={16} />,
        navLink: '/instructor-auth/studio-class/list',
        action: 'read',
        resource: 'Instructor'
      },
      {
        id: 'bookAppointment',
        title: 'Book Appointment',
        icon: <Calendar size={16} />,
        navLink: '/instructor-auth/book-appointment/list',
        action: 'read',
        resource: 'Instructor'
      }
    ]
  }
]
