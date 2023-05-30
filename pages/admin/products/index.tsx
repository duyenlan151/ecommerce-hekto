// components
import ProductList from '@components/Admin/Products/ProductList';
import LayoutAdmin from '@components/Shared/LayoutAdmin';
import { TabsListAdmin } from '@components/Shared/Tabs/TabsListAdmin';
import { GetServerSideProps } from 'next';
import { useState } from 'react';
import { productsService } from 'services/Admin';

// layout for page
export interface ProductsPageProps {
  data: [];
}

const tabs = [
  { id: 1, title: 'All', value: 'all' },
  { id: 2, title: 'Active', value: 'active' },
  { id: 3, title: 'Locked', value: 'locked' },
];

export default function ProductsPage({ data }: ProductsPageProps) {
  const [activeTab, setActiveTab] = useState('all');

  const handleSetActiveTab = (value) => {
    setActiveTab(value);
  };
  return (
    <>
      <h4 className="font-josefinsans-bold text-5xl text-black font-bold pb-5 mb-8 border-b">
        Products
      </h4>
      <TabsListAdmin tabs={tabs} activeTab={activeTab} setActiveTab={handleSetActiveTab} />
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
