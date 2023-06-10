import CategoryForm from '@components/Admin/Categories/CategoryForm';
import LayoutAdmin from '@components/Shared/Layout/LayoutAdmin';
import { useRouter } from 'next/router';
import PageNotFound from 'pages/404';

export interface CategoryActionPageProps {}

export default function CategoryActionPage(props: CategoryActionPageProps) {
  const router = useRouter();
  const { slug } = router.query;
  switch (slug) {
    case 'add':
      return (
        <div className="flex flex-wrap">
          <div className="w-full">
            <CategoryForm category={{}} />
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

CategoryActionPage.layout = LayoutAdmin;
