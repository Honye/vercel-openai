/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/(.*)',
        destination: '/api'
      }
    ]
  }
}

module.exports = nextConfig
