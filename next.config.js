/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports =  {
  async rewrites() {
    return [
      {
        source: '/api/_register',
        destination: '/api/_register.js',
      },
    ]
  },
}
