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
    <div className={`mb-3 ${className}`}>

      {/* VERTICAL MENU */}
      <ButtonGroup vertical className='w-100 text-left'>
        <Button
          color='link'
          className={`text-left menu-btn ${activeTab === 'workshops' ? 'active' : ''}`}
          onClick={() => setActiveTab('workshops')}
        >
          Workshops
        </Button>

        <Button
          color='link'
          className={`text-left menu-btn ${activeTab === 'short' ? 'active' : ''}`}
          onClick={() => setActiveTab('short')}
        >
          Short Courses
        </Button>

        <Button
          color='link'
          className={`text-left menu-btn ${activeTab === 'teacher' ? 'active' : ''}`}
          onClick={() => setActiveTab('teacher')}
        >
          Teacher Training
        </Button>

        <Button
          color='link'
          className={`text-left menu-btn ${activeTab === 'retreat' ? 'active' : ''}`}
          onClick={() => setActiveTab('retreat')}
        >
          Retreat
        </Button>

        <Button
          color='link'
          className={`text-left menu-btn ${activeTab === 'therapy' ? 'active' : ''}`}
          onClick={() => setActiveTab('therapy')}
        >
          Private Therapy
        </Button>
      </ButtonGroup>

      {/* ONLINE / OFFLINE TOGGLE */}
      <div className='d-flex align-items-center mt-2'>
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
  )
}

export default ClassesHeader
