import { Modal } from '@components/Common/Modal';
import React, { useCallback, useEffect, useState } from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper';
import SwiperGallary from '@components/Swiper/SwiperGallary';

export interface ImagesGallaryProps {
  images: { imageSmall: string[]; imageLarge: string[] };
}

export default function ImagesGallary({ images }: ImagesGallaryProps) {
  const [activeImage, setAtiveImage] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const escFunction = useCallback((event) => {
    if (event.key === 'Escape') {
      //Do whatever when esc is pressed
      setShowModal(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);

    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
  }, [escFunction]);

  const handleToggleModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <div className="max-w-full overflow-hidden">
      <div className="max-w-full cursor-pointer" onClick={handleToggleModal}>
        <img
          className="h-full w-full"
          src={images.imageLarge[activeImage]}
          alt={images.imageLarge[activeImage]}
        />
      </div>
      <div className="flex overflow-x-auto items-center mt-4 gap-3">
        {/* List Images */}
        {images.imageSmall.slice(0, 5).map((image, i) => (
          <div
            key={`image-${i}-${image}`}
            className="rounded flex-shrink-0 min-w-[64px] cursor-pointer shrink"
            onClick={() => setAtiveImage(i)}
          >
            <img
              className="min-w-[64px] max-h-[64px] rounded-md overflow-hidden  object-cover relative border h-full overflow-hidden"
              src={image}
              alt={image}
            />
          </div>
        ))}
        <div
          className="relative flex-shrink-0 rounded min-w-[64px] cursor-pointer shrink rounded-md overflow-hidden"
          onClick={handleToggleModal}
        >
          <img
            className="min-w-[64px] max-h-[64px] rounded-md overflow-hidden object-cover relative border h-full"
            src={images.imageSmall[6]}
            alt={images.imageSmall[6]}
          />
          <div className="opacity-30 absolute inset-0 z-40 bg-black"></div>
          <div className="absolute inset-0 z-20 text-white text-center text-[10px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
            View more {images.imageSmall.length - 5}
          </div>
        </div>
      </div>

      <Modal isShow={showModal} onChange={handleToggleModal}>
        <SwiperGallary images={images.imageLarge} initialSlide={activeImage} />
      </Modal>
    </div>
  );
}
