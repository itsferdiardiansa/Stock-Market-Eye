'use client'
import { useParams } from 'next/navigation'

export default function StockProfilePage() {
  const params = useParams()

  console.log('Params: ', params)
  return <div className="relative">Stock profile page</div>
}
