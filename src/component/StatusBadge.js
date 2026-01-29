import { Badge } from 'reactstrap'

const StatusBadge = ({ status }) => {
  const map = {
    Active: 'success',
    Inactive: 'danger',
    Pending: 'warning'
  }

  return <Badge color={map[status]} pill>{status}</Badge>
}

export default StatusBadge