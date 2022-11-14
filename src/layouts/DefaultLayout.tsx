import { Header } from '../components'
import { Outlet } from 'react-router-dom'

export const DefaultLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
