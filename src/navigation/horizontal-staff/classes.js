import {
  Monitor,
  Video,
  Home,
  Calendar
} from 'react-feather'

export default [
  {
    id: 'staffClasses',
    title: 'Class',
    icon: <Monitor size={20} />,
    navLink: '/staff-auth/online-class/list',
    action: 'read',
    resource: 'Staff',
    children: [
      {
        id: 'staffOnlineClass',
        title: 'Online Class',
        icon: <Video size={16} />,
        navLink: '/staff-auth/online-class/list',
        action: 'read',
        resource: 'Staff'
      },
      {
        id: 'staffStudioClass',
        title: 'Studio Class',
        icon: <Home size={16} />,
        navLink: '/staff-auth/studio-class/list',
        action: 'read',
        resource: 'Staff'
      },
      {
        id: 'staffBookAppointment',
        title: 'Book Appointment',
        icon: <Calendar size={16} />,
        navLink: '/staff-auth/book-appointment/list',
        action: 'read',
        resource: 'Staff'
      }
    ]
  }
]
