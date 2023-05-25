import SectionBlogs from '@components/Home/SectionBlogs';
import SectionNewLetters from '@components/Home/SectionNewLetters';
import SectionProducts from '@components/Home/SectionProducts';
import SectionTrending from '@components/Home/SectionTrendingProducts';
import SectionUnique from '@components/Home/SectionUnique';
import { Banner, Layout } from '@components/index';

const IndexPage = () => (
  <>
    <Banner />
    <SectionProducts />
    <SectionUnique />
    <SectionTrending />
    <SectionNewLetters />
    <SectionBlogs />
  </>
);

export default IndexPage;
