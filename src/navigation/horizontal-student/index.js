import dashboards from './dashboards'
import courses from './courses'
import coursesPrograms from './courses-programs'
import bookingHistory from './booking-history'

export default [
  {
    header: 'Student'
  },
  ...dashboards,
  ...courses,
  ...coursesPrograms,
  ...bookingHistory
]