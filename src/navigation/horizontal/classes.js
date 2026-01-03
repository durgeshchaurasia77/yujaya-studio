import { Home, PlusSquare } from 'react-feather'

export default [
  {
    id: 'classes',
    title: 'Classes',
    icon: <Home />,
    children: [
      {
        id: 'analyticsDash',
        title: 'Add Class',
        icon: <PlusSquare />,
        navLink: '/class/add'
      }
    ]
  }
]
