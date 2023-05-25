import { GetStaticPaths, GetStaticProps, Metadata } from 'next';

import { Layout } from '@components/Layout';
import ProductDetail from '@components/Product/ProductDetail';
import { User } from '../../interfaces';
import { dataProduct } from '../../utils/sample-data';
import { ProductItem } from 'models';
import MetaData from '@components/MetaData';

type Props = {
  product?: ProductItem;
  errors?: string;
};

const StaticPropsDetail = ({ product, errors }: Props) => {
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
        propTitle={product.name}
        propSuffix="Duyen Lan"
        propDescription={product.name}
        propPreviewImage={product?.thumbnail[0]}
        propKeywords={product.name}
      />
      {product && <ProductDetail product={product} />}
    </section>
  );
};

export default StaticPropsDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on users
  const paths = dataProduct.map((product) => ({
    params: { id: product.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id;
    const product = dataProduct.find((product) => {
      console.log(
        '🚀 ~ file: [id].tsx:52 ~ constgetStaticProps:GetStaticProps= ~ product:',
        product
      );
      return product.id === Number(id);
    });
    // By returning { props: item }, the StaticPropsDetail component
    // will receive `item` as a prop at build time
    return { props: { product } };
  } catch (err: any) {
    return { props: { errors: err.message } };
  }
};
