'use client'

import React, { Suspense } from 'react'
import { useParams, useSearchParams } from 'next/navigation'
import StockOverview from './_components/StockOverview'
import StockProfile from './_components/StockProfile'
import PageBreadcrumb from '@/components/common/PageBreadCrumb'
import StockFinancial from './_components/StockFinancialData'
import StockSECFilings from './_components/StockSECFilling'
import StockEarnings from './_components/StockEarnings'
import StockIndexTrend from './_components/StockIndexTrend'

const Loader = () => (
  <div className="flex items-center justify-center h-screen">
    Loading stock details...
  </div>
)

const StockDetailPage = () => {
  const { id } = useParams()
  const searchParams = useSearchParams()
  const stockType = searchParams.get('stock-type') || 'profile'

  return (
    <Suspense fallback={<Loader />}>
      <div className="w-full 6 py-8">
        <PageBreadcrumb pageTitle={`${id} - Stock Detail`} />

        <div className="space-y-8">
          {stockType === 'detail' && <StockOverview stockId={id as string} />}
          {stockType === 'profile' && <StockProfile stockId={id as string} />}
          {stockType === 'earnings' && <StockEarnings stockId={id as string} />}
          {stockType === 'index-trend' && (
            <StockIndexTrend stockId={id as string} />
          )}
          {stockType === 'sec-filings' && (
            <StockSECFilings stockId={id as string} />
          )}
          {stockType === 'financial-data' && (
            <StockFinancial stockId={id as string} />
          )}
        </div>
      </div>
    </Suspense>
  )
}

export default StockDetailPage
