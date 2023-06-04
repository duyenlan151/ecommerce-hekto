import React, { useEffect, useState } from 'react';
import { useController } from 'react-hook-form';
import axiosClient from 'services/api-services';
import Image from 'next/image';
import ImagesGallary from '../ImagesGallary/ImagesGallary';
import { Modal } from '../Modal';
import SwiperGallary from '../Swiper/SwiperGallary';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useKeypress } from '@hooks/useKeyPress';

export interface UploadImagesProps {
  name: string;
  label?: string;
  control?: any;
  onChange?: () => void;
  onBlur?: () => void;
  placeholder?: string;
  value?: string;
  className?: string;
  [name: string]: any;
}

export default function UploadImages({
  name,
  label,
  control,
  onChange: externalOnChange,
  onBlur: externalOnBlur,
  value: externaValue,
}: UploadImagesProps) {
  const [images, setImages] = useState<any>([]);
  const [showModal, setShowModal] = useState(false);
  const [activeImage, setAtiveImage] = useState(0);

  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  useKeypress('Escape', () => {
    setShowModal(false);
  });

  useEffect(() => {
    setImages(value);
  }, []);

  useEffect(() => {
    onChange(images);
  }, [images]);

  const uploadImages = async (ev) => {
    const files = ev.target?.files;
    if (files?.length > 0) {
      // setIsUploading(true);
      const data = new FormData();
      for (const file of files) {
        await data.append('file', file);
      }
      const config = {
        headers: { 'content-type': 'multipart/form-data' },
        onUploadProgress: (event) => {},
      };

      const response = await axiosClient.post('/admin/upload', data, config);
      if (response) {
        const newImages = images?.length > 0 ? images.concat(response) : response;
        setImages(newImages);
      }
    }
  };

  const handleClickImage = (index: number) => {
    setAtiveImage(index);
    setShowModal(true);
  };

  const handleRemoveImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };
  return (
    <div className="mt-4">
      <label
        htmlFor={name}
        className="block w-full pb-2 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"
      >
        Images [min 3 - max 20]
      </label>
      <div className="relative flex items-center gap-4">
        {images &&
          images.map((image, idx) => (
            <div
              key={image._id}
              className="cursor-pointer min-w-[96px] min-h-[96px] max-w-[96px] relative"
            >
              <span
                onClick={() => handleRemoveImage(idx)}
                className="curosr-pointer absolute -top-[8px] -right-[8px] z-50"
              >
                <AiFillCloseCircle />
              </span>
              <Image
                onClick={() => handleClickImage(idx)}
                className="min-h-[96px] min-w-[96px] border border-primary"
                src={image.path}
                fill
                layout="responsive"
                loading="lazy"
                sizes="(max-width: 96px) 100vw, (max-width: 96px)"
                alt={image.name}
              />
            </div>
          ))}

        <label className="w-24 h-24 cursor-pointer text-center flex flex-col items-center justify-center text-sm gap-1 text-primary bg-white border border-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
            />
          </svg>
          <div>Upload image</div>
          <input type="file" onChange={uploadImages} className="hidden" />
        </label>
        <Modal isShow={showModal} onChange={() => setShowModal(false)}>
          <SwiperGallary images={images} initialSlide={activeImage} />
        </Modal>
      </div>
      {error?.message && (
        <span className="text-red-500 text-xs font-bold tracking-wide">{error?.message}</span>
      )}
    </div>
  );
}
