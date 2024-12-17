'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { Table, Tag, Skeleton, Button } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { StockData } from '../types'
import { FaEye } from 'react-icons/fa'

interface StockTableProps {
  stocks: StockData[]
  isLoading: boolean
}

const formatNumber = (num: string) => num.replace(/\B(?=(\d{3})+(?!\d))/g, ',')

const StockTable: React.FC<StockTableProps> = ({ stocks, isLoading }) => {
  const router = useRouter()

  const handleRowClick = (symbol: string) => {
    router.push(`/market/stock/${symbol}?stock-type=detail`)
  }

  const columns: ColumnsType<StockData> = [
    {
      title: 'Symbol',
      dataIndex: 'symbol',
      key: 'symbol',
      render: (symbol, record) =>
        record.loading ? (
          <Skeleton.Button active size="small" />
        ) : (
          <strong>{symbol}</strong>
        ),
    },
    {
      title: 'Company Name',
      dataIndex: 'name',
      key: 'name',
      ellipsis: true,
      render: (name, record) =>
        record.loading ? <Skeleton.Input active size="small" /> : name,
    },
    {
      title: 'Last Sale',
      dataIndex: 'lastsale',
      key: 'lastsale',
      render: (price, record) =>
        record.loading ? (
          <Skeleton.Button active size="small" />
        ) : (
          <span>${price.replace('$', '')}</span>
        ),
      sorter: (a, b) =>
        a.loading || b.loading
          ? 0
          : parseFloat(a.lastsale.replace('$', '')) -
            parseFloat(b.lastsale.replace('$', '')),
    },
    {
      title: 'Net Change',
      dataIndex: 'netchange',
      key: 'netchange',
      render: (change, record) => {
        if (record.loading) return <Skeleton.Button active size="small" />
        const changeNum = parseFloat(change)
        return (
          <Tag color={changeNum > 0 ? 'green' : 'red'}>
            {changeNum > 0 ? `+${change}` : change}
          </Tag>
        )
      },
      sorter: (a, b) =>
        a.loading || b.loading
          ? 0
          : parseFloat(a.netchange) - parseFloat(b.netchange),
    },
    {
      title: '% Change',
      dataIndex: 'pctchange',
      key: 'pctchange',
      render: (pct, record) => {
        if (record.loading) return <Skeleton.Button active size="small" />
        const changeNum = parseFloat(pct.replace('%', ''))
        return (
          <Tag color={changeNum > 0 ? 'green' : 'red'}>
            {changeNum > 0 ? `+${pct}` : pct}
          </Tag>
        )
      },
      sorter: (a, b) =>
        a.loading || b.loading
          ? 0
          : parseFloat(a.pctchange.replace('%', '')) -
            parseFloat(b.pctchange.replace('%', '')),
    },
    {
      title: 'Market Cap',
      dataIndex: 'marketCap',
      key: 'marketCap',
      render: (cap, record) =>
        record.loading ? (
          <Skeleton.Button active size="small" />
        ) : (
          `$${formatNumber(cap)}`
        ),
      sorter: (a, b) =>
        a.loading || b.loading
          ? 0
          : parseInt(a.marketCap.replace(/,/g, ''), 10) -
            parseInt(b.marketCap.replace(/,/g, ''), 10),
    },
    {
      title: 'Details',
      key: 'details',
      render: (_, record) =>
        record.loading ? (
          <Skeleton.Button active size="small" />
        ) : (
          <Button
            type="link"
            icon={<FaEye />}
            onClick={e => {
              e.stopPropagation()
              handleRowClick(record.symbol)
            }}
          >
            View Details
          </Button>
        ),
    },
  ]

  const skeletonData: StockData[] = isLoading
    ? Array.from({ length: 5 }).map((_, index) => ({
        symbol: `loading-${index}`,
        name: 'Loading...',
        lastsale: '$0.00',
        netchange: '0.00',
        pctchange: '0%',
        marketCap: '0',
        loading: true,
      }))
    : stocks

  return (
    <Table
      columns={columns}
      dataSource={skeletonData}
      rowKey={record => record.symbol}
      pagination={{ pageSize: 15 }}
      style={{ cursor: 'pointer' }}
      onRow={record => ({
        onClick: () => handleRowClick(record.symbol),
      })}
      bordered
    />
  )
}

export default StockTable
