import BlogList from '@components/Blogs/BlogList';
import { ILoadingSeconday } from '@components/Icons';
import { LayoutBLog } from '@components/Shared/Layout';
import { SearchInput } from '@components/Shared/SearchInput';
import usePaginateWithSWR from '@hooks/swr/usePaginateWithSWR';
import { useRouterPush } from '@hooks/useRouterPush';
import { DataBlogModel } from 'models';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

export interface BlogPageProps {
  blogs: DataBlogModel;
}
export default function BlogPage({ blogs }: BlogPageProps) {
  const { query } = useRouter();
  const { search } = query;
  const { routerPushQuery } = useRouterPush();

  const { data, error, size, setSize, isReachingEnd, isLoading, isLoadingMore } =
    usePaginateWithSWR({
      url: '/blogs',
      params: { limit: 3, search },
    });

  const blogsList = useMemo(
    () =>
      (data &&
        data.reduce((newArray: [], item: DataBlogModel) => newArray.concat(item.data as []), [])) ||
      [],

    [data]
  );

  const handleChangeSearch = (search: string) => {
    routerPushQuery({
      query: search
        ? {
            search,
          }
        : null,
    });
  };
  if (error) return <h1>Something went wrong!</h1>;
  // if (!data) return <h1>Loading...</h1>;

  return (
    <div className="container px-6 mx-auto xl:px-5 max-w-screen-lg py-5 lg:py-8 min-h-screen">
      <div className="mt-14 text-center mb-8">
        <SearchInput value={String(search) || ''} handleChange={handleChangeSearch} />
      </div>
      {!isLoading && !blogsList.length && <div className="text-center">No blog found</div>}
      <BlogList blogs={blogsList} />
      {!isReachingEnd && (
        <div className="mt-16 flex justify-center">
          <a
            className="cursor-pointer min-w-[150px] relative inline-flex justify-center items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300"
            onClick={() => !isLoading && setSize(size + 1)}
          >
            {isLoadingMore ? <ILoadingSeconday /> : <span>Load more</span>}
          </a>
        </div>
      )}
    </div>
  );
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   try {
//     context.res.setHeader('Cache-Control', 's-maxage=5, stale-while-revalidate=5');

//     const blogs = await blogsService.getAllBlog({ limit: 3 });
//     return {
//       props: { blogs },
//     };
//   } catch (error) {
//     return {
//       props: { data: {} },
//     };
//   }
// };

BlogPage.layout = LayoutBLog;
