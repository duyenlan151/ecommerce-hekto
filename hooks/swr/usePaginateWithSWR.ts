import { queryString } from '@utils/common';
import { AxiosError, AxiosResponse } from 'axios';
import { DataResCommonModel } from 'models';
import axiosClient from 'services/api-services';
import useSWRInfinite, { SWRInfiniteResponse } from 'swr/infinite';
import { Config, GetRequest } from './swr.props';

interface InfiniteReturn<Data, Error>
  extends Pick<
    SWRInfiniteResponse<AxiosResponse<Data>, AxiosError<Error>>,
    'isValidating' | 'error' | 'mutate' | 'size' | 'setSize'
  > {
  data: Data[] | undefined;
  response: AxiosResponse<Data>[] | undefined;
}

export default function useRequestInfinite<Data = unknown, Error = unknown>(
  request: GetRequest,
  { fallbackData, ...config }: Config<Data, Error> = {}
) {
  const { params, url } = request;
  console.log('🚀 ~ file: usePaginateWithSWR.ts:22 ~ params:', typeof params);

  const {
    data: result,
    error,
    isValidating,
    mutate,
    size,
    setSize,
    isLoading,
  } = useSWRInfinite<DataResCommonModel<Data>, AxiosError<Error>>(
    (index) => `${url}?page=${index + 1}&${queryString(params)}`,
    (request) => axiosClient.request(request!)
  );

  const data = result ? [].concat(...(result as [])) : [];

  const isLoadingInitialData = !result && !error;
  const isLoadingMore =
    isLoadingInitialData || (size > 0 && data && typeof data[size - 1] === 'undefined');
  const isReachingEnd = result && !result.slice(-1)[0]?.hasNextPage;

  return {
    data,
    // mutate,
    error,
    isLoadingMore,
    isValidating,
    isLoading,
    isReachingEnd,
    size,
    setSize,
  };
}
