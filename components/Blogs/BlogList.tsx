import { BlogModel } from 'models';
import React from 'react';
import BlogItem from './BlogItem';

export interface BlogListProps {
  blogs: BlogModel[];
}

export default function BlogList({ blogs }: BlogListProps) {
  return (
    <>
      <div className="grid mx-auto lg:gap-10 md:gap-6 gap-4 lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 grid-flow-row">
        {blogs && blogs.map((blog) => <BlogItem key={blog?._id} blog={blog} />)}
      </div>
    </>
  );
}
