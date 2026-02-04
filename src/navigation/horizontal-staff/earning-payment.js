import { Book } from 'react-feather'

export default [
  {
    id: 'earning-payment',
    title: 'Earnings & Payments',
    icon: <Book />,
    navLink: '/staff-auth/earning-payment/earning-history/list',
    action: 'read',
    resource: 'Staff',
    children: [
      {
        id: 'earning-history',
        title: 'Earning History',
        navLink: '/staff-auth/earning-payment/earning-history/list',
        action: 'read',
        resource: 'Staff'
      },
      {
        id: 'payment-history',
        title: 'Payment History',
        navLink: '/staff-auth/earning-payment/payment-history/list',
        action: 'read',
        resource: 'Staff'
      }
    ]
  }
]
