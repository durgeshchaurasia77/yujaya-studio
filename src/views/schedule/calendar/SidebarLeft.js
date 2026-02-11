// ** React Imports
import { Fragment } from 'react'

// ** Custom Components
import classnames from 'classnames'
import { CardBody, Button, CustomInput } from 'reactstrap'

// ** illustration import
import illustration from '@src/assets/images/pages/calendar-illustration.png'

// ** Filters Checkbox Array
const filters = [
  { label: 'Personal', color: 'danger', className: 'custom-control-danger mb-1' },
  { label: 'Business', color: 'primary', className: 'custom-control-primary mb-1' },
  { label: 'Family', color: 'warning', className: 'custom-control-warning mb-1' },
  { label: 'Holiday', color: 'success', className: 'custom-control-success mb-1' },
  { label: 'ETC', color: 'info', className: 'custom-control-info' }
]
const categories = [
  { label: 'Personal', color: 'danger', className: 'custom-control-danger mb-1' },
  { label: 'Business', color: 'primary', className: 'custom-control-primary mb-1' },
  { label: 'Family', color: 'warning', className: 'custom-control-warning mb-1' },
  { label: 'Holiday', color: 'success', className: 'custom-control-success mb-1' },
  { label: 'ETC', color: 'info', className: 'custom-control-info' }
]

const SidebarLeft = props => {
  // ** Props
  const { handleAddEventSidebar, toggleSidebar, updateFilter, updateAllFilters, store, dispatch } = props

  // ** Function to handle Add Event Click
  const handleAddEventClick = () => {
    toggleSidebar(false)
    handleAddEventSidebar()
  }

  return (
    <Fragment>
      <div className='sidebar-wrapper'>
        <CardBody className='card-body d-flex justify-content-center my-sm-0 mb-3'>
          <Button.Ripple color='primary' block onClick={handleAddEventClick}>
            <span className='align-middle'>Schedule Class</span>
          </Button.Ripple>
        </CardBody>
        <CardBody>
          {/* <h5 className='section-label mb-1'>
            <span className='align-middle'>Filter</span>
          </h5> */}
          <h5 className='section-label mb-1'>
            <span className='align-middle'>Category</span>
          </h5>
          <CustomInput
            type='checkbox'
            className='mb-1'
            label='All Categories'
            id='view-all'
            checked={store.selectedCalendars.length === categories.length}
            onChange={e => dispatch(updateAllFilters(e.target.checked))}
          />
          <div className='calendar-events-filter'>
            {categories.length > 0 &&
              categories.map(category => {
                return (
                  <CustomInput
                    type='checkbox'
                    key={category.label}
                    id={category.label}
                    label={category.label}
                    checked={store.selectedCalendars.includes(category.label)}
                    className={classnames({
                      [category.className]: category.className
                    })}
                    onChange={() => dispatch(updateFilter(category.label))}
                  />
                )
              })}
          </div>
        </CardBody>
      </div>
      <div className='mt-auto'>
        <img className='img-fluid' src={illustration} alt='illustration' />
      </div>
    </Fragment>
  )
}

export default SidebarLeft
