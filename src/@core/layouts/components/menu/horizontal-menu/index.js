// ** React Imports
import { useState } from 'react'
import { useSelector } from 'react-redux'

// ** Horizontal Menu Arrays
import navigation from '@src/navigation/horizontal'
import navigationStudent from '@src/navigation/horizontal-student'
import navigationInstructor from '@src/navigation/horizontal-instructor'
import navigationTherapist from '@src/navigation/horizontal-therapist'
import navigationClient from '@src/navigation/horizontal-client'
import navigationStaff from '@src/navigation/horizontal-staff'
import navigationLanding from '@src/navigation/horizontal-landing'

// ** Horizontal Menu Components
import HorizontalNavMenuItems from './HorizontalNavMenuItems'

const HorizontalMenu = ({ currentActiveItem, routerProps }) => {
  
  const [activeItem, setActiveItem] = useState(null)
  const [groupActive, setGroupActive] = useState([])
  const [openDropdown, setOpenDropdown] = useState([])

  // const role = useSelector(state => state.auth.userData?.role)

  const authUser = useSelector(state => state.auth.userData)

  const navigationByRole = {
    student: navigationStudent,
    instructor: navigationInstructor,
    therapist: navigationTherapist,
    client: navigationClient,
    staff: navigationStaff,
    default: navigation
  }

  const role =
    authUser?.role ||
    JSON.parse(localStorage.getItem('userData'))?.role
  const enableSubmenu = role === 'student'
  // const selectedNavigation = role === 'student' ? navigationStudent : navigation
  const selectedNavigation = navigationByRole[role] || navigationByRole.default
  const menuClass1 = role === 'student' ? 'nav navbar-nav d-flex gap-2' : 'nav navbar-nav'
  const menuClass = role === 'student' || role === 'instructor' || role === 'therapist'  || role === 'client' || role === 'staff' ? 'nav navbar-nav d-flex gap-2' : 'nav navbar-nav'

  const onMouseEnter = id => {
    const arr = openDropdown
    arr.push(id)
    setOpenDropdown([...arr])
  }

  // ** On mouse leave remove the ID to openDropdown array
  const onMouseLeave = id => {
    const arr = openDropdown
    arr.splice(arr.indexOf(id), 1)
    setOpenDropdown([...arr])
  }

  return (
    <div className='navbar-container main-menu-content'>
      <ul className={menuClass} id='main-menu-navigation'>
        <HorizontalNavMenuItems
          submenu={false}
          items={selectedNavigation}
          activeItem={activeItem}
          groupActive={groupActive}
          routerProps={routerProps}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          openDropdown={openDropdown}
          setActiveItem={setActiveItem}
          setGroupActive={setGroupActive}
          setOpenDropdown={setOpenDropdown}
          currentActiveItem={currentActiveItem}
        />
      </ul>
    </div>
  )
}

export default HorizontalMenu
