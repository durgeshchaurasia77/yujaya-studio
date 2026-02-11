import { Calendar, CheckCircle } from 'react-feather'

export default [
  {
    id: 'clientAppointment',
    title: 'Appointment',
    icon: <Calendar size={20} />,
    navLink: '/client-auth/book-appointment/list',
    action: 'read',
    resource: 'Client',
    children: [
      {
        id: 'appointmentBooking',
        title: 'Appointment Booking',
        icon: <CheckCircle size={16} />,
        navLink: '/client-auth/book-appointment/list',
        action: 'read',
        resource: 'Client'
      }
    ]
  }
]
