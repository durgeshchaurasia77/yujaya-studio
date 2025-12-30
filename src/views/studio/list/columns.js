import {
  Badge,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle
} from 'reactstrap'
import { MoreVertical, Eye, Edit, Trash, ToggleLeft } from 'react-feather'
import '../../../assets/css.css'
const statusColor = {
  active: 'light-success',
  pending: 'light-warning',
  inactive: 'light-secondary'
}

export const getColumns = ({
  openView,
  openEdit,
  handleDelete,
  handleStatusChange
}) => [
  {
    name: 'Studio Name',
    selector: row => row.fullName,
    sortable: true
  },
  {
    name: 'Email',
    selector: row => row.email
  },
  {
    name: 'Role',
    selector: row => row.role,
    cell: row => <span className="text-capitalize">{row.role}</span>
  },
  {
    name: 'Plan',
    selector: row => row.currentPlan,
    cell: row => <span className="text-capitalize">{row.currentPlan}</span>
  },
  {
    name: 'Status',
    selector: row => row.status,
    cell: row => (
      <Badge color={statusColor[row.status]} pill>
        {row.status}
      </Badge>
    )
  },
  {
    name: 'Actions',
    minWidth: '90px',
    maxWidth: '90px',
    allowOverflow: true,
    cell: row => (
      <UncontrolledDropdown>
        <DropdownToggle tag="span" className="cursor-pointer">
          <MoreVertical size={18} />
        </DropdownToggle>

        <DropdownMenu right>
          <DropdownItem onClick={() => openView(row)}>
            <Eye size={14} />
            <span className="ml-50">View</span>
          </DropdownItem>

          <DropdownItem onClick={() => openEdit(row)}>
            <Edit size={14} />
            <span className="ml-50">Edit</span>
          </DropdownItem>

          <DropdownItem onClick={() => handleStatusChange(row)}>
            <ToggleLeft size={14} />
            <span className="ml-50">Change Status</span>
          </DropdownItem>

          <DropdownItem
            className="text-danger"
            onClick={() => handleDelete(row)}
          >
            <Trash size={14} />
            <span className="ml-50">Delete</span>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    )
  }
]
