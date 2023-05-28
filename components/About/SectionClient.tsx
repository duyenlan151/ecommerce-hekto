import SwipperCommon from '@components/Shared/Swiper/SwiperCommon';
import { useState } from 'react';
import { Pagination } from 'swiper';

import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';

export interface SectionClientProps {}

const data = [
  {
    id: 1,
    title: 'aaa',
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.`,
    thumbnails: ['/images/about/client01.png'],
    author: 'Lily',
    role: 'Content Writer',
  },
  {
    id: 2,
    title: 'aaa2',
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.`,
    thumbnails: ['/images/about/client02.png'],
    author: 'Selina Gomez',
    role: 'Ceo At Webecy Digital',
  },
  {
    id: 3,
    title: 'aaa3',
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.`,
    thumbnails: ['/images/about/client03.png'],
    author: 'Tom Cruise',
    role: 'Actor',
  },
];

const defaultBreakpoints = {
  400: {
    slidesPerView: 1,
  },
};

export default function SectionClient({}: SectionClientProps) {
  const [activeSlide, setActiveSlide] = useState(1);
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);

  const handleSlideChange = ({ activeIndex }: { activeIndex: number }) => {
    if (swiper) {
      setActiveSlide(activeIndex);
      swiper.slideTo(activeIndex);
    }
  };

  return (
    <section className="container mx-auto">
      <div className="flex justify-center mx-auto w-48 mb-6 pt-6">
        {data.map((item, i) => (
          <div
            key={`image-${i}`}
            onClick={() => handleSlideChange({ activeIndex: i })}
            className={`w-[55px] h-[55px] mx-auto transform transition ease-in-out duration-300 ${
              activeSlide === i && 'scale-110 -translate-y-[10px]'
            }`}
          >
            <img className="h-full" src={item.thumbnails[0]} alt={item.title} />
          </div>
        ))}
      </div>
      <SwipperCommon
        modules={[Pagination]}
        breakpoints={defaultBreakpoints}
        initialSlide={activeSlide}
        onSlideChange={handleSlideChange}
        onSwiper={setSwiper}
      >
        {data.map((item) => (
          <SwiperSlide className="text-center" key={item.id}>
            <div className="text-black text-2xl font-lato tracking-wider">{item.author}</div>
            <div className="text-sub-title text-xs font-lato mt-2 mb-5 tracking-wider">
              {item.role}
            </div>
            <div className="lg:max-w-[60%] mx-auto text-sub-title text-base leading-7 font-bold font-lato mt-2 tracking-wider">
              {item.desc}
            </div>
          </SwiperSlide>
        ))}
      </SwipperCommon>
    </section>
  );
}
