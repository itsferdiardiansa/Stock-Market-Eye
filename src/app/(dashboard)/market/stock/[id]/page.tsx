'use client'

import React from 'react'
import { useParams, useSearchParams } from 'next/navigation'
import StockOverview from './_components/StockOverview'
import StockProfile from './_components/StockProfile'
import PageBreadcrumb from '@/components/common/PageBreadCrumb'
import StockFinancial from './_components/StockFinancialData'

const StockDetailPage = () => {
  const { id } = useParams()
  const searchParams = useSearchParams()
  const stockType = searchParams.get('stock-type') || 'profile'

  return (
    <div className="container mx-auto px-6 py-8">
      <PageBreadcrumb pageTitle={`${id} - Stock Detail`} />

      <div className="space-y-8">
        {stockType === 'detail' && <StockOverview stockId={id as string} />}
        {stockType === 'profile' && <StockProfile stockId={id as string} />}
        {stockType === 'financial-data' && (
          <StockFinancial stockId={id as string} />
        )}
      </div>
    </div>
  )
}

export default StockDetailPage
