import ImagesGallary from '@components/Shared/ImagesGallary/ImagesGallary';
import { ProductModel } from 'models';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import ProductDescription from './ProductDescription';
import ProductInfo from './ProductInfo';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export interface ProductDetailProps {
  product: ProductModel;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  return (
    <div className="container mx-auto lg:py-4 py-10 px-4">
      <div className="text-sub-title font-lato-light leading-7 mt-3">
        Cart/ Information/ Shipping/ Payment
      </div>
      <div className="flex lg:flex-nowrap flex-wrap justify-center mt-6 pb-12 border-b">
        <div className="">
          <ImagesGallary images={product.images} />
        </div>
        <div className="lg:basis-1/2 basis-full lg:ml-20 lg:mt-0 mt-5 w-full justify-self-end">
          <ProductInfo product={product} />
        </div>
      </div>
      <div className="mt-12">
        <ProductDescription product={product} />
      </div>
    </div>
  );
}
