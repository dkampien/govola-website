import * as React from 'react'
import { cn } from '@/lib/utils'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'bordered' | 'elevated' | 'interactive'
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-xl p-6 transition-all duration-200',
          {
            'bg-white border border-gray-200/60 shadow-sm': variant === 'default',
            'bg-white border border-gray-200 shadow-sm hover:shadow-md': variant === 'bordered',
            'bg-white shadow-lg hover:shadow-xl border border-gray-100': variant === 'elevated',
            'bg-white border border-gray-200/60 shadow-sm hover:shadow-lg hover:-translate-y-1 cursor-pointer': variant === 'interactive',
          },
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
Card.displayName = 'Card'

export { Card }