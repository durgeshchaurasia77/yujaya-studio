
import dashboards from './dashboards'
import appointment from './appointment'
import sessionNotes from './session-notes'
import earningPayment from './earning-payment'

export default [
  {
    header: 'Client'
  },
  ...dashboards,
  ...appointment,
  ...sessionNotes,
  ...earningPayment
]