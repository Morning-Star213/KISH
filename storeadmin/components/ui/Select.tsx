import { cn } from '@/lib/utils'
import React from 'react'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  id?: string
  name?: string
  className?: string
  value?: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const Select = React.forwardRef<HTMLSelectElement, Props>(
  ({ className, value, children, onChange, ...props }, ref) => {
    return (
      <select
        value={value}
        className={cn(
          'mt-2 block w-full rounded-md py-2 pl-3 pr-10 sm:text-sm sm:leading-6 border border-border',
          className,
        )}
        onChange={onChange}
        {...props}
        ref={ref}
      >
        {children}
      </select>
    )
  },
)

export { Select }
