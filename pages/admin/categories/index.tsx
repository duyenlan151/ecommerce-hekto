import CategoryList from '@components/Admin/Categories/CategoryList';
import LayoutAdmin from '@components/Shared/LayoutAdmin';
import { Pagination } from '@components/Shared/Pagination';
import { TabsListAdmin } from '@components/Shared/Tabs/TabsListAdmin';
import { DataCategoryModel } from 'models';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { categoryService } from 'services/Admin';

export interface CategoriesPageProps {
  data: DataCategoryModel;
}

const tabs = [
  { id: 1, title: 'All', value: 'all' },
  { id: 2, title: 'Active', value: 'active' },
  { id: 3, title: 'Locked', value: 'locked' },
];
export default function CategoriesPage({ data }: CategoriesPageProps) {
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
        Categories
      </h4>
      <TabsListAdmin tabs={tabs} activeTab={activeTab} setActiveTab={handleSetActiveTab} />
      <CategoryList data={data?.data} />
      <Pagination
        totalCount={data?.totalDocs || 0}
        currentPage={Number(page) || 1}
        pageSize={data?.limit || 10}
      />
    </>
  );
}

CategoriesPage.layout = LayoutAdmin;

export const getServerSideProps: GetServerSideProps = async (context) => {
  context.res.setHeader('Cache-Control', 's-maxage=1000, stale-while-revalidate');

  try {
    const page = context?.query?.page || 1;
    const data = await categoryService.getAllCategory({ page });

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
