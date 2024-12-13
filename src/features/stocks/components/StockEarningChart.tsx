'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import { Card } from 'antd'
import { ApexOptions } from 'apexcharts'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

interface EarningsChartProps {
  earningsData?: {
    date: number
    revenue: { fmt: string }
    earnings: { fmt: string }
  }[]
}

const EarningsChart: React.FC<EarningsChartProps> = ({ earningsData }) => {
  if (!earningsData) return null

  const options: ApexOptions = {
    chart: {
      type: 'bar',
      background: 'transparent',
      toolbar: { show: false },
      animations: {
        enabled: true,
        speed: 800,
        dynamicAnimation: { enabled: true, speed: 500 },
      },
    },
    xaxis: {
      categories: earningsData.map(item => item.date.toString()),
      labels: {
        style: {
          colors: '#000000',
          fontSize: '12px',
          fontWeight: 'bold',
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: '#000000',
          fontSize: '12px',
          fontWeight: 'bold',
        },
      },
      title: {
        text: 'Amount (Billion $)',
        style: { fontSize: '14px', fontWeight: 'bold', color: '#000000' },
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50%',
        borderRadius: 8,
      },
    },
    tooltip: {
      theme: 'light',
      style: { fontSize: '14px' },
      y: {
        formatter: value => `$${value.toFixed(2)}B`,
      },
    },
    legend: {
      position: 'top',
      labels: {
        colors: '#000000',
      },
    },
    colors: ['#1890ff', '#52c41a'],
    dataLabels: { enabled: false },
  }

  const series = [
    {
      name: 'Revenue',
      data: earningsData.map(item =>
        parseFloat(item.revenue.fmt.replace('B', ''))
      ),
    },
    {
      name: 'Earnings',
      data: earningsData.map(item =>
        parseFloat(item.earnings.fmt.replace('B', ''))
      ),
    },
  ]

  return (
    <Card title="📈 Annual Revenue & Earnings" className="shadow-lg">
      <Chart options={options} series={series} type="bar" height={350} />
    </Card>
  )
}

export default EarningsChart
