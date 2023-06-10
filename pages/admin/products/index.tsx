// components
import ProductList from '@components/Admin/Products/ProductList';
import LayoutAdmin from '@components/Shared/Layout/LayoutAdmin';
import { Pagination } from '@components/Shared/Pagination';
import { TabsListAdmin } from '@components/Shared/Tabs/TabsListAdmin';
import { DataCategoryModel } from 'models';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { productsService } from 'services/Admin';
import axiosClient from 'services/api-services';

// layout for page
export interface ProductsPageProps {
  data: DataCategoryModel;
}

const tabs = [
  { id: 1, title: 'All', value: 'all' },
  { id: 2, title: 'Active', value: 'active' },
  { id: 3, title: 'Archived', value: 'archived' },
  { id: 4, title: 'Lock', value: 'lock' },
];

export default function ProductsPage({ data }: ProductsPageProps) {
  const [activeTab, setActiveTab] = useState('all');
  const router = useRouter();
  const {
    query: { page, status },
  } = router;

  useEffect(() => {
    router.push({
      pathname: router.pathname,
      query: {
        status: activeTab,
      },
    });
  }, [activeTab]);

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
  const { req } = context;
  const cookies = req.headers.cookie;

  axiosClient.defaults.headers.common['Cookie'] = cookies;

  try {
    const page = context?.query?.page || 1;
    const status = context?.query?.status || 'all';
    const data = await productsService.getAllProducts({ page, status });

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
