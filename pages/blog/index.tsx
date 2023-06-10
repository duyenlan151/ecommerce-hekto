import BlogList from '@components/Blogs/BlogList';
import { LayoutBLog } from '@components/Shared/Layout';
import { SearchInput } from '@components/Shared/SearchInput';
import { useRouterPush } from '@hooks/useRouterPush';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';

export interface BlogPageProps {}

export default function BlogPage(props: BlogPageProps) {
  const {
    query: { search },
  } = useRouter();
  const { routerPushQuery } = useRouterPush();

  const handleChangeSearch = (search: string) => {
    !!search &&
      search !== 'undefined' &&
      routerPushQuery({
        query: {
          search,
        },
      });
  };

  return (
    <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8">
      <div className="mt-14 text-center mb-8">
        <SearchInput
          value={String(search) || ''}
          handleChange={(value) => handleChangeSearch(value)}
        />
      </div>
      <BlogList />
    </div>
  );
}

BlogPage.layout = LayoutBLog;
