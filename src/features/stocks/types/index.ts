// Root response type
export interface StockApiResponse {
  meta: MetaData
  body: StockData[]
}

// Metadata structure
export interface MetaData {
  version: string
  status: number
  copywrite: string
  totalrecords: number
  headers: MetaHeaders
}

// Headers inside metadata
export interface MetaHeaders {
  symbol: string
  name: string
  lastsale: string
  netchange: string
  pctchange: string
  marketCap: string
}

// Stock data structure
export interface StockData {
  loading?: boolean
  symbol: string
  name: string
  lastsale: string // "$214.47" (string with currency)
  netchange: string // "2.70" (string, can be converted to number)
  pctchange: string // "1.275%" (string with percentage)
  marketCap: string // "378,615,656,610" (string with commas)
}
