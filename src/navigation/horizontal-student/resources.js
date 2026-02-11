import {
  Folder,
  FileText,
  Upload
} from 'react-feather'

export default [
  {
    id: 'studentResources',
    title: 'Resources',
    icon: <Folder size={20} />,
    navLink: '/student-auth/resources/list',
    action: 'read',
    resource: 'Student',
    children: [
      {
        id: 'studentResourceList',
        title: 'Resources',
        icon: <FileText size={16} />,
        navLink: '/student-auth/resources/list',
        action: 'read',
        resource: 'Student'
      },
      {
        id: 'studentUploadNotes',
        title: 'Upload Notes',
        icon: <Upload size={16} />,
        navLink: '/student-auth/resources/upload-notes/list',
        action: 'read',
        resource: 'Student'
      }
    ]
  }
]
