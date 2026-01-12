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
    name: 'GIFT CODE',
    selector: row => row.code,
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'DESIGN',
    minWidth: '100px',
    cell: row => (
      <img
        src={row.design}
        alt="design"
        width="40"
        height="30"
        style={{ borderRadius: 4, objectFit: 'cover' }}
      />
    )
  },
  {
    name: 'TYPE',
    selector: row => row.type,
    sortable: true,
    minWidth: '120px'
  },
  {
    name: 'RECIPIENT EMAIL',
    selector: row => row.remail,
    sortable: true,
    minWidth: '220px'
  },
  {
    name: 'SENDER EMAIL',
    selector: row => row.semail,
    sortable: true,
    minWidth: '220px'
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
