'use client'

import { Button } from "@/components/ui/button"
import { useLanguage } from '@/app/contexts/LanguageContext'
import { useState, useEffect } from 'react'

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [isHomePage, setIsHomePage] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleLanguage = () => {
    setLanguage(language === 'tr' ? 'en' : 'tr')
  }

  useEffect(() => {
    const pathname = window.location.pathname
    setIsHomePage(pathname === '/' || pathname === '/en')

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const TurkishFlag = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" className="w-6 h-4">
      <rect width="1200" height="800" fill="#E30A17"/>
      <circle cx="425" cy="400" r="200" fill="#ffffff"/>
      <circle cx="475" cy="400" r="160" fill="#E30A17"/>
      <polygon points="583.334,400 764.235,458.779 652.431,304.894 652.431,495.106 764.235,341.221" fill="#ffffff"/>
    </svg>
  )

  const EnglishFlag = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className="w-6 h-4">
      <clipPath id="s">
        <path d="M0,0 v30 h60 v-30 z"/>
      </clipPath>
      <clipPath id="t">
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/>
      </clipPath>
      <g clipPath="url(#s)">
        <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
        <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
      </g>
    </svg>
  )

  return (
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={toggleLanguage}
      className={`p-1 h-8 text-xs flex items-center ${isHomePage && !isScrolled ? 'text-white hover:text-gray-200' : 'text-gray-600 hover:text-gray-800'} transition-colors`}
    >
      {language === 'tr' ? <TurkishFlag /> : <EnglishFlag />}
      <span className="ml-2">
        {language === 'tr' ? 'TR' : 'EN'}
      </span>
    </Button>
  )
}

