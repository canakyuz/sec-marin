'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import { useContent } from '@/app/hooks/useContent'
import { useLanguage } from '@/app/contexts/LanguageContext'
import { WavePattern, SpiralPattern, FishPattern } from './DecorativeIcons'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname()
  const [activePage, setActivePage] = useState(pathname); 
  const content = useContent()
  const navigation = content?.common?.navigation || {
    home: "Home",
    products: "Products",
    about: "About",
  };

  const { language } = useLanguage()

  const isHomePage = pathname === '/' || pathname === '/en'

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    setActivePage(pathname); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const headerClass = isHomePage
    ? `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`
    : 'bg-white shadow-md'

  const linkClass = (isHomePage && !isScrolled) 
    ? 'text-white hover:text-gray-200 transition-colors' 
    : 'text-gray-700 hover:text-gray-900 transition-colors'

  return (
    <header className={`${headerClass} px-4 md:px-8 h-16 md:h-20`}>
      <div className="container mx-auto py-4 md:px-0 px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 md:gap-4 overflow-hidden">
          <Image 
            src="/logo-text.png"
            alt="Sec Marin Logo" 
            width={120}
            height={40}
            className="shrink-0 md:w-[120px] md:h-[60px]"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-8"> 
          <ul className="flex space-x-8">
            {[
              { href: "/", label: navigation.home },
              { href: "/products", label: navigation.products },
              { href: "/about", label: navigation.about },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${linkClass} ${
                    activePage === item.href ? "font-semibold" : ""
                  } hover:text-blue-600 transition-colors`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <LanguageSwitcher />
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden ${
              isHomePage && !isScrolled ? 'text-white' : 'text-gray-800'
            } hover:text-gray-600 transition-colors`} 
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 flex flex-col items-center justify-center overflow-hidden"> 
          {/* Decorative background */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-64 text-blue-300">
              <WavePattern />
            </div>
            <div className="absolute bottom-0 right-0 w-64 h-64 text-blue-300 transform rotate-180">
              <SpiralPattern />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 text-blue-300">
              <FishPattern />
            </div>
          </div>

          {/* Logo and site name */}
          <div className="absolute top-4 left-4 flex items-center">
            <Image 
              src="/placeholder.svg?height=50&width=50"
              alt="Sec Marin Logo" 
              width={50} 
              height={50} 
              className="mr-2"
            />
            <span className="text-lg font-semibold text-gray-800">
              {content?.common?.siteName}
            </span>
          </div>

          {/* Close button */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-4 right-4 text-gray-800 hover:text-gray-600"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <ul className="space-y-4 text-center relative z-10">
            {[
              { href: "/", label: navigation.home },
              { href: "/products", label: navigation.products },
              { href: "/about", label: navigation.about },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-2xl font-semibold ${
                    pathname === item.href
                      ? "text-blue-600"
                      : "text-gray-800 hover:text-blue-600"
                  } transition-colors`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 relative z-10">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </header>
  )
}

