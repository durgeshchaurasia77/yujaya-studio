import StatusBadge from '../../../../component/StatusBadge'
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
import './styles.css'
export const getColumns = ({
  history,
  openView,
  openViewCategory,
  openEditCategory,
  openEdit,
  handleDelete,
  handleStatusChange
}) => [
  {
    name: 'Parent Category',
    sortable: true,
    minWidth: '100px',
    cell: row => (
      <div className="user-cell">
        <div className="user-info">
          <div className="user-name">{row.category}</div>
        </div>
      </div>
    )
  },
  {
    name: 'Sub Category',
    sortable: true,
    cell: row => (
      <div className="d-flex align-items-center gap-1">
        <span>{row.subcategory}</span>
      </div>
    )
  },
  {
    name: 'Description',
    sortable: true,
    selector: row => row.description
  },
  {
    name: 'Color',
    sortable: true,
    selector: row => row.color
  },
  {
    name: 'Status',
    sortable: true,
    cell: row => <StatusBadge status={row.status} />
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
          className="table-action-dropdown icon-menu-dropdown-gap shadow-sm"
        >
          <DropdownItem onClick={() => openViewCategory(row)}>
            <Eye size={14} className="me-50 icon-menu-dropdown-gap" />
            View
          </DropdownItem>
      
          <DropdownItem onClick={() => openEditCategory(row)}>
            <Edit size={14} className="me-50 icon-menu-dropdown-gap" />
            Edit
          </DropdownItem>
      
          <DropdownItem onClick={() => handleStatusChange(row)}>
            <ToggleLeft size={14} className="me-50 icon-menu-dropdown-gap" />
            Change Status
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem
            className="text-danger"
            onClick={() => handleDelete(row)}
          >
            <Trash size={14} className="me-50 icon-menu-dropdown-gap" />
            Delete
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    )
  }
]
