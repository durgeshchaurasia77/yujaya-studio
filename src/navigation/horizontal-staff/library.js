import {
  Folder,
  FileText,
  Upload
} from 'react-feather'

export default [
  {
    id: 'staffLibrary',
    title: 'Library',
    icon: <Folder size={20} />,
    navLink: '/staff-auth/library/resources/list',
    action: 'read',
    resource: 'Staff',
    children: [
      {
        id: 'staffLibraryResources',
        title: 'Resources',
        icon: <FileText size={16} />,
        navLink: '/staff-auth/library/resources/list',
        action: 'read',
        resource: 'Staff'
      },
      {
        id: 'staffUploadNotes',
        title: 'Upload Notes',
        icon: <Upload size={16} />,
        navLink: '/staff-auth/library/upload-notes/list',
        action: 'read',
        resource: 'Staff'
      }
    ]
  }
]
