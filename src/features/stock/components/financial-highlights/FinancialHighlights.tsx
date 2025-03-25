import {
  FormattedNumber,
  StatisticsData,
} from '@/features/stock/types/statisticsType'
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

type FinancialHighlightsProps = {
  sections: FinancialHighlightSections[]
  data: StatisticsData['defaultKeyStatistics'] | undefined
}

const FinancialHighlights = ({ sections, data }: FinancialHighlightsProps) => {
  return (
    <div className={styles['container']}>
      {sections.map((section, idx) => (
        <div key={idx} className={styles['section']}>
          <h3 className={styles['title']}>{section.title}</h3>

          <div className={styles['items']}>
            {section.items.map((item, index) => (
              <div key={index} className={styles['item']}>
                <div className={styles['item-left']}>{item.label}</div>
                <div className={styles['item-right']}>
                  <span className={styles['value']}>
                    {(data?.[item.key] as FormattedNumber)?.fmt ?? 'N/A'}
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
