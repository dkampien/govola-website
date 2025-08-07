'use client'
import React from 'react'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  const handleEngineClick = () => {
    const element = document.getElementById('how-it-works')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 to-white px-4">
      {/* Background gradient decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-vola-blue/5 via-transparent to-vola-yellow/5 rounded-full blur-3xl" />
      </div>
      
      {/* Content */}
      <div className="w-full max-w-4xl mx-auto text-center">
        {/* AI Technology Badge */}
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-vola-blue text-sm font-medium">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-vola-blue opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-vola-blue"></span>
          </span>
          Powered by AI Technology
        </div>
        
        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="block">Create Once.</span>
          <span className="block">Distribute Everywhere.</span>
        </h1>
        
        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12">
          Streamline your social media workflow with intelligent video generation and 
          multi-platform distribution. From raw footage to published content in minutes.
        </p>
        
        {/* CTA Button */}
        <Button 
          onClick={handleEngineClick}
          size="lg"
          className="bg-vola-blue hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
        >
          See How It Works
        </Button>
        
        {/* Trust Indicators */}
        <p className="text-sm text-gray-500 mt-12">
          Trusted by <span className="text-gray-700 font-semibold">1M+ travelers</span> • Built by <span className="text-gray-700 font-semibold">Vola.ro</span>
        </p>
      </div>
    </section>
  )
}