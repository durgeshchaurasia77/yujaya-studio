import {
  Activity,
  CheckSquare
} from 'react-feather'

export default [
  {
    id: 'therapyPlan',
    title: 'My Therapy Plan',
    icon: <Activity size={20} />,
    navLink: '/client-auth/assigned-practice/list',
    action: 'read',
    resource: 'Client',
    children: [
      {
        id: 'assignedPractice',
        title: 'Assigned Practices',
        icon: <CheckSquare size={16} />,
        navLink: '/client-auth/assigned-practice/list',
        action: 'read',
        resource: 'Client'
      }
    ]
  }
]
