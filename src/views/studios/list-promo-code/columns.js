import StatusBadge from '../../../component/StatusBadge'
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
    name: 'NAME',
    selector: row => row.name,
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'CODE',
    selector: row => row.code,
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'DISCOUNT TYPE',
    selector: row => row.discount_type,
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'DISCOUNT VALUE',
    selector: row => row.discount_value,
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'VALIDITY',
    minWidth: '200px',
    cell: row => (
      <span>
        {row.startDate} → {row.endDate}
      </span>
    )
  },
  {
    name: 'USERS',
    selector: row => row.users,
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'STATUS',
    sortable: true,
    cell: row => <StatusBadge status={row.status} />
  },
  {
    name: 'ACTIONS',
    minWidth: '90px',
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

          <DropdownItem divider />

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
