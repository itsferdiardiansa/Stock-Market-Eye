export type FormattedNumber = {
  raw: number
  fmt: string
  longFmt?: string
}

// Type untuk data finansial
export type FinancialData = {
  maxAge: number
  currentPrice: FormattedNumber
  targetHighPrice: FormattedNumber
  targetLowPrice: FormattedNumber
  targetMeanPrice: FormattedNumber
  targetMedianPrice: FormattedNumber
  recommendationMean: FormattedNumber
  recommendationKey: 'strong_buy' | 'buy' | 'hold' | 'sell' | 'strong_sell'
  numberOfAnalystOpinions: FormattedNumber
  totalCash: FormattedNumber
  totalCashPerShare: FormattedNumber
  ebitda: FormattedNumber
  totalDebt: FormattedNumber
  quickRatio: FormattedNumber
  currentRatio: FormattedNumber
  totalRevenue: FormattedNumber
  debtToEquity: FormattedNumber
  revenuePerShare: FormattedNumber
  returnOnAssets: FormattedNumber
  returnOnEquity: FormattedNumber
  grossProfits: FormattedNumber
  freeCashflow: FormattedNumber
  operatingCashflow: FormattedNumber
  earningsGrowth: FormattedNumber
  revenueGrowth: FormattedNumber
  grossMargins: FormattedNumber
  ebitdaMargins: FormattedNumber
  operatingMargins: FormattedNumber
  profitMargins: FormattedNumber
  financialCurrency: string
}

export type ApiResponse = {
  financialData: FinancialData
}
