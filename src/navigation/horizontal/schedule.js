import { Home, MessageSquare, PlusSquare } from 'react-feather'

export default [
  {
    id: 'schedule',
    title: 'Schedule',
    icon: <Home />,
    children: [
      {
        id: 'analyticsDash',
        title: 'Add Schedule',
        icon: <PlusSquare />,
        navLink: '/schedule/calendar'
      },
      {
        id: 'analyticsDash',
        title: 'Announcement',
        icon: <PlusSquare />,
        navLink: '/annoucement/add'
      }
    ]
  }
]
