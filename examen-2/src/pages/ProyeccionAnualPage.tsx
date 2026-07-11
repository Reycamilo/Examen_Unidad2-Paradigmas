import type { SavingsInput } from '../lib/savings'

interface ProyeccionAnualPageProps {
  savingsInput: SavingsInput | null
}

// TODO: implementar la tabla año a año (saldo al cierre e interes del año)
function ProyeccionAnualPage({ savingsInput }: ProyeccionAnualPageProps) {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow p-6 text-center max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Proyección anual</h1>
        <p className="text-gray-600">
          {savingsInput
            ? 'Datos del formulario recibidos. Tabla de proyección anual: en construcción.'
            : 'Esta sección está en construcción.'}
        </p>
      </div>
    </div>
  )
}

export default ProyeccionAnualPage
