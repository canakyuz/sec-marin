import { supabase } from '@/lib/supabase'

export type Language = 'tr' | 'en'

export type Product = {
    id: number;
    name: string;
    category: 'füme' | 'marine';
    subcategory?: string;
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

interface SiteContent {
    common: {
        navigation: Record<string, string>;
        footer: Record<string, string>;
        [key: string]: unknown;
    };
    home: {
        hero: Record<string, string>;
        features: Array<Record<string, string>>;
        [key: string]: unknown;
    };
    about: {
        content: Record<string, string>;
        team: Array<Record<string, string>>;
        [key: string]: unknown;
    };
    products: {
        categories: {
            fume: Record<string, string>;
            marine: Record<string, string>;
            [key: string]: Record<string, string>;
        };
        [key: string]: unknown;
    };
}

type DatabaseContent = {
    tr: SiteContent;
    en: SiteContent;
}

export async function getProducts(): Promise<Product[]> {
    const { data, error } = await supabase
        .from('products')
        .select('*')

    if (error) throw error
    return data || []
}

export async function getFumeProducts(): Promise<Product[]> {
    const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('category', 'füme')

    if (error) throw error
    return data || []
}

export async function getMarineProducts(): Promise<Product[]> {
    const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('category', 'marine')

    if (error) throw error
    return data || []
}

export async function getProductById(id: number): Promise<Product | null> {
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
        .select('content')
        .single()

    if (error) throw error
    if (!data?.content) throw new Error('No content found')

    const content = data.content as DatabaseContent
    return content[lang].common
}

export async function getHomeContent(lang: Language) {
    const { data, error } = await supabase
        .from('site_content')
        .select('content')
        .single()

    if (error) throw error
    if (!data?.content) throw new Error('No content found')

    const content = data.content as DatabaseContent
    return content[lang].home
}

export async function getAboutContent(lang: Language) {
    const { data, error } = await supabase
        .from('site_content')
        .select('content')
        .single()

    if (error) throw error
    if (!data?.content) throw new Error('No content found')

    const content = data.content as DatabaseContent
    return content[lang].about
}

export async function getProductsContent(lang: Language) {
    const { data, error } = await supabase
        .from('site_content')
        .select('content')
        .single()

    if (error) throw error
    if (!data?.content) throw new Error('No content found')

    const content = data.content as DatabaseContent
    return content[lang].products
}

export async function getCategories(lang: Language) {
    const { data, error } = await supabase
        .from('site_content')
        .select('content')
        .single()

    if (error) throw error
    if (!data?.content) throw new Error('No content found')

    const content = data.content as DatabaseContent
    return content[lang].products.categories
}

