import { Home, Circle } from 'react-feather'

export default [
  {
    id: 'studio',
    title: 'Studio Management',
    icon: <Home />,
    children: [
      {
        id: 'analyticsDash',
        title: 'Add Studio',
        icon: <Circle />,
        navLink: '/studio/add'
      },
      {
        id: 'analyticsDash',
        title: 'Studio List',
        icon: <Circle />,
        navLink: '/studio/list'
      },
      {
        id: 'analyticsDash',
        title: 'Add Staff',
        icon: <Circle />,
        navLink: '/staff/add'
      }
    ]
  }
]
