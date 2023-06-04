import SectionBlogs from '@components/Home/SectionBlogs';
import SectionNewLetters from '@components/Home/SectionNewLetters';
import SectionProducts from '@components/Home/SectionProducts';
import SectionTrending from '@components/Home/SectionTrendingProducts';
import SectionUnique from '@components/Home/SectionUnique';
import { Banner } from '@components/index';
import { GetServerSideProps } from 'next';
import { productsService } from 'services';

const IndexPage = ({ data }) => (
  <>
    <Banner />
    <SectionProducts data={data} />
    <SectionUnique />
    {/* <SectionTrending /> */}
    {/* <SectionNewLetters /> */}
    <SectionBlogs />
  </>
);

export default IndexPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    context.res.setHeader('Cache-Control', 's-maxage=5, stale-while-revalidate=5');

    const products = await productsService.getAllProducts({ limit: 3 });
    return {
      props: { data: products?.data },
    };
  } catch (error) {
    return { notFound: true };
  }
};
