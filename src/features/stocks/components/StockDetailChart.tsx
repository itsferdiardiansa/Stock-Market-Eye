'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import { Skeleton } from 'antd'
import { ApexOptions } from 'apexcharts'
import { StockData } from '@/features/stocks/types'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

interface StockChartProps {
  stock?: StockData
}

const StockChart: React.FC<StockChartProps> = ({ stock }) => {
  if (!stock) {
    return <Skeleton active paragraph={{ rows: 6 }} />
  }

  const options: ApexOptions = {
    chart: {
      type: 'area', // Smoother line chart
      background: 'transparent',
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    colors: ['#34D399'], // Vibrant green for positive trend
    stroke: { width: 3, curve: 'smooth' }, // Smooth line
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 0.6,
        opacityFrom: 0.5,
        opacityTo: 0.1,
        stops: [0, 100],
      },
    },
    markers: {
      size: 5,
      colors: ['#ffffff'],
      strokeColors: '#34D399',
      strokeWidth: 2,
    },
    xaxis: {
      categories: ['1M', '3M', '6M', '1Y'],
      labels: { style: { colors: '#6B7280', fontSize: '14px' } },
    },
    yaxis: {
      labels: {
        style: { colors: '#6B7280', fontSize: '14px' },
        formatter: value => `$${value.toFixed(2)}`,
      },
    },
    tooltip: {
      theme: 'dark',
      x: { show: false },
      y: {
        formatter: value => `$${value.toFixed(2)}`,
      },
    },
    grid: {
      borderColor: '#E5E7EB',
      strokeDashArray: 5,
    },
  }

  const series = [
    {
      name: 'Stock Price',
      data: [
        parseFloat(stock?.lastsale?.replace('$', '') || '0'),
        parseFloat(stock?.netchange || '0'),
        100,
        120,
      ],
    },
  ]

  return <Chart options={options} series={series} type="area" height={350} />
}

export default StockChart
