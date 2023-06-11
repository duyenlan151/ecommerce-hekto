import { ILoading } from '@components/Icons';
import { InputField, TextareaField } from '@components/Shared/Common';
import { DropdownSelect } from '@components/Shared/Dropdowns';
import ReactQuillCommon from '@components/Shared/ReactQuill';
import UploadImages from '@components/Shared/UploadImages';
import { yupResolver } from '@hookform/resolvers/yup';
import { useBlog, useCategories, useProducts } from '@hooks/index';
import { formatData, generateSlug } from '@utils/common';
import { ActionCommon, BlogModel } from 'models';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { schemaBlog } from './Blog.props';

export interface ProductFormProps {
  blog: Partial<BlogModel>;
}

const items = [
  { _id: 1, title: 'Active', value: 'active' },
  { _id: 2, title: 'Archived', value: 'archived' },
  { _id: 3, title: 'Lock', value: 'lock' },
];

export default function ProductForm({ blog }: ProductFormProps) {
  console.log('🚀 ~ file: BlogForm.tsx:27 ~ ProductForm ~ blog:', blog);
  const router = useRouter();
  const { loading, handleBlog } = useBlog();
  const { loading: loadingCategory, handleCategory } = useCategories();

  const [categories, setCategories] = useState();
  const {
    query: { slug },
  } = router;

  useEffect(() => {
    (async () => {
      const result = await handleCategory({}, 'get', 'active');
      setCategories(formatData(result?.data, 'name', '_id'));
    })();
  }, []);

  const form = useForm({
    resolver: yupResolver(schemaBlog),
    mode: 'onChange',
    reValidateMode: 'onChange',

    defaultValues: {
      ...blog,
      category: {
        title: blog && blog?.category && blog?.category[0]?.name,
        value: (blog && blog?.category && blog?.category[0]?._id) || '',
      },
      status: {
        title: blog?.status,
        value: blog?.status,
      },
      main_image: [{ path: blog?.main_image }],
    },
  });

  const {
    setFocus,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
    control,
  } = form;

  useEffect(() => {
    const firstError = Object.keys(errors).reduce((field: keyof typeof errors, a) => {
      return !!errors[field] ? field : a;
    }, null);

    if (firstError) {
      // @ts-ignore
      setFocus(firstError);
    }
  }, [errors, setFocus]);

  const onSubmit = async (blog) => {
    const {
      _id,
      title,
      author,
      category,
      slug,
      excerpt,
      main_image,
      content,
      status: { value },
    } = blog;
    const statusCode = await handleBlog(
      {
        _id,
        title,
        author,
        slug,
        excerpt,
        content,
        main_image: main_image[0]?.path,
        categoryId: category?._id,
        status: value,
      },
      String(router?.query?.slug) as ActionCommon
    );

    if (statusCode) {
      setTimeout(() => {
        router.back();
      }, 2000);
    }
  };

  const handleGenerateSlug = () => {
    const title = getValues().title;
    if (title) {
      const slug = generateSlug(title);
      setValue('slug', slug);
    }
  };

  return (
    <div className="relative min-w-0 break-words w-full mb-6 rounded">
      <button
        onClick={() => router.back()}
        className="flex items-center focus:outline-none hover:underline"
      >
        <AiOutlineArrowLeft />
        <span className="ml-1 text-sm">Back To Blogs</span>
      </button>
      <h4 className="font-bold tracking-wider mt-10 mb-4 border-b font-josefinsans-bold text-4xl text-black font-bold pb-5 mb-8 border-b">
        {slug === 'add' ? 'Add New' : 'Edit'} Blog
      </h4>
      <form onSubmit={handleSubmit(onSubmit)} className="p-4 bg-white">
        <div className="grid grid-cols-3 gap-4">
          {/* Title */}
          <div className="col-span-4">
            <InputField label="Title" name="title" control={control} />
          </div>
          {/* Slug */}
          <div className="col-span-4 group">
            <label
              htmlFor="slug"
              className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"
            >
              Slug
            </label>
            <div className="flex">
              <InputField name="slug" control={control} />
              <button
                type="button"
                onClick={handleGenerateSlug}
                className="text-sm border ml-1 h-[50px] mt-3 px-4"
              >
                Generate
              </button>
            </div>
          </div>
          {/* Author */}
          <div className="col-span-4">
            <InputField label="Author" name="author" control={control} />
          </div>
          {/* Excerpt */}
          <div className="col-span-4 flex items-end">
            <TextareaField
              label={
                <>
                  <label
                    htmlFor="1"
                    className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"
                  >
                    Excerpt
                  </label>
                  <p className="text-gray-400">
                    The excerpt is used in blog feeds, and also for search results
                  </p>
                </>
              }
              name="excerpt"
              control={control}
            />
          </div>
          {/* Short description */}
          <div className="col-span-4">
            <ReactQuillCommon label="Content" name="content" control={control} />
            {/* <InputField label="Short description" name="short_description" control={control} /> */}
          </div>
          <div className="col-span-4">
            <DropdownSelect
              label="Category"
              name="category"
              control={control}
              placeholder={'Please select'}
              items={categories || []}
            />
          </div>
          <div className="col-span-4">
            <DropdownSelect
              label="Status"
              name="status"
              control={control}
              placeholder={'Please select'}
              items={items}
            />
          </div>
        </div>
        <div className="mt-2">
          <UploadImages
            label="Main image"
            type="large"
            // defaultImges={blog?.main_image}
            name="main_image"
            control={control}
            typeImage="single"
          />
        </div>
        <div className="flex justify-end w-full flex-end">
          <button
            type="submit"
            disabled={loading}
            className={`bg-green-500 ${
              loading && 'opacity-50'
            } shadow text-white py-2 px-10 mt-4 capitalize font-bold focus:outline-none`}
          >
            {loading ? <ILoading /> : slug === 'add' ? 'Add' : 'save'}
          </button>
          <button
            onClick={() => router.back()}
            type="button"
            disabled={loading}
            className={`bg-transparent shadow text-black py-2 px-8 mt-4 capitalize border ml-4 focus:outline-none ${
              loading && 'opacity-50'
            } `}
          >
            cancel
          </button>
        </div>
      </form>
    </div>
  );
}
