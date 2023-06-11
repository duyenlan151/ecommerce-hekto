import { ILoadingSeconday } from '@components/Icons';
import { PATTERN_IMAGES } from 'constants/index';
import { ReactElement, useCallback, useEffect, useRef, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useController } from 'react-hook-form';
import { toast } from 'react-toastify';
import axiosClient from 'services/api-services';
import { Container } from './ImagesDragContainer';
import Image from 'next/image';
import { AiOutlineMore } from 'react-icons/ai';
import { Dropdown } from '../Dropdowns';
import { ImageModel } from 'models';

export type TypeUpload = 'small' | 'large';
export type TypeImage = 'single' | 'multiple';

export const StyleType: Record<TypeUpload, string | number> = {
  ['small']: 'w-24 h-24 items-center',
  ['large']: 'w-full h-[500px]',
};

export interface UploadImagesProps {
  name: string;
  type?: TypeUpload;

  typeImage?: TypeImage;
  label?: string;
  control?: any;

  // Func handle change
  onChange?: () => void;
  onBlur?: () => void;

  placeholder?: string;
  value?: string;
  className?: string;
  defaultImges?: any;
  [name: string]: any;
}

export default function UploadImages({
  name,
  label,
  control,
  typeImage = 'multiple',
  type = 'small',
  onChange: externalOnChange,
  onBlur: externalOnBlur,
  value: externaValue,
  defaultImges,
}: UploadImagesProps) {
  const [images, setImages] = useState<any>(() => []);
  const [loadingUpload, setLoadingUpload] = useState(false);
  const refInput = useRef<HTMLInputElement | null>(null);

  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
  });
  console.log('🚀 ~ file: index.tsx:59 ~ value:', value);

  useEffect(() => {
    setImages(value);
  }, []);

  useEffect(() => {
    onChange(images);
  }, [images]);

  const uploadImages = async (ev) => {
    setLoadingUpload(true);
    try {
      const files = ev.target?.files;

      if (files?.length > 0) {
        const data = new FormData();
        for (const file of files) {
          if (!file.name.match(PATTERN_IMAGES)) {
            toast.error(`This file name ${name} format is not supported`);
          } else {
            await data.append('file', file);
          }
        }
        const config = {
          headers: { 'content-type': 'multipart/form-data' },
          onUploadProgress: (event) => {},
        };

        const response = (await axiosClient.post('/admin/upload', data, config)) as ImageModel[];
        if (response) {
          let newImages = [];

          switch (typeImage) {
            case 'single':
              // @ts-ignore
              newImages = [].concat(response);
              break;
            case 'multiple':
              newImages = images?.length > 0 ? images.concat(response) : response;
              break;
            default:
              break;
          }
          setImages(newImages);
        }
      }
    } catch (error) {
    } finally {
      setLoadingUpload(false);
    }
  };

  const deleteImage = useCallback((index: number) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  }, []);

  const RenderComp = useCallback(() => {
    switch (type) {
      case 'small':
        return (
          <>
            <DndProvider backend={HTML5Backend}>
              {images && (
                <Container images={images} onChange={setImages} deleteImage={deleteImage} />
              )}
            </DndProvider>
          </>
        );
        break;

      case 'large': {
        return (
          <>
            {images?.length > 0 && (
              <div className="border border-primary relative z-0 flex h-[calc(100vh-30vh)] w-full items-center justify-center">
                {loadingUpload ? (
                  <ILoadingSeconday />
                ) : (
                  <div className="absolute -z-10 h-full w-full">
                    <Image alt="" src={images[0]?.path} fill />
                  </div>
                )}

                <Dropdown
                  className="absolute right-2 top-2"
                  label={
                    <div className="flex items-center p-2 bg-gray-100 border border-gray-10">
                      <AiOutlineMore size={20} />
                    </div>
                  }
                >
                  <div
                    className="cursor-pointer whitespace-nowrap hover:bg-grey-1 py-2 px-4 block"
                    onClick={() => deleteImage(0)}
                  >
                    Delete
                  </div>
                  <li
                    onClick={() => {
                      refInput.current && refInput.current?.click();
                    }}
                    className="cursor-pointer bg-white hover:bg-grey-1 py-2 px-4 block whitespace-no-wrap"
                  >
                    Change
                  </li>
                </Dropdown>
              </div>
            )}
          </>
        );
      }

      default:
        return <></>;
        break;
    }
  }, [type, images, refInput.current, loadingUpload]);

  return (
    <div className="mt-4">
      <label
        htmlFor={name}
        className="block w-full pb-3 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"
      >
        {label || 'Images [min 3 - max 20](Images can drag and drop to change position)'}
      </label>

      <div className="relative flex items-center gap-4">
        <RenderComp />
        <label
          className={`${StyleType[type]} ${
            type === 'small' || (type === 'large' && images?.length > 0 && 'hidden')
          } cursor-pointer flex flex-col items-center text-center justify-center text-sm gap-1 text-primary bg-white border border-primary ${
            loadingUpload && 'opacity-50'
          }`}
        >
          {loadingUpload ? (
            <ILoadingSeconday />
          ) : (
            <>
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
            </>
          )}

          <input
            ref={refInput}
            disabled={loadingUpload}
            multiple
            type="file"
            accept="image/png, image/gif, image/jpeg, image/webp"
            onChange={uploadImages}
            className="hidden"
          />
        </label>
      </div>
      {error?.message && (
        <span className="text-red-500 text-xs font-bold tracking-wide">{error?.message}</span>
      )}
    </div>
  );
}
