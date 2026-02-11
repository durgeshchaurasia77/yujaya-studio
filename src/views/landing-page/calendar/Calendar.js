// ** React Import
import { useEffect, useRef, memo, Fragment } from 'react'

// ** Full Calendar & it's Plugins
import FullCalendar from '@fullcalendar/react'
import listPlugin from '@fullcalendar/list'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import './style.css'
// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import { toast } from 'react-toastify'
import { Card, CardBody } from 'reactstrap'
import { Menu, Check } from 'react-feather'

// ** Toast Component
const ToastComponent = ({ title, icon, color }) => (
  <Fragment>
    <div className='toastify-header pb-0'>
      <div className='title-wrapper'>
        <Avatar size='sm' color={color} icon={icon} />
        <h6 className='toast-title'>{title}</h6>
      </div>
    </div>
  </Fragment>
)

const Calendar = props => {
  // ** Refs
  const calendarRef = useRef(null)

  // ** Props
  const {
    store,
    isRtl,
    dispatch,
    calendarsColor,
    calendarApi,
    setCalendarApi,
    handleAddEventSidebar,
    blankEvent,
    toggleSidebar,
    selectEvent,
    updateEvent
  } = props

  // ** UseEffect checks for CalendarAPI Update
  useEffect(() => {
    if (calendarApi === null) {
      setCalendarApi(calendarRef.current.getApi())
    }
  }, [calendarApi])

  // ** calendarOptions(Props)
  const calendarOptions = {
    events: store.events.length ? store.events : [],
    plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin],
    initialView: 'dayGridMonth',
    firstDay: 1,
    headerToolbar: {
      start: 'sidebarToggle, prev,next, title',
      end: 'dayGridMonth,listMonth'
      // end: 'dayGridMonth,timeGridWeek,listDay,listMonth'
    },
    /*
      Enable dragging and resizing event
      ? Docs: https://fullcalendar.io/docs/editable
    */
    editable: true,

    /*
      Enable resizing event from start
      ? Docs: https://fullcalendar.io/docs/eventResizableFromStart
    */
    eventResizableFromStart: true,

    /*
      Automatically scroll the scroll-containers during event drag-and-drop and date selecting
      ? Docs: https://fullcalendar.io/docs/dragScroll
    */
    dragScroll: true,

    /*
      Max number of events within a given day
      ? Docs: https://fullcalendar.io/docs/dayMaxEvents
    */
    dayMaxEvents: 2,
    // dayMaxEventRows: 2,
    slotEventOverlap: false,
    // moreLinkClick: 'day',
    eventDisplay: 'block',
    allDaySlot: true,
    displayEventEnd: false,
    eventMaxStack: 2,

    moreLinkContent: (args) => {
      return `+${args.num} more`
    },
    views: {
      listDay: {
        type: 'list',
        duration: { days: 1 },
        buttonText: 'Day',
        displayEventTime: true,
        listDayFormat: { weekday: 'long' },
        listDaySideFormat: false
      }
    },
    editable: true,
    eventResizableFromStart: true,
    dragScroll: true,
    navLinks: true,
    // displayEventTime: false, // globally OFF
    eventTimeFormat: {
      hour: 'numeric',
      minute: '2-digit',
      meridiem: 'short'
    },
    /*
      Determines if day names and week names are clickable
      ? Docs: https://fullcalendar.io/docs/navLinks
    */
    navLinks: true,

    eventClassNames({ event: calendarEvent }) {
      // eslint-disable-next-line no-underscore-dangle
      const colorName = calendarsColor[calendarEvent._def.extendedProps.calendar]

      return [
        // Background Color
        `bg-light-${colorName}`
      ]
    },
    eventClick({ event: clickedEvent }) {
      dispatch(selectEvent(clickedEvent))
      handleAddEventSidebar()

      // * Only grab required field otherwise it goes in infinity loop
      // ! Always grab all fields rendered by form (even if it get `undefined`) otherwise due to Vue3/Composition API you might get: "object is not extensible"
      // event.value = grabEventDataFromEventApi(clickedEvent)

      // eslint-disable-next-line no-use-before-define
      // isAddNewEventSidebarActive.value = true
    },

    customButtons: {
      sidebarToggle: {
        text: <Menu className='d-xl-none d-block' />,
        click() {
          toggleSidebar(true)
        }
      }
    },

    dateClick(info) {
      const ev = blankEvent
      ev.start = info.date
      ev.end = info.date
      dispatch(selectEvent(ev))
      handleAddEventSidebar()
    },

    /*
      Handle event drop (Also include dragged event)
      ? Docs: https://fullcalendar.io/docs/eventDrop
      ? We can use `eventDragStop` but it doesn't return updated event so we have to use `eventDrop` which returns updated event
    */
    eventDrop({ event: droppedEvent }) {
      dispatch(updateEvent(droppedEvent))
      toast.success(<ToastComponent title='Event Updated' color='success' icon={<Check />} />, {
        autoClose: 2000,
        hideProgressBar: true,
        closeButton: false
      })
    },

    /*
      Handle event resize
      ? Docs: https://fullcalendar.io/docs/eventResize
    */
    eventResize({ event: resizedEvent }) {
      dispatch(updateEvent(resizedEvent))
      toast.success(<ToastComponent title='Event Updated' color='success' icon={<Check />} />, {
        autoClose: 2000,
        hideProgressBar: true,
        closeButton: false
      })
    },

    ref: calendarRef,

    // Get direction from app state (store)
    direction: isRtl ? 'rtl' : 'ltr'
  }
const groupBySlot = (events) => {
  const map = {}

  events.forEach(ev => {
    const slot = ev.extendedProps.slotId
    if (!map[slot]) map[slot] = []
    map[slot].push(ev)
  })

  return Object.values(map)
}
const renderEventContent = (eventInfo) => {
  const viewType = eventInfo.view.type
  const { event } = eventInfo
  const data = event.extendedProps

  const timeText = eventInfo.timeText // 🔥 FullCalendar provided time

  /* =======================
     MONTH & WEEK → COMPACT (NO TIME)
     ======================= */
  if (viewType === 'dayGridMonth' || viewType === 'timeGridWeek') {
    return (
      <div className="day-compact-event">
        <span className="event-dot" />
        <span className="event-title">{event.title}</span>
        <span className="event-instructor">
          {data.instructor?.name}
        </span>
      </div>
    )
  }

  /* =======================
     DAY & LIST → FULL CARD + TIME
     ======================= */
    if (viewType === 'timeGridDay') {
      return (
        <div className="day-list-row">
          {/* <div className="time">{timeText}</div> */}

            <div className="event-body">
            <div className="event-title">{event.title}</div>

            <div className="event-instructor">
              <img src={data.instructor?.avatar} alt="" />
              <div>
                <strong>{data.instructor?.name}</strong>
                <small>{data.instructor?.skill}</small>
              </div>
            </div>

            <div className="event-location">
              {data.location?.type === 'online' ? '📹' : '📍'}
              {data.location?.name}
            </div>

            <div className="event-level">
              🧘 {data.level}
            </div>
          </div>

          <div className="event-actions">
            <button className="btn-details">Details</button>
            <button className="btn-book">+ Book Class</button>
          </div>
        </div>
      )
    }

  if (viewType.startsWith('list')) {
    return (
      <div className="day-event">
        <div className="event-time">{timeText}</div>

        <div className="event-body">
          <div className="event-title">{event.title}</div>

          <div className="event-instructor">
            <img src={data.instructor?.avatar} alt="" />
            <div>
              <strong>{data.instructor?.name}</strong>
              <small>{data.instructor?.skill}</small>
            </div>
          </div>

          <div className="event-location">
            {data.location?.type === 'online' ? '📹' : '📍'}
            {data.location?.name}
          </div>

          <div className="event-level">
            🧘 {data.level}
          </div>
        </div>

        <div className="event-actions">
          <button className="btn-details">Details</button>
          <button className="btn-book">+ Book Class</button>
        </div>
      </div>
    )
  }

  return <span>{event.title}</span>
}

const renderEventContent1 = (eventInfo) => {
  const viewType = eventInfo.view.type
  const { event } = eventInfo
  const data = event.extendedProps

  /* =======================
     DAY VIEW → COMPACT
     ======================= */
  if (viewType === 'dayGridMonth' || viewType === 'timeGridWeek') {
    return (
      <div className="day-compact-event">
        <span className="event-dot " dd={viewType}/>
        <span className="event-title">{event.title}</span>
        <span className="event-instructor">
          {data.instructor?.name}
        </span>
      </div>
    )
  }

  /* =======================
     LIST VIEW → FULL CARD
     ======================= */
  if (viewType.startsWith('list') || viewType === 'timeGridDay') {
    return (
      <div className="day-event">
        <span className="event-dot" ds={viewType}/>

        <div className="event-body">
          <div className="event-title">{event.title}</div>

          <div className="event-instructor">
            <img src={data.instructor?.avatar} alt="" />
            <div>
              <strong>{data.instructor?.name}</strong>
              <small>{data.instructor?.skill}</small>
            </div>
          </div>

          <div className="event-location">
            {data.location?.type === 'online' ? '📹' : '📍'}
            {data.location?.name}
          </div>

          <div className="event-level">
            🧘 {data.level}
          </div>
        </div>

        <div className="event-actions">
          <button className="btn-details">Details</button>
          <button className="btn-book">+ Book Class</button>
        </div>
      </div>
    )
  }

  /* =======================
     MONTH / WEEK → TITLE ONLY
     ======================= */
  return (
    <div className="fc-event-title">
      {event.title}
    </div>
  )
}


  return (
    <Card className='shadow-none border-0 mb-0 rounded-0'>
      <CardBody className='pb-0'>
        {/* <FullCalendar eventContent={renderDayEvent} /> */}
        <FullCalendar {...calendarOptions} eventContent={renderEventContent}/>{' '}
      </CardBody>
    </Card>
  )
}

export default memo(Calendar)
