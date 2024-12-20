'use client'

import React, { useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSidebar } from '../context/SidebarContext'
import {
  PieChartIcon,
  DollarLineIcon,
  DocsIcon,
  BoxCubeIcon,
  TaskIcon,
  UserIcon,
  EnvelopeIcon,
  GridIcon,
} from '@/icons/index'

type NavItem = {
  name: string
  icon: React.ReactNode
  path?: string
  subItems?: {
    name: string
    path: string
    icon: React.ReactNode
  }[]
}

// Sidebar menu items
const navItems: NavItem[] = [
  {
    icon: <GridIcon />,
    name: 'Dashboard',
    path: '/',
  },
  {
    icon: <PieChartIcon />,
    name: 'Stock Listings',
    path: '/stock-listings',
  },
]

// Stock Detail Submenu (Appears Only in `/market/stock/[id]`)
const stockDetailSubItems = [
  { name: 'Details', type: 'detail', icon: <EnvelopeIcon /> },
  { name: 'Profile', type: 'profile', icon: <UserIcon /> },
  { name: 'Financial Data', type: 'financial-data', icon: <DollarLineIcon /> },
  { name: 'SEC Filings', type: 'sec-fillings', icon: <DocsIcon /> },
  { name: 'Earnings', type: 'earnings', icon: <TaskIcon /> },
  { name: 'Index Trend', type: 'index-trend', icon: <BoxCubeIcon /> },
]

const AppSidebar: React.FC = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar()
  const pathname = usePathname()

  // Extract stock ID from path `/market/stock/[id]`
  const stockIdMatch = pathname.match(
    /^\/market\/(stock|detail|earnings|financial-data|index-trend|profile|sec-fillings)\/([^/]+)$/
  )
  const stockId = stockIdMatch ? stockIdMatch[2] : null

  // Check if path is active
  const isActive = useCallback((path: string) => pathname === path, [pathname])

  return (
    <aside
      className={`fixed top-0 px-5 left-0 bg-white dark:bg-gray-900 text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200 
        ${
          isExpanded || isMobileOpen
            ? 'w-[290px]'
            : isHovered
            ? 'w-[290px]'
            : 'w-[90px]'
        }
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="py-8 flex justify-center">
        <Link href="/">
          {isExpanded || isHovered || isMobileOpen ? (
            <h1 className="text-2xl">Market Stocks Eye</h1>
          ) : (
            <h1 className="text-2xl">M</h1>
          )}
        </Link>
      </div>

      <div className="flex flex-col overflow-y-auto no-scrollbar">
        <nav className="mb-6">
          <div className="flex flex-col gap-4">
            {/* Main Menu */}
            <div>
              <h2 className="mb-4 text-xs uppercase text-gray-400">Menu</h2>
              <ul className="flex flex-col gap-4">
                {navItems.map(nav => (
                  <li key={nav.name}>
                    <Link
                      href={nav.path!}
                      className={`menu-item group ${
                        isActive(nav.path!)
                          ? 'menu-item-active'
                          : 'menu-item-inactive'
                      }`}
                    >
                      <span>{nav.icon}</span>
                      {isExpanded && <span>{nav.name}</span>}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stock Detail Submenu (Only Show in `/market/stock/[id]`) */}
            {stockId && (
              <div>
                <h2 className="mb-4 text-xs uppercase text-gray-400">
                  Stock Details
                </h2>
                <ul className="flex flex-col gap-2">
                  {stockDetailSubItems.map(item => {
                    // const queryParam = `?stock-type=${item.type}`
                    // const isSelected =
                    //   searchParams.get('stock-type') === item.type

                    return (
                      <li key={item.name}>
                        <Link
                          href={`/market/${item.type}/${stockId}`}
                          className={`menu-dropdown-item flex items-center gap-2`}
                        >
                          {item.icon}

                          {(isExpanded || isHovered || isMobileOpen) &&
                            item.name}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
          </div>
        </nav>
      </div>
    </aside>
  )
}

export default AppSidebar
