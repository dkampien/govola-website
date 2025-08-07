import * as React from 'react'
import { cn } from '@/lib/utils'

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType
}

export const H1 = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, as: Component = 'h1', ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          'text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight',
          className
        )}
        {...props}
      />
    )
  }
)
H1.displayName = 'H1'

export const H2 = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, as: Component = 'h2', ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          'text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900',
          className
        )}
        {...props}
      />
    )
  }
)
H2.displayName = 'H2'

export const H3 = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, as: Component = 'h3', ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          'text-lg md:text-xl lg:text-2xl font-semibold tracking-tight text-gray-900',
          className
        )}
        {...props}
      />
    )
  }
)
H3.displayName = 'H3'

export const P = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ className, as: Component = 'p', ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          'text-base text-gray-600 leading-7',
          className
        )}
        {...props}
      />
    )
  }
)
P.displayName = 'P'

export const Lead = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ className, as: Component = 'p', ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          'text-lg md:text-xl text-gray-600 leading-relaxed',
          className
        )}
        {...props}
      />
    )
  }
)
Lead.displayName = 'Lead'