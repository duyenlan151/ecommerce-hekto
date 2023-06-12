// import { useSWRInfinite } from "swr"

import { DataResCommonModel } from 'models';
import useSWRInfinite from 'swr/infinite';

const fetcher = (url) => fetch(url).then((res) => res.json());
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

interface IProps {
  path: string;
  fetcher: any;
}

export const usePaginateWithSWR = ({ path }: IProps) => {
  if (!path) {
    throw new Error('Path is required');
  }

  const url = baseUrl + path;
  const PAGE_LIMIT = 3;

  const { data, error, size, setSize, isLoading } = useSWRInfinite(
    (index) => `${url}?page=${index + 1}&limit=${PAGE_LIMIT}`,
    fetcher
  );

  const result = data ? [].concat(...data) : [];

  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData || (size > 0 && data && typeof data[size - 1] === 'undefined');
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd = isEmpty || (data && !data.slice(-1)[0]?.hasNextPage);

  return { result, isLoading, error, isLoadingMore, size, setSize, isReachingEnd };
};
