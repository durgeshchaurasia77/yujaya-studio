
import dashboards from './dashboards'
import classes from './classes'
import student from './student'
import bookingHistory from './booking-history'
import resources from './resources'
import payment from './payment'

export default [
  {
    header: 'Instructor'
  },
  ...dashboards,
  ...classes,
  ...student,
  ...bookingHistory
  // ...resources,
  // ...payment
]