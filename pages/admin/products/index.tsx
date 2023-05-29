import React from 'react';

// components
import CardTable from '@components/Shared/Cards/CardTable';
import LayoutAdmin from '@components/Shared/LayoutAdmin';
import { GetServerSideProps } from 'next';
import { productsService } from 'services/Admin';
import ProductList from '@components/Admin/Products/ProductList';

// layout for page
export interface ProductsPageProps {
  data: [];
}

export default function ProductsPage({ data }: ProductsPageProps) {
  return (
    <>
      <ProductList data={data} />
    </>
  );
}

ProductsPage.layout = LayoutAdmin;

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { data } = await productsService.getAllProducts();

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    return {
      props: {
        error,
      },
    };
  }
};
