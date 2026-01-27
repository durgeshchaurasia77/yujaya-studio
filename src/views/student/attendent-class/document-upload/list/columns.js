import StatusBadge from '../../../../component/StatusBadge'
import RoleIcon from '../../../../component/RoleIcon'
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'

import {
  MoreVertical,
  Eye,
  Edit,
  ToggleLeft,
  Trash
} from 'react-feather'

export const getColumns = ({
  openView,
  openEdit,
  handleDelete,
  handleStatusChange
}) => [
  {
    name: 'Course',
    sortable: true,
    minWidth: '280px',
    cell: row => (
      <div className="user-cell">
        <div className="user-info">
          <div className="user-name">{row.course}</div>
        </div>
      </div>
    )
  },
  {
    name: 'Class Code',
    sortable: true,
    cell: row => (
      <div className="d-flex align-items-center gap-1">
        {/* <RoleIcon role={row.role} /> */}
        <span>{row.class_code}</span>
      </div>
    )
  },
  {
    name: 'Start & End Date',
    sortable: true,
    selector: row => row.date
  },
  {
    name: 'Attachment',
    sortable: true,
    selector: row => row.attachment
  },
  {
    name: 'STATUS',
    sortable: true,
    cell: row => <StatusBadge status={row.status} />
  }
]
