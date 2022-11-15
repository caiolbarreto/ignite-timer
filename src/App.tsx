import { lightMode } from './styles/themes/lightMode'
import { darkMode } from './styles/themes/darkMode'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/global'
import { Router } from './routes/Router'
import { useState } from 'react'

export function App() {
  const [theme, setTheme] = useState(darkMode)

  const setToggle = () => {
    setTheme(theme.title === 'light' ? darkMode : lightMode)
  }

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router setToggle={setToggle} />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
