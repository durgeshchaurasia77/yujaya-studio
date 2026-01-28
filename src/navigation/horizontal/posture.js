import { Home, MessageSquare, PlusSquare } from 'react-feather'

export default [
  {
    id: 'posture',
    title: 'Posture',
    icon: <Home />,
    children: [
      {
        id: 'analyticsDash',
        title: 'Practice Category',
        icon: <PlusSquare />,
        navLink: '/posture/practice-category/list'
      }
    ]
  }
]
