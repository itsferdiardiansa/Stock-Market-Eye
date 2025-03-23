import { twMerge } from 'tailwind-merge'
import { clsx, ClassValue } from 'clsx'

/**
 * A utility to merge TailwindCSS classes
 *
 * @param classNames
 * @returns
 */
export function cn(...classNames: ClassValue[]) {
  return twMerge(clsx(classNames))
}
