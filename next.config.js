/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: { removeConsole: process.env.NODE_ENV !== 'development' },
  eslint: { ignoreDuringBuilds: true },
  experimental: { appDir: true },
  poweredByHeader: false,
  reactStrictMode: true,
  rewrites: async () => {
    return [{ destination: '/api/heartbeat', source: '/heartbeat' }];
  },
  swcMinify: true,
};

module.exports = nextConfig;
