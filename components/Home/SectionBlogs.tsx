import BlogList from '@components/Blogs/BlogList';
import React from 'react';

export interface SectionBlogsProps {}

export function SectionBlogs({}: SectionBlogsProps) {
  return (
    <section className="py-[129px] bg-white">
      <div className="container mx-auto lg:px-0 px-4">
        <h5 className="text-center text-blue-2 lg:text-5xl md:lg:text-4xl text-3xl font-bold mb-20 tracking-wide">
          Lasted Blogs
        </h5>
        <BlogList />
      </div>
    </section>
  );
}
