import type { Product, NutritionInfo } from '@/types/product'

const defaultNutritionInfo: NutritionInfo = {
  per100g: {
    energy: { kj: 0, kcal: 0 },
    fat: { total: 0, saturated: 0, unsaturated: 0 },
    carbs: { total: 0, sugars: 0 },
    protein: 0,
    salt: 0
  },
  perServing: {
    size: 55,
    energy: { kj: 0, kcal: 0 },
    fat: { total: 0, saturated: 0, unsaturated: 0 },
    carbs: { total: 0, sugars: 0 },
    protein: 0,
    salt: 0
  }
};

export const allProducts: Product[] = [
  {
    id: 1,
    name: 'Ahtapot Kol Marine',
    category: 'marine',
    subcategory: 'ahtapot',
    image: '/products/ahtapot.jpg',
    packedImage: '/products/packed/HASLANMIS_AHTAPOT_KOL.png',
    icon: '/fish/jpg/HAMSİ.jpg',
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
      ...defaultNutritionInfo,
      per100g: {
        ...defaultNutritionInfo.per100g,
        energy: { kj: 334, kcal: 80 },
        protein: 15,
        fat: { total: 1.5, saturated: 0.3 },
        carbs: { total: 2, sugars: 0 },
        salt: 1.2
      },
      perServing: {
        ...defaultNutritionInfo.perServing,
        energy: { kj: 183.7, kcal: 44 },
        protein: 8.25,
        fat: { total: 0.825, saturated: 0.165 },
        carbs: { total: 1.1, sugars: 0 },
        salt: 0.66
      }
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
    icon: '/placehodler.svg',
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
    ],
    nutritionInfo: {
      ...defaultNutritionInfo,
      per100g: {
        ...defaultNutritionInfo.per100g,
        energy: { kj: 628, kcal: 150 },
        protein: 18,
        fat: { total: 9, saturated: 2 },
        carbs: { total: 0, sugars: 0 },
        salt: 1.5
      },
      perServing: {
        ...defaultNutritionInfo.perServing,
        energy: { kj: 345.4, kcal: 82.5 },
        protein: 9.9,
        fat: { total: 4.95, saturated: 1.1 },
        carbs: { total: 0, sugars: 0 },
        salt: 0.825
      }
    }
  },
  {
    id: 3,
    name: 'Karides Marine',
    category: 'marine',
    subcategory: 'karides',
    image: '/products/karides.jpg',
    packedImage: '/products/packed/MARİNE_KARİDES.png',
    icon: '/fish/jpg/',
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
    ],
    nutritionInfo: {
      ...defaultNutritionInfo,
      per100g: {
        ...defaultNutritionInfo.per100g,
        energy: { kj: 418, kcal: 100 },
        protein: 20,
        fat: { total: 2, saturated: 0.5 },
        carbs: { total: 1, sugars: 0 },
        salt: 1.8
      },
      perServing: {
        ...defaultNutritionInfo.perServing,
        energy: { kj: 229.9, kcal: 55 },
        protein: 11,
        fat: { total: 1.1, saturated: 0.275 },
        carbs: { total: 0.55, sugars: 0 },
        salt: 0.99
      }
    }
  },
  {
    id: 4,
    name: 'Midye Marine',
    category: 'marine',
    subcategory: 'midye',
    image: '/products/midye.jpg',
    packedImage: '/products/packed/MARİNE_İSLİ_MİDYE.png',
    icon: '/fish/jpg/',
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
    ],
    nutritionInfo: {
      ...defaultNutritionInfo,
      per100g: {
        ...defaultNutritionInfo.per100g,
        energy: { kj: 376, kcal: 90 },
        protein: 12,
        fat: { total: 2.5, saturated: 0.5 },
        carbs: { total: 4, sugars: 0 },
        salt: 1.5
      },
      perServing: {
        ...defaultNutritionInfo.perServing,
        energy: { kj: 206.8, kcal: 49.5 },
        protein: 6.6,
        fat: { total: 1.375, saturated: 0.275 },
        carbs: { total: 2.2, sugars: 0 },
        salt: 0.825
      }
    }
  },
  {
    id: 5,
    name: 'Somon Füme',
    category: 'fume',
    subcategory: 'somon',
    image: '/products/somon.jpg',
    packedImage: '/products/packed/ALABALIK_FUME.png',
    icon: '/fish/jpg/',
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
    ],
    nutritionInfo: {
      per100g: {
        energy: { kj: 733.89, kcal: 175.4 },
        fat: { total: 2.16, saturated: 0.74 },
        carbs: { total: 10.29, sugars: 0 },
        protein: 28.70,
        salt: 0.84
      },
      perServing: {
        size: 55,
        energy: { kj: 403.64, kcal: 96.47 },
        fat: { total: 1.19, saturated: 0.41 },
        carbs: { total: 5.66, sugars: 0 },
        protein: 15.79,
        salt: 0.46
      }
    }
  },
  {
    id: 6,
    name: 'Levrek Füme',
    category: 'fume',
    subcategory: 'levrek',
    image: '/products/levrek.jpg',
    packedImage: '/products/packed/LEVREK_FUME.png',
    icon: '/fish/jpg/',
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
    ],
    nutritionInfo: {
      ...defaultNutritionInfo,
      per100g: {
        ...defaultNutritionInfo.per100g,
        energy: { kj: 717.45, kcal: 171.47 },
        protein: 26.33,
        fat: { total: 7.35, saturated: 1.71 },
        carbs: { total: 0, sugars: 0 },
        salt: 0.98
      },
      perServing: {
        ...defaultNutritionInfo.perServing,
        energy: { kj: 394.6, kcal: 94.31 },
        protein: 14.48,
        fat: { total: 4.04, saturated: 0.94 },
        carbs: { total: 0, sugars: 0 },
        salt: 0.54
      }
    }
  },
  {
    id: 7,
    name: 'Uskumru Füme',
    category: 'fume',
    subcategory: 'uskumru',
    image: '/products/uskumru.jpg',
    packedImage: '/products/packed/USKUMRU_FUME_CİROZ.png',
    icon: '/fish/jpg/',
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
    ],
    nutritionInfo: {
      ...defaultNutritionInfo,
      per100g: {
        ...defaultNutritionInfo.per100g,
        energy: { kj: 1901.56, kcal: 454.18 },
        protein: 14.32,
        fat: { total: 44.10, saturated: 13.23 },
        carbs: { total: 0, sugars: 0 },
        salt: 1.97
      },
      perServing: {
        ...defaultNutritionInfo.perServing,
        energy: { kj: 1045.86, kcal: 249.80 },
        protein: 7.88,
        fat: { total: 24.26, saturated: 7.28 },
        carbs: { total: 0, sugars: 0 },
        salt: 1.08
      }
    }
  },
  {
    id: 8,
    name: 'Ahtapot Füme',
    category: 'fume',
    subcategory: 'ahtapot',
    image: '/products/smoked-arms.jpg',
    packedImage: '/products/packed/AHTAPOT_FUME.png',
    icon: '/fish/jpg/',
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
    ],
    nutritionInfo: {
      ...defaultNutritionInfo,
      per100g: {
        ...defaultNutritionInfo.per100g,
        energy: { kj: 385, kcal: 92 },
        protein: 18.5,
        fat: { total: 2.0, saturated: 0.6 },
        carbs: { total: 0, sugars: 0 },
        salt: 0.2
      },
      perServing: {
        ...defaultNutritionInfo.perServing,
        energy: { kj: 211.75, kcal: 50.6 },
        protein: 10.18,
        fat: { total: 1.1, saturated: 0.33 },
        carbs: { total: 0, sugars: 0 },
        salt: 0.11
      }
    }
  },
  {
    id: 9,
    name: 'Bottarga Füme',
    category: 'fume',
    subcategory: 'bottarga',
    image: '/products/bbottarga.png',
    packedImage: '/products/packed/BOTTARGA_FUME.png',
    icon: '/fish/jpg/',
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
    ],
    nutritionInfo: defaultNutritionInfo
  },
  {
    id: 10,
    name: 'Çipura Füme',
    category: 'fume',
    subcategory: 'çipura',
    image: '/products/çipura.jpg',
    packedImage: '/products/packed/CIPURA_FUME.png',
    icon: '/fish/jpg/',
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
    ],
    nutritionInfo: defaultNutritionInfo
  },
  {
    id: 11,
    name: 'Lakerda (Torik)',
    category: 'marine',
    subcategory: 'torik',
    image: '/fish/jpg/TORİK.jpg',
    packedImage: '/products/packed/kucuk/LAKERDA_TORİK.png',
    icon: '/fish/jpg/',
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
    ],
    nutritionInfo: {
      ...defaultNutritionInfo,
      per100g: {
        ...defaultNutritionInfo.per100g,
        energy: { kj: 1030.00, kcal: 250.00 },
        protein: 8.00,
        fat: { total: 15.00, saturated: 4.50 },
        carbs: { total: 0, sugars: 0 },
        salt: 3.00
      },
      perServing: {
        ...defaultNutritionInfo.perServing,
        energy: { kj: 566.50, kcal: 137.50 },
        protein: 4.40,
        fat: { total: 8.25, saturated: 2.48 },
        carbs: { total: 0, sugars: 0 },
        salt: 1.65
      }
    }
  },
  {
    id: 12,
    name: 'Yılan Balığı Füme',
    category: 'fume',
    subcategory: 'yılan balığı',
    image: '/products/snake.png',
    packedImage: '/products/packed/YILAN_FUME.png',
    icon: '/fish/yilan-jpg/',
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
    ],
    nutritionInfo: {
      ...defaultNutritionInfo,
      per100g: {
        ...defaultNutritionInfo.per100g,
        energy: { kj: 354.00, kcal: 236.00 },
        protein: 23.60,
        fat: { total: 14.90, saturated: 4.47 },
        carbs: { total: 0, sugars: 0 },
        salt: 0.10
      },
      perServing: {
        ...defaultNutritionInfo.perServing,
        energy: { kj: 194.70, kcal: 129.80 },
        protein: 12.98,
        fat: { total: 8.20, saturated: 2.46 },
        carbs: { total: 0, sugars: 0 },
        salt: 0.06
      }
    }
  },
  {
    id: 13,
    name: 'Karışık Deniz Ürünleri',
    category: 'marine',
    subcategory: 'karışık',
    image: '/products/karisik.jpg',
    packedImage: '/products/packed/KARISIK_DENIZ_URUNLERİ.png',
    icon: '/fish/jpg/',
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
    ],
    nutritionInfo: {
      ...defaultNutritionInfo,
      per100g: {
        ...defaultNutritionInfo.per100g,
        energy: { kj: 1222.84, kcal: 292.07 },
        protein: 13.37,
        fat: { total: 26.51, saturated: 7.95 },
        carbs: { total: 0, sugars: 0 },
        salt: 1.91
      },
      perServing: {
        ...defaultNutritionInfo.perServing,
        energy: { kj: 672.56, kcal: 160.64 },
        protein: 7.35,
        fat: { total: 14.58, saturated: 4.37 },
        carbs: { total: 0, sugars: 0 },
        salt: 1.05
      }
    }
  }
];

allProducts.forEach(product => {
  product.packedImage = product.packedImage || product.image || '/placeholder.svg';
});

export const fumeProducts = allProducts.filter(product => product.category === 'fume')
export const marineProducts = allProducts.filter(product => product.category === 'marine')

export const productCategories = {
  all: 'Tüm Ürünler',
  fume: 'Füme Ürünler',
  marine: 'Marine Ürünler'
}

export const featuredProducts = [
  allProducts[0],
  allProducts[2],
  allProducts[4],
];

export default allProducts;

