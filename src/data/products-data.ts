import type { Product } from '../types/product'

export const allProducts: Product[] = [
  // Marine Ürünler
  {
    id: 1,
    name: 'Ahtapot Kol Marine',
    category: 'marine',
    subcategory: 'ahtapot',
    image: '/placeholder.svg',
    shortDescription: "Yumuşak ve lezzetli marine ahtapot kol",
    description: "Ahtapot, doğru şekilde marine edildiğinde yumuşak ve lezzetli bir tat sunar. Ahtapot kol marine için ayçiçek yağı, limon suyu, ve baharatlar kullanılarak hazırlanan bir sosla marine edilir. Bu şekilde, ahtapotun doğal tatları ön plana çıkar.",
    features: [
      'Ayçiçek yağı ile marine',
      'Limon suyu ve baharatlar',
      'Yumuşak doku',
      'Doğal tatların ön plana çıkarılması'
    ],
    processInfo: 'Ahtapot kol, özel marine sosu ile hazırlanır.',
    icon: 'octopus',
    servingSuggestions: [
      'Salatalar üzerinde',
      'Meze olarak',
      'Zeytinyağı ve limon eşliğinde'
    ]
  },
  {
    id: 2,
    name: 'Marine Hamsi',
    category: 'marine',
    subcategory: 'hamsi',
    image: '/placeholder.svg',
    shortDescription: "Geleneksel Karadeniz lezzeti",
    description: "Taze hamsilerin özenle marine edilmesiyle hazırlanan bu ürün, Karadeniz mutfağının eşsiz lezzetini sofranıza taşır. Sirke, zeytinyağı ve baharatlarla marine edilen hamsiler, hem iştah açıcı bir meze hem de sağlıklı bir atıştırmalık olarak tercih edilir.",
    features: [
      'Taze Karadeniz hamsileri',
      'Sirke ve zeytinyağı ile marine',
      'Özel baharat karışımı',
      'Geleneksel tarif'
    ],
    processInfo: 'Hamsiler temizlendikten sonra özel marine sosunda bekletilir.',
    icon: 'minimalist',
    servingSuggestions: [
      'Meze tabağında',
      'Salatalarda',
      'Ekmek üzerinde'
    ]
  },
  {
    id: 3,
    name: 'Karides Marine',
    category: 'marine',
    subcategory: 'karides',
    image: '/placeholder.svg',
    shortDescription: "Taze ve lezzetli marine karides",
    description: "Taze karidesler, özel bir marine sosu ile lezzetlendirilir. Limon, sarımsak ve zeytinyağı bazlı bu sos, karideslerin doğal tadını artırırken, yumuşak ve sulu bir doku sağlar. Her lokmada denizin taze lezzetini hissedeceksiniz.",
    features: [
      'Taze karidesler',
      'Limon ve sarımsak aroması',
      'Zeytinyağı bazlı özel sos',
      'Yumuşak ve sulu doku'
    ],
    processInfo: 'Karidesler ayıklanıp temizlendikten sonra özel marine sosunda bekletilir.',
    icon: 'minimalist',
    servingSuggestions: [
      'Salatalarda',
      'Makarna yemeklerinde',
      'Meze olarak'
    ]
  },
  {
    id: 4,
    name: 'Midye Marine',
    category: 'marine',
    subcategory: 'midye',
    image: '/placeholder.svg',
    shortDescription: "Lezzetli ve aromatik marine midye",
    description: "Taze midyeler, özenle temizlendikten sonra özel bir marine sosunda bekletilir. Zeytinyağı, limon suyu, sarımsak ve çeşitli baharatlarla hazırlanan bu sos, midyelere eşsiz bir lezzet katar. Her bir midye, denizin ve Akdeniz mutfağının aromalarını taşır.",
    features: [
      'Taze midyeler',
      'Zeytinyağı ve limon bazlı sos',
      'Sarımsak ve baharat aroması',
      'El yapımı üretim'
    ],
    processInfo: 'Midyeler temizlendikten sonra özel marine sosunda bekletilir.',
    icon: 'wavy',
    servingSuggestions: [
      'Meze tabağında',
      'Salatalarda',
      'Makarna yemeklerinde'
    ]
  },
  // Füme Ürünler
  {
    id: 5,
    name: 'Somon Füme',
    category: 'füme',
    subcategory: 'somon',
    image: '/placeholder.svg',
    shortDescription: "Klasik lezzet, mükemmel sunum",
    description: "Taze somon fileto, geleneksel yöntemlerle tuzlanıp kurutulduktan sonra özenle fümelenir. Meşe talaşı kullanılarak yapılan fümeleme işlemi, somona karakteristik aromasını ve rengini verir. İnce dilimlenmiş somon füme, hem göze hem damağa hitap eder.",
    features: [
      'Taze somon fileto',
      'Geleneksel tuzlama ve kurutma',
      'Meşe talaşı ile fümeleme',
      'İnce dilimleme'
    ],
    processInfo: 'Somon fileto tuzlanıp kurutulduktan sonra meşe talaşı ile fümelenir.',
    icon: 'minimalist',
    servingSuggestions: [
      'Kahvaltılarda',
      'Salatalarda',
      'Kanepelerde'
    ]
  },
  {
    id: 6,
    name: 'Levrek Füme',
    category: 'füme',
    subcategory: 'levrek',
    image: '/placeholder.svg',
    shortDescription: "Zarif lezzet, füme ustalığı",
    description: "Taze levrek, özenle fileto çıkarıldıktan sonra geleneksel yöntemlerle tuzlanır ve kurutulur. Ardından, özel füme fırınlarında meşe talaşı ile fümelenir. Bu işlem, levreğin doğal lezzetini korurken ona hafif bir dumanlı aroma katar.",
    features: [
      'Taze levrek fileto',
      'Geleneksel tuzlama yöntemi',
      'Meşe talaşı ile fümeleme',
      'Hafif dumanlı aroma'
    ],
    processInfo: 'Levrek fileto tuzlanıp kurutulduktan sonra meşe talaşı ile fümelenir.',
    icon: 'wavy',
    servingSuggestions: [
      'İnce dilimlenmiş olarak meze tabağında',
      'Salatalarda',
      'Sandviçlerde'
    ]
  },
  {
    id: 7,
    name: 'Uskumru Füme',
    category: 'füme',
    subcategory: 'uskumru',
    image: '/placeholder.svg',
    shortDescription: "Yoğun lezzet, geleneksel füme",
    description: "Taze uskumru, geleneksel yöntemlerle tuzlanıp kurutulduktan sonra özel füme fırınlarında işlenir. Meşe ve kayın karışımı talaş kullanılarak yapılan fümeleme işlemi, uskumruya karakteristik yoğun aromasını ve altın-kahverengi rengini verir.",
    features: [
      'Taze uskumru',
      'Geleneksel tuzlama ve kurutma',
      'Meşe ve kayın talaşı ile fümeleme',
      'Yoğun aroma ve renk'
    ],
    processInfo: 'Uskumru tuzlanıp kurutulduktan sonra meşe ve kayın talaşı karışımı ile fümelenir.',
    icon: 'minimalist',
    servingSuggestions: [
      'Meze tabağında',
      'Kahvaltılarda',
      'Salatalarda'
    ]
  },
  {
    id: 8,
    name: 'Ahtapot Füme',
    category: 'füme',
    subcategory: 'ahtapot',
    image: '/placeholder.svg',
    shortDescription: 'Sıra dışı füme ahtapot lezzeti',
    description: 'Deniz ürünleri sevenler için sıra dışı bir lezzet sunar. Ahtapotun etli, hafifçe sert yapısı, füme işlemiyle daha da zenginleşir ve genellikle zeytinyağı ve limonla servis edilir.',
    features: [
      'Etli ve sert yapı',
      'Füme işlemi',
      'Zeytinyağı ve limon',
      'Zenginleştirilmiş lezzet'
    ],
    processInfo: 'Geleneksel füme yöntemiyle hazırlanır.',
    icon: 'octopus',
    servingSuggestions: [
      'Meze olarak',
      'Salatalarda',
      'Antipasti tabağında'
    ]
  }
]

export const fumeProducts = allProducts.filter(product => product.category === 'füme')
export const marineProducts = allProducts.filter(product => product.category === 'marine')

export const productCategories = {
  all: 'Tüm Ürünler',
  füme: 'Füme Ürünler',
  marine: 'Marine Ürünler'
}

