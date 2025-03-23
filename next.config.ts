import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/jeffyang400.github.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/jeffyang400.github.io' : '',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
