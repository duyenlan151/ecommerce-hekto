import BlogList from '@components/Blogs/BlogList';
import { ILoadingSeconday } from '@components/Icons';
import { LayoutBLog } from '@components/Shared/Layout';
import { SearchInput } from '@components/Shared/SearchInput';
import { usePaginateWithSWR } from '@hooks/index';
import { useRouterPush } from '@hooks/useRouterPush';
import { DataBlogModel } from 'models';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { blogsService } from 'services/Admin';

export interface BlogPageProps {
  blogs: DataBlogModel;
}

const DEFAULT_STATE = {
  curPage: 1,
  hasNextPage: false,
  loading: false,
};

export default function BlogPage({ blogs }: BlogPageProps) {
  const { query } = useRouter();
  const { search } = query;

  const { routerPushQuery } = useRouterPush();
  const { result, error, isLoadingMore, size, setSize, isReachingEnd, isLoading } =
    usePaginateWithSWR({
      path: '/blogs',
      fetcher: () => blogsService.getAllBlog({ limit: 3, page: size }),
    });

  const blogsList = useMemo(() => {
    return result.reduce(
      (newArray: [], item: DataBlogModel) => newArray.concat(item.data as []),
      []
    );
  }, [result]);

  // const issues = data ? [].concat(...data?.['0']?.data) : [];

  // const [dataBlogs, setDataBlogs] = useState<BlogModel[]>(blogs.data || []);
  // const [defaultState, setDefaultState] = useState({
  //   ...DEFAULT_STATE,
  //   hasNextPage: blogs.hasNextPage,
  // });
  // const refBlogs = useRef<Partial<BlogModel[]>>(dataBlogs);

  const handleChangeSearch = (search: string) => {
    !!search &&
      search !== 'undefined' &&
      routerPushQuery({
        query: {
          search,
        },
      });
  };
  if (error) return <h1>Something went wrong!</h1>;
  if (!result) return <h1>Loading...</h1>;
  // const handleLoadMore = async () => {
  //   if (defaultState.loading) return;

  //   setDefaultState((prev) => ({
  //     ...prev,
  //     loading: true,
  //   }));
  //   try {
  //     const newCurPage = defaultState.curPage + 1;

  //     const newBlogs = await blogsService.getAllBlog({ limit: 3, page: newCurPage });

  //     let data;
  //     if (Number(newCurPage) > 1) {
  //       data = [...(refBlogs.current || []), ...newBlogs.data];
  //       refBlogs.current = [...(refBlogs.current || []), ...newBlogs.data];
  //     } else {
  //       refBlogs.current = newBlogs.data;
  //       data = [...newBlogs.data];
  //     }

  //     setDataBlogs(data);
  //     setDefaultState((prev) => ({
  //       ...prev,
  //       hasNextPage: newBlogs.hasNextPage,
  //       curPage: newCurPage,
  //     }));
  //   } catch (error) {
  //   } finally {
  //     setDefaultState((prev) => ({
  //       ...prev,
  //       loading: false,
  //     }));
  //   }
  // };

  return (
    <div className="container px-6 mx-auto xl:px-5 max-w-screen-lg py-5 lg:py-8 min-h-screen">
      <div className="mt-14 text-center mb-8">
        <SearchInput value={String(search) || ''} handleChange={handleChangeSearch} />
      </div>
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
