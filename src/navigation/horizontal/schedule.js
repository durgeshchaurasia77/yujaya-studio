import {
  Calendar,
  PlusCircle,
  Bell
} from 'react-feather'

export default [
  {
    id: 'schedule',
    title: 'Schedule',
    icon: <Calendar size={20} />,
    children: [
      {
        id: 'addSchedule',
        title: 'Add Schedule',
        icon: <PlusCircle size={16} />,
        navLink: '/schedule/calendar'
      },
      {
        id: 'announcement',
        title: 'Announcement',
        icon: <Bell size={16} />,
        navLink: '/annoucement/add'
      }
    ]
  }
]
