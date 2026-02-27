import {
  Calendar,
  Clock,
  Bell
} from 'react-feather'

export const dashboardStats = [
  {
    title: 'Upcoming Classes',
    value: '12',
    icon: <Calendar size={15} />,
    color: 'light-primary'
  },
  {
    title: "Today’s Schedule",
    value: '5',
    icon: <Clock size={15} />,
    color: 'light-success'
  },
  {
    title: 'Announcements',
    value: '3',
    icon: <Bell size={15} />,
    color: 'light-warning'
  }
]
