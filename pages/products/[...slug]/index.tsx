import ProductDetail from '@components/Product/ProductDetail';
import MetaData from '@components/Shared/MetaData';
import { ProductModel } from 'models';
import { GetServerSideProps, GetStaticProps } from 'next';
import React from 'react';
import { productsService } from 'services';
import Loading from '../loading';

export interface ProductSlugProps {
  product: ProductModel;
}

export default function ProductSlug({ product }: ProductSlugProps) {
  console.log('🚀 ~ file: index.tsx:14 ~ ProductSlug ~ product:', product);
  return (
    <React.Suspense fallback={<Loading />}>
      <section className="container mx-auto">
        <MetaData
          propTitle={product?.name || product?.title}
          propSuffix={product?.category?.name}
          propDescription={product?.description || product?.title}
          propPreviewImage={String(product?.images[0]?.path)}
          propKeywords={product?.name || product?.title}
        />
        {product && <ProductDetail product={product} />}
      </section>
    </React.Suspense>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    context.res.setHeader('Cache-Control', 's-maxage=5, stale-while-revalidate=5');
    const slug = context.params?.slug;
    let product;
    if (slug) {
      product = await productsService.getProductBySlug({
        id: String(slug[0]),
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
