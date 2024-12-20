import StockIndexTrendDetail from './_components/IndexTrendDetail'

interface StockFinancialDataProps {
  params: Promise<{
    id: string
  }>
}

const StockIndexTrendPage = async ({ params }: StockFinancialDataProps) => {
  const id = (await params).id

  return <StockIndexTrendDetail stockId={id} />
}

export default StockIndexTrendPage
