/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'www.tajhotels.com'],
    unoptimized: false,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      }
    }
    config.externals = [...(config.externals || []), { canvas: 'canvas' }]
    return config
  },
}

module.exports = nextConfig
