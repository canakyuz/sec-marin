'use client'

import Link from 'next/link'
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react'
import { useContent } from '@/app/hooks/useContent'
import { DecorativeBackground } from './DecorativeBackground'

export default function Footer() {
  const content = useContent()

  if (!content || !content.common) {
    return null
  }

  const { footer, navigation } = content.common

  return (
      <DecorativeBackground>
        <footer className="bg-slate-800 bg-opacity-95 text-white pt-12 pb-6 relative z-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">{content.common.siteName}</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <MapPin className="w-5 h-5 mr-2 mt-1 text-blue-400" />
                    <span className="text-gray-300 text-sm">{footer.address}</span>
                  </li>
                  <li className="flex items-center">
                    <Phone className="w-5 h-5 mr-2 text-blue-400" />
                    <span className="text-gray-300 text-sm">{footer.phone}</span>
                  </li>
                  <li className="flex items-center">
                    <Mail className="w-5 h-5 mr-2 text-blue-400" />
                    <span className="text-gray-300 text-sm">{footer.email}</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">{footer.quickLinks}</h3>
                <ul className="space-y-2">
                  <li><Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors">{navigation.home}</Link></li>
                  <li><Link href="/products" className="text-gray-300 hover:text-blue-400 transition-colors">{navigation.products}</Link></li>
                  <li><Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">{navigation.about}</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">{footer.contact}</h3>
                <div className="flex space-x-4 mb-4">
                  <a href="#" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-6 text-center">
              <p className="text-gray-400 text-xs">
                &copy; {new Date().getFullYear()} {content.common.siteName}. {footer.rights}
                <span className="mx-1">|</span>
                <span>Designed by </span>
                <a href="https://canakyuz.dev"><span className="text-gray-300">{footer.designedBy}</span></a>
              </p>
            </div>
          </div>
        </footer>
      </DecorativeBackground>
  )
}

