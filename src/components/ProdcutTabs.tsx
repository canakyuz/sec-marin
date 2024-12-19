'use client'

import { useState } from 'react'
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Product } from '@/types/product'

interface ProductTabsProps {
    product: Product
    nutritionData: {
        per100g: any
        perServing: any
    }
    servingSuggestions: string[]
}

export default function ProductTabs({ product, nutritionData, servingSuggestions }: ProductTabsProps) {
    const [activeTab, setActiveTab] = useState<'details' | 'nutrition'>('details')

    return (
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
                            {/* ... (rest of the table content remains the same) ... */}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    )
}