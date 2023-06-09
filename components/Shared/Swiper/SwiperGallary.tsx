import { ImageModel } from 'models';
import Image from 'next/image';
import { CSSProperties, useCallback, useEffect, useRef, useState } from 'react';
import { FreeMode, Navigation, Thumbs } from 'swiper';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { SwiperModule } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

export interface SwiperGallaryProps {
  initialSlide?: number;
  modules?: SwiperModule[];
  images: ImageModel[];
}

const style = {
  '--swiper-navigation-color': '#fff',
  '--swiper-pagination-color': '#fff',
} as CSSProperties;

export default function SwiperGallary({ initialSlide = 0, images }: SwiperGallaryProps) {
  const [activeImage, setAtiveImage] = useState(initialSlide);
  const swiperRef = useRef<SwiperClass | null>(null);

  const handleKeyPress = useCallback((event) => {
    let activeIndex = Number(swiperRef.current?.activeIndex);

    if (activeIndex >= 0) {
      switch (event.key) {
        case 'ArrowLeft':
          activeIndex = activeIndex > 0 ? activeIndex - 1 : activeIndex;
          break;
        case 'ArrowRight':
          activeIndex = activeIndex < images.length - 1 ? activeIndex + 1 : activeIndex;
          break;

        default:
          break;
      }
      handleSlideChange({ activeIndex });
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress, false);

    return () => {
      document.removeEventListener('keydown', handleKeyPress, false);
    };
  }, []);

  const handleSlideChange = ({ activeIndex }: { activeIndex: number | undefined }) => {
    if (swiperRef.current && activeIndex !== undefined) {
      setAtiveImage(activeIndex);
      swiperRef?.current?.slideTo(activeIndex);
    }
  };

  return (
    <>
      <div className="flex-1 flex items-center">
        <Swiper
          style={style}
          navigation={true}
          spaceBetween={10}
          initialSlide={activeImage}
          className="mySwiper2 !mx-2"
          onSlideChange={handleSlideChange}
          modules={[FreeMode, Navigation, Thumbs]}
          onInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {images.map((image, i) => (
            <SwiperSlide
              key={`image-${i}-${image}`}
              className="relative h-full max-h-[550px] w-full"
            >
              <Image
                loading="lazy"
                className="mx-auto"
                width={550}
                height={550}
                src={image.path}
                alt={image.name}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="relative mt-4 px-2 py-3">
        <div className="overflow-hidden">
          <div className="flex overflow-x-auto items-center gap-3">
            {images.map((image, i) => (
              <div
                key={`image-${i}-${image}`}
                className={`min-w-[75px] ${
                  i === activeImage ? 'opacity-100' : 'opacity-50 '
                } relative`}
                onClick={() => handleSlideChange({ activeIndex: i })}
              >
                <Image
                  className="mx-auto"
                  width={75}
                  height={75}
                  loading="lazy"
                  src={image.path}
                  alt={image.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
