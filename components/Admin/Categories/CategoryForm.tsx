import ILoading from '@components/Icons/ILoading';
import { InputField } from '@components/Shared/Common';
import { yupResolver } from '@hookform/resolvers/yup';
import { useCategories } from '@hooks/useCategories';
import { ActionCommon, CategoryModel } from 'models';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import * as yup from 'yup';

export interface CategoryFormProps {
  category: Partial<CategoryModel>;
}

const schema = yup
  .object({
    name: yup
      .string()
      .required('Please insert name')
      .max(255, 'Value must be at most 255 characters'),
    slug: yup
      .string()
      .required('Please insert slug')
      .max(255, 'Value must be at most 255 characters'),
  })
  .required();

export default function CategoryForm({ category }: CategoryFormProps) {
  const router = useRouter();
  const { loading, handleCategory } = useCategories();
  const {
    query: { slug },
  } = router;

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      ...(category || { name: '', slug: '' }),
    },
  });

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = form;

  const onSubmit = async (category) => {
    const { _id, name, slug } = category;
    const status = await handleCategory(
      { _id, name, slug },
      String(router?.query?.slug) as ActionCommon
    );

    if (status) {
      setTimeout(() => {
        router.back();
      }, 2000);
    }
  };

  return (
    <div className="relative p-4 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
      <button
        onClick={() => router.back()}
        className="flex items-center focus:outline-none hover:underline"
      >
        <AiOutlineArrowLeft />
        <span className="ml-1 text-sm">Back To Categories</span>
      </button>
      <h4 className="text-3xl font-bold tracking-wider mt-10 mb-4 pb-4 border-b">
        {slug === 'add' ? 'Add New' : 'Edit'} Category
      </h4>
      <form onSubmit={handleSubmit(onSubmit)} className="py-2">
        <InputField label="Name" name="name" control={control} />
        <InputField label="Slug" name="slug" control={control} />
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
