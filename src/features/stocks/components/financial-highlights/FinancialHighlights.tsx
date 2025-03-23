import {
  FaDollarSign,
  FaChartLine,
  FaChartPie,
  FaUsers,
  FaBalanceScale,
  FaArrowUp,
  FaArrowDown,
  FaCalendarAlt,
} from 'react-icons/fa'
import {
  FormattedNumber,
  StatisticsData,
} from '@/features/stocks/types/statisticsType'
import styles from './FinancialHighlights.module.scss'

type DefaultKey = keyof StatisticsData['defaultKeyStatistics']

export type FinancialHighlightSections = {
  title: string
  items: {
    key: DefaultKey
    label: string
    value?: string
    color?: string
  }[]
}

const iconsMap: Record<string, React.ReactNode> = {
  enterpriseValue: <FaDollarSign className="text-green-500" />,
  forwardPE: <FaChartLine className="text-blue-500" />,
  priceToBook: <FaChartPie className="text-purple-500" />,
  fiftyTwoWeekChange: <FaArrowUp className="text-green-500" />,
  sandP52WeekChange: <FaArrowDown className="text-red-500" />,
  sharesOutstanding: <FaUsers className="text-blue-500" />,
  floatShares: <FaBalanceScale className="text-yellow-500" />,
  earningsQuarterlyGrowth: <FaChartLine className="text-blue-500" />,
  netIncomeToCommon: <FaChartPie className="text-orange-500" />,
  profitMargins: <FaBalanceScale className="text-green-500" />,
  lastDividendValue: <FaDollarSign className="text-yellow-500" />,
  lastDividendDate: <FaCalendarAlt className="text-gray-500" />,
}

type FinancilHighlightsProps = {
  sections: FinancialHighlightSections[]
  data: StatisticsData['defaultKeyStatistics'] | undefined
}

const FinancialHighlights = ({ sections, data }: FinancilHighlightsProps) => {
  return (
    <div className={styles['container']}>
      {sections.map((section, idx) => (
        <div key={idx} className={styles['section']}>
          <h3 className={styles['title']}>{section.title}</h3>

          <div className={styles['items']}>
            {section.items.map((item, index) => (
              <div key={index} className={styles['item']}>
                <div className={styles['item-left']}>
                  {iconsMap[item.key] || (
                    <FaBalanceScale className={styles['icon']} />
                  )}
                  {item.label}:
                </div>
                <div className={styles['item-right']}>
                  <span className={styles['value']}>
                    {(data?.[item.key] as FormattedNumber).fmt ?? 'N/A'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default FinancialHighlights
