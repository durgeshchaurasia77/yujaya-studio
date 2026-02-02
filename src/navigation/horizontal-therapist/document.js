import { Book } from 'react-feather'

export default [
  {
    id: 'document',
    title: 'Document',
    icon: <Book />,
    navLink: '/therapist-auth/document/list',
    action: 'read',
    resource: 'Therapist',
    children: [
      {
        id: 'document',
        title: 'Forms & Documents',
        navLink: '/therapist-auth/document/list',
        action: 'read',
        resource: 'Therapist'
      }
    ]
  }
]
