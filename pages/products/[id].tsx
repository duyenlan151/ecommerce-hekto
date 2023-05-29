import { GetStaticPaths, GetStaticProps, Metadata, GetServerSideProps } from 'next';

import { Layout } from '@components/Shared/Layout';
import ProductDetail from '@components/Product/ProductDetail';
import { User } from '../../interfaces';
import { dataProduct } from '../../utils/sample-data';
import { ProductItem } from 'models';
import MetaData from '@components/Shared/MetaData';
import { productsService } from 'services';

type Props = {
  product?: ProductItem;
  errors?: string;
  data?: ProductItem;
};

const StaticPropsDetail = ({ product, errors, data }: Props) => {
  console.log('🚀 ~ file: [id].tsx:18 ~ StaticPropsDetail ~ product:', product);
  if (errors) {
    return (
      <Layout title="Error | Next.js + TypeScript Example">
        <p>
          <span style={{ color: 'red' }}>Error:</span> {errors}
        </p>
      </Layout>
    );
  }

  return (
    <section className="container mx-auto">
      <MetaData
        propTitle={product?.name || product?.title}
        propSuffix={product?.category}
        propDescription={product?.name || product?.title}
        propPreviewImage={String(product?.thumbnail)}
        propKeywords={product?.name || product?.title}
      />
      {product && <ProductDetail product={product} />}
    </section>
  );
};

export default StaticPropsDetail;

// export const getStaticPaths: GetStaticPaths = async () => {
//   // Get the paths we want to pre-render based on users
//   const { products } = await productsService.getAllProducts();
//   const paths = products.map((product) => ({
//     params: { id: product.id.toString() },
//   }));

//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   return { paths, fallback: false };
// };

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
//   try {
//     const id = params?.id;
//     const { product } = await productsService.getProductById(id as string);
//     console.log('🚀 ~ file: [id].tsx:63 ~ constgetStaticProps:GetStaticProps= ~ product:', product);
//     // const product = data.product.find((product) => {
//     //   return product.id === Number(id);
//     // });
//     // By returning { props: item }, the StaticPropsDetail component
//     // will receive `item` as a prop at build time
//     return { props: { product } };
//   } catch (err: any) {
//     return { props: { errors: err.message } };
//   }
// };

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params?.id;
  const product = await productsService.getProductById(id as string);
  return { props: { product: product } };
};
