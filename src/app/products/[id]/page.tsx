"use client";

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { DecorativeBackground } from '@/app/components/DecorativeBackground';
import { allProducts } from '@/data/products-data';
import { productNutrition } from '@/data/nutrition-data';
import { productServingSuggestions } from '@/data/serving-suggestions-data';
import { recipes } from '@/data/recipes-data';
import { ProductDetails, RecipeDisplay } from '../../components/ClientComponents';
import { use } from 'react';

type PageProps = {
    params: Promise<{ id: string }> & { id: string };
};

export default function ProductPage({ params }: PageProps) {
    const id = use(params).id;
    const productId = parseInt(id);
    const product = allProducts.find(p => p.id === productId);

    if (!product) {
        notFound();
    }

    const nutritionData = productNutrition[productId];
    const servingSuggestions = productServingSuggestions[productId] || [];
    const productRecipes = recipes.filter(recipe => recipe.productId === productId);

    return (
        <DecorativeBackground>
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

                {productRecipes.length > 0 && (
                    <div className="mt-12 md:mt-16">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">Tarifler</h2>
                        <RecipeDisplay recipes={productRecipes} />
                    </div>
                )}
            </div>
        </DecorativeBackground>
    );
}

