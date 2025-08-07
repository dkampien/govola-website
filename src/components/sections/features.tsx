import React from 'react'
import { Section } from '@/components/ui/section'
import { H2, H3, P } from '@/components/ui/typography'
import { Card } from '@/components/ui/card'
import { Film, Smartphone, Timer, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: Film,
    title: 'Content Mixing Engine',
    subtitle: 'Mix pre-determined content automatically',
    description: 'Combines your existing video clips, text overlays, and audio tracks to create unique TikTok videos in different styles and lengths.',
    color: 'text-vola-blue',
    bgColor: 'bg-vola-blue/10',
  },
  {
    icon: Smartphone,
    title: 'TikTok Integration',
    subtitle: 'Post to connected TikTok accounts',
    description: 'Direct integration with TikTok API allows posting to all your connected accounts seamlessly and securely.',
    color: 'text-vola-yellow-hover',
    bgColor: 'bg-vola-yellow/20',
  },
  {
    icon: Timer,
    title: 'Variable Length Videos',
    subtitle: 'Multiple versions, different lengths',
    description: 'Generate short clips, medium posts, and longer content from the same source material to maximize engagement opportunities.',
    color: 'text-vola-blue',
    bgColor: 'bg-vola-blue/10',
  },
  {
    icon: BarChart3,
    title: 'Performance Analytics',
    subtitle: 'Track your TikTok performance',
    description: 'Get detailed analytics from all videos posted through the engine across your connected TikTok accounts.',
    color: 'text-vola-yellow-hover',
    bgColor: 'bg-vola-yellow/20',
  },
]

export function FeaturesSection() {
  return (
    <Section id="features" background="gray">
      <div className="text-center mb-12">
        <H2 className="mb-4">Core Features</H2>
        <P className="max-w-3xl mx-auto">
          Everything you need to automate your TikTok content strategy
        </P>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {features.map((feature) => {
          const Icon = feature.icon
          return (
            <Card
              key={feature.title}
              variant="bordered"
              className="hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="flex flex-col h-full">
                <div className={`${feature.bgColor} rounded-lg p-3 mb-4 self-start`}>
                  <Icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                
                <H3 className="text-lg mb-2">
                  {feature.title}
                </H3>
                
                <p className="text-sm font-medium text-gray-600 mb-3">
                  {feature.subtitle}
                </p>
                
                <P className="text-sm">
                  {feature.description}
                </P>
              </div>
            </Card>
          )
        })}
      </div>
    </Section>
  )
}