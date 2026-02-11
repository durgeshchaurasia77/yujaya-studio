import {
  CreditCard,
  FileText
} from 'react-feather'

export default [
  {
    id: 'studentPayment',
    title: 'Payment',
    icon: <CreditCard size={20} />,
    navLink: '/student-auth/payment-history/list',
    action: 'read',
    resource: 'Student',
    children: [
      {
        id: 'studentPaymentHistory',
        title: 'Payment History',
        icon: <FileText size={16} />,
        navLink: '/student-auth/payment-history/list',
        action: 'read',
        resource: 'Student'
      }
    ]
  }
]
