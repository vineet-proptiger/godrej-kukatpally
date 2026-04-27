/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev }) => {
    if (dev) config.cache = false
    return config
  },
  async rewrites() {
    return [
      {
        source: '/godrej-kukatpally',
        destination: '/',
      },
      {
        source: '/godrej-kukatpally/privacy-policy',
        destination: '/privacy-policy',
      },
    ]
  },
}
module.exports = nextConfig
