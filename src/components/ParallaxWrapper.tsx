'use client'

import React from 'react'
import { Parallax } from './Parallax'

interface ParallaxWrapperProps {
  children: React.ReactNode;
}

export const ParallaxWrapper: React.FC<ParallaxWrapperProps> = ({ children }) => {
  return (
    <div className="parallax-wrapper">
      <Parallax speed={0.5} className="parallax-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-100 to-white opacity-50" />
      </Parallax>
      <Parallax speed={0.2} className="parallax-content">
        {children}
      </Parallax>
    </div>
  )
}

