import { BreadcrumdMain } from '@components/Shared';
import { ImagesGallary } from '@components/Shared/ImagesGallary/ImagesGallary';
import { ProductModel } from 'models';
import useTranslation from 'next-translate/useTranslation';
import { useMemo, useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import { ProductDescription } from './ProductDescription';
import { ProductInfo } from './ProductInfo';
import { breadcrumbsForProduct } from './ProductItem.props';

export interface ProductDetailProps {
  product: ProductModel;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const { lang, t } = useTranslation('products');
  const [show, setShow] = useState(false);

  const breadcrumbsProduct = useMemo(() => breadcrumbsForProduct(product, lang), [lang]);

  return (
    <div className="container mx-auto px-4 mb-10">
      <div className="text-sub-title font-lato-light leading-7 pt-8 pb-4">
        <BreadcrumdMain items={breadcrumbsProduct} />
      </div>
      <div className="bg-white">
        <div className="lg:flex lg:flex-nowrap flex-wrap">
          <div className="lg:p-10 p-4">
            <ImagesGallary images={product.images} />
          </div>
          <div className="lg:p-10 p-4 lg:basis-1/2 basis-full lg:pl-10 lg:mt-0 mt-5 w-full justify-self-end border-l border-primary">
            <ProductInfo product={product} />
          </div>
        </div>
      </div>
      <div className={`mt-4 bg-white ${!show && 'h-[500px]'} relative overflow-hidden`}>
        <ProductDescription product={product} />

        {!show && (
          <div
            style={{
              backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0), rgb(255, 255, 255))',
            }}
            className="absolute bottom-0 left-0 h-[200px] w-full"
          ></div>
        )}
      </div>
      <div className="bg-white text-center py-5" data-view-id="pdp_view_description_button">
        <a
          className="cursor-pointer border py-3 w-[150px] px-10"
          onClick={() => setShow((prev) => !prev)}
        >
          {t(!show ? 'view-more' : 'view-less')}
        </a>
      </div>
    </div>
  );
}
