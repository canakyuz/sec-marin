import siteContent from './site-content.json'

export type Language = 'tr' | 'en'

export type Recipe = {
    title: string
    description: string
    ingredients: string[]
    instructions: string[]
}

export type Product = {
    id: number
    name: string
    category: 'füme' | 'marine'
    subcategory: string
    image: string
    icon: 'minimalist' | 'wavy' | 'octopus'
    shortDescription: string
    description: string
    features: string[]
    processInfo: string
    servingSuggestions: string[]
    nutritionInfo?: {
        protein: string
        fat: string
        carbs: string
        calories: string
    }
    recipes?: Recipe[]
}

export type Categories = {
    all: string
    füme: string
    marine: string
}

export function getProducts(lang: Language): Product[] {
    return siteContent[lang].products
}

export function getCategories(lang: Language): Categories {
    return siteContent[lang].categories
}

export function getFumeProducts(lang: Language): Product[] {
    return getProducts(lang).filter(product => product.category === 'füme')
}

export function getMarineProducts(lang: Language): Product[] {
    return getProducts(lang).filter(product => product.category === 'marine')
}

export function getProductById(lang: Language, id: number): Product | undefined {
    return getProducts(lang).find(product => product.id === id)
}

