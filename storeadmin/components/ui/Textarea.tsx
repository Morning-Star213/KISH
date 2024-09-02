import * as React from 'react'

import { cn } from '@/lib/utils'

type TextAreaElement = React.ElementRef<'textarea'>
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

type Props = {
  id?: string
  rows?: number
  className?: string
  placeholder?: string
  error?: string
}
const Textarea = React.forwardRef<TextAreaElement, Props>(
  ({ id, className, placeholder, rows, error, ...props }, ref) => {
    return (
      <textarea
        id={id}
        rows={rows}
        className={cn(
          'w-full rounded-sm border border-border px-4 py-3 text-sm disabled:cursor-not-allowed disabled:opacity-50 outline-none',
          className,
          error && 'bg-errorInput border border-errorBorder',
        )}
        ref={ref}
        placeholder={placeholder}
        {...props}
      />
    )
  },
)

export { Textarea }
