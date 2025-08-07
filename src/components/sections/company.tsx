import React from 'react'
import { Section } from '@/components/ui/section'
import { H2, H3, P } from '@/components/ui/typography'
import { Card } from '@/components/ui/card'
import { Award, Users, TrendingUp, Shield } from 'lucide-react'

const trustIndicators = [
  {
    icon: Users,
    metric: '1M+',
    label: 'Satisfied Customers',
    description: 'Trusted by travelers worldwide',
  },
  {
    icon: Award,
    metric: '18+',
    label: 'Years of Innovation',
    description: 'Leading travel technology since 2007',
  },
  {
    icon: TrendingUp,
    metric: '3x',
    label: 'Deloitte Fast50',
    description: 'Fastest-growing tech company in CEE',
  },
  {
    icon: Shield,
    metric: '100%',
    label: 'Secure & Reliable',
    description: 'Enterprise-grade infrastructure',
  },
]

export function CompanySection() {
  return (
    <Section background="white">
      <div className="text-center mb-12">
        <H2 className="mb-4">Built by Travel Technology Leaders</H2>
        <P className="max-w-3xl mx-auto">
          Trusted by millions, recognized for innovation, built with enterprise-grade technology
        </P>
      </div>

      <div className="max-w-6xl mx-auto">
        <Card variant="elevated" className="mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <H3 className="mb-4">Proven Track Record</H3>
              <P className="mb-4">
                Since 2007, Vola.ro has been at the forefront of travel technology innovation. 
                We&apos;ve helped over 1 million travelers and built Romania&apos;s leading travel 
                platform with cutting-edge solutions.
              </P>
            </div>
            <div>
              <H3 className="mb-4">Technology Innovation</H3>
              <P className="mb-4">
                Award-winning development team. We were recognized as the fastest-growing 
                technology company in CEE (Deloitte Technology Fast50) for three consecutive 
                years, proving our technical expertise.
              </P>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {trustIndicators.map((indicator) => {
            const Icon = indicator.icon
            return (
              <div key={indicator.label} className="text-center group cursor-pointer">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-vola-blue/10 to-vola-blue/5 mb-4 transition-transform group-hover:scale-110">
                  <Icon className="w-7 h-7 text-vola-blue" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent mb-1">
                  {indicator.metric}
                </div>
                <div className="text-sm font-semibold text-gray-700 mb-1">
                  {indicator.label}
                </div>
                <div className="text-xs text-gray-500">
                  {indicator.description}
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 p-6 bg-gradient-to-r from-vola-blue/5 to-vola-blue-light/5 rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Major Investor Backing
              </h4>
              <p className="text-gray-600">
                Supported by leading European venture capital funds, ensuring long-term stability and growth
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="flex items-center space-x-2">
                <Shield className="w-8 h-8 text-vola-blue" />
                <span className="font-semibold text-vola-blue">Enterprise Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}