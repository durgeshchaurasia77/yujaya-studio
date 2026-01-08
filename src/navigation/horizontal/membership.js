import { Home, MessageSquare, PlusSquare } from 'react-feather'

export default [
  {
    id: 'membership',
    title: 'Membership',
    icon: <Home />,
    children: [
      {
        id: 'analyticsDash',
        title: 'Create Membership',
        icon: <PlusSquare />,
        navLink: '/membership/add'
      },
      {
        id: 'analyticsDash',
        title: 'Membership Policy',
        icon: <MessageSquare />,
        navLink: '/membership/policy/add'
      },
      {
        id: 'analyticsDash',
        title: 'Add Membership',
        icon: <PlusSquare />,
        navLink: '/members/add'
      }
    ]
  }
]
