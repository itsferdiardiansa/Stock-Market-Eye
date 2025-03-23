'use client'

import { useStockStattistics } from '@/features/stocks/hooks/useStockDetail'
import SuspenseWrapper from '@/layout/SuspenseWrapper'
import ComponentCard from '@/components/common/ComponentCard'
import StockStatistics from './StockStatistics'

type StatisticDetailProps = {
  stockId: string
}

const StatisticDetail = ({ stockId }: StatisticDetailProps) => {
  const { data, isLoading, isError, error } = useStockStattistics(
    stockId as string
  )

  return (
    <SuspenseWrapper isLoading={isLoading} isError={isError} error={error}>
      <div className="flex">
        <ComponentCard title="Financial Highlights" className="w-full lg:w-2/3">
          <StockStatistics data={data} />
        </ComponentCard>
      </div>
    </SuspenseWrapper>
  )
}

export default StatisticDetail
