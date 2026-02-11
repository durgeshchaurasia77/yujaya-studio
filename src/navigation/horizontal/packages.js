import {
  Package,
  PlusCircle
} from 'react-feather'

export default [
  {
    id: 'packages',
    title: 'Packages',
    icon: <Package size={20} />,
    children: [
      {
        id: 'createPackage',
        title: 'Create Packages',
        icon: <PlusCircle size={16} />,
        navLink: '/package/add'
      }
    ]
  }
]