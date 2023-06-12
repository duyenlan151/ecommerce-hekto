import * as React from 'react';
import BlogCategories from './BlogCategories';
import { BlogRelated } from './BlogRelated';
import { BlogSearch } from './BlogSearch';

export interface BlogSidebarProps {}

export function BlogSidebar(props: BlogSidebarProps) {
  return (
    <aside className="sticky top-0 w-full self-start xl:96 lg:w-72">
      <div className="mt-5 font-sans">
        <BlogSearch />
        <BlogRelated />
        <BlogCategories />
      </div>
    </aside>
  );
}
