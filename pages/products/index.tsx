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
};

export default ProductsPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    context.res.setHeader('Cache-Control', 's-maxage=5, stale-while-revalidate=5');

    const page = context?.query?.page || 1;
    const price = context?.query?.price || 'all';
    const rating = context?.query?.rating || 'all';
    const sort = context?.query?.sort || 'featured';

    const data = await productsService.getAllProducts({ page, price, rating, sort, limit: 3 });
    return {
      props: { products: data },
    };
  } catch (error) {
    return { notFound: true };
  }
};
