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

export const fetchStockProfile = async (id: string) => {
  const response = await axiosInstance.get(
    `/v1/markets/stock/modules?ticker=${id}&module=asset-profile`
  )
  return response.data.body
}

export const fetchStockFinancialData = async (id: string) => {
  const response = await axiosInstance.get(
    `/v1/markets/stock/modules?ticker=${id}&module=financial-data`
  )
  return response.data.body
}

export const fetchStockSECFilings = async (id: string) => {
  const response = await axiosInstance.get(
    `/v1/markets/stock/modules?ticker=${id}&module=sec-filings`
  )
  return response.data.body.filings
}

export const fetchStockEarnings = async (id: string) => {
  const response = await axiosInstance.get(
    `/v1/markets/stock/modules?ticker=${id}&module=earnings`
  )
  return response.data.body.earnings
}

export const fetchStockIndexTrend = async (id: string) => {
  const response = await axiosInstance.get(
    `/v1/markets/stock/modules?ticker=${id}&module=index-trend`
  )
  return response.data.body
}
