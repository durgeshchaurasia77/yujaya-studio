import {
  User,
  Star,
  Edit,
  PenTool,
  Monitor
} from 'react-feather'

const RoleIcon = ({ role }) => {
  const icons = {
    Maintainer: <User size={16} className="text-success" />,
    Subscriber: <Star size={16} className="text-primary" />,
    Editor: <Edit size={16} className="text-info" />,
    Author: <PenTool size={16} className="text-warning" />,
    Admin: <Monitor size={16} className="text-danger" />
  }

  return icons[role] || <User size={16} />
}

export default RoleIcon
