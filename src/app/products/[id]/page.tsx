'use client'

import { ArrowLeft, ChefHat, Utensils } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { useState } from 'react'
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { allProducts } from '@/data/products-data'
import { useContent } from '@/app/hooks/useContent'
import { DecorativeLayout } from '@/app/components/DecorativeLayout'
import { cn } from "@/lib/utils"

export default function ProductPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState<'details' | 'nutrition'>('details')
  const product = allProducts.find(p => p.id === parseInt(params.id))
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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

            <div className="space-y-4 md:space-y-6">
              <div>
                <Badge variant="secondary" className="mb-2 md:mb-3">
                  {product.category === 'füme' ? 'Füme Ürünler' : 'Marine Ürünler'}
                </Badge>
                <h1 className="text-2xl md:text-3xl font-bold">{product.name}</h1>
                <p className="text-gray-600 mt-2 text-sm md:text-base">{product.description}</p>
              </div>

              <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-4 md:space-x-8" aria-label="Tabs">
                  {['details', 'nutrition'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab as 'details' | 'nutrition')}
                      className={cn(
                        activeTab === tab
                          ? 'border-blue-500 text-blue-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                        'whitespace-nowrap py-3 md:py-4 px-1 border-b-2 font-medium text-xs md:text-sm'
                      )}
                    >
                      {tab === 'details' && 'Ürün Detayı ve Servis Önerileri'}
                      {tab === 'nutrition' && 'Besin Değerleri'}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="mt-6 md:mt-8">
                {activeTab === 'details' && (
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-sm md:text-base">Ürün Detayı</h4>
                      <p className="text-gray-600 text-sm md:text-base">{product.processInfo}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-sm md:text-base">Servis Önerileri</h4>
                      <ul className="space-y-2">
                        {servingSuggestions.map((suggestion, index) => (
                          <li key={index} className="flex items-center text-gray-600 text-sm md:text-base">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                            {suggestion}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === 'nutrition' && (
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2">Besin Değerleri</th>
                          <th className="text-right py-2">100g için</th>
                          <th className="text-right py-2">1 porsiyon için ({nutritionData.perServing.size}g)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr className="bg-gray-50">
                          <td className="py-2">Enerji (kJ)</td>
                          <td className="text-right py-2">{nutritionData.per100g.energy.kj}</td>
                          <td className="text-right py-2">{nutritionData.perServing.energy.kj}</td>
                        </tr>
                        <tr>
                          <td className="py-2">Enerji (kcal)</td>
                          <td className="text-right py-2">{nutritionData.per100g.energy.kcal}</td>
                          <td className="text-right py-2">{nutritionData.perServing.energy.kcal}</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="py-2">Yağ (g)</td>
                          <td className="text-right py-2">{nutritionData.per100g.fat.total}</td>
                          <td className="text-right py-2">{nutritionData.perServing.fat.total}</td>
                        </tr>
                        <tr>
                          <td className="py-2 pl-4">- Doymuş Yağ (g)</td>
                          <td className="text-right py-2">{nutritionData.per100g.fat.saturated}</td>
                          <td className="text-right py-2">{nutritionData.perServing.fat.saturated}</td>
                        </tr>
                        <tr>
                          <td className="py-2 pl-4">- Doymamış Yağ (g)</td>
                          <td className="text-right py-2">{nutritionData.per100g.fat.unsaturated}</td>
                          <td className="text-right py-2">{nutritionData.perServing.fat.unsaturated}</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="py-2">Karbonhidrat (g)</td>
                          <td className="text-right py-2">{nutritionData.per100g.carbs.total}</td>
                          <td className="text-right py-2">{nutritionData.perServing.carbs.total}</td>
                        </tr>
                        <tr>
                          <td className="py-2 pl-4">- Şekerler (g)</td>
                          <td className="text-right py-2">{nutritionData.per100g.carbs.sugars}</td>
                          <td className="text-right py-2">{nutritionData.perServing.carbs.sugars}</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="py-2">Protein (g)</td>
                          <td className="text-right py-2">{nutritionData.per100g.protein}</td>
                          <td className="text-right py-2">{nutritionData.perServing.protein}</td>
                        </tr>
                        <tr>
                          <td className="py-2">Tuz (g)</td>
                          <td className="text-right py-2">{nutritionData.per100g.salt}</td>
                          <td className="text-right py-2">{nutritionData.perServing.salt}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
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

