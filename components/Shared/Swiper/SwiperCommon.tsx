import Image from 'next/image';
import { CSSProperties, ReactNode } from 'react';
import { Navigation, Pagination, SwiperOptions } from 'swiper';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Image as ImageModel } from 'models';
import { SwiperModule } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export interface SwipperCommonProps {
  children?: ReactNode;
  images?: ImageModel[];
  classNameSlider?: string;
  onSwiper?: (swiper: SwiperClass) => void;
  onSlideChange?: (swiper: SwiperClass) => void;
  [name: string]: any;
}

const styleDefault = {
  ['--swiper-pagination-bullet-size']: '8px',
  '--swiper-pagination-bullet-width': '4px',
  '--swiper-pagination-bullet-active-width': '24px',
  '--swiper-pagination-bullet-height': '4px',
  '--swiper-pagination-bullet-border-radius': '2px',
  '--swiper-pagination-color': '#000',
  '--swiper-pagination-bullet-inactive-color': '#b3b3b3',
  '--swiper-pagination-bullet-inactive-opacity': '1',
  '--swiper-pagination-bullet-horizontal-gap': '6px',
  '--swiper-navigation-color': '#000',
  '--swiper-navigation-size': '25px',
  // height: '500px',
  paddingBottom: '0 !important',
} as CSSProperties;

export default function SwipperCommon({
  children,
  images,
  onSlideChange,
  onSwiper,
  classNameSlider,
  ...rest
}: SwipperCommonProps) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        // pagination={true}
        loop={true}
        initialSlide={0}
        spaceBetween={15}
        scrollbar={true}
        onSlideChange={onSlideChange}
        onSwiper={onSwiper}
        onInit={onSwiper}
        modules={[Pagination, Navigation]}
        style={{ ...styleDefault }}
        {...rest}
      >
        {children
          ? children
          : images &&
            images.map((image, i) => (
              <SwiperSlide
                key={`image-${i}-${image.ID}`}
                className={`relative w-[100%] h-[400px] md:h-[70vh] ${classNameSlider}`}
              >
                <Image
                  src={image.bgImg}
                  sizes="(max-width: 500px) 100vw, (max-width: 500px)"
                  fill
                  alt={image.title}
                  className="object-cover"
                />
              </SwiperSlide>
            ))}
      </Swiper>
    </>
  );
}
