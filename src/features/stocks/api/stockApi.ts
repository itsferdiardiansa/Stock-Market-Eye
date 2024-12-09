import axiosInstance from '@/config/axiosInstance'
import { StockApiResponse } from '../types'

export const fetchStockTickers = async (
  page = 1,
  type = 'STOCKS'
): Promise<StockApiResponse> => {
  const response = await axiosInstance.get<StockApiResponse>(
    `/v2/markets/tickers?page=${page}&type=${type}`
  )
  return response.data
}

export const fetchStockDetail = async (id: string) => {
  const response = await axiosInstance.get(
    `/v1/markets/stock/modules?ticker=${id}&module=statistics`
  )

  return response.data.body
}
