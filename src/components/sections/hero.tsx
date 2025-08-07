import React from 'react'
import { Section } from '@/components/ui/section'
import { H1, Lead } from '@/components/ui/typography'
import { Button } from '@/components/ui/button'
import { AnimatedFlow } from '@/components/animations/animated-flow'

export function HeroSection() {
  return (
    <Section className="pt-24 pb-16 md:pt-32 md:pb-20 lg:pt-40 lg:pb-24">
      <div className="text-center mb-12">
        <H1 className="mb-6">
          Create Once. Distribute Everywhere.
        </H1>
        <Lead className="max-w-3xl mx-auto mb-8">
          Streamline your social media workflow with intelligent video generation and 
          multi-platform distribution. From raw footage to published content in minutes.
        </Lead>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <Button size="lg" href="#how-it-works" as="a">
            See How It Works
          </Button>
          <Button size="lg" variant="outline" href="#contact" as="a">
            Get Early Access
          </Button>
        </div>
        <p className="text-sm text-gray-500">
          Developed by Vola.ro&apos;s Engineering Team
        </p>
      </div>
      
      <AnimatedFlow className="mt-12" />
    </Section>
  )
}