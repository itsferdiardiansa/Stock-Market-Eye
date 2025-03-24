'use client'

import { Skeleton } from 'antd'
import { cn } from '@/utils'
import styles from './FinancialHighlights.module.scss'

const FinancialHighlightsLoader = () => {
  const sections = [
    { title: '💰 Stock Valuation', items: 3 },
    { title: '📈 Performance', items: 2 },
    { title: '👥 Stock Ownership', items: 2 },
  ]

  return (
    <div className={styles['container']}>
      {sections.map((section, idx) => (
        <div key={idx} className={styles['section']}>
          <Skeleton.Input
            size="small"
            className={styles['title']}
            style={{ width: '60%', height: 16 }}
          />

          <div className={styles['items']}>
            {Array.from({ length: section.items }).map((_, index) => (
              <div
                key={index}
                className={cn(styles['item'], styles['no-border'])}
              >
                <div className={styles['item-left']}>
                  <Skeleton.Avatar size="small" className={styles['icon']} />
                  <Skeleton.Input
                    size="small"
                    style={{ width: 220, height: 14, marginTop: 2 }}
                  />
                </div>
                <div className={styles['item-right']}>
                  <Skeleton.Button size="small" style={{ height: 14 }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default FinancialHighlightsLoader
