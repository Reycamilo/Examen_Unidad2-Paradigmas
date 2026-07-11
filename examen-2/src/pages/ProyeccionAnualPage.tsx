import { calcularProyeccionAnual, type SavingsInput } from '../lib/savings'

interface ProyeccionAnualPageProps {
  savingsInput: SavingsInput | null
}

function ProyeccionAnualPage({ savingsInput }: ProyeccionAnualPageProps) {
  const filas = savingsInput ? calcularProyeccionAnual(savingsInput) : []

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Proyección anual</h1>

      {!savingsInput ? (
        <div className="bg-white rounded-lg shadow p-6 text-center max-w-md">
          <p className="text-gray-600">
            Ingrese los datos en el formulario para ver la proyección.
          </p>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow p-6 w-full max-w-2xl">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Detalle año a año ({filas.length} años)
          </h2>
          <div className="max-h-96 overflow-y-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 sticky top-0">
                <tr>
                  <th className="text-left px-4 py-2 font-medium text-gray-600">Año</th>
                  <th className="text-right px-4 py-2 font-medium text-gray-600">Saldo al cierre</th>
                  <th className="text-right px-4 py-2 font-medium text-gray-600">Interés del año</th>
                </tr>
              </thead>
              <tbody>
                {filas.map((fila) => (
                  <tr key={fila.year} className="border-t border-gray-100">
                    <td className="px-4 py-2 text-gray-800">{fila.year}</td>
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

export default ProyeccionAnualPage
