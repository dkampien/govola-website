import React from 'react'
import { H1, Lead } from '@/components/ui/typography'
import { Button } from '@/components/ui/button'
import { AnimatedFlow } from '@/components/animations/animated-flow'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50/50 to-white pt-24 pb-16 md:pt-32 md:pb-20 lg:pt-40 lg:pb-24">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-vola-blue/5 via-transparent to-vola-yellow/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vola-blue/10 text-vola-blue text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-vola-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-vola-blue"></span>
            </span>
            Powered by AI Technology
          </div>
          
          <H1 className="mb-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            Create Once.<br className="hidden sm:inline" />
            Distribute Everywhere.
          </H1>
          
          <Lead className="max-w-3xl mx-auto mb-10">
            Streamline your social media workflow with intelligent video generation and 
            multi-platform distribution. From raw footage to published content in minutes.
          </Lead>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" href="#how-it-works" as="a">
              See How It Works
            </Button>
            <Button size="lg" variant="outline" href="#contact" as="a">
              Get Early Access
            </Button>
          </div>
          
          <p className="text-sm text-gray-500 font-medium">
            Trusted by <span className="text-gray-700">1M+ travelers</span> • Built by <span className="text-gray-700">Vola.ro</span>
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 pointer-events-none" />
          <AnimatedFlow className="mt-12" />
        </div>
      </div>
    </section>
  )
}