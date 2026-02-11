import {
  BookOpen,
  List
} from 'react-feather'

export default [
  {
    id: 'studentCoursesPrograms',
    title: 'Courses & Programs',
    icon: <BookOpen size={20} />,
    navLink: '/student-auth/courses-programs',
    action: 'read',
    resource: 'Student',
    children: [
      {
        id: 'studentCoursesProgramsList',
        title: 'Courses & Programs',
        icon: <List size={16} />,
        navLink: '/student-auth/courses-programs',
        action: 'read',
        resource: 'Student'
      }
    ]
  }
]
