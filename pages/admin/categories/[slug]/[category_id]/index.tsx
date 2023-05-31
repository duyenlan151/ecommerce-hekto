import CategoryForm from '@components/Admin/Categories/CategoryForm';
import LayoutAdmin from '@components/Shared/LayoutAdmin';
import { CategoryModel } from 'models';
import { GetServerSideProps } from 'next';
import { categoryService } from 'services/Admin';

export interface CategoryPageProps {
  category: CategoryModel;
}

export default function CategoryPage({ category }: CategoryPageProps) {
  return (
    <div className="flex flex-wrap">
      <div className="w-full">
        <CategoryForm category={category} />
      </div>
    </div>
  );
}

CategoryPage.layout = LayoutAdmin;

export const getServerSideProps: GetServerSideProps = async (context) => {
  context.res.setHeader('Cache-Control', 's-maxage=5, stale-while-revalidate');

  const slug = context.params?.slug;
  if (slug !== 'edit') {
    return { notFound: true };
  }

  const category_id = context.params?.category_id;
  if (category_id) {
    const category = await categoryService.getProductById({ id: String(category_id) });

    return {
      props: { category },
    };
  }
  return { notFound: true };
};
