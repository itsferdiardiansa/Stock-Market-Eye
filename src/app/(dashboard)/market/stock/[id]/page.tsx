import StockOverviewDetail from './_components/StockOverviewDetail'

interface StockOverviewProps {
  params: Promise<{
    id: string
  }>
}

const StockOverviewPage = async ({ params }: StockOverviewProps) => {
  const id = (await params).id

  return <StockOverviewDetail stockId={id} />
}

export default StockOverviewPage
