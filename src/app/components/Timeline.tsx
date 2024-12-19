import React from 'react'
import { motion } from 'framer-motion'

interface TimelineEvent {
  year: string
  title: string
  description: string
}

interface TimelineProps {
  events: TimelineEvent[]
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary"></div>
      {events.map((event, index) => (
        <motion.div
          key={index}
          className={`mb-8 flex justify-between items-center w-full ${
            index % 2 === 0 ? 'flex-row-reverse' : ''
          }`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white">{event.year}</h1>
          </div>
          <div className="order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-primary text-xl">{event.title}</h3>
            <p className="text-sm leading-snug tracking-wide text-gray-600">{event.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default Timeline

