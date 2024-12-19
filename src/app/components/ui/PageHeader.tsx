import { motion } from 'framer-motion'
import { WavePattern } from '../patterns/WavePattern'

interface PageHeaderProps {
  title: string
}

export function PageHeader({ title }: PageHeaderProps) {
  return (
    <div className="relative py-16 bg-gray-100 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <WavePattern />
      </div>
      <motion.div 
        className="container mx-auto px-4 text-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{title}</h1>
      </motion.div>
    </div>
  )
}

