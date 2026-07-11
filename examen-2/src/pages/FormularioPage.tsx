import { useState, type FormEvent } from 'react'
import { calculateSavings, type SavingsInput } from '../lib/savings'

interface FormErrors {
  deposito?: string
  tasa?: string
  plazo?: string
}

interface FormularioPageProps {
  savingsInput: SavingsInput | null
  onSubmit: (input: SavingsInput) => void
}

function FormularioPage({ savingsInput, onSubmit }: FormularioPageProps) {
  const [deposito, setDeposito] = useState('')
  const [tasa, setTasa] = useState('')
  const [plazo, setPlazo] = useState('')
  const [errores, setErrores] = useState<FormErrors>({})

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    const nuevosErrores: FormErrors = {}
    const depositoNum = Number(deposito)
    const tasaNum = Number(tasa)
    const plazoNum = Number(plazo)

    if (deposito.trim() === '' || Number.isNaN(depositoNum) || depositoNum <= 0) {
      nuevosErrores.deposito = 'Ingrese un monto positivo mayor a cero.'
    }
    if (tasa.trim() === '' || Number.isNaN(tasaNum) || tasaNum <= 0) {
      nuevosErrores.tasa = 'Ingrese una tasa de interés positiva mayor a cero.'
    }
    if (
      plazo.trim() === '' ||
      Number.isNaN(plazoNum) ||
      plazoNum <= 0 ||
      !Number.isInteger(plazoNum)
    ) {
      nuevosErrores.plazo = 'Ingrese un plazo positivo en años enteros (ej. 1, 2, 3).'
    }

    setErrores(nuevosErrores)

    if (Object.keys(nuevosErrores).length > 0) {
      return
    }

    onSubmit({
      principal: depositoNum,
      annualRate: tasaNum / 100,
      termYears: plazoNum,
    })
  }

  const resultado = savingsInput ? calculateSavings(savingsInput) : null

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Calculadora de Cuenta de Ahorros
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow p-6 w-full max-w-md flex flex-col gap-4"
      >
        <div>
          <label htmlFor="deposito" className="block text-sm font-medium text-gray-700 mb-1">
            Depósito inicial
          </label>
          <input
            id="deposito"
            type="number"
            step="any"
            value={deposito}
            onChange={(e) => setDeposito(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Ej. 1000"
          />
          {errores.deposito && (
            <p className="text-red-600 text-sm mt-1">{errores.deposito}</p>
          )}
        </div>

        <div>
          <label htmlFor="tasa" className="block text-sm font-medium text-gray-700 mb-1">
            Tasa de interés anual (%)
          </label>
          <input
            id="tasa"
            type="number"
            step="any"
            value={tasa}
            onChange={(e) => setTasa(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Ej. 5"
          />
          {errores.tasa && <p className="text-red-600 text-sm mt-1">{errores.tasa}</p>}
        </div>

        <div>
          <label htmlFor="plazo" className="block text-sm font-medium text-gray-700 mb-1">
            Plazo (años)
          </label>
          <input
            id="plazo"
            type="number"
            step="1"
            value={plazo}
            onChange={(e) => setPlazo(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Ej. 3"
          />
          {errores.plazo && <p className="text-red-600 text-sm mt-1">{errores.plazo}</p>}
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded py-2 mt-2"
        >
          Calcular
        </button>
      </form>

      {resultado && (
        <div className="bg-white rounded-lg shadow p-6 w-full max-w-md mt-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Resultado</h2>
          <dl className="flex flex-col gap-2">
            <div className="flex justify-between">
              <dt className="text-gray-600">Depósito inicial</dt>
              <dd className="font-medium text-gray-800">
                $ {resultado.principal.toFixed(2)}
              </dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-gray-600">Monto final acumulado</dt>
              <dd className="font-medium text-gray-800">
                $ {resultado.finalBalance.toFixed(2)}
              </dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-gray-600">Interés total ganado</dt>
              <dd className="font-bold text-green-600">
                + $ {resultado.totalInterest.toFixed(2)}
              </dd>
            </div>
          </dl>
        </div>
      )}
    </div>
  )
}

export default FormularioPage
