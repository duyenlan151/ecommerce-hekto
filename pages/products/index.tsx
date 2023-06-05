import ProductListPage from '@components/Product/ProductListPage';
import LoadingCommon from '@components/Shared/Common/LoadingCommon';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { Suspense } from 'react';
import { productsService } from 'services';

type Props = {
  products: [];
  limit: number;
  total: number;
};

const ProductsPage = ({ products, limit, total }: Props) => {
  const router = useRouter();

  if (router.isFallback) {
    return <LoadingCommon />;
  }

  return (
    <Suspense fallback={<LoadingCommon />}>
      <ProductListPage products={products} />
    </Suspense>
  );
};

export default ProductsPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    context.res.setHeader('Cache-Control', 's-maxage=5, stale-while-revalidate=5');

    const page = context?.query?.page || 1;
    console.log(
      '🚀 ~ file: index.tsx:35 ~ constgetServerSideProps:GetServerSideProps= ~ context?.query:',
      context?.query
    );
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
