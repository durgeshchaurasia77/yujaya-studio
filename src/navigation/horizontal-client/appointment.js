import { Book } from 'react-feather'

export default [
  {
    id: 'client-appointment',
    title: 'Appointment History',
    icon: <Book />,
    navLink: '/client-auth/therapy-session/list',
    action: 'read',
    resource: 'Client',
    children: [
      {
        id: 'therapy-session',
        title: 'Therapy Session',
        navLink: '/client-auth/therapy-session/list',
        action: 'read',
        resource: 'Client'
      }
      // {
      //   id: 'book-appointment',
      //   title: 'Book Appointment',
      //   navLink: '/client-auth/book-appointment/list',
      //   action: 'read',
      //   resource: 'client'
      // }
    ]
  }
]
