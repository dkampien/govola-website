import React from 'react'
import { Section } from '@/components/ui/section'
import { H2, H3, P } from '@/components/ui/typography'
import { Card } from '@/components/ui/card'
import { Upload, Sparkles, Send } from 'lucide-react'

const steps = [
  {
    number: '1',
    title: 'UPLOAD',
    heading: 'Upload Your Travel Content',
    description: 'Drop your raw videos or footage into the system. The engine accepts any video format.',
    time: 'Takes 30 seconds',
    icon: Upload,
    color: 'text-vola-blue',
    bgColor: 'bg-vola-blue/10',
  },
  {
    number: '2',
    title: 'GENERATE',
    heading: 'AI Creates Multiple TikTok Videos',
    description: 'Our system automatically generates different versions optimized for TikTok - different hooks, lengths, and styles from your original content.',
    time: 'Takes 2-3 minutes',
    icon: Sparkles,
    color: 'text-vola-yellow-hover',
    bgColor: 'bg-vola-yellow/20',
  },
  {
    number: '3',
    title: 'POST',
    heading: 'Distribute to Connected TikTok Accounts',
    description: 'The engine automatically posts your generated videos across all your connected TikTok accounts with smart scheduling.',
    time: 'Fully automated',
    icon: Send,
    color: 'text-vola-blue',
    bgColor: 'bg-vola-blue/10',
  },
]

export function HowItWorksSection() {
  return (
    <Section id="how-it-works" background="white">
      <div className="text-center mb-12">
        <H2 className="mb-4">Three Simple Steps</H2>
        <P className="max-w-3xl mx-auto">
          From raw footage to published content across multiple TikTok accounts in minutes
        </P>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {steps.map((step, index) => {
          const Icon = step.icon
          return (
            <div key={step.number} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/4 -right-4 z-10">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path
                      d="M12 16L20 16M20 16L16 12M20 16L16 20"
                      stroke="#4A90E2"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
              
              <Card variant="interactive" className="text-center h-full group">
                <div className="flex flex-col items-center">
                  <div className={`${step.bgColor} rounded-full p-4 mb-4 transition-transform group-hover:scale-110`}>
                    <Icon className={`w-8 h-8 ${step.color}`} />
                  </div>
                  
                  <div className="text-xs font-bold text-gray-400 tracking-wider mb-2">
                    STEP {step.number} • {step.title}
                  </div>
                  
                  <H3 className="mb-3 text-center">
                    {step.heading}
                  </H3>
                  
                  <P className="text-center mb-4">
                    {step.description}
                  </P>
                  
                  <div className="mt-auto pt-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-700">
                      {step.time}
                    </span>
                  </div>
                </div>
              </Card>
            </div>
          )
        })}
      </div>
    </Section>
  )
}