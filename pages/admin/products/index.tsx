// components
import ProductList from '@components/Admin/Products/ProductList';
import LayoutAdmin from '@components/Shared/LayoutAdmin';
import { Pagination } from '@components/Shared/Pagination';
import { TabsListAdmin } from '@components/Shared/Tabs/TabsListAdmin';
import { DataCategoryModel } from 'models';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { productsService } from 'services/Admin';

// layout for page
export interface ProductsPageProps {
  data: DataCategoryModel;
}

const tabs = [
  { id: 1, title: 'All', value: 'all' },
  { id: 2, title: 'Active', value: 'active' },
  { id: 3, title: 'Locked', value: 'locked' },
];

export default function ProductsPage({ data }: ProductsPageProps) {
  const [activeTab, setActiveTab] = useState('all');
  const {
    query: { page },
  } = useRouter();

  const handleSetActiveTab = (value) => {
    setActiveTab(value);
  };
  return (
    <>
      <h4 className="font-josefinsans-bold text-5xl text-black font-bold pb-5 mb-8 border-b">
        Products
      </h4>
      <TabsListAdmin tabs={tabs} activeTab={activeTab} setActiveTab={handleSetActiveTab} />
      <ProductList data={data.data} />
      <Pagination
        totalCount={data?.totalDocs || 0}
        currentPage={Number(page) || 1}
        pageSize={data?.limit || 10}
      />
    </>
  );
}

ProductsPage.layout = LayoutAdmin;

export const getServerSideProps: GetServerSideProps = async (context) => {
  context.res.setHeader('Cache-Control', 's-maxage=5, stale-while-revalidate');

  try {
    const data = await productsService.getAllProducts();

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
