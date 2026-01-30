import StatusBadge from '../../../../component/StatusBadge'
import RoleIcon from '../../../../component/RoleIcon'
import './styles.css'
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Progress
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
    name: 'Course Name',
    sortable: true,
    minWidth: '280px',
    cell: row => (
      <div className="user-cell">
        <div className="user-info">
          <div className="user-name">{row.course_name}</div>
        </div>
      </div>
    )
  },
  {
    name: 'Time',
    sortable: true,
    cell: row => (
      <div className="d-flex align-items-center gap-1">
        {/* <span>{row.timing}</span> */}
        <div className="user-name">{row.timing}</div>
      </div>
    )
  },
  // {
  //   name: 'Progress',
  //   sortable: true,
  //   minWidth: '420px',
  //   cell: row => (
  //     <div className="w-100">
  //       <div className="d-flex justify-content-between mb-25">
  //         <small className="fw-bold">{row.progress}%</small>
  //         <small className="text-muted">{row.progress}/100</small>
  //       </div>

  //       <Progress
  //         value={row.progress}
  //         className="my-1"
  //         style={{ height: '8px', borderRadius: '20px' }}
  //       />
  //     </div>
  //   )
  // },
  {
  name: 'Progress',
  minWidth: '380px',
  cell: row => (
    <div className="w-100">
      <div className="d-flex justify-content-between">
        <small className="fw-bold">{row.progress}%</small>
        <small className="text-muted">{row.progress}/100</small>
      </div>

      <Progress
        value={row.progress}
        className="mt-50"
        style={{ height: '6px' }}
      />
    </div>
  )
},
  {
    name: 'Status',
    sortable: false,
    minWidth: '220px',
    cell: row => (
      <div className="online-class-status-style">
        
        {/* Students */}
        <div className="online-class-status-style-item text-primary">
          <RoleIcon type="users" />
          <span>{row.status.students}</span>
        </div>

        {/* Lessons */}
        <div className="online-class-status-style-item text-info">
          <RoleIcon type="book" />
          <span>{row.status.lessons}</span>
        </div>

        {/* Videos */}
        <div className="online-class-status-style-item text-danger">
          <RoleIcon type="video" />
          <span>{row.status.videos}</span>
        </div>

      </div>
    )
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
