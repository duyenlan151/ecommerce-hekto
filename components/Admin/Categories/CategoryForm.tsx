import { ILoading } from '@components/Icons';
import { InputField } from '@components/Shared/Common';
import { DropdownSelect } from '@components/Shared/Dropdowns';
import { yupResolver } from '@hookform/resolvers/yup';
import { useCategories } from '@hooks/useCategories';
import { ActionCommon } from 'models';
import { CategoryModel } from 'models/category';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { items, schema } from './Category.props';

export interface CategoryFormProps {
  category: Partial<CategoryModel>;
}

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
      ...category,
    },
  });

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = form;

  const onSubmit = async (category) => {
    const { _id, name, slug, status } = category;
    const statusCode = await handleCategory(
      { _id, name, slug, status },
      String(router?.query?.slug) as ActionCommon
    );

    if (statusCode) {
      setTimeout(() => {
        router.back();
      }, 2000);
    }
  };

  return (
    <div className="relative min-w-0 break-words bg-white w-full mb-6 rounded">
      <button
        onClick={() => router.back()}
        className="flex items-center focus:outline-none hover:underline"
      >
        <AiOutlineArrowLeft />
        <span className="ml-1 text-sm">Back To Categories</span>
      </button>
      <h4 className="font-bold tracking-wider mt-10 mb-4 border-b font-josefinsans-bold text-4xl text-black font-bold pb-5 mb-8 border-b">
        {slug === 'add' ? 'Add New' : 'Edit'} Category
      </h4>
      <form onSubmit={handleSubmit(onSubmit)} className="py-2">
        <InputField label="Name" name="name" control={control} />
        <InputField label="Slug" name="slug" control={control} />
        <DropdownSelect
          label="Status"
          name="status"
          control={control}
          placeholder={'Please select'}
          items={items}
        />
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
