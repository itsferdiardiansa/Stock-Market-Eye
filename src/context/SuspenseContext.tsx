'use client'

import { createContext, PropsWithChildren, useContext, useState } from 'react'

type FetchingStatus = {
  isLoading: boolean
  isError: boolean
  error: Error | null
}

type SuspenseContextType = FetchingStatus & {
  setFetchingStatus: (status: FetchingStatus) => void
}

export const SuspenseContext = createContext<SuspenseContextType | null>(null)

export const useSuspenseStatus = () => {
  const context = useContext(SuspenseContext)

  if (!context) {
    throw new Error('useSuspenseStatus must be used SuspenseProvider')
  }

  return context
}

export const SuspenseProvider = ({ children }: PropsWithChildren) => {
  const [status, setStatus] = useState<FetchingStatus>({
    isLoading: false,
    isError: false,
    error: null as Error | null,
  })

  const setFetchingStatus = (newStatus: FetchingStatus) => {
    console.log('Called it: ', newStatus)
    setStatus(newStatus)
  }

  return (
    <SuspenseContext.Provider value={{ ...status, setFetchingStatus }}>
      {children}
    </SuspenseContext.Provider>
  )
}
