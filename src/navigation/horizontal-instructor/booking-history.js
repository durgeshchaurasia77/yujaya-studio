import { Book } from 'react-feather'

export default [
  {
    id: 'booking-history',
    title: 'Booking History',
    icon: <Book />,
    navLink: '/instructor-auth/booking-history/list',
    action: 'read',
    resource: 'Instructor',
    children: [
      {
        id: 'my-courses',
        title: 'Class Booking History',
        navLink: '/instructor-auth/booking-history/list',
        action: 'read',
        resource: 'Instructor'
      },
      {
        id: 'my-courses',
        title: 'Upcomming Class',
        navLink: '/instructor-auth/booking-history/upcomming-class/list',
        action: 'read',
        resource: 'Instructor'
      },
      {
        id: 'my-courses',
        title: 'Cancel Class',
        navLink: '/instructor-auth/booking-history/cancel-class/list',
        action: 'read',
        resource: 'Instructor'
      },
      {
        id: 'my-courses',
        title: 'Attendent Class',
        navLink: '/instructor-auth/booking-history/attendent-class/list',
        action: 'read',
        resource: 'Instructor'
      }
    ]
  }
]
