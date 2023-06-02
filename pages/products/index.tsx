import { GetServerSideProps, GetStaticProps } from 'next';
import ProductListPage from '@components/Product/ProductListPage';
import { useRouter } from 'next/router';
import { Suspense } from 'react';
import { productsService } from 'services';
import Loading from './loading';

type Props = {
  products: [];
  limit: number;
  total: number;
};

const ProductsPage = ({ products, limit, total }: Props) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading.....</div>;
  }

  return (
    <Suspense fallback={<Loading />}>
      <ProductListPage products={products} />
    </Suspense>
  );
  return <ProductListPage products={products} />;
};

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   // Example for including static props in a Next.js function component page.
//   // Don't forget to include the respective types for any props passed into
//   // the component.
//   const query = context?.params?.query;
//   console.log(
//     '🚀 ~ file: index.tsx:34 ~ constgetServerSideProps:GetServerSideProps= ~ query:',
//     query
//   );
//   try {
//     const data = await productsService.getAllProducts();
//     return { props: { products: data }, revalidate: 1000 };
//   } catch (error) {
//     return {
//       props: {},
//     };
//   }
//   return { notFound: true };
// };

export default ProductsPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    context.res.setHeader('Cache-Control', 's-maxage=5, stale-while-revalidate=5');

    const page = context?.query?.page || 1;
    const price = context?.query?.price || 'all';
    const rating = context?.query?.rating || 'all';
    const sort = context?.query?.sort || 'featured';

    const data = await productsService.getAllProducts({ page, price, rating, sort });
    return {
      props: { products: data },
    };
  } catch (error) {
    return { notFound: true };
  }
};
