import { GetStaticPaths, GetStaticProps } from 'next';

import ProductListPage from '@components/Product/ProductListPage';
import { productsService } from 'services';
import { useRouter } from 'next/router';

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
  return <ProductListPage products={products} />;
};

// export const getStaticPaths: GetStaticPaths = async () => {
//   // Example for including static props in a Next.js function component page.
//   // Don't forget to include the respective types for any props passed into
//   // the component.
//   const data = await productsService.getAllProducts();
//   return {
//     paths: data.products.map((product) => ({ params: { product_id: product.id } })),
//     fallback: true,
//   };
// };

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  try {
    const data = await productsService.getAllProducts();
    return { props: { products: data }, revalidate: 5 };
  } catch (error) {}
  return { props: {} };
};

export default ProductsPage;
