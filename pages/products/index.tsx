import ProductListPage from '@components/Product/ProductListPage';
import LoadingCommon from '@components/Shared/Common/LoadingCommon';
import { useRequestWithSWR } from '@hooks/index';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { Suspense } from 'react';
import { productsService } from 'services';
import axiosClient from 'services/api-services';

type Props = {
  products: [];
  limit: number;
  total: number;
};

const ProductsPage = ({ products, limit, total }: Props) => {
  const router = useRouter();
  const {
    query: { category, page = 1, price, rating, sort, search },
  } = router;

  const { response, isLoading } = useRequestWithSWR({
    url: '/admin/products',
    params: { category, page, price, rating, sort, search },
  });

  if (router.isFallback) {
    return <LoadingCommon />;
  }

  return (
    <Suspense fallback={<LoadingCommon />}>
      <ProductListPage products={response} isLoading={isLoading} />
    </Suspense>
  );
};

export default ProductsPage;

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   try {
// context.res.setHeader('Cache-Control', 's-maxage=5, stale-while-revalidate=5');

// const { req } = context;
// const cookies = req.headers.cookie;

// axiosClient.defaults.headers.common['Cookie'] = cookies;

// const page = context?.query?.page || 1;
// const price = context?.query?.price || 'all';
// const rating = context?.query?.rating || 'all';
// const sort = context?.query?.sort || 'featured';
// const category = context?.query?.category || '';

// const data = await productsService.getAllProducts({
//   page,
//   price,
//   rating,
//   sort,
//   category,
// });

// const res = await axiosClient.get(`/admin/products`, {
//   withCredentials: true,
//   headers: {
//     Cookie: `${cookies};`,
//   },
// });
//     return {
//       props: { products: {} },
//     };
//   } catch (error) {
//     return { props: { products: [] } };
//   }
// };
