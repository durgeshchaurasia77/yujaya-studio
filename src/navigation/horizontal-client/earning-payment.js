import { Book } from 'react-feather'

export default [
  {
    id: 'earning-payment',
    title: 'Earnings & Payments',
    icon: <Book />,
    navLink: '/client-auth/earning-payment/earning-history/list',
    action: 'read',
    resource: 'Client',
    children: [
      {
        id: 'earning-history',
        title: 'Earning History',
        navLink: '/client-auth/earning-payment/earning-history/list',
        action: 'read',
        resource: 'Client'
      },
      {
        id: 'payment-history',
        title: 'Payment History',
        navLink: '/client-auth/earning-payment/payment-history/list',
        action: 'read',
        resource: 'Client'
      }
    ]
  }
]