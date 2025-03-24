export type * as SECFillingsType from './secFilingsType'
export type * as EarningsType from './earningsType'
export type * as ProfileType from './profileType'
export type * as FinancialDataType from './financialDataType'
export type * as IndexTrendType from './indexTrendType'
export type * as StatisticsType from './statisticsType'

/**
 * Index Module Type
 *
 **/
export type StockModule =
  | 'statistics'
  | 'asset-profile'
  | 'financial-data'
  | 'sec-filings'
  | 'earnings'
  | 'index-trend'
  | 'calendar-events'

export type FormattedNumber = {
  raw: number
  fmt: string
}

export type StockData = {
  loading?: boolean
  symbol: string
  name: string
  lastsale: string
  netchange: string
  pctchange: string
  marketCap: string
}
