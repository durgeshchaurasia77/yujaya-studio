import {
  FileText,
  File
} from 'react-feather'

export default [
  {
    id: 'therapistDocuments',
    title: 'Document',
    icon: <FileText size={20} />,
    navLink: '/therapist-auth/document/list',
    action: 'read',
    resource: 'Therapist',
    children: [
      {
        id: 'therapistFormsDocuments',
        title: 'Forms & Documents',
        icon: <File size={16} />,
        navLink: '/therapist-auth/document/list',
        action: 'read',
        resource: 'Therapist'
      }
    ]
  }
]
