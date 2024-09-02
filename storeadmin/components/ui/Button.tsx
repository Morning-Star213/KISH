'use client'

import { Slot } from '@radix-ui/react-slot'
import { Loader2 } from 'lucide-react'
import type { ReactNode } from 'react'
import { forwardRef } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const buttonStyle = tv({
  base: 'rounded-md flex items-center justify-center text-sm font-medium disabled:cursor-not-allowed disabled:opacity-50',
  defaultVariants: {
    intent: 'default',
    size: 'sm',
  },
  variants: {
    intent: {
      default: 'bg-primary text-white hover:bg-hoverPrimary disabled:bg-disabled',
      outline:
        'bg-white border border-primary text-primary hover:bg-hoverOutline disabled:border-disabled disabled:text-disabled disabled:bg-white',
      outline2:
        'bg-white text-primary hover:bg-hoverOutline disabled:border-disabled disabled:text-disabled disabled:bg-white',
      outline3:
        'bg-white text-black border border-black hover:bg-hoverOutline disabled:border-disabled disabled:text-disabled disabled:bg-white',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/30',
      link: 'text-primary underline-offset-4 hover:underline',
    },
    size: {
      default: 'h-10 px-4 py-2',
      xs: 'px-2 py-1 text-xs',
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-2 text-base',
      lg: 'px-12 py-2 text-base',
      icon: 'h-10 w-10',
    },
  },
})

type Props = {
  children: ReactNode
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  loading?: boolean
  asChild?: boolean
  disabled?: boolean
} & VariantProps<typeof buttonStyle>

export const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      className,
      type = 'button',
      children,
      intent = 'default',
      size = 'sm',
      loading,
      asChild,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button'
    const disabled = loading || props.disabled
    return (
      <Comp
        className={buttonStyle({ className, intent, size })}
        type={type}
        ref={ref}
        {...props}
        disabled={disabled}
      >
        {loading ? <Loader2 className='h-6 w-6 animate-spin' /> : children}
      </Comp>
    )
  },
)
