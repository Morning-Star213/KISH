import * as React from 'react'

import { cn } from '@/lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, type, ...props }, ref) => {
    return (
      <div>
        <input
          type={type}
          className={cn(
            'flex h-10 w-full rounded-sm border border-border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
            className,
            error && 'bg-errorInput border border-errorBorder',
          )}
          ref={ref}
          {...props}
        />
        {error && <p className='text-xs text-error'>{error}</p>}
      </div>
    )
  },
)

export { Input }
