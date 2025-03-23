'use client'

import React, { useCallback, useEffect, useState } from 'react'
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
import { cn } from '@/utils'

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
    path: '/stock',
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
  const [lastSegment, setLastSegment] = useState<string>('')
  const pathname = usePathname()

  useEffect(() => {
    const segments = pathname.split('/').filter(Boolean)
    setLastSegment(segments[segments.length - 2])
  }, [pathname])

  const stockIdMatch = pathname.match(
    /^\/market\/(stock|detail|earnings|financial-data|index-trend|profile|sec-fillings)\/([^/]+)$/
  )
  const stockId = stockIdMatch ? stockIdMatch[2] : null

  // Check if path is active
  const isActive = useCallback((path: string) => pathname === path, [pathname])

  const getSidebarCls = () => {
    return cn(
      'fixed top-0 px-5 left-0 bg-white dark:bg-gray-900 text-gray-900 lg:translate-x-0',
      'h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200',
      {
        'w-[290px]': isExpanded || isHovered || isMobileOpen,
        'w-[90px]': !isExpanded && !isHovered && !isMobileOpen,
        'translate-x-0 lg:translate-x-0': isMobileOpen,
        '-translate-x-full lg:translate-x-0': !isMobileOpen,
      }
    )
  }

  const getDropdownItemCls = (isSelected: boolean) => {
    return cn('menu-dropdown-item flex items-center gap-2', {
      'menu-dropdown-item-active': isSelected,
      'menu-dropdown-item-inactive': !isSelected,
    })
  }

  const getDropdownMenuItemCls = (isActive: boolean) => {
    return cn('menu-item group', {
      'menu-item-active': isActive,
      'menu-item-inactive': !isActive,
    })
  }

  return (
    <aside
      className={getSidebarCls()}
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
                      className={getDropdownMenuItemCls(isActive(nav.path!))}
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
                    const isSelected = lastSegment === item.type
                    return (
                      <li key={item.name}>
                        <Link
                          href={`/market/${item.type}/${stockId}`}
                          className={getDropdownItemCls(isSelected)}
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
