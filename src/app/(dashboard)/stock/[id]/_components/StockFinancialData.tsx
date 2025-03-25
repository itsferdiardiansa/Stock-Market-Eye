'use client'

import { QueryKeys } from '@/constants/stockQuery'
import FinancialOverview, {
  FinancialOverviewLoader,
} from '@/features/stock/components/financial-overview'
import { useStock } from '@/features/stock/hooks/useStockDetail'
import { FinancialData } from '@/features/stock/types/financialDataType'

type StockFinancialDataProps = {
  stockId: string
}

export const StockFinancialDataLoader = () => <FinancialOverviewLoader />

const StockFinancialData = ({ stockId }: StockFinancialDataProps) => {
  const { data } = useStock<FinancialData>({
    id: stockId,
    module: 'financial-data',
    queryKey: QueryKeys['STOCK_FINANCIAL'],
  })

  return <FinancialOverview data={data.financialData} />
}

export default StockFinancialData
