import { cn } from '@/lib/utils'

export const FormFieldGroup: React.FC<{
  className?: string
  children?: React.ReactNode
}> = ({ className, children }) => (
  <div className={cn('px-4 py-2 my-6 bg-white border border-border rounded-sm', className)}>
    {children}
  </div>
)
