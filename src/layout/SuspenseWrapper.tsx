'use client'

import { PropsWithChildren, Suspense } from 'react'
import { QueryErrorResetBoundary } from '@tanstack/react-query'
import { ErrorBoundary, FallbackProps } from 'react-error-boundary'

type SuspenseWrapperProps = {
  fallbackLoader: React.ReactNode
  fallbackError?: (props: FallbackProps) => React.ReactNode
}

const fallbackErrorRender = ({ resetErrorBoundary }: FallbackProps) => (
  <div>
    There was an error!
    <button onClick={() => resetErrorBoundary()}>Try again</button>
  </div>
)

const SuspanseWrapper = ({
  children,
  fallbackLoader,
  fallbackError = fallbackErrorRender,
}: SuspenseWrapperProps & PropsWithChildren) => {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary onReset={reset} fallbackRender={fallbackError}>
          <Suspense fallback={fallbackLoader}>{children}</Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  )
}

export default SuspanseWrapper
