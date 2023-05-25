const withImages = require('next-images');

module.exports = withImages({
  images: {
    domains: ['images.unsplash.com'],
  },
  webpack(config, options) {
    return config;
  },
});
