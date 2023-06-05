import { Modal } from '@components/Shared/Modal';
import { useState } from 'react';

// Import Swiper styles
import SwiperGallary from '@components/Shared/Swiper/SwiperGallary';
import { useKeypress } from '@hooks/index';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

export interface ImagesGallaryProps {
  images: any;
}

export default function ImagesGallary({ images }: ImagesGallaryProps) {
  const [activeImage, setAtiveImage] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useKeypress('Escape', () => {
    setShowModal(false);
  });

  const handleToggleModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <div className="overflow-hidden max-w-[90%] lg:w-full mx-auto">
      <div
        className="relative max-w-full cursor-pointer flex justify-center lg:min-h-[444px] h-[250px]"
        onClick={handleToggleModal}
      >
        <Image
          className="!max-h-full !max-w-full rounded-md object-contain"
          // fill
          loading="lazy"
          width={444}
          height={444}
          alt={images[activeImage]?.path}
          src={images[activeImage]?.path}
        />
      </div>
      <div className="flex overflow-x-auto items-center mt-4 gap-3">
        {images.slice(0, 5).map((image, i) => (
          <div
            key={`image-${i}-${image}`}
            className="relative rounded flex-shrink-0 max-w-[64px] min-w-[64px] h-[64px] border flex items-center cursor-pointer shrink"
            onClick={() => setAtiveImage(i)}
          >
            <Image loading="lazy" src={image?.path} width={64} height={64} alt={image.name} />
          </div>
        ))}
        <div className="">
          {images.length - 1 >= 6 && (
            <div
              className="relative flex-shrink-0 rounded max-w-[64px] min-w-[64px] h-[64px] cursor-pointer shrink rounded-md overflow-hidden"
              onClick={handleToggleModal}
            >
              <Image
                className="max-w-[64px] min-w-[64px] h-full rounded-md overflow-hidden object-cover relative border h-full"
                fill
                loading="lazy"
                sizes="(max-width: 64px) 100vw, (max-width: 64px)"
                alt={images[6]?.path}
                src={images[6]?.path}
              />
              <div className="opacity-30 absolute inset-0 z-40 bg-black"></div>
              <div className="absolute inset-0 z-20 text-white text-center text-[10px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
                View more {images.length - 5}
              </div>
            </div>
          )}
        </div>
      </div>

      <Modal isShow={showModal} onChange={handleToggleModal}>
        <SwiperGallary images={images} initialSlide={activeImage} />
      </Modal>
    </div>
  );
}
