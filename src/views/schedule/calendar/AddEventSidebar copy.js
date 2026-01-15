// ** React Imports
import { Fragment, useState } from 'react'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import classnames from 'classnames'
import { toast } from 'react-toastify'
import Flatpickr from 'react-flatpickr'
import { X, Check, Trash } from 'react-feather'
import Select, { components } from 'react-select'
import { useForm, Controller } from 'react-hook-form'
import { Button, Modal, ModalHeader, ModalBody, FormGroup, Label, CustomInput, Input, Form } from 'reactstrap'

// ** Utils
import { selectThemeColors, isObjEmpty } from '@utils'

// ** Avatar Images
import img1 from '@src/assets/images/avatars/1-small.png'
import img2 from '@src/assets/images/avatars/3-small.png'
import img3 from '@src/assets/images/avatars/5-small.png'
import img4 from '@src/assets/images/avatars/7-small.png'
import img5 from '@src/assets/images/avatars/9-small.png'
import img6 from '@src/assets/images/avatars/11-small.png'

// ** Styles Imports
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/flatpickr/flatpickr.scss'
import './style.css'
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

const AddEventSidebar = props => {
  // ** Props
  const {
    store,
    dispatch,
    open,
    handleAddEventSidebar,
    calendarsColor,
    calendarApi,
    refetchEvents,
    addEvent,
    selectEvent,
    updateEvent,
    removeEvent
  } = props

  // ** Vars
  const selectedEvent = store.selectedEvent
  const { register, errors, handleSubmit } = useForm()

  // ** States
  const [url, setUrl] = useState('')
  const [desc, setDesc] = useState('')
  const [title, setTitle] = useState('')
  const [guests, setGuests] = useState({})
  const [allDay, setAllDay] = useState(false)
  const [location, setLocation] = useState('')
  const [endPicker, setEndPicker] = useState(new Date())
  const [startPicker, setStartPicker] = useState(new Date())
  // const [value, setValue] = useState([{ value: 'Business', label: 'Business', color: 'primary' }])
  const [value, setValue] = useState(null)
  const [category, setCategory] = useState(null)
  const [subCategory, setSubCategory] = useState(null)
  const [classValue, setClassValue] = useState(null)
  const [instructor, setInstructor] = useState(null)
  // ** Select Options
  const options = [
    { value: 'Business', label: 'Business', color: 'primary' },
    { value: 'Personal', label: 'Personal', color: 'danger' },
    { value: 'Family', label: 'Family', color: 'warning' },
    { value: 'Holiday', label: 'Holiday', color: 'success' },
    { value: 'ETC', label: 'ETC', color: 'info' }
  ]

  const guestsOptions = [
    { value: 'Donna Frank', label: 'Donna Frank', avatar: img1 },
    { value: 'Jane Foster', label: 'Jane Foster', avatar: img2 },
    { value: 'Gabrielle Robertson', label: 'Gabrielle Robertson', avatar: img3 },
    { value: 'Lori Spears', label: 'Lori Spears', avatar: img4 },
    { value: 'Sandy Vega', label: 'Sandy Vega', avatar: img5 },
    { value: 'Cheryl May', label: 'Cheryl May', avatar: img6 }
  ]

  // ** Custom select components
  const OptionComponent = ({ data, ...props }) => {
    return (
      <components.Option {...props}>
        <span className={`bullet bullet-${data.color} bullet-sm mr-50`}></span>
        {data.label}
      </components.Option>
    )
  }

  const GuestsComponent = ({ data, ...props }) => {
    return (
      <components.Option {...props}>
        <div className='d-flex flex-wrap align-items-center'>
          <Avatar className='my-0 mr-1' size='sm' img={data.avatar} />
          <div>{data.label}</div>
        </div>
      </components.Option>
    )
  }

  const selectStyles = {
  menuPortal: base => ({
    ...base,
    zIndex: 99999
  }),
  menu: base => ({
    ...base,
    backgroundColor: '#fff',
    boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
  }),
  menuList: base => ({
    ...base,
    backgroundColor: '#fff'
  })
}
  // ** Adds New Event
  const handleAddEvent = () => {
    const obj = {
      title,
      start: startPicker,
      end: endPicker,
      allDay,
      display: 'block',
      extendedProps: {
        // calendar: value[0].label,
        calendar: category?.label,
        url: url.length ? url : undefined,
        guests: guests.length ? guests : undefined,
        location: location.length ? location : undefined,
        desc: desc.length ? desc : undefined
      }
    }
    dispatch(addEvent(obj))
    refetchEvents()
    handleAddEventSidebar()
    toast.success(<ToastComponent title='Event Added' color='success' icon={<Check />} />, {
      autoClose: 2000,
      hideProgressBar: true,
      closeButton: false
    })
  }

  // ** Reset Input Values on Close
  const handleResetInputValues = () => {
    setCategory(null)
    setSubCategory(null)
    setClassValue(null)
    setInstructor(null)
    dispatch(selectEvent({}))
    setTitle('')
    setAllDay(false)
    setUrl('')
    setLocation('')
    setDesc('')
    setGuests({})
    setValue([{ value: 'Business', label: 'Business', color: 'primary' }])
    setStartPicker(new Date())
    setEndPicker(new Date())
  }

  // ** Set sidebar fields
  const handleSelectedEvent = () => {
    if (!isObjEmpty(selectedEvent)) {
      const calendar = selectedEvent.extendedProps.calendar

      const resolveLabel = () => {
        if (calendar.length) {
          return { label: calendar, value: calendar, color: calendarsColor[calendar] }
        } else {
          return { value: 'Business', label: 'Business', color: 'primary' }
        }
      }
      setTitle(selectedEvent.title || title)
      setAllDay(selectedEvent.allDay || allDay)
      setUrl(selectedEvent.url || url)
      setLocation(selectedEvent.extendedProps.location || location)
      setDesc(selectedEvent.extendedProps.description || desc)
      setGuests(selectedEvent.extendedProps.guests || guests)
      setStartPicker(new Date(selectedEvent.start))
      setEndPicker(selectedEvent.allDay ? new Date(selectedEvent.start) : new Date(selectedEvent.end))
      setValue([resolveLabel()])
    }
  }

  // ** (UI) updateEventInCalendar
  const updateEventInCalendar = (updatedEventData, propsToUpdate, extendedPropsToUpdate) => {
    const existingEvent = calendarApi.getEventById(updatedEventData.id)

    // ** Set event properties except date related
    // ? Docs: https://fullcalendar.io/docs/Event-setProp
    // ** dateRelatedProps => ['start', 'end', 'allDay']
    // ** eslint-disable-next-line no-plusplus
    for (let index = 0; index < propsToUpdate.length; index++) {
      const propName = propsToUpdate[index]
      existingEvent.setProp(propName, updatedEventData[propName])
    }

    // ** Set date related props
    // ? Docs: https://fullcalendar.io/docs/Event-setDates
    existingEvent.setDates(updatedEventData.start, updatedEventData.end, { allDay: updatedEventData.allDay })

    // ** Set event's extendedProps
    // ? Docs: https://fullcalendar.io/docs/Event-setExtendedProp
    // ** eslint-disable-next-line no-plusplus
    for (let index = 0; index < extendedPropsToUpdate.length; index++) {
      const propName = extendedPropsToUpdate[index]
      existingEvent.setExtendedProp(propName, updatedEventData.extendedProps[propName])
    }
  }

  // ** Updates Event in Store
  const handleUpdateEvent = () => {
    const eventToUpdate = {
      id: selectedEvent.id,
      title,
      allDay,
      start: startPicker,
      end: endPicker,
      url,
      extendedProps: {
        location,
        description: desc,
        guests,
        calendar: value[0].label
      }
    }

    const propsToUpdate = ['id', 'title', 'url']
    const extendedPropsToUpdate = ['calendar', 'guests', 'location', 'description']

    dispatch(updateEvent(eventToUpdate))
    updateEventInCalendar(eventToUpdate, propsToUpdate, extendedPropsToUpdate)
    handleAddEventSidebar()
    toast.success(<ToastComponent title='Event Updated' color='success' icon={<Check />} />, {
      autoClose: 2000,
      hideProgressBar: true,
      closeButton: false
    })
  }

  // ** (UI) removeEventInCalendar
  const removeEventInCalendar = eventId => {
    calendarApi.getEventById(eventId).remove()
  }
  const handleDeleteEvent = () => {
    dispatch(removeEvent(selectedEvent.id))
    removeEventInCalendar(selectedEvent.id)
    handleAddEventSidebar()
    toast.error(<ToastComponent title='Event Removed' color='danger' icon={<Trash />} />, {
      autoClose: 2000,
      hideProgressBar: true,
      closeButton: false
    })
  }

  // ** Event Action buttons
  const EventActions = () => {
    if (isObjEmpty(selectedEvent) || (!isObjEmpty(selectedEvent) && !selectedEvent.title.length)) {
      return (
        <Fragment>
          <Button.Ripple className='mr-1' type='submit' color='primary'>
            Add
          </Button.Ripple>
          <Button.Ripple color='secondary' type='reset' onClick={handleAddEventSidebar} outline>
            Cancel
          </Button.Ripple>
        </Fragment>
      )
    } else {
      return (
        <Fragment>
          <Button.Ripple
            className='mr-1'
            color='primary'
            // onClick={handleUpdateEvent}
          >
            Update
          </Button.Ripple>
          <Button.Ripple color='danger' onClick={handleDeleteEvent} outline>
            Delete
          </Button.Ripple>
        </Fragment>
      )
    }
  }

  // ** Close BTN
  const CloseBtn = <X className='cursor-pointer' size={15} onClick={handleAddEventSidebar} />

  return (
    <Modal
      isOpen={open}
      toggle={handleAddEventSidebar}
      className='sidebar-lg'
      contentClassName='p-0'
      onOpened={handleSelectedEvent}
      onClosed={handleResetInputValues}
      modalClassName='modal-slide-in event-sidebar'
    >
      <ModalHeader className='mb-1' toggle={handleAddEventSidebar} close={CloseBtn} tag='div'>
        <h5 className='modal-title'>
          {selectedEvent && selectedEvent.title && selectedEvent.title.length ? 'Update' : 'Add'} Event
        </h5>
      </ModalHeader>
     <ModalBody className="flex-grow-1 pb-sm-0 pb-3">
      <Form
        onSubmit={handleSubmit(() => {
          if (isObjEmpty(errors)) {
            if (!selectedEvent || !selectedEvent.title?.length) {
              handleAddEvent()
            } else {
              handleUpdateEvent()
            }
            handleAddEventSidebar()
          }
        })}
      >
        {/* CATEGORY */}
        <FormGroup>
          <Label>
            Select Category <span className="text-danger">*</span>
          </Label>
          <Select
            options={options}
            value={category}
            onChange={setCategory}
            className="react-select"
            classNamePrefix="select"
            maxMenuHeight={180}
            styles={selectStyles}
          />
        </FormGroup>

        {/* SUB CATEGORY */}
        <FormGroup>
          <Label>Select Sub Category</Label>
            <Select
              options={options}
              value={subCategory}
              onChange={setSubCategory}
              className="react-select"
              classNamePrefix="select"
              maxMenuHeight={180}
            />
        </FormGroup>

        {/* CLASS */}
        <FormGroup>
          <Label>Select Class</Label>
         <Select
          options={options}
          value={classValue}
          onChange={setClassValue}
          className="react-select"
          classNamePrefix="select"
        />
        </FormGroup>

        {/* INSTRUCTOR (MULTI) */}
        <FormGroup>
          <Label>Select Instructor</Label>
            <Select
            isMulti
            options={options}
            value={instructor}
            onChange={setInstructor}
            className="react-select"
            classNamePrefix="select"
          />
        </FormGroup>

        {/* VISIBILITY */}
        <FormGroup>
          <Label>Visibility</Label>
          <div className="d-flex flex-wrap gap-3 mt-1">
            {['Public', 'Member', 'Student', 'Staff', 'Instructor', 'Therapist', 'Partner'].map(v => (
              <FormGroup check key={v}>
                <Input type="checkbox" />
                <Label check>{v}</Label>
              </FormGroup>
            ))}
          </div>
        </FormGroup>

        {/* LOCATION + ROOM */}
        <FormGroup>
          <Label>Select Location</Label>
            <Select
              id='label'
              value={value}
              options={options}
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
              isClearable={false}
              onChange={data => setValue([data])}
              components={{
                Option: OptionComponent
              }}
            />
        </FormGroup>

        <FormGroup>
          <Label>Select Room</Label>
            <Select
              id='label'
              value={value}
              options={options}
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
              isClearable={false}
              onChange={data => setValue([data])}
              components={{
                Option: OptionComponent
              }}
            />
          <small className="text-muted">
            Same room & same time booking validation not allowed
          </small>
        </FormGroup>

        {/* START DATE */}
        <FormGroup>
          <Label>
            Start Date & Time <span className="text-danger">*</span>
          </Label>
          <Flatpickr
            className="form-control"
            value={startPicker}
            onChange={date => setStartPicker(date[0])}
            options={{ enableTime: true, dateFormat: 'Y-m-d H:i' }}
          />
        </FormGroup>

        {/* END DATE */}
        <FormGroup>
          <Label>
            End Date & Time <span className="text-danger">*</span>
          </Label>
          <Flatpickr
            className="form-control"
            value={endPicker}
            onChange={date => setEndPicker(date[0])}
            options={{ enableTime: true, dateFormat: 'Y-m-d H:i' }}
          />
          <FormGroup check className="mt-1">
            <Input type="checkbox" />
            <Label check>No Expiry Date</Label>
          </FormGroup>
        </FormGroup>

        {/* REPEAT */}
        <FormGroup>
          <Label>Repeat</Label>
          <div className="d-flex flex-wrap gap-3">
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
              <FormGroup check key={day}>
                <Input type="checkbox" />
                <Label check>{day}</Label>
              </FormGroup>
            ))}
          </div>
        </FormGroup>

        <FormGroup>
          <FormGroup check>
            <Input type="checkbox" />
            <Label check>Repeat Expiry</Label>
          </FormGroup>

          <FormGroup check>
            <Input type="checkbox" />
            <Label check>Any Time</Label>
          </FormGroup>
        </FormGroup>

        {/* COUNTDOWN */}
        <FormGroup>
          <Label>
            Countdown
          </Label>
          <div className="d-flex align-items-center gap-2">
            <Input type="number" style={{ maxWidth: 120 }} />
            <span>Enter days (before Start Date)</span>
          </div>
        </FormGroup>

        {/* STATUS */}
        <FormGroup>
          <Label>Status</Label>
          <label className="custom-switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
        </FormGroup>

        {/* ACTIONS */}
        <FormGroup className="d-flex justify-content-end">
          <EventActions />
        </FormGroup>
      </Form>
    </ModalBody>
    </Modal>
  )
}

export default AddEventSidebar
