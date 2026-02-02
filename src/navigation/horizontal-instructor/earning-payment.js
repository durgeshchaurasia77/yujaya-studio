import { Book } from 'react-feather'

export default [
  {
    id: 'earning-payment',
    title: 'Earnings & Payments',
    icon: <Book />,
    navLink: '/instructor-auth/earning-payment/earning-history/list',
    action: 'read',
    resource: 'Instructor',
    children: [
      {
        id: 'earning-history',
        title: 'Earning History',
        navLink: '/instructor-auth/earning-payment/earning-history/list',
        action: 'read',
        resource: 'Instructor'
      },
      {
        id: 'payment-history',
        title: 'Payment History',
        navLink: '/instructor-auth/earning-payment/payment-history/list',
        action: 'read',
        resource: 'Instructor'
      }
    ]
  }
]
