import { BlogModel } from 'models';
import { memo } from 'react';
import { BlogItem } from './';

export interface BlogListProps {
  blogs: BlogModel[];
}

export const BlogList = memo(function BlogList({ blogs }: BlogListProps) {
  return (
    <>
      <div className="grid mx-auto lg:gap-10 md:gap-6 gap-4 lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 grid-flow-row">
        {blogs?.map((blog) => (
          <BlogItem key={blog?._id} blog={blog} />
        ))}
      </div>
    </>
  );
});
