'use client'

import React, { useState, useEffect } from 'react'
import ComponentCard from '@/components/common/ComponentCard'
import PageBreadcrumb from '@/components/common/PageBreadCrumb'
import { Alert } from 'antd'
import dayjs from 'dayjs'

import { useStockTickers } from '@/features/stocks/hooks/useStockTickers'
import StockList from '@/features/stocks/components/StockList'

export default function StockListingsPage() {
  const { data, isLoading, isError, error } = useStockTickers()
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setHydrated(true)
  }, [])

  if (!hydrated) return null

  if (isError) {
    return (
      <Alert
        message="Error loading stock data!"
        description={error.message}
        type="error"
        showIcon
      />
    )
  }

  return (
    <div>
      <PageBreadcrumb pageTitle="Stock Listing" />
      <div className="space-y-6">
        <ComponentCard
          title={`Stock Market Overview - ${dayjs().format('MMMM D, YYYY')}`}
        >
          <StockList stocks={data?.body || []} isLoading={isLoading} />
        </ComponentCard>
      </div>
    </div>
  )
}
