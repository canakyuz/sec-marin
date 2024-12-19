'use client'

import { useState, useEffect } from 'react'
import siteContent from '@/data/site-content.json'
import { useLanguage } from '../contexts/LanguageContext'

export function useContent() {
  const { language } = useLanguage()
  const [content, setContent] = useState<any>(siteContent['tr']) // Default to Turkish content

  useEffect(() => {
    const selectedContent = siteContent[language as keyof typeof siteContent]
    if (selectedContent) {
      setContent(selectedContent)
    } else {
      console.error(`Content for language ${language} not found`)
      setContent(siteContent['tr']) // Fallback to Turkish content
    }
  }, [language])

  return content
}

