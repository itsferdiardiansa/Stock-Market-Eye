import { useQuery } from '@tanstack/react-query'
import { fetchStockDetail } from '../api/stockApi'

export const useStockDetail = (id: string) => {
  return useQuery({
    queryKey: ['stockDetail', id],
    queryFn: () => fetchStockDetail(id),
    staleTime: 10000 * 60 * 5,
    refetchOnWindowFocus: false,
  })
}
