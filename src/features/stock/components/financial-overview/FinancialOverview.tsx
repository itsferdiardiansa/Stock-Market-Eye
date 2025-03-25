'use client'

import { Financial } from '@/features/stock/types/financialDataType'
import styles from './FinancialOverview.module.scss'

type FinancialOverviewProps = {
  data: Financial
}

const FinancialOverview = ({ data }: FinancialOverviewProps) => {
  const marketOverview = [
    { label: 'Current Price', value: data?.currentPrice?.fmt },
    { label: 'Target High Price', value: data?.targetHighPrice?.fmt },
    { label: 'Target Low Price', value: data?.targetLowPrice?.fmt },
    { label: 'Target Mean Price', value: data?.targetMeanPrice?.fmt },
  ]

  const financialRatios = [
    { label: 'Total Revenue', value: data?.totalRevenue?.fmt },
    { label: 'Total Cash', value: data?.totalCash?.fmt },
    { label: 'Total Debt', value: data?.totalDebt?.fmt },
    { label: 'EBITDA', value: data?.ebitda?.fmt },
    { label: 'Return on Assets', value: data?.returnOnAssets?.fmt },
    { label: 'Return on Equity', value: data?.returnOnEquity?.fmt },
    { label: 'Earnings Growth', value: data?.earningsGrowth?.fmt },
    { label: 'Revenue Growth', value: data?.revenueGrowth?.fmt },
    { label: 'Profit Margins', value: data?.profitMargins?.fmt },
    { label: 'Currency', value: data?.financialCurrency },
  ]

  return (
    <div className={styles['container']}>
      {/* Market Overview Section */}
      <div className={styles['section']}>
        <h3 className={styles['title']}>Market Overview</h3>
        <div className={styles['items']}>
          {marketOverview.map((item, index) => (
            <div key={index} className={styles['item']}>
              <span>{item.label}</span>
              <span className={styles['value']}>{item.value ?? 'N/A'}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Financial Ratios & Performance Section */}
      <div className={styles['section']}>
        <h3 className={styles['title']}>Financial Ratios & Performance</h3>
        <div className={styles['items']}>
          {financialRatios.map((item, index) => (
            <div key={index} className={styles['item']}>
              <span>{item.label}</span>
              <span className={styles['value']}>{item.value ?? 'N/A'}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FinancialOverview
