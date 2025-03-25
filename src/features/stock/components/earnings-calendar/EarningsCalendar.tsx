'use client'

import dayjs from 'dayjs'
import { FaChartLine, FaMoneyBillWave } from 'react-icons/fa'
import type { CalendarEvents } from '@/features/stock/types/calendarEventsType'
import { FormattedNumber } from '@/features/stock/types'
import { cn } from '@/utils'
import styles from './EarningsCalendar.module.scss'

type EarningKeys = 'earningsLow' | 'earningsAverage' | 'earningsHigh'
type RevenueKeys = 'revenueLow' | 'revenueAverage' | 'revenueHigh'

type EarningsCalendarProps = {
  data: CalendarEvents
}

const EarningsCalendar = ({ data }: EarningsCalendarProps) => {
  const earnings = [
    'earningsLow',
    'earningsAverage',
    'earningsHigh',
  ] as EarningKeys[]
  const revenues = [
    'revenueLow',
    'revenueAverage',
    'revenueHigh',
  ] as RevenueKeys[]

  return (
    <div className={styles['container']}>
      {/* Earnings Date */}
      {data.earnings?.earningsDate && (
        <div className={styles['row']}>
          <span className={styles['label']}>
            <FaChartLine className={styles['icon-green']} /> Earnings Date
          </span>
          <span className={styles['value']}>
            {dayjs(data.earnings.earningsDate[0]?.fmt).format('MMM D, YYYY') ??
              'N/A'}
          </span>
        </div>
      )}

      {/* Earnings Estimate */}
      {data.earnings && (
        <div className={styles['grid']}>
          {earnings.map((key, idx) => (
            <div key={idx} className={styles['card']}>
              <span className={styles['card-label']}>
                {key.replace('earnings', '')}
              </span>
              <span
                className={cn(
                  styles['card-value'],
                  key === 'earningsLow' && styles['card-value-red'],
                  key === 'earningsHigh' && styles['card-value-green']
                )}
              >
                {(data.earnings?.[key] as FormattedNumber).fmt ?? 'N/A'}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Revenue Estimate */}
      {data.earnings && (
        <div className={styles['grid']}>
          {revenues.map((key, idx) => (
            <div key={idx} className={styles['card']}>
              <span className={styles['card-label']}>
                {key.replace('revenue', '')}
              </span>
              <span
                className={cn(
                  styles['card-value'],
                  key === 'revenueLow' && styles['card-value-red'],
                  key === 'revenueHigh' && styles['card-value-green']
                )}
              >
                {(data.earnings?.[key] as FormattedNumber).fmt ?? 'N/A'}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Dividend Dates */}
      {data.exDividendDate && (
        <div className={styles['row']}>
          <span className={styles['label']}>
            <FaMoneyBillWave className={styles['icon-yellow']} /> Ex-Dividend
            Date
          </span>
          <span className={styles['value']}>
            {dayjs(data.exDividendDate.fmt).format('MMM D, YYYY') ?? 'N/A'}
          </span>
        </div>
      )}

      {data.dividendDate && (
        <div className={styles['row']}>
          <span className={styles['label']}>
            <FaMoneyBillWave className={styles['icon-gray']} /> Dividend Date
          </span>
          <span className={styles['value']}>
            {dayjs(data.dividendDate.fmt).format('MMM D, YYYY') ?? 'N/A'}
          </span>
        </div>
      )}
    </div>
  )
}

export default EarningsCalendar
