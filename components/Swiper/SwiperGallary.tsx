import { ReactNode, useState } from 'react';
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
        loop={true}
        spaceBetween={10}
        navigation={true}
        initialSlide={initialSlide}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images.map((image, i) => (
          <SwiperSlide
            key={`image-${i}-${image}`}
            className="rounded flex-shrink-0 cursor-pointer shrink"
            onClick={() => setAtiveImage(i)}
          >
            <img
              className="overflow-hidden mx-auto lg:!max-w-[550px] max-h-[550px] object-cover relative h-full overflow-hidden"
              src={image}
              alt={image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        initialSlide={initialSlide}
        spaceBetween={10}
        slidesPerView={images.length || 0}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper mt-6 flex gap-3"
      >
        {images.map((image, i) => (
          <SwiperSlide
            key={`image-${i}-${image}`}
            className="flex-shrink-0 cursor-pointer shrink !w-auto max-h-[75px]"
            onClick={() => setAtiveImage(i)}
          >
            <img
              className="overflow-hidden  max-h-[75px] object-cover relative overflow-hidden"
              src={image}
              alt={image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
