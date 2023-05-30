import { ProductModel, Image } from 'models';
import { User } from '../interfaces';

/** Dummy user data. */
export const sampleUserData: User[] = [
  { id: 101, name: 'Alice' },
  { id: 102, name: 'Bob' },
  { id: 103, name: 'Caroline' },
  { id: 104, name: 'Dave' },
];

export const sliderContent: Image[] = [
  {
    ID: 1,
    title: 'digitalBT',
    description: 'digitalBD',
    bgImg: '/images/slider-img/toy-banner.webp',
    url: '/',
  },
  {
    ID: 2,
    title: 'stationeryBT',
    description: 'stationeryBD',
    bgImg: '/images/slider-img/stationery-banner.webp',
    url: '/',
  },
  {
    ID: 3,
    title: 'toyBT',
    description: 'toyBD',
    bgImg: '/images/slider-img/digital-banner.webp',
    url: '/',
  },
  {
    ID: 4,
    title: 'houseBT',
    description: 'houseBD',
    bgImg: '/images/slider-img/house-banner.webp',
    url: '/',
  },
  {
    ID: 5,
    title: 'fashionBT',
    description: 'fashionBD',
    bgImg: '/images/slider-img/fashion-banner.webp',
    url: '/',
  },
  {
    ID: 6,
    title: 'beautyBT',
    description: 'beautyBD',
    bgImg: '/images/slider-img/beauty-banner.webp',
    url: '/',
  },
];
