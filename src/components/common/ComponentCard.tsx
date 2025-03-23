import React from 'react'

interface ComponentCardProps {
  title: string | React.ReactNode
  icon?: React.ReactNode
  children: React.ReactNode
  className?: string
  desc?: string // Description text
}

const ComponentCard: React.FC<ComponentCardProps> = ({
  title,
  icon,
  children,
  className = '',
  desc = '',
}) => {
  return (
    <div
      className={`rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] ${className}`}
    >
      <div className="px-6 py-5">
        <div className="flex gap-3">
          {icon && (
            <div className="flex items-center text-md text-lg">{icon}</div>
          )}

          <div className="">
            <h3 className="text-base font-medium text-gray-800 dark:text-white/90">
              {title}
            </h3>
            {desc && (
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {desc}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 border-t border-gray-100 dark:border-gray-800 sm:p-6">
        <div className="space-y-6">{children}</div>
      </div>
    </div>
  )
}

export default ComponentCard
