'use client'

import React from 'react'
import { useStockSECFilings } from '@/features/stocks/hooks/useStockDetail'
import { Alert, Spin, Table, Tag, Tooltip } from 'antd'
import { FaFileAlt, FaExternalLinkAlt, FaCalendarAlt } from 'react-icons/fa'
import ComponentCard from '@/components/common/ComponentCard'

interface StockSECFilingsProps {
  stockId: string
}

// Function to truncate text with ellipsis
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text
}

const StockSECFilings: React.FC<StockSECFilingsProps> = ({ stockId }) => {
  const { data, isLoading, isError, error } = useStockSECFilings(stockId)

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen">
        <Spin size="large" />
      </div>
    )

  if (isError)
    return (
      <Alert
        message="Error loading SEC filings"
        description={error.message}
        type="error"
        showIcon
        className="mt-4"
      />
    )

  // Table Columns
  const columns = [
    {
      title: 'Filing Date',
      dataIndex: 'date',
      key: 'date',
      render: (text: string) => (
        <span className="flex items-center gap-2 font-semibold text-blue-600">
          <FaCalendarAlt /> {text}
        </span>
      ),
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      render: (type: string) => (
        <Tag
          color={
            type === '10-K' ? 'blue' : type === '10-Q' ? 'green' : 'orange'
          }
        >
          {type}
        </Tag>
      ),
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render: (text: string) => (
        <Tooltip title={text}>
          <span className="font-medium">{truncateText(text, 50)}</span>
        </Tooltip>
      ),
    },
    {
      title: 'SEC Filing',
      dataIndex: 'edgarUrl',
      key: 'edgarUrl',
      render: (url: string) => (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline flex items-center gap-1"
        >
          <FaExternalLinkAlt /> View Filing
        </a>
      ),
    },
  ]

  return (
    <ComponentCard title="📄 SEC Filings" className="shadow-lg">
      <Table
        columns={columns}
        dataSource={data}
        rowKey="epochDate"
        pagination={{ showSizeChanger: false, defaultPageSize: 10 }}
      />
    </ComponentCard>
  )
}

export default StockSECFilings
