/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cmsdev.btor.dev.br',
        port: '',
        pathname: '/UPLOAD/UPLOAD_77/**',
      },
    ],
  },
  typescript:{
    ignoreBuildErrors: true
  }
}

module.exports = nextConfig
