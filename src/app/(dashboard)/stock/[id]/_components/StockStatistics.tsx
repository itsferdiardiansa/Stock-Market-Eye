'use client'

import {
  FinancialHighlights,
  FinancialHighlightsLoader,
  type FinancialHighlightSections,
} from '@/features/stock/components/financial-highlights'
import { useStock } from '@/features/stock/hooks/useStockDetail'
import { QueryKeys } from '@/constants/stockQuery'
import { StatisticsData } from '@/features/stock/types/statisticsType'

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
  stockId: string
}

const StockStatistics = ({ stockId }: StockStatisticsProps) => {
  const { data } = useStock<StatisticsData>({
    id: stockId,
    module: 'statistics',
    queryKey: QueryKeys['STOCK_STATISTICS'],
  })

  return (
    <div className="flex flex-col lg:flex-row flex-wrap items-stretch gap-8">
      <div className="flex-1 flex flex-col gap-8">
        <FinancialHighlights
          sections={leftSections}
          data={data.defaultKeyStatistics}
        />
      </div>

      <div className="flex-1 flex flex-col gap-8">
        <FinancialHighlights
          sections={rightSections}
          data={data.defaultKeyStatistics}
        />
      </div>
    </div>
  )
}

export const StockStatisticsLoader = () => (
  <div className="flex flex-col lg:flex-row flex-wrap items-stretch gap-8">
    <div className="flex-1 flex flex-col gap-8">
      <FinancialHighlightsLoader />
    </div>

    <div className="flex-1 flex flex-col gap-8">
      <FinancialHighlightsLoader />
    </div>
  </div>
)

export default StockStatistics
