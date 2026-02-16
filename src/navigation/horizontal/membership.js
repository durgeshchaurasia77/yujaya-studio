import {
  CreditCard,
  PlusCircle,
  FileText,
  UserPlus
} from 'react-feather'

export default [
  {
    id: 'membership',
    title: 'Membership',
    icon: <CreditCard size={20} />,
    children: [
      {
        id: 'createMembership',
        title: 'Create Membership',
        icon: <PlusCircle size={16} />,
        navLink: '/membership/add'
      },
      {
        id: 'membershipPolicy',
        title: 'Membership Policy',
        icon: <FileText size={16} />,
        navLink: '/membership/policy/add'
      }
      // {
      //   id: 'addMember',
      //   title: 'Add Membership',
      //   icon: <UserPlus size={16} />,
      //   navLink: '/members/add'
      // }
    ]
  }
]
