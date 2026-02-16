import {
  Settings,
  Globe,
  Percent
} from 'react-feather'

export default [
  {
    id: 'settings',
    title: 'Settings',
    icon: <Settings size={20} />,
    children: [
      {
        id: 'globalSettings',
        title: 'General Settings',
        icon: <Globe size={16} />,
        navLink: '/settings/global-setting'
      },
      {
        id: 'addCommission',
        title: 'Add Commission',
        icon: <Percent size={16} />,
        navLink: '/settings/add-commision'
      }
    ]
  }
]
