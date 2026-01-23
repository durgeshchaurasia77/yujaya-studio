import { Button, ButtonGroup, CustomInput } from 'reactstrap'
import './style.css'
const ClassesHeader = ({
  activeTab,
  setActiveTab,
  mode,
  setMode,
  className = ''
}) => {
  return (
    <div className={`d-flex align-items-center mb-3 ${className}`}>

      {/* LEFT SPACER */}
      <div className='flex-grow-1 ml-2' style={{ left: '10px' }}></div>

      {/* CENTER: TABS */}
      <ButtonGroup className='mx-auto'>
        <Button
          color={activeTab === 'group' ? 'primary' : 'outline-primary'}
          onClick={() => setActiveTab('group')}
        >
          Group Class
        </Button>
        <Button
          color={activeTab === 'package' ? 'primary' : 'outline-primary'}
          onClick={() => setActiveTab('package')}
        >
          Package & Membership
        </Button>
      </ButtonGroup>

      {/* RIGHT: SWITCH */}
      <div className='flex-grow-1 d-flex justify-content-end'>
        <div className='d-flex align-items-center'>
          <span className='mr-50 text-muted'>Offline</span>
          <CustomInput
            type='switch'
            id='modeSwitch'
            checked={mode === 'online'}
            onChange={() => setMode(mode === 'online' ? 'offline' : 'online')}
          />
          <span className='ml-50 text-muted'>Online</span>
        </div>
      </div>

    </div>
  )
}

export default ClassesHeader
