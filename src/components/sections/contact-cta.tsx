import React from 'react'
import { H2, P } from '@/components/ui/typography'
import { Button } from '@/components/ui/button'
import { Mail, MapPin } from 'lucide-react'

export function ContactCTASection() {
  return (
    <section id="contact" className="relative bg-gradient-to-br from-vola-blue via-vola-blue-dark to-vola-blue-dark py-24 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            Ready to Transform Your Workflow?
          </div>
          
          <H2 className="mb-6 text-white">
            Start Creating More, Posting Less
          </H2>
          
          <P className="text-xl mb-10 text-white/80 max-w-2xl mx-auto">
            Let the Content Engine handle the repetitive work so you can focus on what 
            matters most - creating amazing travel content.
          </P>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-white text-vola-blue hover:bg-gray-100 shadow-xl" 
              as="a" 
              href="mailto:content-engine@vola.ro"
            >
              Get Early Access
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm" 
              as="a" 
              href="/about"
            >
              Learn More
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-lg mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors">
              <Mail className="w-8 h-8 mb-3 text-vola-yellow" />
              <h3 className="font-semibold mb-2 text-white">Contact Us</h3>
              <a 
                href="mailto:content-engine@vola.ro" 
                className="text-white/80 hover:text-white transition-colors text-sm"
              >
                content-engine@vola.ro
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors">
              <MapPin className="w-8 h-8 mb-3 text-vola-yellow" />
              <h3 className="font-semibold mb-2 text-white">Location</h3>
              <p className="text-white/80 text-sm">
                Built by Vola.ro<br />
                Bucharest, Romania
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}