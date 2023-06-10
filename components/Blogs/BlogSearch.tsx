import { SearchInput } from '@components/Shared/SearchInput';
import { useKeypress } from '@hooks/useKeyPress';
import { useRouterPush } from '@hooks/useRouterPush';
import { useEffect, useRef, useState } from 'react';

export interface BlogSearchProps {}

export function BlogSearch(props: BlogSearchProps) {
  const { routerPushQuery } = useRouterPush();
  const refSearch = useRef('');

  const handleChangeSearch = () => {
    routerPushQuery({
      pathname: '/blog',
      query: {
        search: refSearch.current,
      },
    });
  };

  useKeypress('Enter', handleChangeSearch);

  return (
    <div>
      <SearchInput
        label="Search Posts"
        value=""
        handleChange={(value) => (refSearch.current = value)}
      />
    </div>
  );
}
