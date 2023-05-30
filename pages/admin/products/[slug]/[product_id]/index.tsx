import ProductForm from '@components/Admin/Products/ProductForm';
import LayoutAdmin from '@components/Shared/LayoutAdmin';
import { ProductModel } from 'models';
import { GetServerSideProps } from 'next';
import * as React from 'react';
import { productsService } from 'services/Admin';

export interface ProductDetailPageProps {
  product: ProductModel;
}

export default function ProductDetailPage({ product }: ProductDetailPageProps) {
  return (
    <div className="flex flex-wrap">
      <div className="w-full px-4">
        <ProductForm product={product} />
      </div>
    </div>
  );
}

ProductDetailPage.layout = LayoutAdmin;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.params?.slug;
  if (slug !== 'edit') {
    return { notFound: true };
  }

  const product_id = context.params?.product_id;
  if (product_id) {
    const product = await productsService.getProductById({ id: String(product_id) });

    return {
      props: { product },
    };
  }
  return { notFound: true };
};
