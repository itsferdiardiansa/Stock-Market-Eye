import { FormattedNumber } from '.'

export type Earnings = {
  earningsDate?: FormattedNumber[]
  earningsAverage?: FormattedNumber
  earningsLow?: FormattedNumber
  earningsHigh?: FormattedNumber
  revenueAverage?: FormattedNumber
  revenueLow?: FormattedNumber
  revenueHigh?: FormattedNumber
}
export type CalendarEvents = {
  earnings?: Earnings
  exDividendDate?: FormattedNumber
  dividendDate?: FormattedNumber
}

export type CalendarEventsData = {
  calendarEvents: CalendarEvents
}
