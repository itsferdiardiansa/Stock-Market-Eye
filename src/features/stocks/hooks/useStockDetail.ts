import { useQuery } from '@tanstack/react-query'
import {
  fetchStockDetail,
  fetchStockFinancialData,
  fetchStockProfile,
  fetchStockSECFilings,
  fetchStockEarnings,
  fetchStockIndexTrend,
} from '../api/stockApi'

export const useStockDetail = (id: string) => {
  return useQuery({
    queryKey: ['stockDetail', id],
    queryFn: () => fetchStockDetail(id),
    staleTime: 10000 * 60 * 5,
    refetchOnWindowFocus: false,
  })
}

export const useStockProfile = (id: string) => {
  return useQuery({
    queryKey: ['stockProfile', id],
    queryFn: () => fetchStockProfile(id),
    staleTime: 10000 * 60 * 5,
    refetchOnWindowFocus: false,
  })
}

export const useStockFinancial = (id: string) => {
  return useQuery({
    queryKey: ['stockFinancial', id],
    queryFn: () => fetchStockFinancialData(id),
    staleTime: 10000 * 60 * 5,
    refetchOnWindowFocus: false,
  })
}

export const useStockSECFilings = (id: string) => {
  return useQuery({
    queryKey: ['stockSECFilings', id],
    queryFn: () => fetchStockSECFilings(id),
    staleTime: 10000 * 60 * 5,
    refetchOnWindowFocus: false,
  })
}

export const useStockEarnings = (id: string) => {
  return useQuery({
    queryKey: ['stockEarnings', id],
    queryFn: () => fetchStockEarnings(id),
    staleTime: 10000 * 60 * 5,
    refetchOnWindowFocus: false,
  })
}

export const useStockIndexTrend = (id: string) => {
  return useQuery({
    queryKey: ['stockIndexTrend', id],
    queryFn: () => fetchStockIndexTrend(id),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  })
}
