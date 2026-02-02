
import dashboards from './dashboards'
import classes from './classes'
import student from './student'
import bookingHistory from './booking-history'
import library from './library'
import earningPayment from './earning-payment'

export default [
  {
    header: 'Instructor'
  },
  ...dashboards,
  ...classes,
  ...student,
  ...bookingHistory,
  ...library,
  ...earningPayment
]