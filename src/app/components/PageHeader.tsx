import { motion } from 'framer-motion'
import { AnimatedWaves } from './AnimatedWaves'

interface PageHeaderProps {
  title: string
  subtitle?: string
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="relative py-16 md:py-24 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
      {/* Animated Waves Background */}
      <AnimatedWaves />

      {/* Overlay to darken the background slightly */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-3 drop-shadow-lg">
            {title}
          </h1>
          {subtitle && (
            <p className="text-sm md:text-lg text-white/90 mt-2 drop-shadow-md max-w-xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  )
}

