import StockSecFillingDetail from './_components/SecFillingDetail'

interface StockSecFillingProps {
  params: Promise<{
    id: string
  }>
}

const StockSecFillingPage = async ({ params }: StockSecFillingProps) => {
  const id = (await params).id

  return <StockSecFillingDetail stockId={id} />
}

export default StockSecFillingPage
