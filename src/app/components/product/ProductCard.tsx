import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Product } from '@/types/product'
import { WavePattern } from '../Decorations'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
      <motion.div
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
      >
        <Link href={`/products/${product.id}`}>
          <div className="product-card group bg-white rounded-2xl overflow-hidden transition-all hover:shadow-xl relative">
            <div className="relative aspect-square">
              <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 left-0 w-full h-full opacity-30">
                <WavePattern />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-4 mb-3">
                    <h2 className="text-lg md:text-xl font-semibold text-white">{product.name}</h2>
                  </div>
                  <p className="text-sm md:text-base text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
                    {product.shortDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
  )
}

