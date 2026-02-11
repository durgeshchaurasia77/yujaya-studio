import { Nav, NavItem, NavLink, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import '@styles/base/core/menu/menu-types/horizontal-menu.scss'
import logo from '../../assets/images/logo/logo.png'

const Header = () => {
  return (
    <header className='horizontal-menu-wrapper landing-section'>
      <div className='header-navbar navbar-expand-lg navbar navbar-light navbar-shadow'>
        <div className='navbar-container d-flex content align-items-center justify-content-between'>
          <div className='d-flex align-items-center'>
            <Link to='/landing-page' className='me-2'>
              <img
                src={logo}
                alt='Logo'
                height='36'
                style={{ objectFit: 'contain' }}
              />
            </Link>
            <Nav className='d-flex flex-row align-items-center mb-0' navbar>
              <NavItem className='mx-1'>
                <NavLink tag={Link} to='/landing-page/class'>Class</NavLink>
              </NavItem>
              <NavItem className='mx-1'>
                <NavLink tag={Link} to='/landing-page/workshop'>Workshop</NavLink>
              </NavItem>
              <NavItem className='mx-1'>
                <NavLink tag={Link} to='/landing-page/courses'>Courses</NavLink>
              </NavItem>
              <NavItem className='mx-1'>
                <NavLink tag={Link} to='/landing-page/teacher-training'>Teacher Training</NavLink>
              </NavItem>
              <NavItem className='mx-1'>
                <NavLink tag={Link} to='/landing-page/packages'>Packages</NavLink>
              </NavItem>
              <NavItem className='mx-1'>
                <NavLink tag={Link} to='/landing-page/membership'>Membership</NavLink>
              </NavItem>
              <NavItem className='mx-1'>
                <NavLink tag={Link} to='/landing-page/retreat'>Retreat</NavLink>
              </NavItem>
            </Nav>
          </div>
          <Button
            color='primary'
            tag={Link}
            target='_blank'
            to='/student-auth/login'
          >
            Login / Register
          </Button>

        </div>
      </div>
    </header>
  )
}

export default Header
