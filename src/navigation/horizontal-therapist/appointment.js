import { Book } from 'react-feather'

export default [
  {
    id: 'therapist-courses',
    title: 'Appointment',
    icon: <Book />,
    navLink: '/therapist-auth/book-appointment/list',
    action: 'read',
    resource: 'Therapist',
    children: [
      {
        id: 'book-appointment',
        title: 'Appointment Booking',
        navLink: '/therapist-auth/book-appointment/list',
        action: 'read',
        resource: 'Therapist'
      },
      {
        id: 'therapy-session',
        title: 'Therapy Session',
        navLink: '/therapist-auth/therapy-session/list',
        action: 'read',
        resource: 'Therapist'
      }
      // {
      //   id: 'book-appointment',
      //   title: 'Book Appointment',
      //   navLink: '/therapist-auth/book-appointment/list',
      //   action: 'read',
      //   resource: 'Therapist'
      // }
    ]
  }
]
