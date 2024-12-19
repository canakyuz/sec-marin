import React from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  children: React.ReactNode
  className?: string
  bgColor?: 'white' | 'gray'
  id?: string
}

export default function Section({ children, className, bgColor = 'white', id }: SectionProps) {
  return (
    <section 
      id={id}
      className={cn(
        'py-16 md:py-24 relative z-10',
        bgColor === 'gray' ? 'bg-gray-50' : 'bg-white',
        className
      )}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {children}
      </div>
    </section>
  )
}

