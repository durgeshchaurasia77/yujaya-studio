import {
  FileText,
  Folder,
  Upload
} from 'react-feather'

export default [
  {
    id: 'sessionNotes',
    title: 'Session Notes',
    icon: <FileText size={20} />,
    navLink: '/client-auth/session-notes/resources/list',
    action: 'read',
    resource: 'Client',
    children: [
      {
        id: 'sessionResources',
        title: 'Resources',
        icon: <Folder size={16} />,
        navLink: '/client-auth/session-notes/resources/list',
        action: 'read',
        resource: 'Client'
      },
      {
        id: 'uploadSessionNotes',
        title: 'Upload Notes',
        icon: <Upload size={16} />,
        navLink: '/client-auth/session-notes/upload-notes/list',
        action: 'read',
        resource: 'Client'
      }
    ]
  }
]
