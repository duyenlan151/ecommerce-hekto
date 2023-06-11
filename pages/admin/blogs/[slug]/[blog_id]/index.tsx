import BlogForm from '@components/Admin/Blogs/BlogForm';
import LayoutAdmin from '@components/Shared/Layout/LayoutAdmin';
import { BlogModel } from 'models';
import { GetServerSideProps } from 'next';
import { blogsService } from 'services/Admin';

export interface BlogPageProps {
  blog: BlogModel;
}

export default function BlogPage({ blog }: BlogPageProps) {
  return (
    <div className="flex flex-wrap">
      <div className="w-full">
        <BlogForm blog={blog} />
      </div>
    </div>
  );
}

BlogPage.layout = LayoutAdmin;

export const getServerSideProps: GetServerSideProps = async (context) => {
  context.res.setHeader('Cache-Control', 's-maxage=5, stale-while-revalidate');

  const slug = context.params?.slug;
  if (slug !== 'edit') {
    return { notFound: true };
  }

  const blog_id = context.params?.blog_id;
  if (blog_id) {
    const blog = await blogsService.getBlogById({ id: String(blog_id), slug: '' });

    return {
      props: { blog },
    };
  }
  return { props: { blog: {} } };
};
