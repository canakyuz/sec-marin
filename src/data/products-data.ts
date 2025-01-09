import type { Product } from '@/types/product'
import { SeafoodIcons } from '@/app/components/icons/DecorativeIcons'

export const allProducts: Product[] = [
  // Marine Ürünler
  {
    id: 1,
    name: 'Ahtapot Kol Marine',
    category: 'marine',
    subcategory: 'ahtapot',
    image: '/products/ahtapot.jpg',
    packedImage: '/products/packed/MARİNE_AHTAPOT_KOL.png',
    icon: '/fish/ahtapot.svg',
    shortDescription: "Yumuşak ve lezzetli marine ahtapot kol",
    description: "Ahtapot, doğru şekilde marine edildiğinde yumuşak ve lezzetli bir tat sunar. Ahtapot kol marine için ayçiçek yağı, limon suyu, ve baharatlar kullanılarak hazırlanan bir sosla marine edilir. Bu şekilde, ahtapotun doğal tatları ön plana çıkar.",
    features: [
      'Ayçiçek yağı ile marine',
      'Limon suyu ve baharatlar',
      'Yumuşak doku',
      'Doğal tatların ön plana çıkarılması'
    ],
    processInfo: 'Ahtapot kol, özel marine sosu ile hazırlanır.',
    servingSuggestions: [
      'Salatalar üzerinde',
      'Meze olarak',
      'Zeytinyağı ve limon eşliğinde'
    ],
    nutritionInfo: {
      protein: '15g',
      fat: '1.5g',
      carbs: '2g',
      calories: '80'
    },
    recipes: [
      {
        title: 'Ahtapot Kol Salatası',
        description: 'Taze sebzeler ve marine ahtapot kol ile hazırlanan lezzetli bir salata.',
        ingredients: [
          '200g marine ahtapot kol',
          '1 adet kırmızı soğan',
          '1 adet salatalık',
          '1 avuç cherry domates',
          'Taze kekik',
          'Zeytinyağı',
          'Limon suyu'
        ],
        instructions: [
          'Ahtapot kollarını küçük parçalara bölün.',
          'Kırmızı soğanı ince ince doğrayın.',
          'Salatalığı ve domatesleri dilimleyin.',
          'Tüm malzemeleri bir kapta karıştırın.',
          'Üzerine zeytinyağı, limon suyu ve taze kekik ekleyip servis yapın.'
        ]
      }
    ]
  },
  {
    id: 2,
    name: 'Marine Hamsi',
    category: 'marine',
    subcategory: 'hamsi',
    image: '/products/hamsi.jpg',
    packedImage: '/products/packed/MARINE_HAMSI.png',
    icon: '/fish',
    shortDescription: "Geleneksel Karadeniz lezzeti",
    description: "Taze hamsilerin özenle marine edilmesiyle hazırlanan bu ürün, Karadeniz mutfağının eşsiz lezzetini sofranıza taşır. Sirke, zeytinyağı ve baharatlarla marine edilen hamsiler, hem iştah açıcı bir meze hem de sağlıklı bir atıştırmalık olarak tercih edilir.",
    features: [
      'Taze Karadeniz hamsileri',
      'Sirke ve zeytinyağı ile marine',
      'Özel baharat karışımı',
      'Geleneksel tarif'
    ],
    processInfo: 'Hamsiler temizlendikten sonra özel marine sosunda bekletilir.',
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
    image: '/products/karides.jpg',
    packedImage: '/products/packed/MARİNE_KARİDES.png',
    icon: '/fish',
    shortDescription: "Taze ve lezzetli marine karides",
    description: "Taze karidesler, özel bir marine sosu ile lezzetlendirilir. Limon, sarımsak ve zeytinyağı bazlı bu sos, karideslerin doğal tadını artırırken, yumuşak ve sulu bir doku sağlar. Her lokmada denizin taze lezzetini hissedeceksiniz.",
    features: [
      'Taze karidesler',
      'Limon ve sarımsak aroması',
      'Zeytinyağı bazlı özel sos',
      'Yumuşak ve sulu doku'
    ],
    processInfo: 'Karidesler ayıklanıp temizlendikten sonra özel marine sosunda bekletilir.',
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
    image: '/products/midye.jpg',
    packedImage: '/products/packed/MARİNE_İSLİ_MİDYE.png',
    icon: '/fish',
    shortDescription: "Lezzetli ve aromatik marine midye",
    description: "Taze midyeler, özenle temizlendikten sonra özel bir marine sosunda bekletilir. Zeytinyağı, limon suyu, sarımsak ve çeşitli baharatlarla hazırlanan bu sos, midyelere eşsiz bir lezzet katar. Her bir midye, denizin ve Akdeniz mutfağının aromalarını taşır.",
    features: [
      'Taze midyeler',
      'Zeytinyağı ve limon bazlı sos',
      'Sarımsak ve baharat aroması',
      'El yapımı üretim'
    ],
    processInfo: 'Midyeler temizlendikten sonra özel marine sosunda bekletilir.',
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
    image: '/products/somon.jpg',
    packedImage: '/products/packed/ALABALIK_FUME.png', // Using Alabalik as a substitute for Somon
    icon: '/fish',
    shortDescription: "Klasik lezzet, mükemmel sunum",
    description: "Taze somon fileto, geleneksel yöntemlerle tuzlanıp kurutulduktan sonra özenle fümelenir. Meşe talaşı kullanılarak yapılan fümeleme işlemi, somona karakteristik aromasını ve rengini verir. İnce dilimlenmiş somon füme, hem göze hem damağa hitap eder.",
    features: [
      'Taze somon fileto',
      'Geleneksel tuzlama ve kurutma',
      'Meşe talaşı ile fümeleme',
      'İnce dilimleme'
    ],
    processInfo: 'Somon fileto tuzlanıp kurutulduktan sonra meşe talaşı ile fümelenir.',
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
    image: '/products/levrek.jpg',
    packedImage: '/products/packed/LEVREK_FUME.png',
    icon: '/fish',
    shortDescription: "Zarif lezzet, füme ustalığı",
    description: "Taze levrek, özenle fileto çıkarıldıktan sonra geleneksel yöntemlerle tuzlanır ve kurutulur. Ardından, özel füme fırınlarında meşe talaşı ile fümelenir. Bu işlem, levreğin doğal lezzetini korurken ona hafif bir dumanlı aroma katar.",
    features: [
      'Taze levrek fileto',
      'Geleneksel tuzlama yöntemi',
      'Meşe talaşı ile fümeleme',
      'Hafif dumanlı aroma'
    ],
    processInfo: 'Levrek fileto tuzlanıp kurutulduktan sonra meşe talaşı ile fümelenir.',
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
    image: '/products/uskumru.jpg',
    packedImage: '/products/packed/USKUMRU_FUME_CİROZ.png',
    icon: '/fish',
    shortDescription: "Yoğun lezzet, geleneksel füme",
    description: "Taze uskumru, geleneksel yöntemlerle tuzlanıp kurutulduktan sonra özel füme fırınlarında işlenir. Meşe ve kayın karışımı talaş kullanılarak yapılan fümeleme işlemi, uskumruya karakteristik yoğun aromasını ve altın-kahverengi rengini verir.",
    features: [
      'Taze uskumru',
      'Geleneksel tuzlama ve kurutma',
      'Meşe ve kayın talaşı ile fümeleme',
      'Yoğun aroma ve renk'
    ],
    processInfo: 'Uskumru tuzlanıp kurutulduktan sonra meşe ve kayın talaşı karışımı ile fümelenir.',
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
    image: '/products/ahtapot.jpg',
    packedImage: '/products/packed/AHTAPOT_FUME.png',
    icon: '/fish',
    shortDescription: 'Sıra dışı füme ahtapot lezzeti',
    description: 'Deniz ürünleri sevenler için sıra dışı bir lezzet sunar. Ahtapotun etli, hafifçe sert yapısı, füme işlemiyle daha da zenginleşir ve genellikle zeytinyağı ve limonla servis edilir.',
    features: [
      'Etli ve sert yapı',
      'Füme işlemi',
      'Zeytinyağı ve limon',
      'Zenginleştirilmiş lezzet'
    ],
    processInfo: 'Geleneksel füme yöntemiyle hazırlanır.',
    servingSuggestions: [
      'Meze olarak',
      'Salatalarda',
      'Antipasti tabağında'
    ]
  },
  // Additional products based on the provided image names
  {
    id: 9,
    name: 'Bottarga Füme',
    category: 'füme',
    subcategory: 'bottarga',
    image: '/products/bottarga.jpg',
    packedImage: '/products/packed/BOTTARGA_FUME.png',
    icon: '/fish',
    shortDescription: 'Özel işlenmiş balık yumurtası',
    description: 'Bottarga, özenle tuzlanmış ve kurutulmuş balık yumurtasıdır. Füme işlemi ile eşsiz bir lezzet ve aroma kazanır.',
    features: [
      'Özel tuzlama ve kurutma işlemi',
      'Füme aroması',
      'Yoğun umami tadı',
      'Gurme lezzet'
    ],
    processInfo: 'Balık yumurtaları özenle tuzlanır, kurutulur ve fümelenir.',
    servingSuggestions: [
      'İnce dilimlenmiş olarak makarna üzerinde',
      'Zeytinyağı ile servis edilebilir',
      'Salatalarda lezzet artırıcı olarak'
    ]
  },
  {
    id: 10,
    name: 'Çipura Füme',
    category: 'füme',
    subcategory: 'çipura',
    image: '/products/cipura.jpg',
    packedImage: '/products/packed/CIPURA_FUME.png',
    icon: '/fish',
    shortDescription: 'Akdeniz\'in nefis lezzeti',
    description: 'Taze çipura, özenle fileto çıkarıldıktan sonra geleneksel yöntemlerle tuzlanır ve fümelenir. Hafif ve lezzetli bir tat sunar.',
    features: [
      'Taze çipura fileto',
      'Geleneksel tuzlama yöntemi',
      'Özel fümeleme işlemi',
      'Hafif ve dengeli lezzet'
    ],
    processInfo: 'Çipura fileto tuzlanıp özel fırınlarda fümelenir.',
    servingSuggestions: [
      'Salatalarda',
      'Bruschetta üzerinde',
      'Kraker veya ekmek üzerinde aperatif olarak'
    ]
  },
  {
    id: 11,
    name: 'Lakerda (Torik)',
    category: 'marine',
    subcategory: 'torik',
    image: '/products/torik.jpg',
    packedImage: '/products/packed/LAKERDA_TORİK.png',
    icon: '/fish',
    shortDescription: 'Geleneksel Türk deniz lezzeti',
    description: 'Lakerda, tuzlanmış ve olgunlaştırılmış torik balığından yapılan geleneksel bir Türk mezesidir. Zengin ve yoğun bir lezzete sahiptir.',
    features: [
      'Özel tuzlama yöntemi',
      'Uzun olgunlaştırma süreci',
      'Yoğun ve karakteristik lezzet',
      'Geleneksel tarif'
    ],
    processInfo: 'Torik balığı özel bir yöntemle tuzlanır ve belirli bir süre olgunlaştırılır.',
    servingSuggestions: [
      'İnce dilimlenmiş olarak zeytinyağı ile',
      'Meze tabağında',
      'Kızarmış ekmek üzerinde'
    ]
  },
  {
    id: 12,
    name: 'Yılan Balığı Füme',
    category: 'füme',
    subcategory: 'yılan balığı',
    image: '/products/yilan-baligi.jpg',
    packedImage: '/products/packed/YILAN_FUME.png',
    icon: '/fish',
    shortDescription: 'Eşsiz lezzet, özel füme',
    description: 'Yılan balığı, özenle seçilip fümelenerek benzersiz bir lezzet sunar. Yumuşak dokusu ve zengin aromasıyla gurmelerin favorisidir.',
    features: [
      'Özel seçilmiş yılan balığı',
      'Geleneksel fümeleme tekniği',
      'Yumuşak doku',
      'Zengin aroma'
    ],
    processInfo: 'Yılan balığı özenle temizlenir ve özel füme fırınlarında işlenir.',
    servingSuggestions: [
      'İnce dilimlenmiş olarak meze tabağında',
      'Özel soslarla birlikte',
      'Gurme sandviçlerde'
    ]
  },
  {
    id: 13,
    name: 'Karışık Deniz Ürünleri',
    category: 'marine',
    subcategory: 'karışık',
    image: '/products/karisik.jpg',
    packedImage: '/products/packed/KARISIK_DENIZ_URUNLERİ.png',
    icon: '/fish',
    shortDescription: 'Çeşitli deniz lezzetleri bir arada',
    description: 'Farklı deniz ürünlerinin özenle seçilmiş bir karışımı. Her lokmada farklı bir lezzet sunar.',
    features: [
      'Çeşitli deniz ürünleri',
      'Özel marine sosu',
      'Dengeli lezzet kombinasyonu',
      'Pratik tüketim'
    ],
    processInfo: 'Seçilmiş deniz ürünleri özel bir marine sosunda hazırlanır.',
    servingSuggestions: [
      'Salatalarda',
      'Makarna yemeklerinde',
      'Aperatif olarak'
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

