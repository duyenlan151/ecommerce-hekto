import ProductDetail from '@components/Product/ProductDetail';
import MetaData from '@components/Shared/MetaData';
import { ProductModel } from 'models';
import { GetServerSideProps, GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import Loading from 'pages/products/loading';
import React from 'react';
import { productsService } from 'services';

export interface ProductSlugProps {
  product: ProductModel;
}

export default function ProductDetailSlug({ product }: ProductSlugProps) {
  console.log('🚀 ~ file: [slug].tsx:14 ~ ProductSlug ~ product:', product);
  return (
    // <React.Suspense fallback={<Loading />}>
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
    // </React.Suspense>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await productsService.getAllProducts();
  const paths = products.data.map((product) => ({
    params: {
      slug: [String(product._id), String(product.slug)],
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const slug = context?.params?.slug ?? null;

  // let data =÷ null;
  let product = {};
  try {
    if (slug) {
      product = await productsService.getProductBySlug({
        slug: String(slug[1]),
        id: String(slug[0]),
      });
      console.log(
        '🚀 ~ file: [...slug].tsx:56 ~ constgetStaticProps:GetStaticProps= ~ product:',
        product
      );
    }
    return {
      props: { product },
    };
  } catch (error: any) {
    // if (error.response?.status === 404) {
    //  return {
    //    notFound: true
    //  };
    // } else {
    //  throw error;
    // }
  }

  // if (data?.product?.text.url_key && data?.product?.text.url_key !== slug) {
  //  return {
  //    redirect: {
  //      destination: `/product/${data?.product?.text.url_key}`,
  //      permanent: true,
  //    }
  //  };
  // }

  return {
    props: { product },
  };
};

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   try {
//     context.res.setHeader('Cache-Control', 's-maxage=5, stale-while-revalidate=5');
//     const slug = context.params?.slug;
//     let product;
//     if (slug) {
//       product = await productsService.getProductBySlug({
//         id: String(slug[0]),
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
