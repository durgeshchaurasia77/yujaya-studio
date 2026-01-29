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
      },
      {
        id: 'analyticsDash',
        title: 'Posture',
        icon: <PlusSquare />,
        navLink: '/posture/posture/list'
      },
      {
        id: 'analyticsDash',
        title: 'Assign Posture Practice',
        icon: <PlusSquare />,
        navLink: '/posture/assign-posture-practice/list'
      },
      {
        id: 'analyticsDash',
        title: 'Posture Sequence',
        icon: <PlusSquare />,
        navLink: '/posture/posture-sequence/list'
      }
    ]
  }
]
