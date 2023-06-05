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
    <div className="container mx-auto px-4">
      <div className="text-sub-title font-lato-light leading-7 pt-8 pb-4">
        Cart/ Information/ Shipping/ Payment
      </div>
      <div className="bg-white">
        <div className="flex lg:flex-nowrap flex-wrap justify-center">
          <div className="lg:p-10 p-4">
            <ImagesGallary images={product.images} />
          </div>
          <div className="lg:p-10 p-4 lg:basis-1/2 basis-full lg:pl-10 lg:mt-0 mt-5 w-full justify-self-end border-l border-primary">
            <ProductInfo product={product} />
          </div>
        </div>
      </div>
      <div className="mt-4 mb-6 bg-white">
        <ProductDescription product={product} />
      </div>
    </div>
  );
}
