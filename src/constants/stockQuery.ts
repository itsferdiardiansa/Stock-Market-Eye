export const STALE_TIME =
  Number(process.env.NEXT_PUBLIC_STALE_TIME) * 60 * 60 * 1000

export const QueryKeys = {
  STOCK: 'stockTickers',
  STOCK_STATISTICS: 'stockStatistics',
  STOCK_PROFILE: 'stockProfile',
  STOCK_FINANCIAL: 'stockFinancial',
  STOCK_SEC_FILINGS: 'stockSECFilings',
  STOCK_EARNINGS: 'stockEarnings',
  STOCK_INDEX_TREND: 'stockIndexTrend',
} as const
