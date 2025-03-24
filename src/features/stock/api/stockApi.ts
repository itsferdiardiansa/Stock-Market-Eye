import axiosInstance from '@/config/axiosInstance'
import { StockModule } from '../types'
import { buildApiUrl } from '@/utils'

export const fetchStockTickers = async (page = 1, type = 'STOCKS') => {
  const url = buildApiUrl('v2', 'markets/tickers', { page, type })
  const response = await axiosInstance.get(url)

  console.log('RES: ', response)
  return response.data
}

export const fetchStockModule = async (id: string, module: StockModule) => {
  const url = buildApiUrl('v1', 'markets/stock/modules', { ticker: id, module })
  const response = await axiosInstance.get(url)

  return response.data.body
}
