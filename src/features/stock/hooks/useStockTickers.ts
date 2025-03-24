import { useQuery } from '@tanstack/react-query'
import { fetchStockTickers } from '../api/stockApi'
import { QueryKeys, STALE_TIME } from '@/constants/stockQuery'

export const useStockTickers = (page = 1, type = 'STOCKS') => {
  return useQuery({
    queryKey: [QueryKeys.STOCK, page, type],
    queryFn: () => fetchStockTickers(page, type),
    staleTime: STALE_TIME,
    refetchOnWindowFocus: false,
  })
}
