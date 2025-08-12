/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md'],
  async redirects() {
    return [
      {
        source: '/Covert.dmg',
        destination: 'https://github.com/ThomasKidane/covert-public-releases/releases/download/1.0/Covert-1.0.0.dmg',
        permanent: false,
      },
    ]
  },
  async headers() {
    return [
      {
        // Strong caching for any assets placed under /downloads
        source: '/downloads/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
        ],
      },
    ]
  },
}

export default nextConfig; 