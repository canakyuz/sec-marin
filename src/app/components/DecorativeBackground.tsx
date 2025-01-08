'use client'

import React from 'react'
import Image from 'next/image'
import { SeafoodIcons } from './icons/DecorativeIcons'

interface DecorativeBackgroundProps {
  children: React.ReactNode
}

export const DecorativeBackground: React.FC<DecorativeBackgroundProps> = ({ children }) => {
  return (
      <div className="relative overflow-hidden">
        {/* Decorative Background Patterns */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-32 md:w-48 h-32 md:h-48 text-white-300">
            <Image src={SeafoodIcons.Hamsi} alt="" width={200} height={200} className="w-full h-full"/>
          </div>
          <div className="absolute top-1/3 right-0 w-40 md:w-56 h-40 md:h-56 text-white-300">
            <Image src={SeafoodIcons.Cipura} alt="" width={200} height={200} className="w-full h-full"/>
          </div>
          <div className="absolute bottom-0 left-1/4 w-48 md:w-64 h-48 md:h-64 text-white-300">
            <Image src={SeafoodIcons.Ahtapot} alt="" width={200} height={200} className="w-full h-full"/>
          </div>
          <div className="absolute top-1/2 left-1/3 w-32 md:w-48 h-32 md:h-48 text-white-300">
            <Image src={SeafoodIcons.Karides} alt="" width={200} height={200} className="w-full h-full"/>
          </div>
          <div className="absolute bottom-1/4 right-1/4 w-40 md:w-56 h-40 md:h-56 text-white-300">
            <Image src={SeafoodIcons.Somon} alt="" width={200} height={200} className="w-full h-full"/>
          </div>
          <div className="absolute top-1/4 left-2/3 w-36 md:w-52 h-36 md:h-52 text-white-300">
            <Image src={SeafoodIcons.UskumruFume} alt="" width={200} height={200} className="w-full h-full"/>
          </div>
          <div className="absolute bottom-0 right-1/3 w-32 md:w-48 h-32 md:h-48 text-white-300">
            <Image src={SeafoodIcons.Midye} alt="" width={200} height={200} className="w-full h-full"/>
          </div>
          <div className="absolute bottom-1/2 right-1/2 w-32 md:w-48 h-32 md:h-48 text-white-300">
            <Image src={SeafoodIcons.Alabalik} alt="" width={200} height={200} className="w-full h-full"/>
          </div>
          <div className="absolute top-0 right-1/2 w-40 md:w-56 h-40 md:h-56 text-white-300">
            <Image src={SeafoodIcons.Torik} alt="" width={200} height={200} className="w-full h-full"/>
          </div>
        </div>
          {children}
      </div>
  )
}

