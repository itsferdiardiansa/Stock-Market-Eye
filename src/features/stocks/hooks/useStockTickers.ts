import { useQuery } from '@tanstack/react-query'
import { fetchStockTickers } from '../api/stockApi'
import { StockApiResponse } from '../types'

export const useStockTickers = (page = 1, type = 'STOCKS') => {
  return useQuery<StockApiResponse>({
    queryKey: ['stockTickers', page, type],
    queryFn: () => fetchStockTickers(page, type),
    staleTime: 10000 * 60 * 5,
    refetchOnWindowFocus: false,
  })
}
