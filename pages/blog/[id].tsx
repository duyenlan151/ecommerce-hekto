import { BlogDetail } from '@components/Blogs/BlogDetail';
import { LayoutBLog } from '@components/Shared';
import * as React from 'react';

export interface BlogItemsProps {}

export default function BlogItems(props: BlogItemsProps) {
  return <BlogDetail />;
}

BlogItems.layout = LayoutBLog;
