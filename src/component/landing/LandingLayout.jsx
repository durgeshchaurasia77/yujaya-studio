import Header from './Header'
import { Outlet } from 'react-router-dom'

const LandingLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default LandingLayout