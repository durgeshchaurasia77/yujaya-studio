import {
  Users,
  List,
  UserPlus,
  UserCheck,
  User,
  Briefcase,
  Heart
} from 'react-feather'

export default [
  {
    id: 'userManagement',
    title: 'User Management',
    icon: <Users size={20} />,
    children: [
      {
        id: 'userList',
        title: 'User List / Manage',
        icon: <List size={16} />,
        navLink: '/user/list'
      },
      {
        id: 'createAccount',
        title: 'Create Account',
        icon: <UserPlus size={16} />,
        navLink: '/user/create-account'
      },
      {
        id: 'addStudent',
        title: 'Add Student',
        icon: <User size={16} />,
        navLink: '/user/create-student'
      },
      {
        id: 'addStaff',
        title: 'Add Staff / Partner',
        icon: <Briefcase size={16} />,
        navLink: '/user/create-staff'
      },
      {
        id: 'addInstructor',
        title: 'Add Instructor / Therapist',
        icon: <UserCheck size={16} />,
        navLink: '/user/create-instructor'
      },
      {
        id: 'addMembershipUser',
        title: 'Add Membership',
        icon: <UserPlus size={16} />,
        navLink: '/user/create-members'
      },
      {
        id: 'addClient',
        title: 'Add Client',
        icon: <Heart size={16} />,
        navLink: '/user/create-client'
      }
    ]
  }
]
