export type FormattedNumber = {
  raw: number
  fmt: string
  longFmt?: string
}

export type Nullable<T> = T | null | []

export type DefaultKeyStatistics = {
  maxAge: number
  priceHint: FormattedNumber
  enterpriseValue: FormattedNumber
  forwardPE: FormattedNumber
  profitMargins: FormattedNumber
  floatShares: FormattedNumber
  sharesOutstanding: FormattedNumber
  sharesShort: FormattedNumber
  sharesShortPriorMonth: FormattedNumber
  sharesShortPreviousMonthDate: FormattedNumber
  dateShortInterest: FormattedNumber
  sharesPercentSharesOut: FormattedNumber
  heldPercentInsiders: FormattedNumber
  heldPercentInstitutions: FormattedNumber
  shortRatio: FormattedNumber
  shortPercentOfFloat: FormattedNumber
  beta: FormattedNumber
  morningStarOverallRating: FormattedNumber
  morningStarRiskRating: FormattedNumber
  category: string
  bookValue: FormattedNumber
  priceToBook: FormattedNumber
  annualReportExpenseRatio: FormattedNumber
  ytdReturn: FormattedNumber
  beta3Year: FormattedNumber
  totalAssets: FormattedNumber
  yield: FormattedNumber
  fundFamily: string
  fundInceptionDate: FormattedNumber
  legalType: string
  threeYearAverageReturn: FormattedNumber
  fiveYearAverageReturn: FormattedNumber
  priceToSalesTrailing12Months: FormattedNumber
  lastFiscalYearEnd: FormattedNumber
  nextFiscalYearEnd: FormattedNumber
  mostRecentQuarter: FormattedNumber
  earningsQuarterlyGrowth: FormattedNumber
  revenueQuarterlyGrowth: FormattedNumber
  netIncomeToCommon: FormattedNumber
  trailingEps: FormattedNumber
  forwardEps: FormattedNumber
  pegRatio: FormattedNumber
  lastSplitFactor: string
  lastSplitDate: FormattedNumber
  enterpriseToRevenue: FormattedNumber
  enterpriseToEbitda: FormattedNumber
  '52WeekChange': FormattedNumber
  SandP52WeekChange: FormattedNumber
  lastDividendValue: FormattedNumber
  lastDividendDate: FormattedNumber
  lastCapGain: FormattedNumber
  annualHoldingsTurnover: FormattedNumber
}

export type StatisticsData = {
  defaultKeyStatistics: DefaultKeyStatistics
}
