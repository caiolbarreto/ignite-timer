import { Header } from '../../components'
import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './styles'

interface Props {
  setToggle: () => void
}

export const DefaultLayout = ({ setToggle }: Props) => {
  return (
    <LayoutContainer>
      <Header setToggle={setToggle} />
      <Outlet />
    </LayoutContainer>
  )
}
