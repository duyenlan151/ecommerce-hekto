import BlogList from '@components/Blogs/BlogList';
import { BlogModel, DataBlogModel, DataResCommonModel } from 'models';
import React from 'react';

export interface SectionBlogsProps {
  blogs: BlogModel[];
}

export function SectionBlogs({ blogs }: SectionBlogsProps) {
  return (
    <section className="lg:py-[100px] py-20 bg-white">
      <div className="container px-8 mx-auto xl:px-5 max-w-screen-lg py-8">
        <h5 className="text-center text-blue-2 lg:text-5xl md:lg:text-4xl text-3xl font-bold mb-20 tracking-wide">
          Lasted Blogs
        </h5>
        <BlogList blogs={blogs} />
      </div>
    </section>
  );
}
