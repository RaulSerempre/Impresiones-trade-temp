/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: false,
  assetPrefix: '',
  output: 'standalone',
  images: {
    loader: 'akamai',
    path: ''
  },
  async rewrites() {
    return [
      {
        source: '/:any*',
        destination: '/',
      },
    ];
  },
  experimental: {
    forceSwcTransforms: true,
  }
}

module.exports = nextConfig