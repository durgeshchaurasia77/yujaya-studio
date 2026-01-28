import StatusBadge from '../../../../component/StatusBadge'
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
          {/* <DropdownItem
            onClick={() => history.push(`/student-auth/attendent-class/rating-review/add/${row.id}`)
            }
          >
            Add Review
          </DropdownItem> */}
          <DropdownItem onClick={() => openViewResouces(row)}>
            View Resouces
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    )
  }
]
