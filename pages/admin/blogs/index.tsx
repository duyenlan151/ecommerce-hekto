import BlogList from '@components/Admin/Blogs/BlogList';
import LayoutAdmin from '@components/Shared/Layout/LayoutAdmin';
import { Pagination } from '@components/Shared/Pagination';
import { TabsListAdmin } from '@components/Shared/Tabs/TabsListAdmin';
import { DataBlogModel, DataCategoryModel } from 'models';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { blogsService } from 'services/Admin';
import axiosClient from 'services/api-services';

export interface BlosPageProps {
  data: DataBlogModel;
}

const tabs = [
  { id: 1, title: 'All', value: 'all' },
  { id: 2, title: 'Active', value: 'active' },
  { id: 3, title: 'Archived', value: 'archived' },
  { id: 4, title: 'Lock', value: 'lock' },
];
export default function BlosPage({ data }: BlosPageProps) {
  const [activeTab, setActiveTab] = useState('all');
  const router = useRouter();
  const {
    query: { page },
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
        Blogs
      </h4>
      <TabsListAdmin tabs={tabs} activeTab={activeTab} setActiveTab={handleSetActiveTab} />
      <BlogList data={data?.data} />
      <Pagination
        totalCount={data?.totalDocs || 0}
        currentPage={Number(page) || 1}
        pageSize={data?.limit || 10}
      />
    </>
  );
}

BlosPage.layout = LayoutAdmin;

export const getServerSideProps: GetServerSideProps = async (context) => {
  context.res.setHeader('Cache-Control', 's-maxage=1000, stale-while-revalidate');

  const { req } = context;
  const cookies = req.headers.cookie;

  axiosClient.defaults.headers.common['Cookie'] = cookies;

  try {
    const page = context?.query?.page || 1;
    const status = context?.query?.status || 'all';
    const data = await blogsService.getAllBlog({ page, status });

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
