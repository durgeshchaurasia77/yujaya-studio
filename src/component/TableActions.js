import { Trash, Eye, MoreVertical } from 'react-feather'

const TableActions = () => (
  <div className="d-flex gap-1">
    <Trash size={16} className="cursor-pointer" />
    <Eye size={16} className="cursor-pointer" />
    <MoreVertical size={16} className="cursor-pointer" />
  </div>
)

export default TableActions