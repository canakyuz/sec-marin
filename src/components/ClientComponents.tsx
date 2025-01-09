import React from 'react';

interface Recipe {
    title: string;
    description: string;
    ingredients: string[];
    instructions: string[];
}

export function RecipeDisplay({ recipes }: { recipes: Recipe[] }) {
    return (
        <div className="space-y-8">
            {recipes.map((recipe, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">{recipe.title}</h3>
                    <p className="text-gray-600 mb-4">{recipe.description}</p>
                    <div className="mb-4">
                        <h4 className="font-semibold mb-2">Malzemeler:</h4>
                        <ul className="list-disc list-inside">
                            {recipe.ingredients.map((ingredient, idx) => (
                                <li key={idx}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2">Hazırlanışı:</h4>
                        <ol className="list-decimal list-inside">
                            {recipe.instructions.map((instruction, idx) => (
                                <li key={idx}>{instruction}</li>
                            ))}
                        </ol>
                    </div>
                </div>
            ))}
        </div>
    );
}

