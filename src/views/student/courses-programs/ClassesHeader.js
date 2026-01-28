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
    <div className={`d-flex align-items-center mb-3 mt-2 ${className}`}>

      {/* LEFT SPACER */}
      <div className='flex-grow-1 ml-2' style={{ left: '10px' }}></div>

      {/* CENTER: TABS */}
      <ButtonGroup className='mx-auto'>
        <Button
          color={activeTab === 'workshops' ? 'primary' : 'outline-primary'}
          onClick={() => setActiveTab('workshops')}
        >
          Workshops
        </Button>

        <Button
          color={activeTab === 'short' ? 'primary' : 'outline-primary'}
          onClick={() => setActiveTab('short')}
        >
          Short Courses
        </Button>
        <Button
          color={activeTab === 'teacher' ? 'primary' : 'outline-primary'}
          onClick={() => setActiveTab('teacher')}
        >
          Teacher Training
        </Button>
        <Button
          color={activeTab === 'retreat' ? 'primary' : 'outline-primary'}
          onClick={() => setActiveTab('retreat')}
        >
          Retreat
        </Button>
        <Button
          color={activeTab === 'therapy' ? 'primary' : 'outline-primary'}
          onClick={() => setActiveTab('therapy')}
        >
          Private Therapy
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
