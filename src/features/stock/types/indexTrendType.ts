export type FormattedNumber = {
  raw: number
  fmt: string
}

export type GrowthEstimate = {
  period: string
  growth: FormattedNumber | []
}

export type IndexTrend = {
  maxAge: number
  symbol: string
  peRatio: FormattedNumber
  pegRatio: FormattedNumber
  estimates: GrowthEstimate[]
}

export type IndexTrendData = {
  indexTrend: IndexTrend
}
