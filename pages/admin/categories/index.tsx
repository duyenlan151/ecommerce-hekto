import CategoryList from '@components/Admin/Categories/CategoryList';
import LayoutAdmin from '@components/Shared/LayoutAdmin';
import { Table } from '@components/Shared/Table';
import { TabsListAdmin } from '@components/Shared/Tabs/TabsListAdmin';
import { GetServerSideProps } from 'next';
import { useState } from 'react';
import { categoryService } from 'services/Admin';

export interface CategoriesPageProps {
  data: [];
}

const tabs = [
  { id: 1, title: 'All', value: 'all' },
  { id: 2, title: 'Active', value: 'active' },
  { id: 3, title: 'Locked', value: 'locked' },
];
export default function CategoriesPage({ data }: CategoriesPageProps) {
  const [activeTab, setActiveTab] = useState('all');

  const handleSetActiveTab = (value) => {
    setActiveTab(value);
  };
  return (
    <>
      <h4 className="font-josefinsans-bold text-5xl text-black font-bold pb-5 mb-8 border-b">
        Categories
      </h4>
      <TabsListAdmin tabs={tabs} activeTab={activeTab} setActiveTab={handleSetActiveTab} />
      <CategoryList data={data} />
    </>
  );
}

CategoriesPage.layout = LayoutAdmin;

export const getServerSideProps: GetServerSideProps = async (context) => {
  context.res.setHeader('Cache-Control', 's-maxage=5, stale-while-revalidate');

  try {
    const { data } = await categoryService.getAllCategory();

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
