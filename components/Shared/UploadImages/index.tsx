import { ILoadingSeconday } from '@components/Icons';
import { PATTERN_IMAGES } from 'constants/index';
import { useEffect, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useController } from 'react-hook-form';
import { toast } from 'react-toastify';
import axiosClient from 'services/api-services';
import { Container } from './ImagesDragContainer';

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

const test = [
  {
    name: 'book10.jpeg',
    type: 'image/jpeg',
    path: 'http://res.cloudinary.com/duzzoglqz/image/upload/v1686022265/obn0gk09y2cdwrmvwxhy.jpg',
    _id: '647ea87aae7753d52fda0496',
    __v: 0,
  },
  {
    name: 'book11.jpeg',
    type: 'image/jpeg',
    path: 'http://res.cloudinary.com/duzzoglqz/image/upload/v1686022269/aerrerir5wdnhg5jocdd.jpg',
    _id: '647ea87eae7753d52fda0498',
    __v: 0,
  },
  {
    name: 'book12.jpeg',
    type: 'image/jpeg',
    path: 'http://res.cloudinary.com/duzzoglqz/image/upload/v1686022272/hrlc0uottzmgehsow5lo.jpg',
    _id: '647ea880ae7753d52fda049a',
    __v: 0,
  },
  {
    name: 'book13.jpeg',
    type: 'image/jpeg',
    path: 'http://res.cloudinary.com/duzzoglqz/image/upload/v1686022274/vgrrontiq8lkkiw5ltga.jpg',
    _id: '647ea883ae7753d52fda049c',
    __v: 0,
  },
];

export default function UploadImages({
  name,
  label,
  control,
  onChange: externalOnChange,
  onBlur: externalOnBlur,
  value: externaValue,
}: UploadImagesProps) {
  const [images, setImages] = useState<any>(() => [...test]);

  const [loadingUpload, setLoadingUpload] = useState(false);

  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

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

        const response = await axiosClient.post('/admin/upload', data, config);
        if (response) {
          const newImages = images?.length > 0 ? images.concat(response) : response;
          setImages(newImages);
        }
      }
    } catch (error) {
    } finally {
      setLoadingUpload(false);
    }
  };

  const deleteImage = (index: number) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  return (
    <div className="mt-4">
      <label
        htmlFor={name}
        className="block w-full pb-3 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"
      >
        Images [min 3 - max 20](Images can drag and drop to change position)
      </label>
      <div className="relative flex items-center gap-4">
        <DndProvider backend={HTML5Backend}>
          {images && <Container images={images} onChange={setImages} deleteImage={deleteImage} />}
        </DndProvider>

        {loadingUpload && (
          <label className="w-24 h-24 cursor-pointer text-center flex flex-col items-center justify-center text-sm gap-1 text-primary bg-white border border-primary">
            <div>
              <ILoadingSeconday />
            </div>
          </label>
        )}

        <label
          className={`w-24 h-24 cursor-pointer text-center flex flex-col items-center justify-center text-sm gap-1 text-primary bg-white border border-primary ${
            loadingUpload && 'opacity-50'
          }`}
        >
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
          <input
            disabled={loadingUpload}
            multiple
            type="file"
            accept="image/png, image/gif, image/jpeg"
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
