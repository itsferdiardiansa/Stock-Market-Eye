import { Outfit } from 'next/font/google'
import '@/styles/globals.css'

import { SidebarProvider } from '@/context/SidebarContext'
import { ThemeProvider } from '@/context/ThemeContext'
import ReactQueryProvider from '@/context/QueryClientProvider'

import ProgressBar from '@/components/common/ProgressBar'
import { Suspense } from 'react'
import { SuspenseProvider } from '@/context/SuspenseContext'

const outfit = Outfit({
  variable: '--font-outfit-sans',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} dark:bg-gray-900`}>
        <Suspense>
          <ProgressBar />
        </Suspense>

        <ReactQueryProvider>
          <ThemeProvider>
            <SidebarProvider>
              <SuspenseProvider>{children}</SuspenseProvider>
            </SidebarProvider>
          </ThemeProvider>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
