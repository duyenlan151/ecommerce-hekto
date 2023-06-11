import { SectionBlogs, SectionProducts, SectionUnique } from '@components/Home';
import { Banner } from '@components/index';
import { GetServerSideProps } from 'next';
import { productsService } from 'services';
import { blogsService } from 'services/Admin';

const IndexPage = ({ data, blogs }) => (
  <>
    <Banner />
    <SectionProducts data={data} />
    <SectionUnique />
    <SectionBlogs blogs={blogs} />
  </>
);

export default IndexPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    context.res.setHeader('Cache-Control', 's-maxage=5, stale-while-revalidate=5');

    const products = await productsService.getAllProducts({ limit: 8 });
    const blogs = await blogsService.getAllBlog({ limit: 3 });
    return {
      props: { data: products?.data, blogs },
    };
  } catch (error) {
    return {
      props: { data: {} },
    };
  }
};
