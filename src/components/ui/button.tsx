import * as React from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        className={cn(
          'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
          {
            'bg-vola-yellow text-gray-900 hover:bg-vola-yellow-hover focus:ring-vola-yellow': variant === 'primary',
            'bg-vola-blue text-white hover:bg-vola-blue-dark focus:ring-vola-blue': variant === 'secondary',
            'border-2 border-vola-blue text-vola-blue hover:bg-vola-blue hover:text-white focus:ring-vola-blue': variant === 'outline',
            'text-gray-700 hover:bg-gray-100 focus:ring-gray-400': variant === 'ghost',
          },
          {
            'px-3 py-1.5 text-sm': size === 'sm',
            'px-5 py-2.5 text-base': size === 'md',
            'px-6 py-3 text-lg': size === 'lg',
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button }