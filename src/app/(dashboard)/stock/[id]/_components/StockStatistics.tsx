'use client'

import { StatisticsData } from '@/features/stocks/types/statisticsType'
import FinancialHighlights, {
  type FinancialHighlightSections,
} from '@/features/stocks/components/financial-highlights'

const leftSections: FinancialHighlightSections[] = [
  {
    title: 'Stock Valuation',
    items: [
      { key: 'enterpriseValue', label: 'Enterprise Value' },
      { key: 'forwardPE', label: 'Forward P/E Ratio' },
      { key: 'priceToBook', label: 'Price-to-Book Ratio' },
    ],
  },
  {
    title: 'Performance',
    items: [
      { key: '52WeekChange', label: '52-Week Change', color: 'text-green-600' },
      {
        key: 'SandP52WeekChange',
        label: 'S&P 500 52-Week Change',
        color: 'text-red-600',
      },
    ],
  },
  {
    title: 'Stock Ownership',
    items: [
      { key: 'sharesOutstanding', label: 'Shares Outstanding' },
      { key: 'floatShares', label: 'Float Shares' },
    ],
  },
]

const rightSections: FinancialHighlightSections[] = [
  {
    title: 'Growth & Earnings',
    items: [
      { key: 'earningsQuarterlyGrowth', label: 'Quarterly Earnings Growth' },
      { key: 'netIncomeToCommon', label: 'Net Income to Common' },
      { key: 'profitMargins', label: 'Profit Margins' },
    ],
  },
  {
    title: 'Dividend & Splits',
    items: [
      { key: 'lastDividendValue', label: 'Last Dividend Value' },
      { key: 'lastDividendDate', label: 'Last Dividend Date' },
    ],
  },
]

type StockStatisticsProps = {
  data: StatisticsData['defaultKeyStatistics'] | undefined
}

const StockStatistics: React.FC<StockStatisticsProps> = ({ data }) => {
  return (
    <div className="flex flex-col lg:flex-row flex-wrap items-stretch gap-8">
      <div className="flex-1 flex flex-col gap-8">
        <FinancialHighlights sections={leftSections} data={data} />
      </div>

      <div className="flex-1 flex flex-col gap-8">
        <FinancialHighlights sections={rightSections} data={data} />
      </div>
    </div>
  )
}

export default StockStatistics
