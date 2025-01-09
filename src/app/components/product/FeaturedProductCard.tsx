import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/types/product'
import { icons } from '@/data/icons'
import { Button } from "@/components/ui/button"
import { SpiralPattern } from '../patterns/SpiralPattern'

interface FeaturedProductCardProps {
  product: Product
}

export const FeaturedProductCard: React.FC<FeaturedProductCardProps> = ({ product }) => {
  const Icon = icons[product.icon]

  return (
    <div className="featured-product-card group bg-white rounded-2xl overflow-hidden transition-all hover:shadow-xl relative">
      <div className="relative aspect-square">
        <Image 
          src={product.image} 
          alt={product.name} 
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <SpiralPattern />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-10 h-10 text-white">
                {Icon && <Icon />}
              </div>
              <h2 className="text-xl md:text-2xl font-semibold text-white">{product.name}</h2>
            </div>
            <p className="text-sm md:text-base text-white/90 mb-4 line-clamp-2">
              {product.description}
            </p>
            <Button asChild variant="secondary" size="sm">
              <Link href={`/src/app/products/${product.id}`}>Ürünü İncele</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

