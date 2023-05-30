/**
 * @type {import('next').NextConfig}
 */

const path = require('path');

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
  publicExcludes: ['!resume.pdf'],
});

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com',
      'i.dummyjson.com',
      'localhost',
      'ecommerce-hekto-dl.vercel.app',
      'ucarecdn.com',
      'cdn.buymeacoffee.com',
      'res.cloudinary.com',
      'imgur.com',
      'i.imgur.com',
      'cutt.ly',
      'activity-graph.herokuapp.com',
      'i.scdn.co', // images from spotify
      'images.unsplash.com',
      'm.media-amazon.com', // for imdb images
    ],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
});
