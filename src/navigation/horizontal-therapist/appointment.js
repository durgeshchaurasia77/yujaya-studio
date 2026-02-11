import {
  Calendar,
  CheckCircle,
  Activity
} from 'react-feather'

export default [
  {
    id: 'therapistAppointments',
    title: 'Appointment',
    icon: <Calendar size={20} />,
    navLink: '/therapist-auth/book-appointment/list',
    action: 'read',
    resource: 'Therapist',
    children: [
      {
        id: 'therapistAppointmentBooking',
        title: 'Appointment Booking',
        icon: <CheckCircle size={16} />,
        navLink: '/therapist-auth/book-appointment/list',
        action: 'read',
        resource: 'Therapist'
      },
      {
        id: 'therapistTherapySession',
        title: 'Therapy Session',
        icon: <Activity size={16} />,
        navLink: '/therapist-auth/therapy-session/list',
        action: 'read',
        resource: 'Therapist'
      }
    ]
  }
]
