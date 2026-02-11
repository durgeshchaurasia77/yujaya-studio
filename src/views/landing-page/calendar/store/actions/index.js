import axios from 'axios'
import { events } from '../../../../../@fake-db/events'

const expandDailyTimedEvent = (event) => {
  const results = []

  const start = new Date(event.start)
  const end = new Date(event.end)

  const startHour = start.getHours()
  const startMin = start.getMinutes()
  const endHour = end.getHours()
  const endMin = end.getMinutes()

  const current = new Date(start)
  current.setHours(0, 0, 0, 0)

  const last = new Date(end)
  last.setHours(0, 0, 0, 0)

  while (current <= last) {
    const dayStart = new Date(current)
    dayStart.setHours(startHour, startMin, 0)

    const dayEnd = new Date(current)
    dayEnd.setHours(endHour, endMin, 0)

    results.push({
      ...event,
      id: `${event.id}-${current.toISOString()}`,
      start: dayStart.toISOString(),
      end: dayEnd.toISOString(),
      allDay: false
    })

    current.setDate(current.getDate() + 1)
  }

  return results
}

const normalizeEvents = (events) => {
  const normalized = []

  events.forEach(event => {
    const hasTime = event.start.includes('T')
    const start = new Date(event.start)
    const end = new Date(event.end)

    const isMultiDay =
      start.toDateString() !== end.toDateString()

    // ✅ CASE 1: multi-day + timed → SPLIT DAILY
    if (hasTime && isMultiDay) {
      const startHour = start.getHours()
      const startMin = start.getMinutes()
      const endHour = end.getHours()
      const endMin = end.getMinutes()

      const cursor = new Date(start)
      cursor.setHours(0, 0, 0, 0)

      const last = new Date(end)
      last.setHours(0, 0, 0, 0)

      while (cursor <= last) {
        const dayStart = new Date(cursor)
        dayStart.setHours(startHour, startMin, 0)

        const dayEnd = new Date(cursor)
        dayEnd.setHours(endHour, endMin, 0)

        normalized.push({
          ...event,
          id: `${event.id}-${cursor.toISOString()}`,
          start: dayStart.toISOString(),
          end: dayEnd.toISOString(),
          allDay: false
        })

        cursor.setDate(cursor.getDate() + 1)
      }
      return
    }

    // ✅ CASE 2: multi-day ALL-DAY (date only)
    if (!hasTime && isMultiDay) {
      normalized.push({
        ...event,
        allDay: true
      })
      return
    }

    // ✅ CASE 3: single-day timed
    normalized.push({
      ...event,
      allDay: false
    })
  })

  return normalized
}
export const fetchEvents = ({ calendars = [], type = 'ALL' }) => {
  return dispatch => {
    let data = [...events]

    // Header filter
    if (type !== 'ALL') {
      data = data.filter(e => e.category === type)
    }

    // Sidebar filter
    if (calendars.length) {
      data = data.filter(e => calendars.includes(e.calendar))
    }

    const finalEvents = data.flatMap(event => {
      const hasTime = event.start.includes('T')
      const isMultiDay =
        new Date(event.start).toDateString() !==
        new Date(event.end).toDateString()

      // ✅ CASE 1: multi-day + timed → SPLIT PER DAY
      if (hasTime && isMultiDay) {
        return expandDailyTimedEvent(event)
      }

      // ✅ CASE 2: multi-day ALL-DAY
      if (!hasTime && isMultiDay) {
        return {
          ...event,
          allDay: true
        }
      }

      // ✅ CASE 3: single-day timed
      return {
        ...event,
        allDay: false
      }
    })

    dispatch({
      type: 'FETCH_EVENTS',
      events: finalEvents
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