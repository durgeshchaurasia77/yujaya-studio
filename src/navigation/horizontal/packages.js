import { Home, Circle, PlusSquare } from 'react-feather'

export default [
  {
    id: 'packages',
    title: 'Packages',
    icon: <Home />,
    children: [
      {
        id: 'analyticsDash',
        title: 'Create Packages',
        icon: <PlusSquare />,
        navLink: '/package/add'
      }
    ]
  }
]
