import { Book } from 'react-feather'

export default [
  {
    id: 'earning-payment',
    title: 'Earnings & Payments',
    icon: <Book />,
    navLink: '/therapist-auth/earning-payment/earning-history/list',
    action: 'read',
    resource: 'Therapist',
    children: [
      {
        id: 'earning-history',
        title: 'Earning History',
        navLink: '/therapist-auth/earning-payment/earning-history/list',
        action: 'read',
        resource: 'Therapist'
      },
      {
        id: 'payment-history',
        title: 'Payment History',
        navLink: '/therapist-auth/earning-payment/payment-history/list',
        action: 'read',
        resource: 'Therapist'
      }
    ]
  }
]