import { ReactNode } from 'react';
import { Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperClass } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { SwiperModule } from 'swiper/types';

export interface SwipperCommonProps {
  children: ReactNode;
  breakpoints?: Object;
  initialSlide?: number;
  loop?: boolean;
  modules?: SwiperModule[];
  onSlideChange?: (swiper: SwiperClass) => void;
  onSwiper?: (swiper: SwiperClass) => void;
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

export default function SwipperCommon({
  children,
  breakpoints = defaultBreakpoints,
  initialSlide = 0,
  loop = false,
  modules = [Scrollbar, Pagination],
  onSlideChange,
  onSwiper,
}: SwipperCommonProps) {
  return (
    <Swiper
      breakpoints={breakpoints}
      pagination={{
        clickable: true,
      }}
      // activeIndex={activeIndex}
      loop={loop}
      initialSlide={initialSlide}
      className="!pb-16"
      spaceBetween={15}
      scrollbar={true}
      onSlideChange={onSlideChange}
      onSwiper={onSwiper}
      onInit={onSwiper}
      modules={modules}
      style={{
        '--swiper-pagination-bullet-size': '8px',
        '--swiper-pagination-bullet-width': '16px',
        '--swiper-pagination-bullet-active-width': '24px',
        '--swiper-pagination-bullet-height': '4px',
        '--swiper-pagination-bullet-border-radius': '2px',
        '--swiper-pagination-color': '#FB2E86',
        '--swiper-pagination-bullet-inactive-color': '#FEBAD7',
        '--swiper-pagination-bullet-inactive-opacity': '1',
        '--swiper-pagination-bullet-horizontal-gap': '6px',
      }}
    >
      {children}
    </Swiper>
  );
}
