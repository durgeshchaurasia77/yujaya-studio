import { Home } from 'react-feather'

export default [
  {
    id: 'therapist-dashboards',
    title: 'Dashboard',
    icon: <Home />,
    navLink: '/therapist-auth/dashboard/ecommerce', // ✅ ADD THIS
    action: 'read',
    resource: 'Therapist',
    children: [
      {
        id: 'therapist-ecommerce',
        title: 'Dashboard',
        navLink: '/therapist-auth/dashboard/ecommerce',
        action: 'read',
        resource: 'Therapist'
      }
    ]
  }
]
