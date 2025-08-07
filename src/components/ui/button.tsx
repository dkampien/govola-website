import * as React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  as?: 'button' | 'a'
  href?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', as = 'button', href, children, ...props }, ref) => {
    const classes = cn(
      'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm',
      {
        'bg-vola-blue text-white hover:bg-vola-blue-dark focus-visible:ring-vola-blue': variant === 'primary',
        'bg-gray-900 text-white hover:bg-gray-800 focus-visible:ring-gray-900': variant === 'secondary',
        'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:text-gray-900 focus-visible:ring-gray-300': variant === 'outline',
        'text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus-visible:ring-gray-300': variant === 'ghost',
      },
      {
        'h-9 px-3 text-sm': size === 'sm',
        'h-10 px-4 text-sm': size === 'md',
        'h-11 px-8 text-base': size === 'lg',
      },
      className
    )

    if (as === 'a' && href) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      )
    }

    return (
      <button
        className={classes}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)
Button.displayName = 'Button'

export { Button }