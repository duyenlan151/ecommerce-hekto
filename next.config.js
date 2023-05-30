const withImages = require('next-images');

module.exports = withImages({
  images: {
    domains: [
      'images.unsplash.com',
      'i.dummyjson.com',
      'localhost',
      'ecommerce-hekto-dl.vercel.app',
    ],
  },
  webpack(config, options) {
    return config;
  },
  env: {
    BASE_URL: process.env.BASE_URL,
    MONGODB_URI: process.env.MONGODB_URI,
    HOST_URL: process.env.HOST_URL,
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
