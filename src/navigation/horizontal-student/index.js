
import dashboards from './dashboards'
import courses from './courses'
import coursesPrograms from './courses-programs'
import bookingHistory from './booking-history'
import resources from './resources'
import payment from './payment'

export default [
  {
    header: 'Student'
  },
  ...dashboards,
  ...courses,
  ...coursesPrograms,
  ...bookingHistory,
  ...resources,
  ...payment
]