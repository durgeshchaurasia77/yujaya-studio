import {
  Users,
  UserCheck,
  Clipboard,
  FileText
} from 'react-feather'

export default [
  {
    id: 'instructorStudents',
    title: 'Student',
    icon: <Users size={20} />,
    navLink: '/instructor-auth/student/enrolled-student/list',
    action: 'read',
    resource: 'Instructor',
    children: [
      {
        id: 'enrolledStudents',
        title: 'Enrolled Student',
        icon: <UserCheck size={16} />,
        navLink: '/instructor-auth/student/enrolled-student/list',
        action: 'read',
        resource: 'Instructor'
      },
      {
        id: 'attendanceTracking',
        title: 'Attendance Tracking',
        icon: <Clipboard size={16} />,
        navLink: '/instructor-auth/student/attandance-tracking/list',
        action: 'read',
        resource: 'Instructor'
      },
      {
        id: 'studentNotes',
        title: 'Student Notes',
        icon: <FileText size={16} />,
        navLink: '/instructor-auth/student/student-notes/list',
        action: 'read',
        resource: 'Instructor'
      }
    ]
  }
]
