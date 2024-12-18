'use client'

import React from 'react'
import { useStockProfile } from '@/features/stocks/hooks/useStockDetail'
import ComponentCard from '@/components/common/ComponentCard'
import { Card, Alert, Spin, Descriptions } from 'antd'
import {
  BoxIcon,
  BoltIcon,
  ChatIcon,
  FolderIcon,
  PlugInIcon,
  GroupIcon,
  DollarLineIcon,
  UserIcon,
  DocsIcon,
  CheckCircleIcon,
  AlertIcon,
} from '@/icons/index'

interface StockProfileProps {
  stockId: string
}

interface Officer {
  title: string
  name: string
  age: string
  totalPay: {
    fmt: string
  }
}

const StockProfile: React.FC<StockProfileProps> = ({ stockId }) => {
  const { data, isLoading, isError, error } = useStockProfile(stockId)

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
      {/* Company Overview */}
      <Card title="🏢 Company Overview" className="shadow-lg">
        <Descriptions bordered column={1}>
          <Descriptions.Item
            label={
              <span className="flex items-center gap-2">
                <BoxIcon /> Address
              </span>
            }
          >
            {`${data?.address1}, ${data?.city}, ${data?.state}, ${data?.zip}, ${data?.country}`}
          </Descriptions.Item>
          <Descriptions.Item
            label={
              <span className="flex items-center gap-2">
                <BoltIcon /> Phone
              </span>
            }
          >
            {data?.phone || 'N/A'}
          </Descriptions.Item>
          <Descriptions.Item
            label={
              <span className="flex items-center gap-2">
                <ChatIcon /> Website
              </span>
            }
          >
            <a
              href={data?.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              {data?.website || 'N/A'}
            </a>
          </Descriptions.Item>
          <Descriptions.Item
            label={
              <span className="flex items-center gap-2">
                <FolderIcon /> Industry
              </span>
            }
          >
            {data?.industry || 'N/A'}
          </Descriptions.Item>
          <Descriptions.Item
            label={
              <span className="flex items-center gap-2">
                <PlugInIcon /> Sector
              </span>
            }
          >
            {data?.sector || 'N/A'}
          </Descriptions.Item>
          <Descriptions.Item
            label={
              <span className="flex items-center gap-2">
                <GroupIcon /> Employees
              </span>
            }
          >
            {data?.fullTimeEmployees?.toLocaleString() || 'N/A'} Employees
          </Descriptions.Item>
        </Descriptions>
      </Card>

      {/* Business Summary */}
      <Card title="📜 Business Summary" className="shadow-lg">
        <div className="flex items-center gap-2 mb-4 text-gray-700">
          <DocsIcon />
          <span className="font-semibold">Company Overview</span>
        </div>
        <p className="text-gray-700 leading-relaxed">
          {data?.longBusinessSummary || 'N/A'}
        </p>
      </Card>

      {/* Key Executives */}
      <div className="col-span-1 md:col-span-2">
        <ComponentCard title="👔 Key Executives" className="shadow-lg">
          <Descriptions bordered column={3}>
            {data?.companyOfficers?.map((officer: Officer, index: string) => (
              <React.Fragment key={index}>
                <Descriptions.Item
                  label={
                    <span className="flex items-center gap-2">
                      <UserIcon /> {officer.name}
                    </span>
                  }
                >
                  {officer.title}
                </Descriptions.Item>
                <Descriptions.Item label="Age">
                  {officer.age || 'N/A'}
                </Descriptions.Item>
                <Descriptions.Item
                  label={
                    <span className="flex items-center gap-2">
                      <DollarLineIcon /> Total Pay
                    </span>
                  }
                >
                  {officer.totalPay?.fmt || 'N/A'}
                </Descriptions.Item>
              </React.Fragment>
            ))}
          </Descriptions>
        </ComponentCard>
      </div>

      {/* Governance & Risk */}
      <div className="col-span-1 md:col-span-2">
        <ComponentCard title="⚖️ Governance & Risk" className="shadow-lg">
          <Descriptions bordered column={2}>
            <Descriptions.Item
              label={
                <span className="flex items-center gap-2">
                  <CheckCircleIcon /> Audit Risk
                </span>
              }
            >
              {data?.auditRisk || 'N/A'}
            </Descriptions.Item>
            <Descriptions.Item
              label={
                <span className="flex items-center gap-2">
                  <AlertIcon /> Compensation Risk
                </span>
              }
            >
              {data?.compensationRisk || 'N/A'}
            </Descriptions.Item>
            <Descriptions.Item label="Board Risk">
              {data?.boardRisk || 'N/A'}
            </Descriptions.Item>
            <Descriptions.Item label="Shareholder Rights Risk">
              {data?.shareHolderRightsRisk || 'N/A'}
            </Descriptions.Item>
            <Descriptions.Item label="Overall Risk">
              {data?.overallRisk || 'N/A'}
            </Descriptions.Item>
          </Descriptions>
        </ComponentCard>
      </div>
    </div>
  )
}

export default StockProfile
