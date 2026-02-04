import { Home } from 'react-feather'

export default [
  {
    id: 'staff-dashboards',
    title: 'Dashboard',
    icon: <Home />,
    navLink: '/staff-auth/dashboard/ecommerce', // ✅ ADD THIS
    action: 'read',
    resource: 'Staff',
    children: [
      {
        id: 'staff-ecommerce',
        title: 'Dashboard',
        navLink: '/staff-auth/dashboard/ecommerce',
        action: 'read',
        resource: 'Staff'
      }
    ]
  }
]
