import StockFinancialDetail from './_components/FinancialDataDetail'

interface StockFinancialDataProps {
  params: Promise<{
    id: string
  }>
}

const StockFinancialDataPage = async ({ params }: StockFinancialDataProps) => {
  const id = (await params).id

  return <StockFinancialDetail stockId={id} />
}

export default StockFinancialDataPage
