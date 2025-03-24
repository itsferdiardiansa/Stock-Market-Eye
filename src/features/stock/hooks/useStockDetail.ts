import { useSuspenseQuery } from '@tanstack/react-query'
import { fetchStockModule } from '../api/stockApi'
import { QueryKeys, STALE_TIME } from '@/constants/stockQuery'
import { StockModule } from '../types'

type ModuleKey = (typeof QueryKeys)[keyof typeof QueryKeys]
type UseStockParams = {
  id: string
  module: StockModule
  queryKey: ModuleKey
}

export const useStock = <TData>({ id, module, queryKey }: UseStockParams) => {
  return useSuspenseQuery<TData>({
    queryKey: [queryKey, id],
    queryFn: () => fetchStockModule(id, module),
    staleTime: STALE_TIME,
    refetchOnWindowFocus: false,
  })
}
