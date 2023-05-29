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
    MONGODB_URI: process.env.MONGODB_URI,
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
