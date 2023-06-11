import { BlogDetail } from '@components/Blogs/BlogDetail';
import { LayoutBLog } from '@components/Shared';
import MetaData from '@components/Shared/MetaData';
import { BlogModel } from 'models';
import { GetServerSideProps } from 'next';
import { blogsService } from 'services/Admin';

export interface BlogItemsProps {
  blog: BlogModel;
}

export default function BlogItems({ blog }: BlogItemsProps) {
  return (
    <>
      <MetaData
        propTitle={blog?.title}
        propSuffix={blog?.category[0]?.name}
        propDescription={blog?.title}
        propPreviewImage={String(blog?.main_image)}
        propKeywords={blog?.title}
        propCurrentURL={`${process.env.NEXT_PUBLIC_HOST_URL}blog/${blog.slug}`}
      />
      <BlogDetail blog={blog} />
    </>
  );
}

BlogItems.layout = LayoutBLog;

export const getServerSideProps: GetServerSideProps = async (context) => {
  context.res.setHeader('Cache-Control', 's-maxage=5, stale-while-revalidate');

  const slug = context.params?.slug;

  try {
    if (slug) {
      const blog = await blogsService.getBlogById({ slug: String(slug), id: '' });
      return {
        props: { blog },
      };
    }
  } catch (error) {}
  return { props: { blog: {} } };
};
