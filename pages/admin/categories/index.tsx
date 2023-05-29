import CategoryList from '@components/Admin/Categories/CategoryList';
import LayoutAdmin from '@components/Shared/LayoutAdmin';
import { Table } from '@components/Shared/Table';
import { GetServerSideProps } from 'next';
import { categoryService } from 'services/Admin';

export interface CategoriesPageProps {
  data: [];
}
export default function CategoriesPage({ data }: CategoriesPageProps) {
  console.log('🚀 ~ file: index.tsx:11 ~ CategoriesPage ~ data:', data);
  return <CategoryList data={data} />;
}

CategoriesPage.layout = LayoutAdmin;

export const getServerSideProps: GetServerSideProps = async (context) => {
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
