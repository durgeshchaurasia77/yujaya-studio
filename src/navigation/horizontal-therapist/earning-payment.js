import {
  DollarSign,
  TrendingUp,
  CreditCard
} from 'react-feather'

export default [
  {
    id: 'therapistEarningsPayments',
    title: 'Earnings & Payments',
    icon: <DollarSign size={20} />,
    navLink: '/therapist-auth/earning-payment/earning-history/list',
    action: 'read',
    resource: 'Therapist',
    children: [
      {
        id: 'therapistEarningHistory',
        title: 'Earning History',
        icon: <TrendingUp size={16} />,
        navLink: '/therapist-auth/earning-payment/earning-history/list',
        action: 'read',
        resource: 'Therapist'
      },
      {
        id: 'therapistPaymentHistory',
        title: 'Payment History',
        icon: <CreditCard size={16} />,
        navLink: '/therapist-auth/earning-payment/payment-history/list',
        action: 'read',
        resource: 'Therapist'
      }
    ]
  }
]
