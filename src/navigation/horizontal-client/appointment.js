import { Book } from 'react-feather'

export default [
  {
    id: 'client-courses',
    title: 'Appointment',
    icon: <Book />,
    navLink: '/client-auth/book-appointment/list',
    action: 'read',
    resource: 'Client',
    children: [
      {
        id: 'book-appointment',
        title: 'Appointment Booking',
        navLink: '/client-auth/book-appointment/list',
        action: 'read',
        resource: 'Client'
      }
    ]
  }
]
