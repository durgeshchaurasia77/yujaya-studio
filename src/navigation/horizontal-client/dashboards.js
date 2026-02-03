import { Home } from 'react-feather'

export default [
  {
    id: 'client-dashboards',
    title: 'Dashboard',
    icon: <Home />,
    navLink: '/client-auth/dashboard/ecommerce',
    action: 'read',
    resource: 'Client',
    children: [
      {
        id: 'client-ecommerce',
        title: 'Dashboard',
        navLink: '/client-auth/dashboard/ecommerce',
        action: 'read',
        resource: 'Client'
      }
    ]
  }
]
