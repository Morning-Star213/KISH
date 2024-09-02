import { cn } from '@/lib/utils'

export const FormField: React.FC<{
  className?: string
  children?: React.ReactNode
}> = ({ className, children }) => <div className={cn('my-6', className)}>{children}</div>
