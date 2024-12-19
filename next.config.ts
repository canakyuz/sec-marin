import type { NextConfig } from 'next'

const config: NextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['localhost', 'vercel.app'],
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
}

export default config