import StatusBadge from '../../../component/StatusBadge'
import RoleIcon from '../../../component/RoleIcon'
import TableActions from '../../../component/TableActions'

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
  {
    name: 'ACTIONS',
    cell: () => <TableActions />
  }
]
