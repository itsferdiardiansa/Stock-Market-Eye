import StockProfileDetail from './_components/ProfileDetail'

interface StockProfileProps {
  params: Promise<{
    id: string
  }>
}

const StockProfilePage = async ({ params }: StockProfileProps) => {
  const id = (await params).id

  return <StockProfileDetail stockId={id} />
}

export default StockProfilePage
