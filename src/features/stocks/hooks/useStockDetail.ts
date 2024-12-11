import { useQuery } from '@tanstack/react-query'
import {
  fetchStockDetail,
  fetchStockFinancialData,
  fetchStockProfile,
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
