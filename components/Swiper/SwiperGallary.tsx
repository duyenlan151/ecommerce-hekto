import { CSSProperties, ReactNode, useState } from 'react';
import { Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { SwiperModule } from 'swiper/types';
import { FreeMode, Navigation, Thumbs } from 'swiper';

export interface SwiperGallaryProps {
  initialSlide?: number;
  loop?: boolean;
  modules?: SwiperModule[];
  onSlideChange?: (swiper: SwiperClass) => void;
  onSwiper?: (swiper: SwiperClass) => void;
  images: string[];
}

export default function SwiperGallary({
  initialSlide = 0,
  onSlideChange,
  onSwiper,
  images,
}: SwiperGallaryProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const [activeImage, setAtiveImage] = useState(0);

  return (
    <>
      <Swiper
        style={
          {
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          } as CSSProperties
        }
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 !ml-0 !mr-0"
      >
        {images.map((image, i) => (
          <SwiperSlide key={`image-${i}-${image}`} className="h-full max-h-[550px] w-full">
            <img
              className="mx-auto w-full !max-w-[550px] max-h-[550px] relative h-full"
              src={image}
              alt={image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={12}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper gap-4 !absolute bottom-[10px]"
      >
        {images.map((image, i) => (
          <SwiperSlide key={`image-${i}-${image}`} className="" onClick={() => setAtiveImage(i)}>
            <img
              className="overflow-hidden max-h-[75px] max-w-[75px] relative overflow-hidden"
              src={image}
              alt={image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
