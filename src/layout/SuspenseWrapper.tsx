import { Alert, Spin } from 'antd'
import { PropsWithChildren } from 'react'

type SuspenseWrapperProps = {
  isLoading: boolean
  isError: boolean
  error: Error | null
} & PropsWithChildren

const SuspenseWrapper = ({
  isLoading,
  isError,
  error,
  children,
}: SuspenseWrapperProps) => {
  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen">
        <Spin size="large" />
      </div>
    )

  if (isError)
    return (
      <Alert
        message="Error loading stock data"
        description={(error as Error).message}
        type="error"
        showIcon
        className="mt-4"
      />
    )

  return <>{children}</>
}
export default SuspenseWrapper
