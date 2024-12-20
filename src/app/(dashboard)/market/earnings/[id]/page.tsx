import StockEarningsDetail from './_components/StockEarningsDetail'

interface StockEarningProps {
  params: Promise<{
    id: string
  }>
}

const StockEarningsPage = async ({ params }: StockEarningProps) => {
  const id = (await params).id

  return <StockEarningsDetail stockId={id} />
}

export default StockEarningsPage
