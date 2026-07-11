import type { SavingsInput } from '../lib/savings'

interface ProyeccionMensualPageProps {
  savingsInput: SavingsInput | null
}

// TODO: implementar la tabla mes a mes (saldo acumulado e interes del mes)
function ProyeccionMensualPage({ savingsInput }: ProyeccionMensualPageProps) {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow p-6 text-center max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Proyección mensual</h1>
        <p className="text-gray-600">
          {savingsInput
            ? 'Datos del formulario recibidos. Tabla de proyección mensual: en construcción.'
            : 'Esta sección está en construcción.'}
        </p>
      </div>
    </div>
  )
}

export default ProyeccionMensualPage
