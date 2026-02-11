import {
  Folder,
  FileText,
  Upload
} from 'react-feather'

export default [
  {
    id: 'instructorLibrary',
    title: 'Library',
    icon: <Folder size={20} />,
    navLink: '/instructor-auth/library/resources/list',
    action: 'read',
    resource: 'Instructor',
    children: [
      {
        id: 'libraryResources',
        title: 'Resources',
        icon: <FileText size={16} />,
        navLink: '/instructor-auth/library/resources/list',
        action: 'read',
        resource: 'Instructor'
      },
      {
        id: 'uploadLibraryNotes',
        title: 'Upload Notes',
        icon: <Upload size={16} />,
        navLink: '/instructor-auth/library/upload-notes/list',
        action: 'read',
        resource: 'Instructor'
      }
    ]
  }
]
