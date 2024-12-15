'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import { ApexOptions } from 'apexcharts'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

interface IndexTrendChartProps {
  estimates?: { period: string; growth: { raw: number; fmt: string } }[]
}

const IndexTrendChart: React.FC<IndexTrendChartProps> = ({ estimates }) => {
  if (!estimates) return null

  const options: ApexOptions = {
    chart: {
      type: 'line',
      background: 'transparent',
      toolbar: { show: false },
      animations: { enabled: true, speed: 800 },
    },
    xaxis: {
      categories: estimates.map(item => item.period),
      labels: {
        style: { colors: '#4A5568', fontSize: '12px', fontWeight: 'bold' },
      },
    },
    yaxis: {
      labels: {
        style: { colors: '#4A5568', fontSize: '12px', fontWeight: 'bold' },
      },
      title: {
        text: 'Growth (%)',
        style: { fontSize: '14px', fontWeight: 'bold', color: '#1A202C' },
      },
    },
    tooltip: {
      theme: 'light',
      style: { fontSize: '12px' },
      fillSeriesColor: false,
      marker: { show: true },
      onDatasetHover: { highlightDataSeries: true },
      x: { show: true },
      y: {
        formatter: value => `${(value * 100).toFixed(2)}%`,
      },
    },
    legend: {
      position: 'top',
      labels: { colors: '#4A5568' },
    },
    colors: ['#FF5733'],
    stroke: { curve: 'smooth', width: 3 },
  }

  const series = [
    {
      name: 'Growth',
      data: estimates.map(item => item.growth.raw),
    },
  ]

  return <Chart options={options} series={series} type="line" height={300} />
}

export default IndexTrendChart
