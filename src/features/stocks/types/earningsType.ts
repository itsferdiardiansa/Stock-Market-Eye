export type RawValue = {
  raw: number
  fmt: string
  longFmt?: string
}

export type QuarterlyEarnings = {
  date: string
  actual: RawValue
  estimate: RawValue
}

export type EarningsChart = {
  quarterly: QuarterlyEarnings[]
  currentQuarterEstimate: RawValue
  currentQuarterEstimateDate: string
  currentQuarterEstimateYear: number
  earningsDate: {
    raw: number
    fmt: string
  }[]
}

export type FinancialData = {
  date: string | number
  revenue: RawValue
  earnings: RawValue
}

export type FinancialsChart = {
  yearly: FinancialData[]
  quarterly: FinancialData[]
}

export type EarningsData = {
  maxAge: number
  earningsChart: EarningsChart
  financialsChart: FinancialsChart
  financialCurrency: string
}
