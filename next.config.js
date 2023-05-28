const withImages = require('next-images');

module.exports = withImages({
  images: {
    domains: ['images.unsplash.com', 'i.dummyjson.com'],
  },
  webpack(config, options) {
    return config;
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  async redirects() {
    return [
      {
        source: '/admin',
        destination: '/admin/dashboard',
        permanent: true,
      },
    ];
  },
});
