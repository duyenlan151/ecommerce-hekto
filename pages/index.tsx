import { SectionBlogs, SectionProducts, SectionUnique } from '@components/Home';
import { Banner } from '@components/index';
import { BlogModel, DataResCommonModel, ProductModel } from 'models';
import { productsService } from 'services';
import { blogsService } from 'services/Admin';
import useSWR from 'swr';

const IndexPage = () => {
  const { data: products, isLoading } = useSWR<DataResCommonModel<ProductModel>>(
    '/getAllProducts',
    () => productsService.getAllProducts({ limit: 8 })
  );
  const { data: blogs } = useSWR<DataResCommonModel<BlogModel>>('/getAllBlog', () =>
    blogsService.getAllBlog({ limit: 3 })
  );

  return (
    <>
      <Banner />
      <SectionProducts data={products?.data || []} />
      <SectionUnique />
      <SectionBlogs blogs={blogs?.data || []} />
    </>
  );
};

export default IndexPage;

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   try {
//     context.res.setHeader('Cache-Control', 's-maxage=5, stale-while-revalidate=5');

//     const products = await productsService.getAllProducts({ limit: 8 });
//     const blogs = await blogsService.getAllBlog({ limit: 3 });
//     return {
//       props: { data: products?.data, blogs },
//     };
//   } catch (error) {
//     return {
//       props: { data: {} },
//     };
//   }
// };
