'use client';

import { ChefHat, Utensils } from 'lucide-react';
import { Card } from "@/components/ui/card";
import Image from 'next/image';
import ProductTabs from '../../components/ProdcutTabs';
import type { Product } from '@/types/product';

type RecipeDisplayProps = {
    recipes: any[];
}

export function RecipeDisplay({ recipes }: RecipeDisplayProps) {
    return (
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
    );
}

export function ProductDetails({
                                   product,
                                   nutritionData,
                                   servingSuggestions
                               }: {
    product: Product;
    nutritionData: any;
    servingSuggestions: string[];
}) {
    return (
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
    );
}