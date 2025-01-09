"use client";
import { Suspense } from 'react'
import PageHeader from '../components/PageHeader'
import ProductList from '@/app/components/product/ProductList'
import Loading from '@/app/loading'
import {useContent} from "@/app/hooks/useContent";

export default function ProductsPage() {
    const content = useContent()

    return (
        <div className="min-h-screen bg-gray-50">
            <PageHeader
                title={content.products.title}
                description={content.products.description}
                mediaType="video"
                mediaSrc="sardines.mp4"
            />
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <Suspense fallback={<Loading />}>
                        <ProductList />
                    </Suspense>
                </div>
            </section>
        </div>
    )
}

