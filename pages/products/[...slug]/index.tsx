import ProductDetail from '@components/Product/ProductDetail';
import MetaData from '@components/Shared/MetaData';
import { ProductModel } from 'models';
import { GetServerSideProps } from 'next';
import * as React from 'react';
import { productsService } from 'services';

export interface ProductSlugProps {
  product: ProductModel;
}

export default function ProductSlug({ product }: ProductSlugProps) {
  return (
    <section className="container mx-auto">
      <MetaData
        propTitle={product?.name || product?.title}
        propSuffix={product?.category?.name}
        propDescription={product?.name || product?.title}
        propPreviewImage={String(product?.thumbnail)}
        propKeywords={product?.name || product?.title}
      />
      {product && <ProductDetail product={product} />}
    </section>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const slug = context.params?.slug;
    let product;
    if (slug) {
      product = await productsService.getProductBySlug({
        id: String(slug[0]),
        slug: String(slug[1]),
      });

      if (!product) {
        return { notFound: true };
      }
    }
    return {
      props: { product },
    };
  } catch (error) {
    return { notFound: true };
  }
};
