import axiosInstance from '@/config/axiosInstance'
import { StockApiResponse } from '../types'

export const fetchStockTickers = async (
  page = 1,
  type = 'STOCKS'
): Promise<StockApiResponse> => {
  const response = await axiosInstance.get<StockApiResponse>(
    `/markets/tickers?page=${page}&type=${type}`
  )
  return response.data
}
