import StatisticsDetail from './_components/StatisticsDetail'

interface StatisticsProps {
  params: Promise<{
    id: string
  }>
}

const StockDetailPage = async ({ params }: StatisticsProps) => {
  const id = (await params).id

  return <StatisticsDetail stockId={id} />
}

export default StockDetailPage
