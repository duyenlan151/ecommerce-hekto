import BlogForm from '@components/Admin/Blogs/BlogForm';
import CategoryForm from '@components/Admin/Categories/CategoryForm';
import LayoutAdmin from '@components/Shared/Layout/LayoutAdmin';
import { useRouter } from 'next/router';
import PageNotFound from 'pages/404';

export interface BlogActionPageProps {}

export default function BlogActionPage(props: BlogActionPageProps) {
  const router = useRouter();
  const { slug } = router.query;
  switch (slug) {
    case 'add':
      return (
        <div className="flex flex-wrap">
          <div className="w-full">
            <BlogForm blog={{}} />
          </div>
        </div>
      );
    case 'edit':
      return (
        <div className="flex flex-wrap">
          <div className="w-full">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
              <>edit category</>
            </div>
          </div>
        </div>
      );
    default:
      return <PageNotFound />;
  }
}

BlogActionPage.layout = LayoutAdmin;
