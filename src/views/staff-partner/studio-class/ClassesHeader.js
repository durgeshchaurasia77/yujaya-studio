import { CustomInput } from 'reactstrap'
import './style.css'

const ClassesHeader = ({ mode, setMode }) => {
  return (
    <div className='d-flex justify-content-end align-items-center mb-3 mt-2'>

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
  )
}

export default ClassesHeader