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
      }
      // {
      //   id: 'studio-class',
      //   title: 'Studio Class',
      //   navLink: '/therapist-auth/studio-class/list',
      //   action: 'read',
      //   resource: 'Therapist'
      // },
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
