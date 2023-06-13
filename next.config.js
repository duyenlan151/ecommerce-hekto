/**
 * @type {import('next').NextConfig}
 */

const path = require('path');
const nextTranslate = require('next-translate-plugin');

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
  // publicExcludes: ['!resume.pdf'],
  buildExcludes: ['/app-build-manifest.json$/'],
});
module.exports = nextTranslate(
  withPWA({
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
        'stablo-pro.web3templates.com',
      ],
    },
    typescript: {
      ignoreBuildErrors: false,
    },
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    },
    // ...nextTranslate(),
    // async redirects() {
    //   return [
    //     {
    //       source: `/admin`,
    //       destination: `/admin/dashboard`,
    //       permanent: true,
    //     },
    //   ];
    // },
    // async rewrites() {
    //   return [
    //     {
    //       source: `/admin`,
    //       destination: `/admin/dashboard`,
    //     },
    //   ];
    // },
    async redirects() {
      return [
        {
          source: '/admin',
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
    async headers() {
      return [
        {
          // matching all API routes
          source: '/api/:path*',
          headers: [
            { key: 'Access-Control-Allow-Credentials', value: 'true' },
            { key: 'Access-Control-Allow-Origin', value: '*' },
            { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
            {
              key: 'Access-Control-Allow-Headers',
              value:
                'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
            },
          ],
        },
      ];
    },
  })
);

// module.exports = nextTranslate(withPWAConfig);
