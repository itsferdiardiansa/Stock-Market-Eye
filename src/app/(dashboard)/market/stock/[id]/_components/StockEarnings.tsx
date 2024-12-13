'use client'

import React from 'react'
import { useStockEarnings } from '@/features/stocks/hooks/useStockDetail'
import { Alert, Spin, Table, Statistic, Row, Col } from 'antd'
import {
  FaChartLine,
  FaCheckCircle,
  FaTimesCircle,
  FaCalendarAlt,
} from 'react-icons/fa'
import ComponentCard from '@/components/common/ComponentCard'
import EarningsChart from '@/features/stocks/components/StockEarningChart'

interface StockEarningsProps {
  stockId: string
}

const StockEarnings: React.FC<StockEarningsProps> = ({ stockId }) => {
  const { data, isLoading, isError, error } = useStockEarnings(stockId)

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen">
        <Spin size="large" />
      </div>
    )

  if (isError)
    return (
      <Alert
        message="Error loading earnings data"
        description={error.message}
        type="error"
        showIcon
        className="mt-4"
      />
    )

  // Table Columns
  const columns = [
    {
      title: 'Quarter',
      dataIndex: 'date',
      key: 'date',
      render: (text: string) => (
        <span className="flex items-center gap-2 font-semibold text-blue-600">
          <FaCalendarAlt /> {text}
        </span>
      ),
    },
    {
      title: 'Actual EPS',
      dataIndex: 'actual',
      key: 'actual',
      render: (actual: { fmt: string }) => (
        <Statistic
          value={actual.fmt}
          prefix={<FaCheckCircle className="text-sm mr-1 text-green-500" />}
          className="text-green-600 font-semibold"
        />
      ),
    },
    {
      title: 'Estimated EPS',
      dataIndex: 'estimate',
      key: 'estimate',
      render: (estimate: { fmt: string }) => (
        <Statistic
          value={estimate.fmt}
          prefix={<FaTimesCircle className="text-sm mr-1 text-red-500" />}
          className="text-red-600 font-semibold"
        />
      ),
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <ComponentCard
        title="📅 Quarterly Earnings (Actual vs Estimate)"
        className="shadow-lg"
      >
        <Table
          columns={columns}
          dataSource={data?.earningsChart?.quarterly}
          rowKey="date"
          pagination={{ showSizeChanger: false, defaultPageSize: 4 }}
        />
      </ComponentCard>

      {/* Current Quarter Estimate */}
      <ComponentCard title="📊 Current Quarter Estimate" className="shadow-lg">
        <Row gutter={16}>
          <Col span={12}>
            <Statistic
              title="Estimated EPS"
              prefix={<FaChartLine className="text-sm mr-2 text-blue-500" />}
              value={data?.earningsChart?.currentQuarterEstimate?.fmt}
              className="text-blue-600 font-semibold"
            />
          </Col>
          <Col span={12}>
            <Statistic
              title="Estimate Date"
              prefix={<FaCalendarAlt className="text-sm mr-2 text-blue-500" />}
              value={`${data?.earningsChart?.currentQuarterEstimateDate} ${data?.earningsChart?.currentQuarterEstimateYear}`}
              className="text-blue-600 font-semibold"
            />
          </Col>
        </Row>
      </ComponentCard>

      {/* Annual Earnings Chart */}
      <div className="col-span-1 md:col-span-2">
        <EarningsChart earningsData={data?.financialsChart?.yearly} />
      </div>
    </div>
  )
}

export default StockEarnings
