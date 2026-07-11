import { calcularProyeccionMensual, type SavingsInput } from '../lib/savings'

interface ProyeccionMensualPageProps {
  savingsInput: SavingsInput | null
}

function ProyeccionMensualPage({ savingsInput }: ProyeccionMensualPageProps) {
  const filas = savingsInput ? calcularProyeccionMensual(savingsInput) : []

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Proyección mensual</h1>

      {!savingsInput ? (
        <div className="bg-white rounded-lg shadow p-6 text-center max-w-md">
          <p className="text-gray-600">
            Ingrese los datos en el formulario para ver la proyección.
          </p>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow p-6 w-full max-w-2xl">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Detalle mes a mes ({filas.length} meses)
          </h2>
          <div className="max-h-96 overflow-y-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 sticky top-0">
                <tr>
                  <th className="text-left px-4 py-2 font-medium text-gray-600">Mes</th>
                  <th className="text-right px-4 py-2 font-medium text-gray-600">Saldo acumulado</th>
                  <th className="text-right px-4 py-2 font-medium text-gray-600">Interés del mes</th>
                </tr>
              </thead>
              <tbody>
                {filas.map((fila) => (
                  <tr key={fila.month} className="border-t border-gray-100">
                    <td className="px-4 py-2 text-gray-800">{fila.month}</td>
                    <td className="px-4 py-2 text-right text-gray-800">
                      $ {fila.balance.toFixed(2)}
                    </td>
                    <td className="px-4 py-2 text-right text-green-600">
                      + $ {fila.interest.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProyeccionMensualPage
