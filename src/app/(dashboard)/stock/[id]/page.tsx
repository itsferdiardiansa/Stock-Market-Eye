import type { Metadata } from 'next'
import ComponentCard from '@/components/common/ComponentCard'
import StockStatistics, {
  StockStatisticsLoader,
} from './_components/StockStatistics'
import StockCalendarEvents, {
  StockCalendarEventsLoader,
} from './_components/StockCalendarEvents'
import StockFinancialData, {
  StockFinancialDataLoader,
} from './_components/StockFinancialData'
import SuspanseWrapper from '@/layout/SuspenseWrapper'

type StockDetailProps = {
  params: Promise<{
    id: string
  }>
}

export const generateMetadata = async ({
  params,
}: StockDetailProps): Promise<Metadata> => {
  const id = (await params).id

  return {
    title: `${id} - Stock Price, News, Quote & History`,
    description: `Find the latest ${id} stock quote, history, news and other vital information to help you with your stock trading and investing.`,
    openGraph: {
      title: `${id} - Stock Price, News, Quote & History`,
      description: `Find the latest ${id} stock quote, history, news and other vital information to help you with your stock trading and investing.`,
      url: `/stock/${id}`,
      type: 'website',
    },
  }
}

const StockDetailPage = async ({ params }: StockDetailProps) => {
  const id = (await params).id

  return (
    <div className="@container flex flex-col gap-4">
      <div className="@lg:w-1/3">
        <ComponentCard title="Calendar Events" className="h-[min-content]">
          <SuspanseWrapper fallbackLoader={<StockCalendarEventsLoader />}>
            <StockCalendarEvents stockId={id} />
          </SuspanseWrapper>
        </ComponentCard>
      </div>

      <div className="flex flex-col @lg:flex-row gap-4">
        <ComponentCard title="Financial Data" className="flex-1">
          <SuspanseWrapper fallbackLoader={<StockFinancialDataLoader />}>
            <StockFinancialData stockId={id} />
          </SuspanseWrapper>
        </ComponentCard>

        <ComponentCard title="Highlights" className="flex-1">
          <SuspanseWrapper fallbackLoader={<StockStatisticsLoader />}>
            <StockStatistics stockId={id} />
          </SuspanseWrapper>
        </ComponentCard>
      </div>
    </div>
  )
}

export default StockDetailPage
