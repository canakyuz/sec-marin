export interface Product {
  id: number;
  name: string;
  category: 'fume' | 'marine';
  subcategory: string;
  image: string;
  packedImage: string;
  icon: string;
  shortDescription: string;
  description: string;
  features: string[];
  processInfo: string;
  servingSuggestions: string[];
  nutritionInfo?: NutritionInfo;
  recipes?: Recipe[];
}


export interface NutritionInfo {
  per100g: {
    energy: {
      kj: number;
      kcal: number;
    };
    fat: {
      total: number;
      saturated: number;
      unsaturated?: number;
    };
    carbs: {
      total: number;
      sugars: number;
    };
    protein: number;
    salt: number;
  };
  perServing: {
    size: number;  // in grams
    energy: {
      kj: number;
      kcal: number;
    };
    fat: {
      total: number;
      saturated: number;
      unsaturated?: number;
    };
    carbs: {
      total: number;
      sugars: number;
    };
    protein: number;
    salt: number;
  };
}

export interface Recipe {
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
}
