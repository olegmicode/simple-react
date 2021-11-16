import { Outlet } from 'react-router-dom'
import TopMenu from '../components/TopMenu'

const DefaultLayout = () => {
  return (
    <div>
      <TopMenu></TopMenu>
      <div className="container">
        <Outlet />
      </div>
    </div>
  )
}

export default DefaultLayout