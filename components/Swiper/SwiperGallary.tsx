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
  const [activeImage, setAtiveImage] = useState(initialSlide);
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);

  const handleSlideChange = ({ activeIndex }: { activeIndex: number }) => {
    if (swiper) {
      setAtiveImage(activeIndex);
      swiper.slideTo(activeIndex);
    }
  };

  return (
    <>
      <div className="flex-1 flex items-center">
        <Swiper
          style={
            {
              '--swiper-navigation-color': '#fff',
              '--swiper-pagination-color': '#fff',
            } as CSSProperties
          }
          initialSlide={activeImage}
          loop={true}
          spaceBetween={10}
          onSlideChange={handleSlideChange}
          onSwiper={setSwiper}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2 !mx-2"
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
      </div>
      <div className="flex overflow-x-auto items-center mt-4 px-2 py-3 gap-3">
        {images.map((image, i) => (
          <div
            key={`image-${i}-${image}`}
            className={`${i === activeImage ? 'opacity-100' : 'opacity-50 '}`}
            onClick={() => handleSlideChange({ activeIndex: i })}
          >
            <img
              className="overflow-hidden max-h-[75px] max-w-[75px] relative overflow-hidden"
              src={image}
              alt={image}
            />
          </div>
        ))}
      </div>
    </>
  );
}
