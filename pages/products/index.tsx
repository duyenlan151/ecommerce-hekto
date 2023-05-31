import { GetStaticProps } from 'next';
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

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  try {
    const data = await productsService.getAllProducts();
    return { props: { products: data }, revalidate: 1000 };
  } catch (error) {}
  return { props: {} };
};

export default ProductsPage;
