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
  reactStrictMode: false,
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
  async redirects() {
    return [
      {
        source: `${process.env.NEXT_PUBLIC_HOST_URL}/admin`,
        destination: '/admin/dashboard',
        permanent: true,
      },
    ];
  },
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      net: false,
      dns: false,
      child_process: false,
      tls: false,
    };

    return config;
  },
});
