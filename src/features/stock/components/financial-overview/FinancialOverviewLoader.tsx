'use client'

import { Skeleton } from 'antd'
import styles from './FinancialOverview.module.scss'
import { cn } from '@/utils'

const FinancialOverviewLoader = () => {
  return (
    <div className={styles['container']}>
      {[...Array(2)].map((_, index) => (
        <div key={index} className={styles['section']}>
          <Skeleton.Input
            className={styles['skeleton-title']}
            size="small"
            style={{ height: 14, marginTop: 4 }}
            active
          />

          <div className={styles['items']}>
            {[...Array(4)].map((_, itemIndex) => (
              <div
                key={itemIndex}
                className={cn(styles['item'], styles['no-border'])}
              >
                <Skeleton.Input
                  size="small"
                  style={{ width: 180, height: 14, marginTop: 4 }}
                  active
                />

                <Skeleton.Button
                  active
                  size="small"
                  style={{ height: 14, marginTop: 4 }}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default FinancialOverviewLoader
