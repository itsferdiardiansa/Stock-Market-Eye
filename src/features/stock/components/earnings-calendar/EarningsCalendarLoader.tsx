'use client'

import { Skeleton } from 'antd'
import styles from './EarningsCalendar.module.scss'
import { cn } from '@/utils'

const EarningsCalendarLoader = () => {
  return (
    <div className={styles['container']}>
      <div className={cn(styles['row'], styles['no-border'])}>
        <span className={styles['label']}>
          <Skeleton.Avatar active size="small" shape="circle" />
          <Skeleton.Input
            size="small"
            style={{ height: 14, marginTop: 2 }}
            active
          />
        </span>
        <Skeleton.Input
          size="small"
          style={{ height: 14, marginTop: 2 }}
          active
        />
      </div>

      {/* Earnings Estimate */}
      <Skeleton.Input
        active
        size="small"
        className="w-40 mb-2"
        style={{ height: 14, marginTop: 2 }}
      />
      <div className={styles['grid']}>
        {['Low', 'Average', 'High'].map((_, index) => (
          <Skeleton.Button key={index} size="large" active block />
        ))}
      </div>

      {/* Revenue Estimate */}
      <Skeleton.Input
        active
        size="small"
        className="w-40 mb-2"
        style={{ height: 14, marginTop: 2 }}
      />
      <div className={styles['grid']}>
        {['Low', 'Average', 'High'].map((_, index) => (
          <Skeleton.Button key={index} size="large" block active />
        ))}
      </div>

      {/* Dividend Dates */}
      <div className={cn(styles['row'], styles['no-border'])}>
        <span className={styles['label']}>
          <Skeleton.Avatar active size="small" shape="circle" />
          <Skeleton.Input
            size="small"
            style={{ height: 14, marginTop: 2 }}
            active
          />
        </span>
        <Skeleton.Input
          size="small"
          className="w-24"
          style={{ height: 14, marginTop: 2 }}
          active
        />
      </div>

      <div className={cn(styles['row'], styles['no-border'])}>
        <span className={styles['label']}>
          <Skeleton.Avatar active size="small" shape="circle" />
          <Skeleton.Input
            size="small"
            style={{ height: 14, marginTop: 2 }}
            active
          />
        </span>
        <Skeleton.Input
          size="small"
          style={{ height: 14, marginTop: 2 }}
          active
        />
      </div>
    </div>
  )
}

export default EarningsCalendarLoader
