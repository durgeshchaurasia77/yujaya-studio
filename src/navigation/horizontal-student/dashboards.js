import { Home } from 'react-feather'

export default [
  {
    id: 'student-dashboards',
    title: 'Dashboard',
    icon: <Home />,
    navLink: '/student-auth/dashboard/ecommerce', // ✅ ADD THIS
    action: 'read',
    resource: 'Student',
    children: [
      {
        id: 'student-ecommerce',
        title: 'Dashboard',
        navLink: '/student-auth/dashboard/ecommerce',
        action: 'read',
        resource: 'Student'
      }
    ]
  }
]
