import { Calendar, Clock } from 'react-feather'

export default [
  {
    id: 'clientAppointment',
    title: 'Appointment History',
    icon: <Calendar size={20} />,
    navLink: '/client-auth/therapy-session/list',
    action: 'read',
    resource: 'Client',
    children: [
      {
        id: 'therapySession',
        title: 'Therapy Session',
        icon: <Clock size={16} />,
        navLink: '/client-auth/therapy-session/list',
        action: 'read',
        resource: 'Client'
      }
    ]
  }
]
