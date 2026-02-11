import {
  Users,
  UserCheck,
  Clipboard,
  FileText
} from 'react-feather'

export default [
  {
    id: 'staffStudents',
    title: 'Student',
    icon: <Users size={20} />,
    navLink: '/staff-auth/student/enrolled-student/list',
    action: 'read',
    resource: 'Staff',
    children: [
      {
        id: 'staffEnrolledStudents',
        title: 'Enrolled Student',
        icon: <UserCheck size={16} />,
        navLink: '/staff-auth/student/enrolled-student/list',
        action: 'read',
        resource: 'Staff'
      },
      {
        id: 'staffAttendanceTracking',
        title: 'Attendance Tracking',
        icon: <Clipboard size={16} />,
        navLink: '/staff-auth/student/attandance-tracking/list',
        action: 'read',
        resource: 'Staff'
      },
      {
        id: 'staffStudentNotes',
        title: 'Student Notes',
        icon: <FileText size={16} />,
        navLink: '/staff-auth/student/student-notes/list',
        action: 'read',
        resource: 'Staff'
      }
    ]
  }
]
