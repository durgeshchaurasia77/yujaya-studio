import {
  FileText,
  Folder,
  Upload
} from 'react-feather'

export default [
  {
    id: 'therapistSessionNotes',
    title: 'Session Notes',
    icon: <FileText size={20} />,
    navLink: '/therapist-auth/session-notes/resources/list',
    action: 'read',
    resource: 'Therapist',
    children: [
      {
        id: 'therapistSessionResources',
        title: 'Resources',
        icon: <Folder size={16} />,
        navLink: '/therapist-auth/session-notes/resources/list',
        action: 'read',
        resource: 'Therapist'
      },
      {
        id: 'therapistUploadSessionNotes',
        title: 'Upload Notes',
        icon: <Upload size={16} />,
        navLink: '/therapist-auth/session-notes/upload-notes/list',
        action: 'read',
        resource: 'Therapist'
      }
    ]
  }
]
