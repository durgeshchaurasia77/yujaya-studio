import { Briefcase, Circle } from 'react-feather'

export default [
  {
    id: 'studio',
    title: 'Studio Management',
    icon: <Briefcase />,
    children: [
      {
        id: 'analyticsDash16',
        title: 'Add Studio',
        icon: <Circle />,
        navLink: '/studio/add'
      },
      {
        id: 'analyticsDash17',
        title: 'Studio List',
        icon: <Circle />,
        navLink: '/studio/list'
      },
      {
        id: 'analyticsDash18',
        title: 'Add Staff',
        icon: <Circle />,
        navLink: '/staff/add'
      }
    ]
  }
]
