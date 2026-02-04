
import dashboards from './dashboards'
import bookAppointment from './book-appointment'
import appointment from './appointment'
import sessionNotes from './session-notes'
import earningPayment from './earning-payment'
import therapyPlan from './therapy-plan'

export default [
  {
    header: 'Client'
  },
  ...dashboards,
  ...bookAppointment,
  ...appointment,
  ...therapyPlan,
  ...sessionNotes,
  ...earningPayment
]