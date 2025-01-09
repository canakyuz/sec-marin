import { supabase } from '../lib/supabase'

export type Language = 'tr' | 'en'

export type Product = {
    id: number;
    name: string;
    category: 'füme' | 'marine';
    subcategory?: string;  // Make subcategory optional
    image: string;
    icon: string;
    shortDescription: string;
    description: string;
    features: string[];
    processInfo: string;
    servingSuggestions: string[];
}

export type Recipe = {
    id: number
    title: string
    description: string
    ingredients: string[]
    instructions: string[]
    productId: number
}

export async function getProducts(lang: Language): Promise<Product[]> {
    const { data, error } = await supabase
        .from('products')
        .select('*')

    if (error) throw error
    return data
}

export async function getFumeProducts(lang: Language): Promise<Product[]> {
    const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('category', 'füme')

    if (error) throw error
    return data
}

export async function getMarineProducts(lang: Language): Promise<Product[]> {
    const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('category', 'marine')

    if (error) throw error
    return data
}

export async function getProductById(lang: Language, id: number): Promise<Product | null> {
    const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .single()

    if (error) throw error
    return data
}

export async function getCommonContent(lang: Language) {
    const { data, error } = await supabase
        .from('site_content')
        .select(`${lang}->common`)
        .single()

    if (error) throw error
    return data[lang].common
}

export async function getHomeContent(lang: Language) {
    const { data, error } = await supabase
        .from('site_content')
        .select(`${lang}->home`)
        .single()

    if (error) throw error
    return data[lang].home
}

export async function getAboutContent(lang: Language) {
    const { data, error } = await supabase
        .from('site_content')
        .select(`${lang}->about`)
        .single()

    if (error) throw error
    return data[lang].about
}

export async function getProductsContent(lang: Language) {
    const { data, error } = await supabase
        .from('site_content')
        .select(`${lang}->products`)
        .single()

    if (error) throw error
    return data[lang].products
}

export async function getCategories(lang: Language) {
    const { data, error } = await supabase
        .from('site_content')
        .select(`${lang}->products->categories`)
        .single()

    if (error) throw error
    return data[lang].products.categories
}

