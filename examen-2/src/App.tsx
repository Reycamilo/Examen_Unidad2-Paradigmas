import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FormularioPage from './pages/FormularioPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormularioPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
