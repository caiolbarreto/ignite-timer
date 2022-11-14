import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { darkMode } from './styles/themes/darkMode'
import { GlobalStyle } from './styles/global'
import { Router } from './routes/Router'

export function App() {
  return (
    <ThemeProvider theme={darkMode}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
