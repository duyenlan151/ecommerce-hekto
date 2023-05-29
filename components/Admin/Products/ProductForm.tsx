import ILoading from '@components/Icons/ILoading';
import { InputField } from '@components/Shared/Common';
import ReactQuillCommon from '@components/Shared/ReactQuill';
import { yupResolver } from '@hookform/resolvers/yup';
import { useProducts } from '@hooks/index';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import axiosClient from 'services/api-services';
import * as yup from 'yup';
import { schemaProduct } from './ProductForm.props';

export interface ProductFormProps {
  product: {};
}

export default function ProductForm({ product }: ProductFormProps) {
  const router = useRouter();
  const { loading, handleCategory } = useProducts();
  const {
    query: { slug },
  } = router;

  const form = useForm({
    resolver: yupResolver(schemaProduct),
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      ...product,
    },
  });

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = form;

  const uploadImages = async (ev) => {
    const files = ev.target?.files;
    if (files?.length > 0) {
      // setIsUploading(true);
      const data = new FormData();
      for (const file of files) {
        console.log('🚀 ~ file: ProductForm.tsx:46 ~ uploadImages ~ file:', file);
        await data.append('file', file);
      }
      const config = {
        headers: { 'content-type': 'multipart/form-data' },
        onUploadProgress: (event) => {
          console.log(`Current progress:`, Math.round((event.loaded * 100) / event.total));
        },
      };

      const response = await axiosClient.post('/upload', data, config);
      // setImages(oldImages => {
      //   return [...oldImages, ...res.data.links];
      // });
      // setIsUploading(false);
    }
  };
  const onSubmit = async (product) => {};

  return (
    <div className="relative p-4 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
      <button
        onClick={() => router.back()}
        className="flex items-center focus:outline-none hover:underline"
      >
        <AiOutlineArrowLeft />
        <span className="ml-1 text-sm">Back To Products</span>
      </button>
      <h4 className="text-3xl font-bold tracking-wider mt-10 mb-4 pb-4 border-b">
        {slug === 'add' ? 'Add New' : 'Edit'} Product
      </h4>
      <form onSubmit={handleSubmit(onSubmit)} className="py-2">
        <div className="grid grid-cols-3 gap-4">
          {/* Title */}
          <div className="col-span-4">
            <InputField label="Title" name="title" control={control} />
          </div>
          {/* Description */}
          <div className="col-span-4">
            <InputField label="Description" name="description" control={control} />
          </div>
          {/* Short description */}
          <div className="col-span-4">
            <ReactQuillCommon />
            {/* <InputField label="Short description" name="short_description" control={control} /> */}
          </div>
          {/* Price */}
          <div className="col-start-1">
            <InputField
              label="Price"
              name="price"
              type="number"
              // className="focus:outline-none"
              control={control}
            />
          </div>
          {/*  Distcount Percent*/}
          <div className="col-start-2">
            <InputField
              label="Distcount Percentage"
              name="discount_percentage"
              type="number"
              // className="focus:outline-none"
              control={control}
            />
          </div>
          {/* Rating */}
          <div className="col-start-3">
            <InputField
              label="Rating"
              name="rating"
              type="number"
              // className="focus:outline-none"
              control={control}
            />
          </div>
        </div>
        <div>
          images
          <label className="w-24 h-24 cursor-pointer text-center flex flex-col items-center justify-center text-sm gap-1 text-primary rounded-sm bg-white shadow-sm border border-primary">
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
            <div>Add image</div>
            <input type="file" onChange={uploadImages} className="hidden" />
          </label>
        </div>
        <div className="flex justify-end w-full flex-end">
          <button
            type="submit"
            disabled={loading}
            className={`bg-green-500 ${
              loading && 'bg-gray-100'
            } shadow text-white py-2 px-10 mt-4 capitalize font-bold focus:outline-none`}
          >
            {loading ? <ILoading /> : slug === 'add' ? 'Add' : 'save'}
          </button>
          <button
            onClick={() => router.back()}
            type="button"
            className="bg-transparent shadow text-black py-2 px-8 mt-4 capitalize border ml-4 focus:outline-none"
          >
            cancel
          </button>
        </div>
      </form>
    </div>
  );
}
