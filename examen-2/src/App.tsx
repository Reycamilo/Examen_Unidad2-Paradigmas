import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import FormularioPage from './pages/FormularioPage'
import ProyeccionMensualPage from './pages/ProyeccionMensualPage'
import ProyeccionAnualPage from './pages/ProyeccionAnualPage'
import type { SavingsInput } from './lib/savings'

function App() {
  const [savingsInput, setSavingsInput] = useState<SavingsInput | null>(null)

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={<FormularioPage savingsInput={savingsInput} onSubmit={setSavingsInput} />}
        />
        <Route
          path="/proyeccion-mensual"
          element={<ProyeccionMensualPage savingsInput={savingsInput} />}
        />
        <Route
          path="/proyeccion-anual"
          element={<ProyeccionAnualPage savingsInput={savingsInput} />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
