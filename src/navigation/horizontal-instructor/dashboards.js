import { Home } from 'react-feather'

export default [
  {
    id: 'instructor-dashboards',
    title: 'Dashboard',
    icon: <Home />,
    navLink: '/instructor-auth/dashboard/ecommerce', // ✅ ADD THIS
    action: 'read',
    resource: 'Instructor',
    children: [
      {
        id: 'instructor-ecommerce',
        title: 'Dashboard',
        navLink: '/instructor-auth/dashboard/ecommerce',
        action: 'read',
        resource: 'Instructor'
      }
    ]
  }
]
