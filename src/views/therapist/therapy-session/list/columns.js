import StatusBadge from '../../../../component/StatusBadge'
import RoleIcon from '../../../../component/RoleIcon'
import './styles.css'
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
  Trash,
  ZapOff,
  Clock,
  PlusSquare
} from 'react-feather'

export const getColumns = ({
  openView,
  openViewDetails,
  openReScheduleModal,
  handleDelete,
  handleCancelSession,
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
    name: 'Sessions',
    sortable: true,
    cell: row => (
      <div className="d-flex align-items-center gap-1">
        <span>{row.class_category}</span>
      </div>
    )
  },
  {
    name: 'Therapy',
    sortable: true,
    minWidth: '300px',
    wrap: true,
    cell: row => (
      <div className="d-flex align-items-center gap-1">
        <span>{row.class_name}</span>
      </div>
    )
  },
  {
    name: 'Therapy Session Start Date & Time',
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
    name: 'Packages',
    sortable: true,
    selector: row => row.packages
  },
  {
    name: 'Session Fee',
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
          {/* <DropdownItem onClick={() => openViewDetails(row)}>
            View Details
          </DropdownItem> */}
           <DropdownItem onClick={() => handleCancelSession(row)}>
            <ZapOff size={14} className="me-50 change-status-upcomming toggle-alignment-style" />Cancel Session
          </DropdownItem>
          <DropdownItem onClick={() => openReScheduleModal(row)}>
            <Clock size={14} className="me-50 change-status-upcomming toggle-alignment-style" />Re Schedule
          </DropdownItem>
          <DropdownItem>
            <PlusSquare size={14} className="me-50 change-status-upcomming toggle-alignment-style" />Remarks
          </DropdownItem>
          <DropdownItem onClick={() => handleStatusChange(row)}>
            <ToggleLeft size={14} className="me-50 change-status-upcomming toggle-alignment-style" />
            Change Status
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    )
  }
]
