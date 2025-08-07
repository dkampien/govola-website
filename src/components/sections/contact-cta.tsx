import React from 'react'
import { Section } from '@/components/ui/section'
import { H2, P } from '@/components/ui/typography'
import { Button } from '@/components/ui/button'
import { Mail, MapPin } from 'lucide-react'

export function ContactCTASection() {
  return (
    <Section id="contact" background="gradient" className="text-white">
      <div className="text-center max-w-4xl mx-auto">
        <H2 className="mb-6 text-white">
          Start Creating More, Posting Less
        </H2>
        
        <P className="text-xl mb-8 text-white/90">
          Let the Content Engine handle the repetitive work so you can focus on what 
          matters most - creating amazing travel content.
        </P>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" variant="primary" as="a" href="mailto:content-engine@vola.ro">
            Get Early Access
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-vola-blue" as="a" href="/about">
            Learn More
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <Mail className="w-8 h-8 mb-3 text-vola-yellow" />
            <h3 className="font-semibold mb-2 text-white">Contact Us</h3>
            <a 
              href="mailto:content-engine@vola.ro" 
              className="text-white/90 hover:text-vola-yellow transition-colors"
            >
              content-engine@vola.ro
            </a>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <MapPin className="w-8 h-8 mb-3 text-vola-yellow" />
            <h3 className="font-semibold mb-2 text-white">Location</h3>
            <p className="text-white/90">
              Built by Vola.ro<br />
              Bucharest, Romania
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}