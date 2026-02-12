import axios from 'axios'
import { events } from '../../../../../@fake-db/events'

const expandDailyTimedEvent = (event) => {
  const results = []

  const start = new Date(event.start)
  const end = new Date(event.end)

  const current = new Date(start)
  current.setHours(0, 0, 0, 0)

  const last = new Date(end)
  last.setHours(0, 0, 0, 0)

  while (current <= last) {
    const weekday = current.getDay()
    const slot = event.dailySlots?.[weekday]

    if (slot) {
      const [startHour, startMin] = slot.start.split(':').map(Number)
      const [endHour, endMin] = slot.end.split(':').map(Number)

      const dayStart = new Date(current)
      dayStart.setHours(startHour, startMin, 0, 0)

      const dayEnd = new Date(current)
      dayEnd.setHours(endHour, endMin, 0, 0)

      results.push({
        ...event,
        id: `${event.id}-${current.toISOString()}`,
        start: dayStart,
        end: dayEnd,
        allDay: false
      })
    }

    current.setDate(current.getDate() + 1)
  }

  return results
}

const expandDailyTimedEvent12 = (event) => {
  const results = []

  const start = new Date(event.start)
  const end = new Date(event.end)

  const current = new Date(start)
  current.setHours(0, 0, 0, 0)

  const last = new Date(end)
  last.setHours(0, 0, 0, 0)

  while (current <= last) {

    const weekday = current.getDay()

    const slot = event.dailySlots?.[weekday]

    if (slot) {
      const [startHour, startMin] = slot.start.split(':')
      const [endHour, endMin] = slot.end.split(':')

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
    }

    current.setDate(current.getDate() + 1)
  }

  return results
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

    const finalEvents1 = data.flatMap(event => {
      const hasTime = event.start.includes('T')
      const isMultiDay =
        new Date(event.start).toDateString() !==
        new Date(event.end).toDateString()

      // ✅ CASE 1: multi-day + timed → SPLIT PER DAY
      if (event.dailySlots) {
        return expandDailyTimedEvent(event)
      }

      // ✅ CASE 2: multi-day ALL-DAY
      if (!event.dailySlots) {
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
    const finalEvents = data.flatMap(event => {

      // ✅ If event has weekday time slots
      if (event.dailySlots) {
        return expandDailyTimedEvent(event)
      }

    const hasTime = event.start.includes('T')
    const isMultiDay =
      new Date(event.start).toDateString() !==
      new Date(event.end).toDateString()

      // Single-day timed
      if (hasTime) {
        return {
          ...event,
          allDay: false
        }
      }

      // Multi-day without time → treat as all-day
      if (isMultiDay) {
        return {
          ...event,
          allDay: true
        }
      }

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