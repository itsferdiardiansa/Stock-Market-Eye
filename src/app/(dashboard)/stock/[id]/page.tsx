import ComponentCard from '@/components/common/ComponentCard'
import StockStatistics, {
  StockStatisticsLoader,
} from './_components/StockStatistics'
import StockCalendarEvents, {
  StockCalendarEventsLoader,
} from './_components/StockCalendarEvents'
import SuspanseWrapper from '@/layout/SuspenseWrapper'

interface StatisticsProps {
  params: Promise<{
    id: string
  }>
}

const StockDetailPage = async ({ params }: StatisticsProps) => {
  const id = (await params).id

  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <ComponentCard title="Financial Highlights" className="w-full lg:w-2/3">
        <SuspanseWrapper fallbackLoader={<StockStatisticsLoader />}>
          <StockStatistics stockId={id} />
        </SuspanseWrapper>
      </ComponentCard>

      <ComponentCard title="Calendar Events" className="h-[min-content] flex-1">
        <SuspanseWrapper fallbackLoader={<StockCalendarEventsLoader />}>
          <StockCalendarEvents stockId={id} />
        </SuspanseWrapper>
      </ComponentCard>
    </div>
  )
}

export default StockDetailPage
