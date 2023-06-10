import { SectionBlogs, SectionProducts, SectionUnique } from '@components/Home';
import { Banner } from '@components/index';
import { GetServerSideProps } from 'next';
import { productsService } from 'services';

const IndexPage = ({ data }) => (
  <>
    <Banner />
    <SectionProducts data={data} />
    <SectionUnique />
    <SectionBlogs />
  </>
);

export default IndexPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    context.res.setHeader('Cache-Control', 's-maxage=5, stale-while-revalidate=5');

    const products = await productsService.getAllProducts({ limit: 8 });
    return {
      props: { data: products?.data },
    };
  } catch (error) {
    return {
      props: { data: {} },
    };
  }
};
