import axiosInstance from '@/config/axiosInstance'
import { StockApiResponse } from '../types'
import { buildApiUrl } from '@/utils'

type StockModule =
  | 'statistics'
  | 'asset-profile'
  | 'financial-data'
  | 'sec-filings'
  | 'earnings'
  | 'index-trend'

export const fetchStockTickers = async (
  page = 1,
  type = 'STOCKS'
): Promise<StockApiResponse> => {
  const url = buildApiUrl('v2', 'markets/tickers', { page, type })
  const response = await axiosInstance.get<StockApiResponse>(url)

  return response.data
}

export const fetchStockModule = async (id: string, module: StockModule) => {
  const url = buildApiUrl('v1', 'markets/stock/modules', { ticker: id, module })
  const response = await axiosInstance.get(url)

  return response.data.body
}
