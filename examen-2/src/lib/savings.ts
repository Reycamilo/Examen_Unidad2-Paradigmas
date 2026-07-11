export interface SavingsInput {
  principal: number; // P
  annualRate: number; // r, decimal (ej. 0.05)
  termYears: number; // t
}

export interface SavingsResult {
  principal: number;
  finalBalance: number;
  totalInterest: number;
  totalMonths: number;
}

// Saldo(n) = P * (1 + i) ^ n
export function calculateBalance(
  principal: number,
  monthlyRate: number,
  months: number,
): number {
  return principal * Math.pow(1 + monthlyRate, months)
}

export function calculateSavings(input: SavingsInput): SavingsResult {
  const monthlyRate = input.annualRate / 12
  const totalMonths = input.termYears * 12
  const finalBalance = calculateBalance(input.principal, monthlyRate, totalMonths)

  return {
    principal: input.principal,
    finalBalance,
    totalInterest: finalBalance - input.principal,
    totalMonths,
  }
}

export interface FilaMensual {
  month: number
  balance: number
  interest: number
}

export function calcularProyeccionMensual(input: SavingsInput): FilaMensual[] {
  const monthlyRate = input.annualRate / 12
  const totalMonths = input.termYears * 12
  const filas: FilaMensual[] = []

  for (let n = 1; n <= totalMonths; n++) {
    const balance = calculateBalance(input.principal, monthlyRate, n)
    const balanceAnterior = n === 1
      ? input.principal
      : calculateBalance(input.principal, monthlyRate, n - 1)

    filas.push({
      month: n,
      balance,
      interest: balance - balanceAnterior,
    })
  }

  return filas
}

export interface FilaAnual {
  year: number
  balance: number
  interest: number
}

export function calcularProyeccionAnual(input: SavingsInput): FilaAnual[] {
  const monthlyRate = input.annualRate / 12
  const filas: FilaAnual[] = []

  for (let y = 1; y <= input.termYears; y++) {
    const months = y * 12
    const monthsPrev = (y - 1) * 12
    const balance = calculateBalance(input.principal, monthlyRate, months)
    const balancePrev = monthsPrev === 0
      ? input.principal
      : calculateBalance(input.principal, monthlyRate, monthsPrev)

    filas.push({
      year: y,
      balance,
      interest: balance - balancePrev,
    })
  }

  return filas
}
