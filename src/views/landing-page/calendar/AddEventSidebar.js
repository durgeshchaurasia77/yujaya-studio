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
  const [guests, setGuests] = useState([])
  const [allDay, setAllDay] = useState(false)
  const [repeat, setRepeat] = useState(false)
  const [endPicker, setEndPicker] = useState(new Date())
  const [startPicker, setStartPicker] = useState(new Date())
  const [category, setCategory] = useState(null)
  const [subCategory, setSubCategory] = useState(null)
  const [instructor, setInstructor] = useState(null)
  const [location, setLocation] = useState(null)
  const [room, setRoom] = useState(null)
  const [selectedClass, setSelectedClass] = useState(null)
  const [repeatExpiry, setRepeatExpiry] = useState(false)
  const [anyTime, setAnyTime] = useState(false)
  const [countDown, setCountDown] = useState(false)
  const [countDownDays, setCountDownDays] = useState('')
  const [status, setStatus] = useState(true)
  const [days, setDays] = useState({
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false
  })
const [classValue, setClassValue] = useState(null)

  const [value, setValue] = useState({
  value: 'Business',
  label: 'Business',
  color: 'primary'
  })
  const options = [
    { value: 'Business', label: 'Business', color: 'primary' },
    { value: 'Personal', label: 'Personal', color: 'danger' },
    { value: 'Family', label: 'Family', color: 'warning' },
    { value: 'Holiday', label: 'Holiday', color: 'success' },
    { value: 'ETC', label: 'ETC', color: 'info' }
  ]
  const classOptions = [
    { value: 'Business', label: 'Business', color: 'primary' },
    { value: 'Personal', label: 'Personal', color: 'danger' },
    { value: 'Family', label: 'Family', color: 'warning' },
    { value: 'Holiday', label: 'Holiday', color: 'success' },
    { value: 'ETC', label: 'ETC', color: 'info' }
  ]

  const locationOptions = [
    { value: 'india', label: 'India', color: 'primary' },
    { value: 'china', label: 'China', color: 'danger' },
    { value: 'usa', label: 'USA', color: 'warning' },
    { value: 'germany', label: 'Germany', color: 'success' }
  ]

  const roomOptions = [
    { value: 'class1', label: 'Class 1' },
    { value: 'class2', label: 'Class 2' },
    { value: 'class3', label: 'Class 3' },
    { value: 'class4', label: 'Class 4' }
  ]

  const categoryOptions = [
    { value: 'Director', label: 'Director' },
    { value: 'Receptionist', label: 'Receptionist' },
    { value: 'Sales Manager', label: 'Sales Manager' },
    { value: 'Centre Manager', label: 'Centre Manager' },
    { value: 'Accountant', label: 'Accountant' },
    { value: 'Manager', label: 'Manager' },
    { value: 'Operation Manager', label: 'Operation Manager' },
    { value: 'Sale Executive', label: 'Sale Executive' },
    { value: 'Yoga Master', label: 'Yoga Master' },
    { value: 'Yoga Teacher', label: 'Yoga Teacher' },
    { value: 'Yoga Instructor', label: 'Yoga Instructor' },
    { value: 'Other', label: 'Other', color: 'danger' }
  ]

  const subCategoryOptions = [
    { value: 'Director', label: 'Director', color: 'primary' },
    { value: 'Receptionist', label: 'Receptionist', color: 'secondary' },
    { value: 'Sales Manager', label: 'Sales Manager', color: 'success' },
    { value: 'Centre Manager', label: 'Centre Manager', color: 'info' },
    { value: 'Accountant', label: 'Accountant', color: 'warning' },
    { value: 'Manager', label: 'Manager', color: 'dark' },
    { value: 'Operation Manager', label: 'Operation Manager', color: 'primary' },
    { value: 'Sale Executive', label: 'Sale Executive', color: 'success' },
    { value: 'Yoga Master', label: 'Yoga Master', color: 'info' },
    { value: 'Yoga Teacher', label: 'Yoga Teacher', color: 'warning' },
    { value: 'Yoga Instructor', label: 'Yoga Instructor', color: 'secondary' },
    { value: 'Other', label: 'Other', color: 'danger' }
  ]

  const instructorOptions = [
    { value: 'Donna Frank', label: 'Donna Frank', avatar: img1 },
    { value: 'Jane Foster', label: 'Jane Foster', avatar: img2 },
    { value: 'Gabrielle Robertson', label: 'Gabrielle Robertson', avatar: img3 }
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
  const OptionComponent = (props) => {
    const { data } = props
    return (
      <components.Option {...props}>
        <span className={`bullet bullet-${data.color} bullet-sm`} />
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
    const listComponent = ({ data, ...props }) => {
    return (
      <components.Option {...props}>
        <div className='d-flex flex-wrap align-items-center'>
          <div>{data.label}</div>
        </div>
      </components.Option>
    )
  }

  const handleAddEvent = () => {
  const obj = {
    title,
    start: startPicker,
    end: endPicker,
    allDay,
    repeat,
    display: 'block',
    extendedProps: {
      category,
      subCategory,
      selectedClass,
      instructor,
      location,
      room,
      repeatExpiry,
      anyTime,
      days,
      countDown,
      countDownDays,
      status
    }
  }

  dispatch(addEvent(obj))
  refetchEvents()
  handleAddEventSidebar()

  toast.success(
    <ToastComponent title="Event Added" color="success" icon={<Check />} />,
    { autoClose: 2000, hideProgressBar: true, closeButton: false }
  )
}

  const handleResetInputValues = () => {
    dispatch(selectEvent({}))

    setTitle('')
    setAllDay(false)
    setRepeat(false)

    setCategory(null)
    setSubCategory(null)
    setSelectedClass(null)
    setInstructor(null)
    setLocation(null)
    setRoom(null)

    setRepeatExpiry(false)
    setAnyTime(false)

    setDays({
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false
    })

    setCountDown(false)
    setCountDownDays('')
    setStatus(true)

    setStartPicker(new Date())
    setEndPicker(new Date())
  }
  // ** Set sidebar fields
  const handleSelectedEvent = () => {
  if (!isObjEmpty(selectedEvent)) {
    const p = selectedEvent.extendedProps || {}

    setTitle(selectedEvent.title || '')
    setAllDay(selectedEvent.allDay || false)
    setRepeat(selectedEvent.repeat || false)

    setCategory(p.category || null)
    setSubCategory(p.subCategory || null)
    setSelectedClass(p.selectedClass || null)
    setInstructor(p.instructor || null)
    setLocation(p.location || null)
    setRoom(p.room || null)

    setRepeatExpiry(p.repeatExpiry || false)
    setAnyTime(p.anyTime || false)

    setDays(
      p.days || {
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false
      }
    )

    setCountDown(p.countDown || false)
    setCountDownDays(p.countDownDays || '')

    setStatus(p.status ?? true)

    setStartPicker(new Date(selectedEvent.start))
    setEndPicker(
      selectedEvent.allDay ? new Date(selectedEvent.start) : new Date(selectedEvent.end)
    )
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
    repeat,
    start: startPicker,
    end: endPicker,
    extendedProps: {
      category,
      subCategory,
      selectedClass,
      instructor,
      location,
      room,
      repeatExpiry,
      anyTime,
      days,
      countDown,
      countDownDays,
      status
    }
  }

  dispatch(updateEvent(eventToUpdate))

  updateEventInCalendar(
    eventToUpdate,
    ['title', 'allDay'], // ✅ include allDay
    [
      'category',
      'subCategory',
      'selectedClass',
      'instructor',
      'location',
      'room',
      'repeatExpiry',
      'anyTime',
      'days',
      'countDown',
      'countDownDays',
      'status'
    ]
  )

  handleAddEventSidebar()

  toast.success(
    <ToastComponent title="Event Updated" color="success" icon={<Check />} />,
    { autoClose: 2000, hideProgressBar: true, closeButton: false }
  )
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
          {/* <Button.Ripple
            className='mr-1'
            color='primary'
          >
            Update
          </Button.Ripple> */}
          <Button.Ripple
            className='mr-1'
            color='primary'
            type="submit"
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
      backdrop={true}
    >
      <ModalHeader className='mb-1' toggle={handleAddEventSidebar} close={CloseBtn} tag='div'>
        <h5 className='modal-title'>
          {selectedEvent && selectedEvent.title && selectedEvent.title.length ? 'Update' : 'Add'} Event
        </h5>
      </ModalHeader>
      <ModalBody className='flex-grow-1 pb-sm-0 pb-3'>
        <Form
          // onSubmit={handleSubmit(data => {
          //   if (isObjEmpty(errors)) {
          //     if (isObjEmpty(selectedEvent) || (!isObjEmpty(selectedEvent) && !selectedEvent.title.length)) {
          //       handleAddEvent()
          //     } else {
          //       handleUpdateEvent()
          //     }
          //     handleAddEventSidebar()
          //   }
          // })}
          onSubmit={handleSubmit(() => {
            if (isObjEmpty(selectedEvent) || (!isObjEmpty(selectedEvent) && !selectedEvent.title.length)) {
              handleAddEvent()
            } else {
              handleUpdateEvent()
            }
          })}
        >

          <FormGroup>
            <Label for='label'>Category</Label>
            <Select
              id="guests"
              className="react-select"
              classNamePrefix="select"
              options={categoryOptions}
              value={category}
              onChange={setCategory}
              components={{ Option: listComponent }}
              menuPortalTarget={document.body}
              menuPosition="fixed"
              styles={{
                menuPortal: base => ({
                  ...base,
                  zIndex: 99999
                }),
                menu: base => ({
                  ...base,
                  backgroundColor: '#f8f8f8'
                }),
                menuList: base => ({
                  ...base,
                  backgroundColor: '#fff'
                })
              }}
            />

          </FormGroup>
          <FormGroup>
            <Label>Sub Category</Label>
            <Select
              className="react-select"
              classNamePrefix="select"
              options={subCategoryOptions}
              value={subCategory}
              onChange={setSubCategory}
              isClearable
              menuPortalTarget={document.body}
              menuPosition="fixed"
              styles={{
                menuPortal: base => ({
                  ...base,
                  zIndex: 99999
                }),
                menu: base => ({
                  ...base,
                  backgroundColor: '#f8f8f8'
                }),
                menuList: base => ({
                  ...base,
                  backgroundColor: '#fff'
                })
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label>Select Class</Label>
            <Select
              id='guests'
              className='react-select'
              classNamePrefix='select'
              isClearable={false}
              options={classOptions}
              value={selectedClass}
              onChange={setSelectedClass}
              // components={{Option: GuestsComponent}}
              menuPortalTarget={document.body}
              menuPosition="fixed"
              styles={{
                menuPortal: base => ({
                  ...base,
                  zIndex: 99999
                }),
                menu: base => ({
                  ...base,
                  backgroundColor: '#f8f8f8'
                }),
                menuList: base => ({
                  ...base,
                  backgroundColor: '#fff'
                })
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label>Select Instructor</Label>
            <Select
              isMulti
              id='guests'
              className='react-select'
              classNamePrefix='select'
              isClearable={false}
              options={guestsOptions}
              // theme={selectThemeColors}
              value={instructor}
              onChange={setInstructor}
              components={{Option: GuestsComponent}}
              menuPortalTarget={document.body}
              menuPosition="fixed"
              styles={{
                menuPortal: base => ({
                  ...base,
                  zIndex: 99999
                }),
                menu: base => ({
                  ...base,
                  backgroundColor: '#f8f8f8'
                }),
                menuList: base => ({
                  ...base,
                  backgroundColor: '#fff'
                })
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label>Visibility</Label>
            <div className="gap-form mt-1">
              {['Public', 'Member', 'Student', 'Staff', 'Instructor', 'Therapist', 'Partner'].map(v => (
                <FormGroup check key={v}>
                  <Input type="checkbox" />
                  <Label check>{v}</Label>
                </FormGroup>
              ))}
            </div>
          </FormGroup>
          <FormGroup>
            <Label>Select Location</Label>
            <Select
              id='location'
              className='react-select'
              classNamePrefix='select'
              isClearable={false}
              options={locationOptions}
              value={location}
              onChange={setLocation}
              menuPortalTarget={document.body}
              menuPosition="fixed"
              styles={{
                menuPortal: base => ({
                  ...base,
                  zIndex: 99999
                }),
                menu: base => ({
                  ...base,
                  backgroundColor: '#f8f8f8'
                }),
                menuList: base => ({
                  ...base,
                  backgroundColor: '#fff'
                })
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label>Select Room</Label>
            <Select
              id='room'
              className='react-select'
              classNamePrefix='select'
              isClearable={false}
              options={roomOptions}
              value={room}
              onChange={setRoom}
              menuPortalTarget={document.body}
              menuPosition="fixed"
              styles={{
                menuPortal: base => ({
                  ...base,
                  zIndex: 99999
                }),
                menu: base => ({
                  ...base,
                  backgroundColor: '#f8f8f8'
                }),
                menuList: base => ({
                  ...base,
                  backgroundColor: '#fff'
                })
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label for='startDate'>Start Date & Time</Label>
            <Flatpickr
              required
              id='startDate'
              name='startDate'
              className='form-control'
              onChange={date => setStartPicker(date[0])}
              value={startPicker}
              options={{
                enableTime: allDay === false,
                dateFormat: 'Y-m-d H:i'
              }}
            />
          </FormGroup>

          <FormGroup>
            <Label for='endDate'>End Date & Time</Label>
            <Flatpickr
              required
              id='endDate'
              name='endDate'
              className='form-control'
              onChange={date => setEndPicker(date[0])}
              value={endPicker}
              options={{
                enableTime: allDay === false,
                dateFormat: 'Y-m-d H:i'
              }}
            />
            <FormGroup check className="mt-1">
              <Input type="checkbox" />
              <Label check>No Expiry Date</Label>
            </FormGroup>
          </FormGroup>
          <FormGroup>
            <CustomInput
              type="switch"
              id="allDay"
              label="Any Day"
              checked={allDay}
              onChange={e => {
                const checked = e.target.checked
                setAllDay(checked)

                // reset days if Any Day ON
                if (checked) {
                  setDays({
                    monday: false,
                    tuesday: false,
                    wednesday: false,
                    thursday: false,
                    friday: false,
                    saturday: false
                  })
                }
              }}
            />
          </FormGroup>

          {!allDay && (
            <FormGroup className="gap-form">
              {[
                { key: 'monday', label: 'Monday' },
                { key: 'tuesday', label: 'Tuesday' },
                { key: 'wednesday', label: 'Wednesday' },
                { key: 'thursday', label: 'Thursday' },
                { key: 'friday', label: 'Friday' },
                { key: 'saturday', label: 'Saturday' }
              ].map(day => (
                <FormGroup check key={day.key}>
                  <Label check>
                    <Input
                      type="checkbox"
                      className="mb-2"
                      checked={days[day.key]}
                      onChange={e => setDays({ ...days, [day.key]: e.target.checked })}/>
                    {day.label}
                  </Label>
                </FormGroup>
              ))}
            </FormGroup>
          )}
          <FormGroup className="mt-2">
            <CustomInput
              type="switch"
              id="repeat"
              label="Repeat"
              checked={repeat}
              onChange={e => {
                setRepeat(e.target.checked)
                if (!e.target.checked) {
                  setRepeatExpiry(false)
                  setAnyTime(false)
                }
              }}
            />
          </FormGroup>

          {repeat && (
            <FormGroup className="gap-form">
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    className="mb-2"
                    checked={repeatExpiry}
                    onChange={e => setRepeatExpiry(e.target.checked)}
                  />
                  Repeat Expiry
                </Label>
              </FormGroup>

              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    checked={anyTime}
                    onChange={e => setAnyTime(e.target.checked)}
                  />
                  Any Time
                </Label>
              </FormGroup>
            </FormGroup>
          )}

        {/* COUNTDOWN */}
        <FormGroup>
            <FormGroup className="mt-2">
                <Label check >Countdown</Label>
                <Input
                  type="checkbox"
                  checked={countDown}
                  className="ml-2"
                  onChange={e => {
                    const checked = e.target.checked
                    setCountDown(checked)
                    if (!checked) {
                      setCountDownDays('')
                    }
                  }}
                />
              {/* </Label> */}

              {countDown && (
                <div className="d-flex align-items-center mt-1">
                  <span>Enter days (before Start Date)</span>
                  <Input
                    type="number"
                    min="1"
                    value={countDownDays}
                    onChange={e => setCountDownDays(e.target.value)}
                    style={{ maxWidth: 90 }}
                    className="mr-1"
                  />
                </div>
              )}
            </FormGroup>
        </FormGroup>
          <FormGroup className="mt-2">
            <CustomInput
              type="switch"
              id="status"
              label="Status"
              checked={status}
              onChange={() => setStatus(!status)}
            />
          </FormGroup>
          <FormGroup className='d-flex'>
            <EventActions />
          </FormGroup>
        </Form>
      </ModalBody>
    </Modal>
  )
}

export default AddEventSidebar
