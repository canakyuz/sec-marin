import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Layout from './components/Layout'
import { LanguageProvider } from './contexts/LanguageContext'
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sec Marin Gıda A.Ş. - Geleneksel Lezzetler, Modern Sunum',
  description: 'İzmir\'de geleneksel yöntemlerle üretilen kaliteli deniz ürünleri. Füme ve ileri işleme tekniklerinde uzmanlaşmış kadromuzla hizmetinizdeyiz.',
  icons: {
    icon: [
      {
        url: '/favicon.ico',
      },
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={`${inter.className} bg-blue-50`}>
        <LanguageProvider>
          <Layout>
            {children}
            <Analytics />
          </Layout>
        </LanguageProvider>
      </body>
    </html>
  )
}

