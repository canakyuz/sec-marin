export type Recipe = {
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
}

export type Product = {
  id: number;
  name: string;
  category: 'füme' | 'marine';
  subcategory?: 'ahtapot' | 'hamsi' | 'karides' | 'midye' | 'somon' | 'levrek' | 'uskumru' | 'bottarga' | 'lakerda' | 'yılan balığı' | 'çipura' | 'alabalık' | 'torik' | 'karışık';
  image: string;
  shortDescription?: string;
  description: string;
  packedImage: string;
  features: string[];
  processInfo: string;
  icon: string;
  recipes?: Recipe[];
  nutritionInfo?: {
    protein: string;
    fat: string;
    carbs: string;
    calories: string;
  };
  servingSuggestions?: string[];
}

