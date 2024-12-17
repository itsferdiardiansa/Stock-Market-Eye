import type { Metadata } from 'next'
import React from 'react'
import { EcommerceMetrics } from './_components/EcommerceMetrics'
import MonthlyFinanceChart from './_components/MonthlyFinanceChart'
import MonthlyTarget from './_components/MonthlyTarget'
import StatisticsChart from './_components/StatisticsChart'

export const metadata: Metadata = {
  title: 'Stock Market Eye',
  description:
    'Stock Tracker Web App is a web-based application that allows users to monitor stock prices in real-time using the Yahoo Finance API.',
}

export default function Ecommerce() {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12 space-y-6 xl:col-span-7">
        <EcommerceMetrics />

        <MonthlyFinanceChart />
      </div>

      <div className="col-span-12 xl:col-span-5">
        <MonthlyTarget />
      </div>

      <div className="col-span-12">
        <StatisticsChart />
      </div>
    </div>
  )
}
