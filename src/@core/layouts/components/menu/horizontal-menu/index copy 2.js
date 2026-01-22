// ** React Imports
import { useState } from 'react'
import { useSelector } from 'react-redux'

// ** Horizontal Menu Arrays
import navigation from '@src/navigation/horizontal'
import navigationStudent from '@src/navigation/horizontal-student'

// ** Horizontal Menu Components
import HorizontalNavMenuItems from './HorizontalNavMenuItems'

const HorizontalMenu = ({ currentActiveItem, routerProps }) => {
  
  const [activeItem, setActiveItem] = useState(null)
  const [groupActive, setGroupActive] = useState([])
  const [openDropdown, setOpenDropdown] = useState([])

  // const role = useSelector(state => state.auth.userData?.role)
  
  const positionDropdown = li => {
    const menu = li.querySelector('.dropdown-menu')
    if (!menu) return

    const rect = li.getBoundingClientRect()

    menu.style.top = `${rect.bottom}px`
    menu.style.left = `${rect.left}px`
    menu.style.display = 'block'
  }

  const hideDropdown = li => {
    const menu = li.querySelector('.dropdown-menu')
    if (!menu) return

    menu.style.display = 'none'
  }
  const authUser = useSelector(state => state.auth.userData)

  const role =
    authUser?.role ||
    JSON.parse(localStorage.getItem('userData'))?.role
  // const enableSubmenu = Boolean(role === 'student')
  const enableSubmenu = role === 'student'
  const selectedNavigation = role === 'student' ? navigationStudent : navigation
const menuClass =
  role === 'student'
    ? 'nav navbar-nav d-flex gap-2'
    : 'nav navbar-nav'
const onMouseEnter = (id, event) => {
  setOpenDropdown(prev => [...prev, id])
  positionDropdown(event.currentTarget)
}

const onMouseLeave = (id, event) => {
  setOpenDropdown(prev => prev.filter(item => item !== id))
  hideDropdown(event.currentTarget)
}

  return (
    <div className='navbar-container main-menu-content'>
      <ul className={menuClass} id='main-menu-navigation'>
        <HorizontalNavMenuItems
          // submenu={false}
          submenu={enableSubmenu}
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
