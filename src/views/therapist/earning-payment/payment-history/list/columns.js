import StatusBadge from '../../../../../component/StatusBadge'
import RoleIcon from '../../../../../component/RoleIcon'
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
  openViewDetails,
  handleDelete,
  handleStatusChange
}) => [
  {
    name: 'Instructor / Therapist',
    sortable: true,
    minWidth: '100px',
    cell: row => (
      <div className="user-cell">
        <div className="user-info">
          <div className="user-name">{row.user_name}</div>
        </div>
      </div>
    )
  },
  {
    name: 'Class Category',
    sortable: true,
    cell: row => (
      <div className="d-flex align-items-center gap-1">
        <span>{row.class_category}</span>
      </div>
    )
  },
  {
    name: 'Class Name',
    sortable: true,
    minWidth: '300px',
    cell: row => (
      <div className="d-flex align-items-center gap-1">
        <span>{row.class_name}</span>
      </div>
    )
  },
  {
    name: 'Date & Time',
    sortable: true,
    minWidth: '250px',
    selector: row => row.date_time
  },
  {
    name: 'Type',
    sortable: true,
    selector: row => row.type
  },
  {
    name: 'Fee',
    sortable: true,
    selector: row => row.fee
  },
  {
    name: 'Status',
    sortable: true,
    selector: row => row.status
  },
  {
    name: 'ACTIONS',
    minWidth: '90px',
    maxWidth: '90px',
    allowOverflow: true,
    cell: row => (
      <UncontrolledDropdown>
        <DropdownToggle
          tag="span"
          className="cursor-pointer d-flex justify-content-center"
        >
          <MoreVertical size={18} />
        </DropdownToggle>
        <DropdownMenu
          end
          flip
          container="body"
          className="table-action-dropdown shadow-sm"
        >
          <DropdownItem onClick={() => openViewDetails(row)}>
            View Details
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    )
  }
]
