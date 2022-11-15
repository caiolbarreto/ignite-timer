import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from '../layouts'
import { Historic, Home } from '../pages'

interface Props {
  setToggle: () => void
}

export const Router = ({ setToggle }: Props) => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout setToggle={setToggle} />}>
        <Route path="/" element={<Home />} />
        <Route path="/historic" element={<Historic />} />
      </Route>
    </Routes>
  )
}
