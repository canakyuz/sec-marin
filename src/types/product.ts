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
  subcategory?: 'ahtapot' | 'hamsi' | 'karides' | 'midye' | 'somon' | 'levrek' | 'uskumru' | 'bottarga' | 'lakerda' | 'yılan balığı' | 'çipura' | 'alabalık';
  image: string;
  shortDescription: string;
  description: string;
  features: string[];
  processInfo: string;
  icon: 'minimalist' | 'wavy' | 'octopus';
  recipes?: Recipe[];
  nutritionInfo?: {
    protein: string;
    fat: string;
    carbs: string;
    calories: string;
  };
  servingSuggestions?: string[];
}

