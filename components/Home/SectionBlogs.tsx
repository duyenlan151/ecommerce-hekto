import BlogList from '@components/Blogs/BlogList';
import React from 'react';

export interface SectionBlogsProps {}

export function SectionBlogs({}: SectionBlogsProps) {
  return (
    <section className="py-[129px] bg-white">
      <div className="container mx-auto lg:px-0 px-4">
        <BlogList />
      </div>
    </section>
  );
}
