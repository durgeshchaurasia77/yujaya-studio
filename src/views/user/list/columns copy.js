import StatusBadge from '../../../component/StatusBadge'
import RoleIcon from '../../../component/RoleIcon'
import TableActions from '../../../component/TableActions'
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

export const columns = [
  {
    name: 'USER',
    sortable: true,
    minWidth: '280px',
    cell: row => (
      <div className="user-cell">
        <div className="user-avatar">
          {row.avatar ? (
            <img src={row.avatar} alt={row.name} />
          ) : (
            <span>{row.name.charAt(0)}</span>
          )}
        </div>

        <div className="user-info">
          <div className="user-name">{row.name}</div>
          <div className="user-email">{row.email}</div>
        </div>
      </div>
    )
  },
  {
    name: 'ROLE',
    sortable: true,
    cell: row => (
      <div className="d-flex align-items-center gap-1">
        <RoleIcon role={row.role} />
        <span>{row.role}</span>
      </div>
    )
  },
  {
    name: 'PLAN',
    sortable: true,
    selector: row => row.plan
  },
  {
    name: 'BILLING',
    sortable: true,
    selector: row => row.billing
  },
  {
    name: 'STATUS',
    sortable: true,
    cell: row => <StatusBadge status={row.status} />
  },
  // {
  //   name: 'ACTIONS',
  //   cell: () => <TableActions />
  // }
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

        <DropdownMenu end>
          <DropdownItem onClick={() => openView(row)}>
            <Eye size={14} className="me-50" />
            View
          </DropdownItem>

          <DropdownItem onClick={() => openEdit(row)}>
            <Edit size={14} className="me-50" />
            Edit
          </DropdownItem>

          <DropdownItem onClick={() => handleStatusChange(row)}>
            <ToggleLeft size={14} className="me-50" />
            Change Status
          </DropdownItem>

          <DropdownItem
            className="text-danger"
            onClick={() => handleDelete(row)}
          >
            <Trash size={14} className="me-50" />
            Delete
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    )
  }
]
