import { useState } from 'react'
import { Row, 
  Col, 
  Card, 
  CardBody, 
  Button,
  Input,
  Label,
  CustomInput,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup
} from 'reactstrap'
import Avatar from '@components/avatar'
import { Edit, Copy } from 'react-feather'
// import './roles.css'
import '../../../assets/css.css'
import './style.css'

import avatar1 from '../../../assets/images/avatars/1.png'
import avatar2 from '../../../assets/images/avatars/2.png'
import avatar3 from '../../../assets/images/avatars/3.png'
import avatar4 from '../../../assets/images/avatars/4.png'
import newRole from '../../../assets/images/avatars/add-new-roles.png'

const roles = [
  {
    title: 'Administrator',
    users: 4,
    avatars: [avatar1, avatar2, avatar3, avatar4]
  },
  {
    title: 'Manager',
    users: 7,
    avatars: [avatar1, avatar2, avatar3]
  },
  {
    title: 'Users',
    users: 5,
    avatars: [avatar1, avatar2, avatar3]
  },
  {
    title: 'Support',
    users: 3,
    avatars: [avatar1, avatar2]
  },
  {
    title: 'Restricted User',
    users: 2,
    avatars: [avatar1]
  }
]

const permissionsList = [
  'User Management',
  'Content Management',
  'Disputes Management',
  'Database Management',
  'Financial Management',
  'Reporting',
  'API Control',
  'Repository Management',
  'Payroll'
]

const RolesPermissionTabContent = () => {
const [openRoleModal, setOpenRoleModal] = useState(false)
const [isEdit, setIsEdit] = useState(false)
const [roleName, setRoleName] = useState('')
const [selectAll, setSelectAll] = useState(false)

const [permissions, setPermissions] = useState(
  permissionsList.map(() => ({
    read: false,
    write: false,
    create: false
  }))
)

const handleSelectAll = () => {
  const value = !selectAll
  setSelectAll(value)

  setPermissions(
    permissions.map(() => ({
      read: value,
      write: value,
      create: value
    }))
  )
}

const handlePermissionChange = (index, type) => {
  const updated = [...permissions]
  updated[index][type] = !updated[index][type]
  setPermissions(updated)

  const allChecked = updated.every(
    p => p.read && p.write && p.create
  )
  setSelectAll(allChecked)
}

// const openEditRole = role => {
//   setIsEdit(true)
//   setRoleName(role.title)

//   setPermissions(role.permissions)

//   const allChecked = role.permissions.every(
//     p => p.read && p.write && p.create
//   )
//   setSelectAll(allChecked)

//   setOpenRoleModal(true)
// }
const openAddRoleModal = () => {
  setIsEdit(false)
  setRoleName('')
  setSelectAll(false)

  setPermissions(
    permissionsList.map(() => ({
      read: false,
      write: false,
      create: false
    }))
  )

  setOpenRoleModal(true)
}

const openEditRole = role => {
  setIsEdit(true)
  setRoleName(role.title)

  // demo ke liye default permissions
  const defaultPermissions = permissionsList.map(() => ({
    read: true,
    write: false,
    create: false
  }))

  setPermissions(defaultPermissions)

  const allChecked = defaultPermissions.every(
    p => p.read && p.write && p.create
  )
  setSelectAll(allChecked)

  setOpenRoleModal(true)
}
  return (
    <>
      {/* HEADER */}
      <div className="mb-3">
        <h4 className="mb-25">Roles List</h4>
        <p className="text-muted">
          A role provided access to predefined menus and features so that depending on
          assigned role an administrator can have access to what user needs.
        </p>
      </div>
      <Row>
        {roles.map((role, index) => (
          <Col md="6" lg="4" key={index} className="mb-2">
            <Card className="role-card-ui">
              <CardBody>
                {/* TOP */}
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <small className="text-muted">
                    Total {role.users} users
                  </small>

                  <div className="avatar-group-ui">
                    {role.avatars.slice(0, 3).map((img, i) => (
                      <Avatar
                        key={i}
                        img={img}
                        imgHeight="32"
                        imgWidth="32"
                      />
                    ))}
                    {role.users > 3 && (
                      <div className="avatar-more-ui">
                        +{role.users - 3}
                      </div>
                    )}
                  </div>
                </div>

                {/* TITLE */}
                <h5 className="mb-50">{role.title}</h5>

                {/* ACTIONS */}
                <div className="d-flex justify-content-between align-items-center">
                  {/* <a href="/" onClick={e => e.preventDefault()}>
                    Edit Role
                  </a> */}
                  <a
                    href="/"
                    onClick={e => {
                      e.preventDefault()
                      openEditRole(role)
                    }}
                  >
                    Edit Role
                  </a>
                  <Copy size={16} />
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
        <Col md="6" lg="4">
          <Card className="role-card-ui role-add-card">
            <CardBody className="d-flex align-items-center justify-content-between">
              
              {/* LEFT : IMAGE */}
              <div className="role-add-image">
                <img
                  src={newRole}
                  alt="Add Role"
                  height="120"
                />
              </div>

              {/* RIGHT : CONTENT */}
              <div className="role-add-content text-right">
                {/* <Button
                  color="primary"
                  size="sm"
                  className="mb-75"
                >
                  Add New Role
                </Button> */}
                {/* <Button
                  color="primary"
                  size="sm"
                  onClick={() => setOpenAddRole(true)}
                >
                  Add New Role
                </Button> */}
                <Button color="primary" size="sm" onClick={openAddRoleModal}>
                  Add New Role
                </Button>

                <p className="text-muted mb-0">
                  Add new role,<br />
                  if it doesn't exist.
                </p>
              </div>

            </CardBody>
          </Card>
        </Col>

      </Row>

      <Modal
  isOpen={openRoleModal}
  toggle={() => setOpenRoleModal(false)}
  className="modal-dialog-centered modal-lg"
>
  <ModalHeader toggle={() => setOpenRoleModal(false)}>
    {isEdit ? 'Edit Role' : 'Add New Role'}
    <small className="d-block text-muted">
      Set role permissions
    </small>
  </ModalHeader>

  <ModalBody>
    <FormGroup>
      <Label>Role Name</Label>
      <Input
        value={roleName}
        onChange={e => setRoleName(e.target.value)}
        placeholder="Enter role name"
      />
    </FormGroup>

    <h6 className="mt-2 mb-1">Role Permissions</h6>

    <Row className="align-items-center mb-1">
      <Col md="4" className="font-weight-bold">
        Administrator Access
      </Col>
      <Col md="8" className="d-flex justify-content-end">
        <CustomInput
          type="checkbox"
          id="select-all"
          label="Select All"
          checked={selectAll}
          onChange={handleSelectAll}
        />
      </Col>
    </Row>

    {permissionsList.map((item, index) => (
      <Row key={index} className="align-items-center mb-50">
        <Col md="4">{item}</Col>
        <Col md="8" className="d-flex justify-content-end">
          <CustomInput
            type="checkbox"
            label="Read"
            checked={permissions[index].read}
            onChange={() => handlePermissionChange(index, 'read')}
            className="mr-1"
          />
          <CustomInput
            type="checkbox"
            label="Write"
            checked={permissions[index].write}
            onChange={() => handlePermissionChange(index, 'write')}
            className="mr-1"
          />
          <CustomInput
            type="checkbox"
            label="Create"
            checked={permissions[index].create}
            onChange={() => handlePermissionChange(index, 'create')}
          />
        </Col>
      </Row>
    ))}
  </ModalBody>

  <ModalFooter>
    <Button color="primary">
      {isEdit ? 'Update Role' : 'Submit'}
    </Button>
    <Button color="secondary" outline onClick={() => setOpenRoleModal(false)}>
      Cancel
    </Button>
  </ModalFooter>
</Modal>

    </>
  )
}

export default RolesPermissionTabContent
