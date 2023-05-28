import { GetStaticProps } from 'next';

import { Layout } from '@components/Shared/Layout';
import ProductListPage from '@components/Product/ProductListPage';
import { User } from '../../interfaces';
import { sampleUserData } from '../../utils/sample-data';
import { productsService } from 'services';

type Props = {
  products: [];
  limit: number;
  total: number;
};

const ProductsPage = ({ products, limit, total }: Props) => (
  <>
    <ProductListPage products={products} />
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  try {
    const { products, limit, total } = await productsService.getAllProducts();
    return { props: { products, limit, total } };
  } catch (error) {}
  return { props: {} };
};

export default ProductsPage;
