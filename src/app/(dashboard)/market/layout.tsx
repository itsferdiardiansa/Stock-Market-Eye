import PageBreadcrumb from '@/components/common/PageBreadCrumb'
import { PropsWithChildren } from 'react'

export default function MarketLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <PageBreadcrumb pageTitle="Stock Detail" />
      {children}
    </div>
  )
}
