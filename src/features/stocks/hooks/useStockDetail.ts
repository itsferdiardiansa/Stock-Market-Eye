import { useQuery } from '@tanstack/react-query'
import { fetchStockModule } from '../api/stockApi'
import { QUERY_KEYS, STALE_TIME } from '@/constants/queryConstants'
import {
  SECFillingsType,
  EarningsType,
  ProfileType,
  FinancialDataType,
  IndexTrendType,
  StatisticsType,
} from '../types'

export const useStockStattistics = (id: string) => {
  return useQuery<StatisticsType.StatisticsData['defaultKeyStatistics']>({
    queryKey: [QUERY_KEYS.STOCK_DETAIL, id],
    queryFn: () => fetchStockModule(id, 'statistics'),
    staleTime: STALE_TIME,
    refetchOnWindowFocus: false,
  })
}

export const useStockProfile = (id: string) => {
  return useQuery<ProfileType.AssetProfile>({
    queryKey: [QUERY_KEYS.STOCK_PROFILE, id],
    queryFn: () => fetchStockModule(id, 'asset-profile'),
    staleTime: STALE_TIME,
    refetchOnWindowFocus: false,
  })
}

export const useStockFinancial = (id: string) => {
  return useQuery<FinancialDataType.FinancialData>({
    queryKey: [QUERY_KEYS.STOCK_FINANCIAL, id],
    queryFn: () => fetchStockModule(id, 'financial-data'),
    staleTime: STALE_TIME,
    refetchOnWindowFocus: false,
  })
}

export const useStockSECFilings = (id: string) => {
  return useQuery<SECFillingsType.SECFillings>({
    queryKey: [QUERY_KEYS.STOCK_SEC_FILINGS, id],
    queryFn: () => fetchStockModule(id, 'sec-filings'),
    staleTime: STALE_TIME,
    refetchOnWindowFocus: false,
  })
}

export const useStockEarnings = (id: string) => {
  return useQuery<EarningsType.EarningsData>({
    queryKey: [QUERY_KEYS.STOCK_EARNINGS, id],
    queryFn: () => fetchStockModule(id, 'earnings'),
    staleTime: STALE_TIME,
    refetchOnWindowFocus: false,
  })
}

export const useStockIndexTrend = (id: string) => {
  return useQuery<IndexTrendType.IndexTrendData>({
    queryKey: [QUERY_KEYS.STOCK_INDEX_TREND, id],
    queryFn: () => fetchStockModule(id, 'index-trend'),
    staleTime: STALE_TIME,
    refetchOnWindowFocus: false,
  })
}
