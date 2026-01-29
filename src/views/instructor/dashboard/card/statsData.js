import {
  Calendar,
  Clock,
  Bell
} from 'react-feather'

export const dashboardStats = [
  {
    title: 'Upcoming Classes',
    value: '12',
    icon: <Calendar size={20} />,
    color: 'light-primary'
  },
  {
    title: "Today’s Schedule",
    value: '5',
    icon: <Clock size={20} />,
    color: 'light-success'
  },
  {
    title: 'Announcements',
    value: '3',
    icon: <Bell size={20} />,
    color: 'light-warning'
  }
]
