"use client";

import { ArrowLeft, ChefHat, Utensils } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Card } from "@/components/ui/card"
import { allProducts } from '@/data/products-data'
import { useContent } from '@/app/hooks/useContent'
import { DecorativeLayout } from '@/app/components/DecorativeLayout'
import ProductTabs from '@/components/ProdcutTabs'

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = allProducts.find(p => p.id === parseInt(params.id))
  const content = useContent()

  if (!product) {
    notFound()
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
  }

  const servingSuggestions = [
    'İnce dilimlenmiş olarak kahvaltılarda',
    'Salatalarda',
    'Sandviçlerde',
    'Başlangıç tabağı olarak'
  ]

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
  ]

  return (
      <DecorativeLayout>
        <div className="container mx-auto px-4 py-6 relative">
          <Link
              href="/products"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm md:text-base"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Tüm Ürünlere Dön
          </Link>
        </div>

        <div className="container mx-auto px-4 pb-12 md:pb-16 relative">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm overflow-hidden">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 p-6 md:p-8">
              <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                />
              </div>

              <div>
                <ProductTabs
                    product={product}
                    nutritionData={nutritionData}
                    servingSuggestions={servingSuggestions}
                />
              </div>
            </div>
          </div>

          <div className="mt-12 md:mt-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Tarifler</h2>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
              <div className="w-full space-y-6">
                {recipes.map((recipe, index) => (
                    <Card key={index} className="p-4 md:p-6 bg-white/90 backdrop-blur-sm relative overflow-hidden h-full">
                      <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 flex items-center">
                        <ChefHat className="mr-2 h-6 w-6 text-primary" />
                        {recipe.title}
                      </h3>
                      <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">{recipe.description}</p>

                      <div className="space-y-4 md:space-y-6">
                        <div>
                          <h4 className="font-semibold mb-2 text-sm md:text-base">Malzemeler</h4>
                          <ul className="list-disc list-inside text-gray-600 space-y-1 text-xs md:text-sm">
                            {recipe.ingredients.map((ingredient, idx) => (
                                <li key={idx}>{ingredient}</li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2 text-sm md:text-base">Hazırlanışı</h4>
                          <ol className="list-decimal list-inside text-gray-600 space-y-1 text-xs md:text-sm">
                            {recipe.instructions.map((instruction, idx) => (
                                <li key={idx}>{instruction}</li>
                            ))}
                          </ol>
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 text-gray-300 opacity-20">
                        <Utensils className="w-16 h-16" />
                      </div>
                    </Card>
                ))}
              </div>
              <div className="hidden md:block w-full h-full">
                <div className="sticky top-24 w-full h-full">
                  <div className="relative w-full h-full">
                    <Image
                        src="/placeholder.svg"
                        alt="Tarif Görseli"
                        fill
                        className="rounded-lg object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DecorativeLayout>
  )
}