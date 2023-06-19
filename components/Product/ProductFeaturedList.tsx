import { ProductModel as ProductItemModel } from 'models';
import { SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import AnimatedDiv from '@components/FramerMotion/AnimatedDiv';
import SwipperCommon from '@components/Shared/Swiper/SwiperCommon';
import { FadeContainer } from '@content/FramerMotionVariants';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { Pagination } from 'swiper';
import { ProductItem } from './ProductItem/ProductItem';

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
  const { t } = useTranslation('header');
  return (
    <AnimatedDiv variants={FadeContainer} className="mt-20 mb-24 text-center">
      <SwipperCommon
        style={{
          paddingBottom: 50,
        }}
        className="swiper-center"
        breakpoints={defaultBreakpoints}
        modules={[Pagination]}
      >
        {data.length > 0 &&
          data.map((product, idx) => (
            <SwiperSlide key={`${product.id} - ${idx}`}>
              <ProductItem product={product} />
            </SwiperSlide>
          ))}
      </SwipperCommon>
      <Link
        href="/products"
        className="inline-block mt-5 bg-pink-600 text-white py-2.5 px-10 mx-auto"
      >
        {t('view-all')}
      </Link>
    </AnimatedDiv>
  );
}
