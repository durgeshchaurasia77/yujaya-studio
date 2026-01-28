import { Home, PlusSquare } from 'react-feather'

export default [
  {
    id: 'classes',
    title: 'Classes',
    icon: <Home />,
    children: [
      {
        id: 'analyticsDash',
        title: 'Add Class',
        icon: <PlusSquare />,
        navLink: '/class/add'
      },
      {
        id: 'analyticsDash',
        title: 'Reviews & Feedback',
        icon: <PlusSquare />,
        navLink: '/class/rating-review/list'
      },
      {
        id: 'analyticsDash',
        title: 'Upload Documents',
        icon: <PlusSquare />,
        navLink: '/class/document-upload/list'
      }
    ]
  }
]
