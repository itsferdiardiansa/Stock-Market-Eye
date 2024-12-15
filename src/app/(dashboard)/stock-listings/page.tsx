'use client'

import React, { useState, useEffect } from 'react'
import ComponentCard from '@/components/common/ComponentCard'
import PageBreadcrumb from '@/components/common/PageBreadCrumb'
import { Alert } from 'antd'
import dayjs from 'dayjs'

import { useStockTickers } from '@/features/stocks/hooks/useStockTickers'
import StockList from '@/features/stocks/components/StockList'
import { FaInfoCircle, FaMousePointer } from 'react-icons/fa'

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

      {/* Explanation Section */}
      <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg shadow">
        <div className="flex items-center gap-3">
          <FaInfoCircle className="text-blue-600 text-lg" />
          <h2 className="text-lg font-semibold text-blue-800">
            Understanding the Stock Listings
          </h2>
        </div>
        <p className="text-gray-700 mt-2">
          This page provides a{' '}
          <b>
            real-time overview of stock prices, market trends, and company
            performance
          </b>
          . The table below displays key stock market data, including{' '}
          <b>
            symbol, company name, last sale price, net change, percentage
            change, and market capitalization
          </b>
          .
        </p>
      </div>

      <div className="mb-4 p-4 bg-yellow-50 border border-yellow-50 rounded-lg shadow">
        <p className="text-gray-700 mt-2">
          Click on any row in the table to{' '}
          <b>view detailed stock information</b>, including historical data,
          financials, and other insights.
        </p>
        <div className="flex items-center mt-3 text-blue-700 font-medium">
          <FaMousePointer className="mr-2" /> Click on a stock row to explore
          details!
        </div>
      </div>

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
