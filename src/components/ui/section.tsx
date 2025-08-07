import * as React from 'react'
import { cn } from '@/lib/utils'
import { Container } from './container'

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  container?: boolean
  background?: 'white' | 'gray' | 'gradient'
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, container = true, background = 'white', children, ...props }, ref) => {
    const bgClasses = {
      white: 'bg-white',
      gray: 'bg-gray-50',
      gradient: 'gradient-vola'
    }

    return (
      <section
        ref={ref}
        className={cn(
          'py-16 md:py-20 lg:py-24',
          bgClasses[background],
          className
        )}
        {...props}
      >
        {container ? (
          <Container>{children}</Container>
        ) : (
          children
        )}
      </section>
    )
  }
)
Section.displayName = 'Section'