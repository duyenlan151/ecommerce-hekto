import ILoading from '@components/Icons/ILoading';
import { InputField } from '@components/Shared/Common';
import { DropdownSelect } from '@components/Shared/Dropdowns';
import ReactQuillCommon from '@components/Shared/ReactQuill';
import UploadImages from '@components/Shared/UploadImages';
import { yupResolver } from '@hookform/resolvers/yup';
import { useProducts } from '@hooks/index';
import { ActionCommon, ProductModel } from 'models';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { schemaProduct } from './ProductForm.props';

export interface ProductFormProps {
  product: Partial<ProductModel>;
}

const items = [
  { id: 1, title: 'Active', value: 'active' },
  { id: 2, title: 'Archived', value: 'archived' },
  { id: 3, title: 'Lock', value: 'lock' },
];

export default function ProductForm({ product }: ProductFormProps) {
  const router = useRouter();
  const { loading, handleProduct } = useProducts();
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

  const onSubmit = async (product) => {
    const {
      _id,
      title,
      description,
      price,
      images,
      category,
      short_description,
      discount_percentage,
      rating,
    } = product;
    const statusCode = await handleProduct(
      {
        _id,
        title,
        description,
        price: Number(price),
        images,
        category,
        short_description,
        discount_percentage: Number(discount_percentage),
        rating: Number(rating),
      },
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
        <span className="ml-1 text-sm">Back To Products</span>
      </button>
      <h4 className="font-bold tracking-wider mt-10 mb-4 border-b font-josefinsans-bold text-4xl text-black font-bold pb-5 mb-8 border-b">
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
            <ReactQuillCommon
              label="Short Description"
              name="short_description"
              control={control}
            />
            {/* <InputField label="Short description" name="short_description" control={control} /> */}
          </div>
          <div className="col-span-4">
            <DropdownSelect
              label="Category"
              name="category"
              control={control}
              placeholder={'Please select'}
              items={items}
            />
          </div>
          {/* Price */}
          <div className="col-start-1">
            <InputField label="Price" name="price" type="number" control={control} />
          </div>
          {/*  Distcount Percent*/}
          <div className="col-start-2">
            <InputField
              label="Distcount Percentage"
              name="discount_percentage"
              type="number"
              control={control}
            />
          </div>
          {/* Rating */}
          <div className="col-start-3">
            <InputField label="Rating" name="rating" type="number" control={control} />
          </div>
        </div>
        <div className="mt-2">
          <UploadImages defaultImges={product?.images} name="images" control={control} />
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
