import {
  DollarSign,
  TrendingUp,
  CreditCard
} from 'react-feather'

export default [
  {
    id: 'earningPayment',
    title: 'Earnings & Payments',
    icon: <DollarSign size={20} />,
    navLink: '/client-auth/earning-payment/earning-history/list',
    action: 'read',
    resource: 'Client',
    children: [
      {
        id: 'earningHistory',
        title: 'Earning History',
        icon: <TrendingUp size={16} />,
        navLink: '/client-auth/earning-payment/earning-history/list',
        action: 'read',
        resource: 'Client'
      },
      {
        id: 'paymentHistory',
        title: 'Payment History',
        icon: <CreditCard size={16} />,
        navLink: '/client-auth/earning-payment/payment-history/list',
        action: 'read',
        resource: 'Client'
      }
    ]
  }
]
