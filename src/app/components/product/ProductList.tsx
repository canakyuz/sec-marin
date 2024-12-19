'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProductCard from '@/app/components/product/ProductCard'
import { CategoryFilter } from '@/app/components/product/CategoryFilter'
import { useContent } from '@/app/hooks/useContent'
import { allProducts, productCategories } from '@/data/products-data'

export default function ProductList() {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const content = useContent()

  if (!content || !content.products) {
    return <div className="text-center">Ürün bilgileri yüklenemedi.</div>
  }

  const filteredProducts = activeCategory === 'all'
    ? allProducts
    : allProducts.filter(product => product.category === activeCategory)

  return (
    <>
      <CategoryFilter
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        categories={productCategories}
      />

      <AnimatePresence>
        <motion.div 
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </>
  )
}

