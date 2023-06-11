import BlogList from '@components/Blogs/BlogList';
import { LayoutBLog } from '@components/Shared/Layout';
import { SearchInput } from '@components/Shared/SearchInput';
import { useRouterPush } from '@hooks/useRouterPush';
import { DataBlogModel } from 'models';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { blogsService } from 'services/Admin';

export interface BlogPageProps {
  blogs: DataBlogModel;
}

export default function BlogPage({ blogs }: BlogPageProps) {
  const {
    query: { search },
  } = useRouter();
  const { routerPushQuery } = useRouterPush();

  const handleChangeSearch = (search: string) => {
    !!search &&
      search !== 'undefined' &&
      routerPushQuery({
        query: {
          search,
        },
      });
  };

  return (
    <div className="container px-6 mx-auto xl:px-5 max-w-screen-lg py-5 lg:py-8 min-h-screen">
      <div className="mt-14 text-center mb-8">
        <SearchInput value={String(search) || ''} handleChange={handleChangeSearch} />
      </div>
      <BlogList blogs={blogs.data} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    context.res.setHeader('Cache-Control', 's-maxage=5, stale-while-revalidate=5');

    const blogs = await blogsService.getAllBlog();
    return {
      props: { blogs },
    };
  } catch (error) {
    return {
      props: { data: {} },
    };
  }
};

BlogPage.layout = LayoutBLog;
