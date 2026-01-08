import { Home, Circle, PlusSquare } from 'react-feather'

export default [
  {
    id: 'user',
    title: 'Add User',
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
        title: 'Add Student',
        icon: <PlusSquare />,
        navLink: '/user/create-student'
      }
    ]
  }
]
