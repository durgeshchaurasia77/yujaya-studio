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
    name: 'Booking ID',
    sortable: true,
    minWidth: '280px',
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
  }
  // {
  //   name: 'ACTIONS',
  //   minWidth: '90px',
  //   maxWidth: '90px',
  //   allowOverflow: true,
  //   cell: row => (
  //     <UncontrolledDropdown>
  //       <DropdownToggle
  //         tag="span"
  //         className="cursor-pointer d-flex justify-content-center"
  //       >
  //         <MoreVertical size={18} />
  //       </DropdownToggle>

  //       <DropdownMenu
  //         end
  //         flip
  //         container="body"
  //         className="table-action-dropdown shadow-sm"
  //       >
  //         <DropdownItem onClick={() => openView(row)}>
  //           <Eye size={14} className="me-50" />
  //           View
  //         </DropdownItem>

  //         <DropdownItem onClick={() => openEdit(row)}>
  //           <Edit size={14} className="me-50" />
  //           Edit
  //         </DropdownItem>

  //         <DropdownItem onClick={() => handleStatusChange(row)}>
  //           <ToggleLeft size={14} className="me-50" />
  //           Change Status
  //         </DropdownItem>

  //         <DropdownItem divider />

  //         <DropdownItem
  //           className="text-danger"
  //           onClick={() => handleDelete(row)}
  //         >
  //           <Trash size={14} className="me-50" />
  //           Delete
  //         </DropdownItem>
  //       </DropdownMenu>
  //     </UncontrolledDropdown>
  //   )
  // }
]
