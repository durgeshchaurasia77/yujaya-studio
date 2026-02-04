import { Book } from 'react-feather'

export default [
  {
    id: 'booking-history',
    title: 'Booking History',
    icon: <Book />,
    navLink: '/staff-auth/booking-history/list',
    action: 'read',
    resource: 'Staff',
    children: [
      {
        id: 'my-courses',
        title: 'Class Booking History',
        navLink: '/staff-auth/booking-history/list',
        action: 'read',
        resource: 'Staff'
      },
      {
        id: 'my-courses',
        title: 'Upcomming Class',
        navLink: '/staff-auth/booking-history/upcomming-class/list',
        action: 'read',
        resource: 'Staff'
      },
      {
        id: 'my-courses',
        title: 'Cancel Class',
        navLink: '/staff-auth/booking-history/cancel-class/list',
        action: 'read',
        resource: 'Staff'
      },
      {
        id: 'my-courses',
        title: 'Attendent Class',
        navLink: '/staff-auth/booking-history/attendent-class/list',
        action: 'read',
        resource: 'Staff'
      }
    ]
  }
]
