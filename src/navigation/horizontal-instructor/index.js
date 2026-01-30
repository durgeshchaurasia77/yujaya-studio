
import dashboards from './dashboards'
import classes from './classes'
import coursesPrograms from './courses-programs'
import bookingHistory from './booking-history'
import resources from './resources'
import payment from './payment'

export default [
  {
    header: 'Instructor'
  },
  ...dashboards,
  ...classes
  // ...coursesPrograms,
  // ...bookingHistory,
  // ...resources,
  // ...payment
]