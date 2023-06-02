import ProductForm from '@components/Admin/Products/ProductForm';
import LayoutAdmin from '@components/Shared/LayoutAdmin';
import { useRouter } from 'next/router';
import PageNotFound from 'pages/404';
import * as React from 'react';

export interface ProductSlugPageProps {}

export default function ProductSlugPage(props: ProductSlugPageProps) {
  const router = useRouter();
  const { slug } = router.query;
  switch (slug) {
    case 'add':
      return (
        <div className="flex flex-wrap">
          <div className="w-full">
            <ProductForm product={{}} />
          </div>
        </div>
      );
    case 'edit':
      return (
        <div className="flex flex-wrap">
          <div className="w-full px-4">
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
ProductSlugPage.layout = LayoutAdmin;
