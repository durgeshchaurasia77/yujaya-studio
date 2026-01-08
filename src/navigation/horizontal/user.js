import { Home, Circle, PlusSquare } from 'react-feather'

export default [
  {
    id: 'user',
    title: 'User Management',
    icon: <Home />,
    children: [
      {
        id: 'analyticsDash',
        title: 'Create Account',
        icon: <PlusSquare />,
        navLink: '/user/create-account'
      },
      {
        id: 'analyticsDash',
        title: 'Create Student',
        icon: <PlusSquare />,
        navLink: '/user/create-student'
      }
    ]
  }
]
