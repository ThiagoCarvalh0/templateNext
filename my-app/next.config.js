/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cms.btor.app.br',
        port: '',
        pathname: '/UPLOAD/UPLOAD_77/**',
      },
    ],
  },
}

module.exports = nextConfig
