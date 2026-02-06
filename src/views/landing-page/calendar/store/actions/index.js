import axios from 'axios'
import { events } from '../../../../../@fake-db/events'

// 🔥 MAIN FETCH (Header + Sidebar)
export const fetchEvents = ({ calendars = [], type = 'ALL' }) => {
  return dispatch => {
    let data = [...events]

    // Header menu filter
    if (type !== 'ALL') {
      data = data.filter(e => e.category === type)
    }

    // Sidebar filter
    if (calendars.length) {
      data = data.filter(e => calendars.includes(e.calendar))
    }

    dispatch({
      type: 'FETCH_EVENTS',
      events: data
    })
  }
}

// ADD EVENT
// export const addEvent = event => {
//   return (dispatch, getState) => {
//     axios.post('/apps/calendar/add-event', { event }).then(() => {
//       dispatch({ type: 'ADD_EVENT' })
//       dispatch(fetchEvents({
//         calendars: getState().calendar.selectedCalendars,
//         type: 'ALL'
//       }))
//     })
//   }
// }
export const addEvent = event => {
  return dispatch => {
    // await axios.post('/api/events', event)

    dispatch({
      type: 'ADD_EVENT_SUCCESS'
    })

    // dispatch(fetchEvents({
    //   calendars: getState().calendar.selectedCalendars,
    //   type: 'ALL'
    // }))
  }
}

// UPDATE EVENT
export const updateEvent = event => {
  return dispatch => {
    // await axios.put(`/api/events/${event.id}`, event)
    dispatch({
      type: 'UPDATE_EVENT_SUCCESS'
    })
  }
}

export const updateFilter = filter => {
  return (dispatch, getState) => {
    dispatch({ type: 'UPDATE_FILTERS', filter })

    dispatch(fetchEvents({
      calendars: getState().calendar.selectedCalendars,
      type: 'ALL'
    }))
  }
}

export const updateAllFilters = value => {
  return (dispatch, getState) => {
    dispatch({ type: 'UPDATE_ALL_FILTERS', value })

    dispatch(fetchEvents({
      calendars: getState().calendar.selectedCalendars,
      type: 'ALL'
    }))
  }
}

// REMOVE
export const removeEvent = id => {
  return dispatch => {
    console.log('REMOVE EVENT (mock):', id)

    dispatch({
      type: 'REMOVE_EVENT_SUCCESS'
    })
  }
}

// SELECT
export const selectEvent = event => {
  return dispatch => {
    dispatch({
      type: 'SELECT_EVENT',
      event
    })
  }
}