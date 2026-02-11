import {
  BookOpen,
  PlusCircle,
  MessageSquare,
  Upload
} from 'react-feather'

export default [
  {
    id: 'classes',
    title: 'Classes',
    icon: <BookOpen size={20} />,
    children: [
      {
        id: 'addClass',
        title: 'Add Class',
        icon: <PlusCircle size={16} />,
        navLink: '/class/add'
      },
      {
        id: 'reviewsFeedback',
        title: 'Reviews & Feedback',
        icon: <MessageSquare size={16} />,
        navLink: '/class/rating-review/list'
      },
      {
        id: 'uploadDocuments',
        title: 'Upload Documents',
        icon: <Upload size={16} />,
        navLink: '/class/document-upload/list'
      }
    ]
  }
]
