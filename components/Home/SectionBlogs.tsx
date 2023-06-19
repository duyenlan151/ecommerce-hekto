import { BlogList } from '@components/Blogs';
import { BlogModel } from 'models';
import useTranslation from 'next-translate/useTranslation';

export interface SectionBlogsProps {
  blogs: BlogModel[];
}

export function SectionBlogs({ blogs }: SectionBlogsProps) {
  const { t } = useTranslation('header');
  return (
    <section className="lg:py-[100px] py-20 bg-white">
      <div className="container mx-auto lg:px-0 px-5 max-w-screen-lg py-8">
        <h5 className="text-center text-blue-2 lg:text-5xl md:lg:text-4xl text-3xl font-bold mb-20 tracking-wide">
          {t('blog-products')}
        </h5>
        <BlogList blogs={blogs} />
      </div>
    </section>
  );
}
