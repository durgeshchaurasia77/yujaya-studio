
import dashboards from './dashboards'
import appointment from './appointment'
import sessionNotes from './session-notes'
import client from './client'
import document from './document'
import earningPayment from './earning-payment'

export default [
  {
    header: 'Therapist'
  },
  ...dashboards,
  ...appointment,
  ...sessionNotes,
  ...client,
  ...document
  // ...earningPayment
]