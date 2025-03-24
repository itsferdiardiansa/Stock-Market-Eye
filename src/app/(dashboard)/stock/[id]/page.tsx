import ComponentCard from '@/components/common/ComponentCard'
import StockStatistics, {
  StockStatisticsLoader,
} from './_components/StockStatistics'
import SuspanseWrapper from '@/layout/SuspenseWrapper'

interface StatisticsProps {
  params: Promise<{
    id: string
  }>
}

const StockDetailPage = async ({ params }: StatisticsProps) => {
  const id = (await params).id

  return (
    <div className="flex">
      <ComponentCard title="Financial Highlights" className="w-full lg:w-2/3">
        <SuspanseWrapper fallbackLoader={<StockStatisticsLoader />}>
          <StockStatistics stockId={id} />
        </SuspanseWrapper>
      </ComponentCard>
    </div>
  )
}

export default StockDetailPage
