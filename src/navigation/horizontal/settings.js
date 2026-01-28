import { Home, Cpu, PlusSquare, Settings } from 'react-feather'

export default [
  {
    id: 'settings',
    title: 'Setting',
    icon: <Settings />,
    children: [
      {
        id: 'analyticsDash',
        title: 'Global Setting',
        icon: <Cpu />,
        navLink: '/settings/global-setting'
      },
      {
        id: 'analyticsDash',
        title: 'Add Commision',
        icon: <PlusSquare />,
        navLink: '/settings/add-commision'
      }
    ]
  }
]
