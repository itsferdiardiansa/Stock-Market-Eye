'use client'

import React from 'react'
import { useStockFinancial } from '@/features/stocks/hooks/useStockDetail'
import { Alert, Spin, Descriptions, Statistic, Row, Col } from 'antd'
import {
  FaDollarSign,
  FaChartLine,
  FaChartPie,
  FaBalanceScale,
  FaCashRegister,
  FaCoins,
  FaArrowUp,
  FaArrowDown,
  FaChartBar,
  FaMoneyBillWave,
  FaChartArea,
} from 'react-icons/fa'
import ComponentCard from '@/components/common/ComponentCard'

interface StockFinancialDetailProps {
  stockId: string
}

// Helper function to color positive & negative values
const getColorClass = (value: number | undefined) => {
  if (value === undefined) return 'text-gray-700'
  return value > 0
    ? 'text-green-600 font-semibold'
    : 'text-red-600 font-semibold'
}

const StockFinancialDetail: React.FC<StockFinancialDetailProps> = ({
  stockId,
}) => {
  const { data, isLoading, isError, error } = useStockFinancial(stockId)

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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Price Targets */}
      <ComponentCard title="💰 Stock Price Targets" className="shadow-lg">
        <Row gutter={16}>
          <Col span={12}>
            <Statistic
              title="Current Price"
              prefix={<FaDollarSign className="text-sm mr-2" />}
              value={data?.currentPrice?.fmt}
              className="font-semibold"
            />
          </Col>
          <Col span={12}>
            <Statistic
              title="High Target"
              prefix={<FaArrowUp className="text-sm mr-2 text-green-500" />}
              value={data?.targetHighPrice?.fmt}
              className="text-green-600 font-semibold"
            />
          </Col>
          <Col span={12}>
            <Statistic
              title="Low Target"
              prefix={<FaArrowDown className="text-sm mr-2 text-red-500" />}
              value={data?.targetLowPrice?.fmt}
              className="text-red-600 font-semibold"
            />
          </Col>
          <Col span={12}>
            <Statistic
              title="Mean Target"
              prefix={<FaChartLine className="text-sm mr-2 text-blue-500" />}
              value={data?.targetMeanPrice?.fmt}
              className="text-blue-600 font-semibold"
            />
          </Col>
        </Row>
      </ComponentCard>

      {/* Revenue & Profit */}
      <ComponentCard title="📊 Revenue & Profit" className="shadow-lg">
        <Descriptions bordered column={1}>
          <Descriptions.Item
            label={
              <span className="flex items-center gap-2">
                <FaCoins className="text-sm mr-2" /> Total Revenue
              </span>
            }
          >
            <span className="font-semibold text-blue-600">
              {data?.totalRevenue?.fmt || 'N/A'}
            </span>
          </Descriptions.Item>
          <Descriptions.Item
            label={
              <span className="flex items-center gap-2">
                <FaChartPie className="text-sm mr-2" /> Gross Profit
              </span>
            }
          >
            <span className="font-semibold text-green-600">
              {data?.grossProfits?.fmt || 'N/A'}
            </span>
          </Descriptions.Item>
          <Descriptions.Item
            label={
              <span className="flex items-center gap-2">
                <FaCashRegister className="text-sm mr-2" /> EBITDA
              </span>
            }
          >
            <span className="font-semibold text-purple-600">
              {data?.ebitda?.fmt || 'N/A'}
            </span>
          </Descriptions.Item>
          <Descriptions.Item
            label={
              <span className="flex items-center gap-2">
                <FaMoneyBillWave className="text-sm mr-2" /> Net Income
              </span>
            }
          >
            <span className="font-semibold text-green-700">
              {data?.netIncome?.fmt || 'N/A'}
            </span>
          </Descriptions.Item>
        </Descriptions>
      </ComponentCard>

      {/* Cash Flow & Debt */}
      <ComponentCard title="🏦 Cash Flow & Debt" className="shadow-lg">
        <Row gutter={16}>
          <Col span={12}>
            <Statistic
              title="Total Cash"
              prefix={<FaBalanceScale className="text-sm mr-2 text-blue-500" />}
              value={data?.totalCash?.fmt}
              className="text-blue-600 font-semibold"
            />
          </Col>
          <Col span={12}>
            <Statistic
              title="Cash Per Share"
              prefix={<FaCoins className="text-sm mr-2 text-blue-500" />}
              value={data?.totalCashPerShare?.fmt}
              className="text-blue-600 font-semibold"
            />
          </Col>
          <Col span={12}>
            <Statistic
              title="Total Debt"
              prefix={<FaChartBar className="text-sm mr-2 text-red-500" />}
              value={data?.totalDebt?.fmt}
              className="text-red-600 font-semibold"
            />
          </Col>
          <Col span={12}>
            <Statistic
              title="Debt/Equity"
              prefix={<FaChartPie className="text-sm mr-2 text-red-500" />}
              value={data?.debtToEquity?.fmt}
              className="text-red-600 font-semibold"
            />
          </Col>
        </Row>
      </ComponentCard>

      {/* Growth & Ratios */}
      <div className="col-span-1 md:col-span-2">
        <ComponentCard title="📈 Growth & Ratios" className="shadow-lg">
          <Row gutter={16}>
            <Col span={8}>
              <Statistic
                title="EPS Growth"
                prefix={<FaArrowUp className="text-sm mr-2" />}
                value={data?.earningsGrowth?.fmt}
                className={getColorClass(data?.earningsGrowth?.raw)}
              />
            </Col>
            <Col span={8}>
              <Statistic
                title="Revenue Growth"
                prefix={<FaChartArea className="text-sm mr-2" />}
                value={data?.revenueGrowth?.fmt}
                className={getColorClass(data?.revenueGrowth?.raw)}
              />
            </Col>
            <Col span={8}>
              <Statistic
                title="Operating Margins"
                prefix={<FaBalanceScale className="text-sm mr-2" />}
                value={data?.operatingMargins?.fmt}
                className="text-purple-600 font-semibold"
              />
            </Col>
            <Col span={8}>
              <Statistic
                title="Profit Margins"
                prefix={<FaChartPie className="text-sm mr-2" />}
                value={data?.profitMargins?.fmt}
                className="text-green-700 font-semibold"
              />
            </Col>
            <Col span={8}>
              <Statistic
                title="Return on Assets"
                prefix={<FaChartLine className="text-sm mr-2" />}
                value={data?.returnOnAssets?.fmt}
                className={getColorClass(data?.returnOnAssets?.raw)}
              />
            </Col>
            <Col span={8}>
              <Statistic
                title="Return on Equity"
                prefix={<FaChartBar className="text-sm mr-2" />}
                value={data?.returnOnEquity?.fmt}
                className={getColorClass(data?.returnOnEquity?.raw)}
              />
            </Col>
          </Row>
        </ComponentCard>
      </div>
    </div>
  )
}

export default StockFinancialDetail
