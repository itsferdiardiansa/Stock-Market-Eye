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

// Root response type
export type StockApiResponse = {
  meta: MetaData
  body: StockData[]
}

// Metadata structure
export type MetaData = {
  version: string
  status: number
  copywrite: string
  totalrecords: number
  headers: MetaHeaders
}

// Headers inside metadata
export type MetaHeaders = {
  symbol: string
  name: string
  lastsale: string
  netchange: string
  pctchange: string
  marketCap: string
}

// Stock data structure
export type StockData = {
  loading?: boolean
  symbol: string
  name: string
  lastsale: string // "$214.47" (string with currency)
  netchange: string // "2.70" (string, can be converted to number)
  pctchange: string // "1.275%" (string with percentage)
  marketCap: string // "378,615,656,610" (string with commas)
}
