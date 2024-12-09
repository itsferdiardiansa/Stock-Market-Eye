'use client'

import React from 'react'
import { useParams } from 'next/navigation'
import PageBreadcrumb from '@/components/common/PageBreadCrumb'
import ComponentCard from '@/components/common/ComponentCard'
import { useStockDetail } from '@/features/stocks/hooks/useStockDetail'
import { Descriptions, Alert, Spin } from 'antd'
import StockChart from '@/features/stocks/components/StockDetailChart'
import {
  AiOutlineStock,
  AiOutlineRise,
  AiOutlineFall,
  AiOutlineBarChart,
} from 'react-icons/ai'

const StockDetailPage = () => {
  const { id } = useParams()
  const { data, isLoading, isError, error } = useStockDetail(id as string)

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen">
        <Spin size="large" />
      </div>
    )

  if (isError)
    return (
      <Alert
        message="Error loading stock data"
        description={error.message}
        type="error"
        showIcon
        className="mt-4"
      />
    )

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Breadcrumb */}
      <PageBreadcrumb pageTitle={`${id} - Stock Overview`} />

      <div className="space-y-8">
        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Stock Details */}
          <ComponentCard title="📊 Stock Overview">
            <Descriptions bordered column={1} className="text-lg">
              <Descriptions.Item
                label={<AiOutlineStock className="inline text-blue-500" />}
              >
                {data?.enterpriseValue?.fmt || 'N/A'}
              </Descriptions.Item>
              <Descriptions.Item
                label={<AiOutlineRise className="inline text-green-500" />}
              >
                {data?.forwardPE?.fmt || 'N/A'}
              </Descriptions.Item>
              <Descriptions.Item
                label={<AiOutlineFall className="inline text-red-500" />}
              >
                {data?.profitMargins?.fmt || 'N/A'}
              </Descriptions.Item>
              <Descriptions.Item label="Shares Outstanding">
                {data?.sharesOutstanding?.fmt || 'N/A'}
              </Descriptions.Item>
              <Descriptions.Item label="Beta">
                {data?.beta?.fmt || 'N/A'}
              </Descriptions.Item>
              <Descriptions.Item label="Price to Book">
                {data?.priceToBook?.fmt || 'N/A'}
              </Descriptions.Item>
              <Descriptions.Item label="Last Split Date">
                {data?.lastSplitDate?.fmt || 'N/A'}
              </Descriptions.Item>
            </Descriptions>
          </ComponentCard>

          {/* Right Column - Stock Statistics */}
          <ComponentCard title="📈 Market Stats">
            <Descriptions bordered column={1} className="text-lg">
              <Descriptions.Item label="52 Week Change">
                {data?.['52WeekChange']?.fmt || 'N/A'}
              </Descriptions.Item>
              <Descriptions.Item label="S&P 500 52W Change">
                {data?.['SandP52WeekChange']?.fmt || 'N/A'}
              </Descriptions.Item>
              <Descriptions.Item label="Dividend Yield">
                {data?.lastDividendValue?.fmt || 'N/A'}
              </Descriptions.Item>
              <Descriptions.Item label="Earnings Growth">
                {data?.earningsQuarterlyGrowth?.fmt || 'N/A'}
              </Descriptions.Item>
              <Descriptions.Item label="Revenue Growth">
                {data?.revenueQuarterlyGrowth?.fmt || 'N/A'}
              </Descriptions.Item>
              <Descriptions.Item label="Total Assets">
                {data?.totalAssets?.fmt || 'N/A'}
              </Descriptions.Item>
            </Descriptions>
          </ComponentCard>
        </div>

        {/* Full-Width Chart */}
        <ComponentCard title="📉 Stock Performance">
          <StockChart stock={data} />
        </ComponentCard>
      </div>
    </div>
  )
}

export default StockDetailPage
