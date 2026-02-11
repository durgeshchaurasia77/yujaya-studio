import {
  DollarSign,
  TrendingUp,
  CreditCard
} from 'react-feather'

export default [
  {
    id: 'staffEarningPayment',
    title: 'Earnings & Payments',
    icon: <DollarSign size={20} />,
    navLink: '/staff-auth/earning-payment/earning-history/list',
    action: 'read',
    resource: 'Staff',
    children: [
      {
        id: 'staffEarningHistory',
        title: 'Earning History',
        icon: <TrendingUp size={16} />,
        navLink: '/staff-auth/earning-payment/earning-history/list',
        action: 'read',
        resource: 'Staff'
      },
      {
        id: 'staffPaymentHistory',
        title: 'Payment History',
        icon: <CreditCard size={16} />,
        navLink: '/staff-auth/earning-payment/payment-history/list',
        action: 'read',
        resource: 'Staff'
      }
    ]
  }
]
