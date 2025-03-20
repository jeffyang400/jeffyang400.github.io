import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/nextjs-website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/nextjs-website' : '',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
