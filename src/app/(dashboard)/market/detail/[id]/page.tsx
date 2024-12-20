import StockDetail from './_components/StockDetail'

interface StockDetailProps {
  params: Promise<{
    id: string
  }>
}

const StockDetailPage = async ({ params }: StockDetailProps) => {
  const id = (await params).id

  return <StockDetail stockId={id} />
}

export default StockDetailPage
