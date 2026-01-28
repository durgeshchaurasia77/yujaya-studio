import { Home, Circle, PlusSquare } from 'react-feather'

export default [
  {
    id: 'user',
    title: 'User Management',
    icon: <Home />,
    children: [
      {
        id: 'analyticsDash',
        title: 'User List / Manage',
        icon: <PlusSquare />,
        navLink: '/user/list'
      },
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
      },
      {
        id: 'analyticsDash',
        title: 'Add Staff / Partner',
        icon: <PlusSquare />,
        navLink: '/user/create-staff'
      },
      {
        id: 'analyticsDash',
        title: 'Add Instructor / Therapist',
        icon: <PlusSquare />,
        navLink: '/user/create-instructor'
      },
      {
        id: 'analyticsDash',
        title: 'Add Membership',
        icon: <PlusSquare />,
        navLink: '/user/create-members'
      },
      {
        id: 'analyticsDash',
        title: 'Add Client',
        icon: <PlusSquare />,
        navLink: '/user/create-client'
      }
    ]
  }
]
