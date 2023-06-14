import ProductDetail from '@components/Product/ProductDetail';
import MetaData from '@components/Shared/MetaData';
import { useRequestWithSWR } from '@hooks/index';
import { ProductModel } from 'models';
import { useRouter } from 'next/router';
import React from 'react';
import Loading from '../loading';

export default function ProductSlug() {
  const {
    query: { slug },
  } = useRouter();

  const { data: product, isLoading } = useRequestWithSWR<ProductModel>({
    url: '/admin/products',
    params: { id: String(slug[0]), slug: String(slug[1]) },
  });

  return (
    <React.Suspense fallback={<Loading />}>
      <section className="container mx-auto">
        <MetaData
          propTitle={product?.name || product?.title}
          propSuffix={product?.category[0]?.name}
          propDescription={product?.description || product?.title}
          propPreviewImage={String(product?.images[0]?.path)}
          propKeywords={product?.name || product?.title}
        />
        {product && <ProductDetail product={product} />}
      </section>
    </React.Suspense>
  );
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   try {
//     context.res.setHeader('Cache-Control', 's-maxage=5, stale-while-revalidate=5');
//     const slug = context.params?.slug;
//     let product;
//     if (slug) {
//       product = await productsService.getProductBySlug({
//         id: String(slug[0]),
//         slug: '',
//       });

//       if (!product) {
//         return { notFound: true };
//       }
//     }
//     return {
//       props: { product },
//     };
//   } catch (error) {
//     return { notFound: true };
//   }
// };
