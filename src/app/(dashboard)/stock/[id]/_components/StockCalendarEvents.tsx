'use client'

import { useStock } from '@/features/stock/hooks/useStockDetail'
import EarningsCalendar, {
  EarningsCalendarLoader,
} from '@/features/stock/components/earnings-calendar'
import type { CalendarEventsData } from '@/features/stock/types/calendarEventsType'
import { QueryKeys } from '@/constants/stockQuery'

type StockCalendarEventsProps = {
  stockId: string
}

export const StockCalendarEventsLoader = () => {
  return <EarningsCalendarLoader />
}

const StockCalendarEventslendar = ({ stockId }: StockCalendarEventsProps) => {
  const { data } = useStock<CalendarEventsData>({
    id: stockId,
    module: 'calendar-events',
    queryKey: QueryKeys['STOCK_CALENDAR_EVENTS'],
  })

  return (
    <div data-testid="calendar-events">
      <EarningsCalendar data={data.calendarEvents} />
    </div>
  )
}

export default StockCalendarEventslendar
