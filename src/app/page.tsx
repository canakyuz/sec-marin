'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Key, ReactElement, ReactNode, ReactPortal, useEffect, useRef } from 'react'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {featuredProducts} from '@/data/home-data'
import {useContent} from './hooks/useContent'
import {DecorativeBackground} from './components/DecorativeBackground'
import ProductCard from './components/product/ProductCard'

gsap.registerPlugin(ScrollTrigger)

export default function HomePage() {
  const content = useContent()
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    gsap.from('.hero-content', {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top center',
      },
    })

    gsap.from('.featured-product', {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 0.8,
      scrollTrigger: {
        trigger: '.featured-products',
        start: 'top bottom',
      },
    })

    // Autoplay video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(error => console.log("Video autoplay was prevented:", error))
    }
  }, [])

  if (!content || !content.home) {
    return <div>{content?.common?.loading || 'Loading...'}</div>
  }

  return (
      <main>
        {/* Hero section */}
        <div className="hero-section relative h-screen overflow-hidden z-10">
          <video
              ref={videoRef}
              className="absolute top-0 left-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="/video-poster.jpg"
          >
            <source src="/sardines.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">
                {content.home.hero.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-300">
                {content.home.hero.description}
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 animate-fade-in-up animation-delay-600">
                <Link href="/products"
                      className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                  {content.home.hero.cta.products}
                </Link>
                <Link href="/about"
                      className="bg-transparent hover:bg-white/10 text-white font-semibold py-3 px-6 border border-white rounded-full transition duration-300 ease-in-out">
                  {content.home.hero.cta.about}
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="w-0.5 h-8 bg-white/20 rounded-full overflow-hidden">
              <div className="w-full h-1/3 bg-white absolute top-0 animate-scroll-line"></div>
            </div>
          </div>
        </div>
        <div>
          {/* Featured Products Section */}
          <section className="featured-products py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-slate-800">{content.home.featuredProducts.title}</h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                  {content.home.featuredProducts.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                {featuredProducts.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))}
              </div>
            </div>
          </section>

          {/* About Us Section */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="w-full md:w-1/2">
                  <div className="relative">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                      <Image
                          src={content.home.about.image || "/placeholder.svg"}
                          alt="Sec Marin Üretim Tesisi"
                          width={600}
                          height={450}
                          className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-24 h-24 md:w-32 md:h-32 bg-[#A5C5E7] rounded-2xl"/>
                  </div>
                </div>

                <div className="w-full md:w-1/2">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">{content.home.about.title}</h2>
                  {content.home.about.description.map((paragraph: string | number | bigint | boolean | ReactElement | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement | Iterable<ReactNode> | null | undefined> | null | undefined, index: Key | null | undefined) => (
                      <p key={index} className="text-gray-600 mb-4 text-lg">{paragraph}</p>
                  ))}
                  <Link
                      href="/about"
                      className="inline-flex items-center bg-slate-800 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors text-lg mt-4"
                  >
                    {content.common.cta.learnMore}
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Quality Assurance Section */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800">{content.home.qualityAssurance.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                {content.home.qualityAssurance.items.map((item: {
                  title: string | number | bigint | boolean | ReactElement | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement | Iterable<ReactNode> | null | undefined> | null | undefined;
                  description: string | number | bigint | boolean | ReactElement | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement | Iterable<ReactNode> | null | undefined> | null | undefined
                }, index: Key | null | undefined) => (
                    <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center transition-all duration-300 hover:shadow-xl">
                      <h3 className="text-xl font-semibold mb-4 text-slate-700">{item.title}</h3>
                      <p className="text-gray-600 text-lg">{item.description}</p>
                    </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
  )
}

