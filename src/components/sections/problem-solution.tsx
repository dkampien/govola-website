import React from 'react'
import { Section } from '@/components/ui/section'
import { H2, H3, P } from '@/components/ui/typography'
import { Card } from '@/components/ui/card'
import { X, Check, Clock, BarChart3 } from 'lucide-react'

export function ProblemSolutionSection() {
  return (
    <Section background="gray">
      <div className="text-center mb-12">
        <H2 className="mb-4">Before vs After</H2>
        <P className="max-w-3xl mx-auto">
          Transform your content workflow from hours of manual work to minutes of automation
        </P>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Manual Way */}
        <Card variant="default" className="relative border-red-200/50 bg-gradient-to-br from-red-50/30 to-white">
          <div className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full p-2 shadow-lg">
            <X size={20} />
          </div>
          <H3 className="mb-4 text-red-600">THE MANUAL WAY</H3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <X className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Upload content to each platform individually</span>
            </li>
            <li className="flex items-start">
              <X className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Manually resize and format for different requirements</span>
            </li>
            <li className="flex items-start">
              <X className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Schedule posts separately across platforms</span>
            </li>
            <li className="flex items-start">
              <X className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Track performance in multiple dashboards</span>
            </li>
          </ul>
          <div className="flex items-center justify-center p-4 bg-red-50 rounded-lg">
            <Clock className="w-5 h-5 text-red-600 mr-2" />
            <span className="text-red-600 font-semibold">Time: 15+ hours per week</span>
          </div>
        </Card>

        {/* Automated Way */}
        <Card variant="elevated" className="relative border-2 border-vola-blue/30 bg-gradient-to-br from-vola-blue/5 to-white">
          <div className="absolute -top-3 -right-3 bg-vola-blue text-white rounded-full p-2 shadow-lg">
            <Check size={20} />
          </div>
          <H3 className="mb-4 text-vola-blue">THE AUTOMATED WAY</H3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Upload once, distribute everywhere automatically</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Platform-specific optimization built-in</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Unified scheduling and posting system</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Single dashboard for all analytics</span>
            </li>
          </ul>
          <div className="flex items-center justify-center p-4 bg-gradient-to-r from-vola-blue/10 to-vola-blue-light/10 rounded-lg">
            <Clock className="w-5 h-5 text-vola-blue mr-2" />
            <span className="text-vola-blue font-semibold">Time: 2 hours per week</span>
          </div>
        </Card>
      </div>

      <div className="mt-12 text-center">
        <div className="inline-flex items-center justify-center p-4 bg-vola-yellow/20 rounded-lg">
          <BarChart3 className="w-6 h-6 text-vola-yellow-hover mr-3" />
          <span className="text-lg font-semibold text-gray-900">
            Save 13+ hours per week on content distribution
          </span>
        </div>
      </div>
    </Section>
  )
}