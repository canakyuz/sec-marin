'use client'

import React from 'react'
import { WavePattern, SpiralPattern, FishPattern, BoatPattern, OctopusPattern, SalmonPattern } from './DecorativeIcons'

interface DecorativeLayoutProps {
  children: React.ReactNode
}

export const DecorativeLayout: React.FC<DecorativeLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Decorative Background Patterns */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 w-48 md:w-96 h-48 md:h-96 text-blue-300/30 transform -rotate-12">
          <WavePattern />
        </div>
        <div className="absolute top-1/3 right-0 w-48 md:w-96 h-48 md:h-96 text-blue-300/30">
          <SpiralPattern />
        </div>
        <div className="absolute bottom-20 left-1/4 w-48 md:w-96 h-48 md:h-96 text-blue-300/30 transform rotate-45">
          <FishPattern />
        </div>
        <div className="absolute top-1/2 left-1/3 w-32 md:w-64 h-32 md:h-64 text-blue-300/30">
          <BoatPattern />
        </div>
        <div className="absolute bottom-1/4 right-1/4 w-40 md:w-80 h-40 md:h-80 text-blue-300/30 transform -rotate-12">
          <OctopusPattern />
        </div>
        <div className="absolute top-1/4 left-2/3 w-36 md:w-72 h-36 md:h-72 text-blue-300/30 transform rotate-12">
          <SalmonPattern />
        </div>
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

