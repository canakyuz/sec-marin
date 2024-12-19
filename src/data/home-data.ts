import type { Product } from '../types/product'

export const featuredProducts: Product[] = [
  {
    id: 1,
    name: 'Somon Füme',
    category: 'füme',
    image: '/placeholder.svg',
    description: 'Geleneksel yöntemlerle hazırlanan, lezzetli ve sağlıklı somon füme.',
    features: [
      'Özel meşe talaşı ile tütsüleme',
      'El yapımı üretim',
      'Doğal koruma yöntemleri'
    ],
    processInfo: 'Özel meşe talaşı ile geleneksel yöntemlerle fümelenmiştir.',
    icon: 'minimalist'
  },
  {
    id: 2,
    name: 'Ahtapot Marine',
    category: 'marine',
    image: '/placeholder.svg',
    description: 'Füme ahtapotun kendine has aroması, marine sosuyla birleştiğinde eşsiz bir tat sunar.',
    features: [
      'Özel marine sosu',
      'Geleneksel tarifler',
      'Taze deniz ürünleri'
    ],
    processInfo: 'Özel marine sosu ile hazırlanmıştır.',
    icon: 'octopus'
  },
  {
    id: 3,
    name: 'Levrek Füme',
    category: 'füme',
    image: '/placeholder.svg',
    description: 'Taze levreğin enfes dumanlı aroması ile buluşması.',
    features: [
      'Özel füme tekniği',
      'Seçkin levrek kullanımı',
      'Geleneksel işleme'
    ],
    processInfo: 'Özel meşe talaşı ile geleneksel yöntemlerle fümelenmiştir.',
    icon: 'wavy'
  }
]

