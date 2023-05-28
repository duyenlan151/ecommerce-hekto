import { ProductItem as ProductItemModel } from 'models';
import { SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import SwipperCommon from '@components/Shared/Swiper/SwiperCommon';
import { ProductItem } from './ProductItem';
import { FadeContainer, opacityVariant } from '@content/FramerMotionVariants';
import { motion } from 'framer-motion';
import AnimatedDiv from '@components/FramerMotion/AnimatedDiv';

export interface ProductFeaturedListProps {
  data?: ProductItemModel[];
}

const dataProduct: ProductItemModel[] = [
  {
    id: 1,
    name: 'Cantilever chair',
    price: '42',
    code: 'Code - Y523201',
    currency: 'EUR',
    thumbnail: ['/images/featured/image01.png'],
    colors: ['#05E6B7', '#F701A8', '#00009D'],
  },
  {
    id: 2,
    name: 'Cantilever chair 2',
    price: '42',
    code: 'Code - Y523201',
    currency: 'EUR',
    thumbnail: ['/images/featured/image02.png'],
    colors: ['#05E6B7', '#F701A8', '#FFEAC1'],
  },
  {
    id: 3,
    name: 'Cantilever chair 3',
    price: '42',
    code: 'Code - Y523201',
    currency: 'EUR',
    thumbnail: ['/images/featured/image03.png'],
    colors: ['#FFEAC1', '#F701A8', '#00009D'],
  },
  {
    id: 4,
    name: 'Cantilever chair 4',
    price: '30',
    code: 'Code - Y523201',
    currency: 'GBP',
    thumbnail: ['/images/featured/image04.png'],
    colors: ['#05E6B7', '#F701A8', '#00009D'],
  },
  {
    id: 5,
    name: 'Cantilever chair',
    price: '42',
    code: 'Code - Y523201',
    currency: 'EUR',
    thumbnail: ['/images/featured/image01.png'],
    colors: ['#05E6B7', '#F701A8', '#00009D'],
  },
  {
    id: 6,
    name: 'Cantilever chair 2',
    price: '42',
    code: 'Code - Y523201',
    currency: 'EUR',
    thumbnail: ['/images/featured/image02.png'],
    colors: ['#05E6B7', '#F701A8', '#FFEAC1'],
  },
  {
    id: 7,
    name: 'Cantilever chair 3',
    price: '42',
    code: 'Code - Y523201',
    currency: 'EUR',
    thumbnail: ['/images/featured/image03.png'],
    colors: ['#FFEAC1', '#F701A8', '#00009D'],
  },
  {
    id: 8,
    name: 'Cantilever chair 4',
    price: '30',
    code: 'Code - Y523201',
    currency: 'GBP',
    thumbnail: ['/images/featured/image04.png'],
    colors: ['#05E6B7', '#F701A8', '#00009D'],
  },
];

export function ProductFeaturedList({ data = dataProduct }: ProductFeaturedListProps) {
  return (
    // grid justify-center items-center mx-auto gap-6 grid-cols-2 grid-flow-row
    <AnimatedDiv variants={FadeContainer}>
      <SwipperCommon>
        {data.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductItem product={product} />
          </SwiperSlide>
        ))}
      </SwipperCommon>
    </AnimatedDiv>
  );
}
