import { Nav, NavItem, NavLink } from 'reactstrap'
import { User, Lock, Info, Link, Bell } from 'react-feather'

const Tabs = ({ activeTab, toggleTab }) => {
  return (
    <Nav className='nav-left' pills vertical>
      <NavItem>
        <NavLink active={activeTab === '1'} onClick={() => toggleTab('1')}>
          <User size={18} className='mr-1' />
          <span className='font-weight-bold'>Billing & Plans</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink active={activeTab === '2'} onClick={() => toggleTab('2')}>
          <Link size={18} className='mr-1' />
          <span className='font-weight-bold'>Social</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink active={activeTab === '3'} onClick={() => toggleTab('3')}>
          <Bell size={18} className='mr-1' />
          <span className='font-weight-bold'>Notifications</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink active={activeTab === '4'} onClick={() => toggleTab('4')}>
          <Lock size={18} className='mr-1' />
          <span className='font-weight-bold'>Currency and Tax</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink active={activeTab === '5'} onClick={() => toggleTab('5')}>
          <Info size={18} className='mr-1' />
          <span className='font-weight-bold'>Payment Gateway</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink active={activeTab === '6'} onClick={() => toggleTab('6')}>
          <Info size={18} className='mr-1' />
          <span className='font-weight-bold'>Roles & Permissions</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink active={activeTab === '7'} onClick={() => toggleTab('7')}>
          <Info size={18} className='mr-1' />
          <span className='font-weight-bold'>Video Platforms</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink active={activeTab === '8'} onClick={() => toggleTab('8')}>
          <Info size={18} className='mr-1' />
          <span className='font-weight-bold'>Policy & Rules</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink active={activeTab === '9'} onClick={() => toggleTab('9')}>
          <Info size={18} className='mr-1' />
          <span className='font-weight-bold'>Import Members</span>
        </NavLink>
      </NavItem>
    </Nav>
  )
}

export default Tabs
