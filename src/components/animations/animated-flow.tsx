'use client'

import React from 'react'
import { cn } from '@/lib/utils'

export function AnimatedFlow({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('relative w-full h-64 md:h-80 lg:h-96', className)} {...props}>
      <svg
        className="w-full h-full"
        viewBox="0 0 800 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="volaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4A90E2" />
            <stop offset="100%" stopColor="#6BA3E7" />
          </linearGradient>
          
          <linearGradient id="yellowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F7D917" />
            <stop offset="100%" stopColor="#FFE94D" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Input line */}
        <g className="animate-pulse">
          <path
            d="M 50 150 L 250 150"
            stroke="url(#volaGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            className="opacity-80"
          />
          <circle cx="50" cy="150" r="6" fill="url(#volaGradient)" />
          
          {/* Animated dots on input */}
          <circle r="4" fill="url(#yellowGradient)" filter="url(#glow)">
            <animateMotion
              dur="3s"
              repeatCount="indefinite"
              path="M 50 150 L 250 150"
            />
          </circle>
        </g>

        {/* Central processing node */}
        <g>
          <rect
            x="300"
            y="110"
            width="200"
            height="80"
            rx="10"
            fill="url(#volaGradient)"
            className="opacity-90"
          />
          <text
            x="400"
            y="145"
            textAnchor="middle"
            className="fill-white font-bold text-lg"
          >
            Content Engine
          </text>
          <text
            x="400"
            y="165"
            textAnchor="middle"
            className="fill-white text-sm opacity-90"
          >
            Processing
          </text>
          
          {/* Pulsing effect on central node */}
          <rect
            x="300"
            y="110"
            width="200"
            height="80"
            rx="10"
            fill="none"
            stroke="url(#yellowGradient)"
            strokeWidth="2"
            opacity="0"
          >
            <animate
              attributeName="opacity"
              values="0;0.5;0"
              dur="2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-width"
              values="2;4;2"
              dur="2s"
              repeatCount="indefinite"
            />
          </rect>
        </g>

        {/* Output lines */}
        <g>
          {/* Top output */}
          <path
            d="M 550 130 L 750 80"
            stroke="url(#volaGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            className="opacity-80"
          />
          <circle cx="750" cy="80" r="6" fill="url(#volaGradient)" />
          <circle r="4" fill="url(#yellowGradient)" filter="url(#glow)">
            <animateMotion
              dur="2.5s"
              repeatCount="indefinite"
              path="M 550 130 L 750 80"
              begin="0.5s"
            />
          </circle>

          {/* Middle output */}
          <path
            d="M 550 150 L 750 150"
            stroke="url(#volaGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            className="opacity-80"
          />
          <circle cx="750" cy="150" r="6" fill="url(#volaGradient)" />
          <circle r="4" fill="url(#yellowGradient)" filter="url(#glow)">
            <animateMotion
              dur="2.5s"
              repeatCount="indefinite"
              path="M 550 150 L 750 150"
              begin="1s"
            />
          </circle>

          {/* Bottom output */}
          <path
            d="M 550 170 L 750 220"
            stroke="url(#volaGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            className="opacity-80"
          />
          <circle cx="750" cy="220" r="6" fill="url(#volaGradient)" />
          <circle r="4" fill="url(#yellowGradient)" filter="url(#glow)">
            <animateMotion
              dur="2.5s"
              repeatCount="indefinite"
              path="M 550 170 L 750 220"
              begin="1.5s"
            />
          </circle>
        </g>

        {/* Labels */}
        <text x="50" y="180" textAnchor="middle" className="fill-gray-600 text-sm">
          Upload Once
        </text>
        <text x="750" y="60" textAnchor="middle" className="fill-gray-600 text-sm">
          TikTok #1
        </text>
        <text x="750" y="130" textAnchor="middle" className="fill-gray-600 text-sm">
          TikTok #2
        </text>
        <text x="750" y="250" textAnchor="middle" className="fill-gray-600 text-sm">
          TikTok #3
        </text>
      </svg>
    </div>
  )
}