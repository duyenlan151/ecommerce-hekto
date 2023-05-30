import { ProductModel as ProductItemModel } from 'models';
import { SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import SwipperCommon from '@components/Shared/Swiper/SwiperCommon';
import { FadeContainer, opacityVariant } from '@content/FramerMotionVariants';
import { motion } from 'framer-motion';
import AnimatedDiv from '@components/FramerMotion/AnimatedDiv';
import { Pagination } from 'swiper';
import { ProductModel } from './ProductItem';

export interface ProductFeaturedListProps {
  data?: ProductItemModel[];
}

const defaultBreakpoints = {
  400: {
    slidesPerView: 1,
  },
  600: {
    slidesPerView: 2,
  },
  768: {
    slidesPerView: 3,
  },
  1200: {
    slidesPerView: 4,
  },
};

export function ProductFeaturedList({ data = [] }: ProductFeaturedListProps) {
  return (
    // grid justify-center items-center mx-auto gap-6 grid-cols-2 grid-flow-row
    <AnimatedDiv variants={FadeContainer}>
      <SwipperCommon breakpoints={defaultBreakpoints} modules={[Pagination]}>
        {data.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductModel product={product} />
          </SwiperSlide>
        ))}
      </SwipperCommon>
    </AnimatedDiv>
  );
}
