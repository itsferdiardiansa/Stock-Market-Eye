'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' // ✅ Import default styles

const progressStyles = `
  #nprogress .bar {
    background: #1890ff !important;
    height: 6px !important;
    width: 100% !important;
    position: fixed !important;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 9999999 !important;
  }
  #nprogress .peg {
    box-shadow: 0 0 10px #1890ff, 0 0 5px #1890ff;
  }
  #nprogress .spinner {
    display: none !important;
  }
`

NProgress.configure({ showSpinner: false })

const ProgressBar = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    NProgress.start()
    const timer = setTimeout(() => {
      NProgress.done()
    }, 500)

    return () => clearTimeout(timer)
  }, [pathname, searchParams])

  return <style>{progressStyles}</style>
}

export default ProgressBar
