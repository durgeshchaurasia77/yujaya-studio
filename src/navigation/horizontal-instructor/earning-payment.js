import {
  DollarSign,
  TrendingUp,
  CreditCard
} from 'react-feather'

export default [
  {
    id: 'instructorEarningPayment',
    title: 'Earnings & Payments',
    icon: <DollarSign size={20} />,
    navLink: '/instructor-auth/earning-payment/earning-history/list',
    action: 'read',
    resource: 'Instructor',
    children: [
      {
        id: 'instructorEarningHistory',
        title: 'Earning History',
        icon: <TrendingUp size={16} />,
        navLink: '/instructor-auth/earning-payment/earning-history/list',
        action: 'read',
        resource: 'Instructor'
      },
      {
        id: 'instructorPaymentHistory',
        title: 'Payment History',
        icon: <CreditCard size={16} />,
        navLink: '/instructor-auth/earning-payment/payment-history/list',
        action: 'read',
        resource: 'Instructor'
      }
    ]
  }
]
