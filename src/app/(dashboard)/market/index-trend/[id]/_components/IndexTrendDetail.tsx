'use client'

import React from 'react'
import { useStockIndexTrend } from '@/features/stocks/hooks/useStockDetail'
import { Alert, Spin, Table, Tag } from 'antd'
import {
  FaChartLine,
  FaArrowUp,
  FaArrowDown,
  FaInfoCircle,
} from 'react-icons/fa'
import ComponentCard from '@/components/common/ComponentCard'
import IndexTrendChart from '@/features/stocks/components/StockIndexTrendChart'

interface StockIndexTrendDetailProps {
  stockId: string
}

const StockIndexTrendDetail: React.FC<StockIndexTrendDetailProps> = ({
  stockId,
}) => {
  const { data, isLoading, isError, error } = useStockIndexTrend(stockId)

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen">
        <Spin size="large" />
      </div>
    )

  if (isError)
    return (
      <Alert
        message="Error loading index trend data"
        description={error.message}
        type="error"
        showIcon
        className="mt-4"
      />
    )

  // Table Columns
  const columns = [
    {
      title: 'Period',
      dataIndex: 'period',
      key: 'period',
      render: (text: string) => (
        <span className="flex items-center gap-2 font-semibold text-blue-600">
          <FaChartLine /> {text.toUpperCase()}
        </span>
      ),
    },
    {
      title: 'Growth',
      dataIndex: 'growth',
      key: 'growth',
      render: (growth: { raw: number; fmt: string }) => (
        <Tag
          color={growth.raw >= 0 ? 'green' : 'red'}
          style={{
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '4px',
          }}
        >
          <span>{growth.raw >= 0 ? <FaArrowUp /> : <FaArrowDown />}</span>
          <span>{growth.fmt}%</span>
        </Tag>
      ),
    },
  ]

  return (
    <>
      <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg shadow">
        <div className="flex items-center gap-3">
          <FaInfoCircle className="text-blue-600 text-lg" />
          <h2 className="text-lg font-semibold text-blue-800">
            Understanding the Index Trend
          </h2>
        </div>
        <p className="text-gray-700 mt-2">
          The <b>Index Trend</b> component provides insights into the{' '}
          <b>expected growth rates</b> of a stock over different periods,
          including <b>quarterly and yearly projections</b>. The table below
          shows the <b>estimated percentage growth</b>, while the chart
          visualizes trends over time.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ComponentCard title="📈 Growth Estimates" className="shadow-lg">
          <Table
            columns={columns}
            dataSource={data?.estimates}
            rowKey="period"
            pagination={{ showSizeChanger: false, defaultPageSize: 5 }}
          />
        </ComponentCard>

        {/* Growth Trend Chart */}
        <ComponentCard title="📊 Growth Trend Over Time" className="shadow-lg">
          <IndexTrendChart estimates={data?.estimates} />
        </ComponentCard>
      </div>
    </>
  )
}

export default StockIndexTrendDetail
