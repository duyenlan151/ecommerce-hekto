import { Modal } from '@components/Shared/Modal';
import { useCallback, useEffect, useState } from 'react';

// Import Swiper styles
import SwiperGallary from '@components/Shared/Swiper/SwiperGallary';
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
      <div
        className="max-w-full cursor-pointer h-[444px] flex justify-center"
        onClick={handleToggleModal}
      >
        {/* <img
          className="h-full w-full"
          src={images.imageLarge[activeImage]}
          alt={images.imageLarge[activeImage]}
        /> */}
        {/* <img
          className="max-h-full max-w-full"
          src={images[activeImage]}
          alt={images[activeImage]}
        /> */}
        <div className="flex justify-center sm:px-12">
          <img
            className="object-scale-down max-h-full drop-shadow-md rounded-md m-auto max-h-[444px]"
            src={images[activeImage]}
            alt={images[activeImage]}
          />
        </div>
      </div>
      <div className="flex overflow-x-auto items-center mt-4 gap-3">
        {/* List Images */}
        {/* {images.imageSmall.slice(0, 5).map((image, i) => (
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
        ))} */}
        {images.slice(0, 5).map((image, i) => (
          <div
            key={`image-${i}-${image}`}
            className="rounded flex-shrink-0 max-w-[64px] min-w-[64px] h-[64px] border flex items-center cursor-pointer shrink"
            onClick={() => setAtiveImage(i)}
          >
            <img
              className="max-w-[64px] min-w-[64px] h-full rounded-md overflow-hidden  object-cover relative border h-full overflow-hidden"
              src={image}
              alt={image}
            />
          </div>
        ))}
        <div
          className="relative flex-shrink-0 rounded max-w-[64px] min-w-[64px] h-[64px] cursor-pointer shrink rounded-md overflow-hidden"
          onClick={handleToggleModal}
        >
          {/* <img
            className="max-w-[64px] min-w-[64px] max-h-[64px] rounded-md overflow-hidden object-cover relative border h-full"
            src={images.imageSmall[6]}
            alt={images.imageSmall[6]}
          /> */}
          <img
            className="max-w-[64px] min-w-[64px] h-full rounded-md overflow-hidden object-cover relative border h-full"
            src={images[6]}
            alt={images[6]}
          />
          <div className="opacity-30 absolute inset-0 z-40 bg-black"></div>
          <div className="absolute inset-0 z-20 text-white text-center text-[10px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
            View more {images.length - 5}
          </div>
        </div>
      </div>

      <Modal isShow={showModal} onChange={handleToggleModal}>
        {/* <SwiperGallary images={images.imageLarge} initialSlide={activeImage} /> */}
        <SwiperGallary images={images} initialSlide={activeImage} />
      </Modal>
    </div>
  );
}
