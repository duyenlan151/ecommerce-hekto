import { PageMeta } from 'models';

const pageMeta: PageMeta = {
  ['']: {
    title: 'Heko | Ecommerce - Next.js + TypeScript',
    description: "Hello, I'm Duyen. A Front-end Developer/React Developer from VietNam",
    keywords: 'portfolio duyen, portfolio, duyen blogs',
  },

  ['404']: {
    title: '404 Not Found',
    description: "Hello, I'm Duyen. A Front-end Developer/React Developer from VietNam",
    keywords: 'portfolio duyen, portfolio, duyen blogs',
    breadcrumb: '404 Not Found',
  },

  login: {
    title: 'Login',
    description:
      'These are my personal statistics about me. It includes My Blogs and github Stats and top music stats.',

    keywords: 'stats, Statistics',
    breadcrumb: 'Login',
  },

  contact: {
    title: 'Contact Us',
    description:
      'These are my personal statistics about me. It includes My Blogs and github Stats and top music stats.',

    keywords: 'stats, Statistics',
    breadcrumb: 'Contact us',
  },

  faq: {
    title: 'FAQ',
    description:
      'These are my personal statistics about me. It includes My Blogs and github Stats and top music stats.',

    keywords: 'stats, Statistics',
    breadcrumb: 'Faq',
  },

  cart: {
    title: 'Cart',
    description:
      'These are my personal statistics about me. It includes My Blogs and github Stats and top music stats.',

    keywords: 'stats, Statistics',
    breadcrumb: 'Cart',
  },

  checkout: {
    title: 'Checkout',
    description:
      'These are my personal statistics about me. It includes My Blogs and github Stats and top music stats.',
    // image: 'https://imgur.com/9scFfW5.png',
    keywords: 'stats, Statistics',
    breadcrumb: 'Checkout',
  },

  products: {
    title: 'Heko | Products',
    description:
      'These are my personal statistics about me. It includes My Blogs and github Stats and top music stats.',
    // image: 'https://imgur.com/9scFfW5.png',
    keywords: 'Product Detail',
    currentURL: `${process.env.NEXT_PUBLIC_HOST_URL}/products`,
    breadcrumb: 'Product Detail',
  },

  product: {
    title: 'Product Detail',
    description:
      'These are my personal statistics about me. It includes My Blogs and github Stats and top music stats.',
    // image: 'https://imgur.com/9scFfW5.png',
    keywords: 'Product Detail',
    breadcrumb: 'Product Detail',
  },

  payment: {
    title: 'Payment',
    description:
      'These are my personal statistics about me. It includes My Blogs and github Stats and top music stats.',

    keywords: 'stats, Statistics',
    breadcrumb: 'Payment',
  },

  'order-completed': {
    title: 'Order Completed',
    description:
      'These are my personal statistics about me. It includes My Blogs and github Stats and top music stats.',

    keywords: 'stats, Statistics',
    breadcrumb: 'Order Completed',
  },

  'order-failed': {
    title: 'Order Failed',
    description:
      'These are my personal statistics about me. It includes My Blogs and github Stats and top music stats.',

    keywords: 'stats, Statistics',
    breadcrumb: 'Order Failed',
  },
  utilities: {
    title: 'Utilities',
    description:
      "In case you are wondering What tech I use, Here's the list of what tech I'm currently using for coding on the daily basis. This list is always changing.",

    keywords: 'Utilities, what i use?, utils, setup, uses,',
  },
  blogs: {
    title: 'Blogs',
    description:
      "I've been writing online since 2021, mostly about web development and tech careers. In total, I've written more than 50 articles till now.",

    keywords: 'blog, blog, webdev, react',
  },

  bookmark: {
    title: 'Bookmarked Blogs',
    description: "Bookmarked Blogs of Duyen Lan's blogs by you",

    keywords: 'bookmark, blogs, ',
  },
  certificates: {
    title: 'Certificates',
    description:
      "I've participated in many contests, courses and test and get certified in many skills. You can find the certificates below.",
    image: 'https://imgur.com/J0q1OdT.png',
    keywords: 'Certificates, verified',
  },
  projects: {
    title: 'Projects',
    description:
      "I've been making various types of projects some of them were basics and some of them were complicated.",
    image: 'https://imgur.com/XJqiuNK.png',
    keywords: 'projects, work, side project,',
  },
  about: {
    title: 'About us',
    description: "Hello, I'm Duyen. A Front-end Developer/React Developer from VietNam",
    image: 'https://imgur.com/b0HRaPv.png',
    keywords: 'about, about me, ',
    breadcrumb: 'About Us',
  },
  privacy: {
    title: 'Privacy Policy',
    description: 'Privacy is an important factor for everyone. Following is the privacy policies',
    image: 'https://imgur.com/ghlRutT.png',
    keywords: 'Privacy, Privacy Policies, ',
  },
  snippets: {
    title: 'Code Snippets',
    description:
      "These are a collection of code snippets I've used in the past and saved. These could be useful to you as well.",
    keywords: 'Code, Code Snippets, Snippets',
  },
};

export default pageMeta;
