import StatusBadge from '../../../../../component/StatusBadge'
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'
import { MoreVertical } from 'react-feather'

export const getColumns = ({
  history,
  openView,
  openViewResouces,
  openEdit,
  handleDelete,
  handleStatusChange
}) => [
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
    name: 'Class Code',
    sortable: true,
    selector: row => row.class_code
  },
  {
    name: 'Date & Time',
    sortable: true,
    minWidth: '250px',
    selector: row => row.date_time
  },
  {
    name: 'Attachment',
    sortable: true,
    selector: row => row.attachment
  },
  {
    name: 'Status',
    sortable: true,
    selector: row => row.status
  }
]
