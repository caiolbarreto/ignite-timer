import { Logo } from '../../assets'
import { Timer, Scroll, Sun, Moon } from 'phosphor-react'
import { HeaderContainer } from './styles'
import { NavLink } from 'react-router-dom'

interface Props {
  setToggle: () => void
}

export const Header = ({ setToggle }: Props) => {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />
      <nav>
        <NavLink to="/" title="Home">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/historic" title="Historic">
          <Scroll size={24} />
        </NavLink>
        <div>
          <input type="checkbox" onClick={setToggle} />
          <label>
            <i id="sun">
              <Sun size={20} />
            </i>
            <i id="moon">
              <Moon size={20} />
            </i>
            <div id="ball"></div>
          </label>
        </div>
      </nav>
    </HeaderContainer>
  )
}
