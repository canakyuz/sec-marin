import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { DecorativeLayout } from '@/app/components/DecorativeLayout';
import { allProducts } from '@/data/products-data';
import { ProductDetails, RecipeDisplay } from '../../components/ClientComponents';
import { use } from 'react';

type PageProps = {
  params: Promise<{ id: string }> & { id: string };
};

export default function ProductPage({ params }: PageProps) {
  // params'ı Promise olarak kullanıyoruz
  const id = use(params).id;
  const product = allProducts.find(p => p.id === parseInt(id));

  if (!product) {
    notFound();
  }

  const nutritionData = {
    per100g: {
      energy: { kj: 733.89, kcal: 175.4 },
      fat: {
        total: 2.16,
        saturated: 0.74,
        unsaturated: 1.42
      },
      carbs: {
        total: 10.29,
        sugars: 0.00
      },
      protein: 28.70,
      salt: 0.84
    },
    perServing: {
      size: 55,
      energy: { kj: 403.64, kcal: 96.47 },
      fat: {
        total: 1.19,
        saturated: 0.41,
        unsaturated: 0.78
      },
      carbs: {
        total: 5.66,
        sugars: 0.00
      },
      protein: 15.79,
      salt: 0.46
    }
  };

  const servingSuggestions = [
    'İnce dilimlenmiş olarak kahvaltılarda',
    'Salatalarda',
    'Sandviçlerde',
    'Başlangıç tabağı olarak'
  ];

  const recipes = [
    {
      title: 'Füme Somon Salata',
      description: 'Taze yeşillikler üzerine füme somon dilimleri, avokado ve kiraz domates ile hazırlanan lezzetli bir salata.',
      ingredients: [
        '100g füme somon',
        'Karışık yeşillik',
        '1 adet avokado',
        '10 adet kiraz domates',
        'Zeytinyağı ve limon sosu'
      ],
      instructions: [
        'Yeşillikleri yıkayıp kurulayın',
        'Avokadoyu dilimleyin',
        'Domatesleri ikiye bölün',
        'Malzemeleri karıştırıp üzerine somon dilimlerini yerleştirin',
        'Zeytinyağı ve limon sosu ile servis yapın'
      ]
    }
  ];

  return (
      <DecorativeLayout>
        <div className="container mx-auto px-5 py-6 relative">
          <Link
              href="/products"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm md:text-base"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Tüm Ürünlere Dön
          </Link>
        </div>

        <div className="container mx-auto px-4 md:px-0 pb-12 md:pb-16 relative">
          <ProductDetails
              product={product}
              nutritionData={nutritionData}
              servingSuggestions={servingSuggestions}
          />

          <div className="mt-12 md:mt-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Tarifler</h2>
            <RecipeDisplay recipes={recipes} />
          </div>
        </div>
      </DecorativeLayout>
  );
}