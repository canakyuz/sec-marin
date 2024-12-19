'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Fish, Droplet, Waves } from 'lucide-react'

interface CategoryFilterProps {
  activeCategory: string
  onCategoryChange: (category: string) => void
  categories: {
    [key: string]: string
  }
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({ activeCategory, onCategoryChange, categories }) => {
  const categoryIcons = {
    all: Waves,
    füme: Fish,
    marine: Droplet,
  }

  return (
      <motion.div
          className="flex flex-wrap justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
      >
        {Object.entries(categories).map(([key, name]) => (
            <motion.div
                key={key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
              <Button
                  variant={activeCategory === key ? "default" : "outline"}
                  onClick={() => onCategoryChange(key)}
                  className={`flex items-center gap-2 px-4 py-2 ${
                      activeCategory === key
                          ? 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                          : 'bg-white text-gray-800 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:ring-2 focus:ring-gray-300 focus:ring-offset-2'
                  }`}
              >
                {categoryIcons[key as keyof typeof categoryIcons] && React.createElement(categoryIcons[key as keyof typeof categoryIcons], { className: "w-5 h-5" })}
                <span className="text-sm">{name}</span>
              </Button>
            </motion.div>
        ))}
      </motion.div>
  )
}

export default CategoryFilter