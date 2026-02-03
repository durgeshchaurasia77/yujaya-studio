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
    name: 'Instructor / Therapist',
    sortable: true,
    minWidth: '280px',
    cell: row => (
      <div className="user-cell">
        {/* <div className="user-avatar">
          {row.avatar ? (
            <img src={row.avatar} alt={row.name} />
          ) : (
            <span>{row.name.charAt(0)}</span>
          )}
        </div> */}

        <div className="user-info">
          <div className="user-name">{row.instructor_therapist}</div>
          {/* <div className="user-email">{row.email}</div> */}
        </div>
      </div>
    )
  },
  {
    name: 'Review For',
    sortable: true,
    cell: row => (
      <div className="d-flex align-items-center gap-1">
        {/* <RoleIcon role={row.role} /> */}
        <span>{row.review_for}</span>
      </div>
    )
  },
  {
    name: 'Review',
    sortable: true,
    selector: row => row.review
  },
  {
    name: 'Date',
    sortable: true,
    selector: row => row.date
  },
  {
    name: 'Review By',
    sortable: true,
    selector: row => row.review_by
  },
  {
    name: 'STATUS',
    sortable: true,
    cell: row => <StatusBadge status={row.status} />
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
