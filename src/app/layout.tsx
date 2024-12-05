import { Outfit } from 'next/font/google'
import './globals.css'

import { SidebarProvider } from '@/context/SidebarContext'
import { ThemeProvider } from '@/context/ThemeContext'
import ReactQueryProvider from '@/context/QueryClientProvider'

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
        <ReactQueryProvider>
          <ThemeProvider>
            <SidebarProvider>{children}</SidebarProvider>
          </ThemeProvider>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
