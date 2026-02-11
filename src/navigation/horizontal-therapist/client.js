import {
  Users,
  Clipboard,
  Sliders
} from 'react-feather'

export default [
  {
    id: 'therapistClients',
    title: 'Client',
    icon: <Users size={20} />,
    navLink: '/therapist-auth/client/therapy-plan/list',
    action: 'read',
    resource: 'Therapist',
    children: [
      {
        id: 'therapistTherapyPlan',
        title: 'Therapy Plan',
        icon: <Clipboard size={16} />,
        navLink: '/therapist-auth/client/therapy-plan/list',
        action: 'read',
        resource: 'Therapist'
      },
      {
        id: 'therapistClientParameter',
        title: 'Parameter',
        icon: <Sliders size={16} />,
        navLink: '/therapist-auth/client/parameter/list',
        action: 'read',
        resource: 'Therapist'
      }
    ]
  }
]
