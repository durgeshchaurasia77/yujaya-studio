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
  openEdit,
  handleDelete,
  handleStatusChange
}) => [
  {
    name: 'Booking ID',
    sortable: true,
    minWidth: '100px',
    cell: row => (
      <div className="user-cell">
        <div className="user-info">
          <div className="user-name">{row.booking_id}</div>
        </div>
      </div>
    )
  },
  {
    name: 'Class Name',
    sortable: true,
    cell: row => (
      <div className="d-flex align-items-center gap-1">
        <span>{row.class_name}</span>
      </div>
    )
  },
  {
    name: 'Mode',
    sortable: true,
    selector: row => row.mode
  },
  {
    name: 'Date',
    sortable: true,
    selector: row => row.date
  },
  {
    name: 'Instructor',
    sortable: true,
    selector: row => row.instructor
  },
  {
    name: 'Timing',
    sortable: true,
    selector: row => row.timing
  },
  {
    name: 'Booking Status',
    sortable: true,
    cell: row => <StatusBadge status={row.booking_status} />
  },
  {
    name: 'Payment Status',
    sortable: true,
    cell: row => <StatusBadge status={row.payment_status} />
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
          <DropdownItem
            onClick={() => history.push(`/staff-auth/booking-history/attendent-class/rating-review/add/${row.id}`)
            }
          >
            Add Review
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    )
  }
]
