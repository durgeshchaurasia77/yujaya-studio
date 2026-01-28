import { Book } from 'react-feather'

export default [
  {
    id: 'payment',
    title: 'Payment',
    icon: <Book />,
    navLink: '/student-auth/payment-history/list',
    action: 'read',
    resource: 'Student',
    children: [
      {
        id: 'payment',
        title: 'Payment History',
        navLink: '/student-auth/payment-history/list',
        action: 'read',
        resource: 'Student'
      }
    ]
  }
]
