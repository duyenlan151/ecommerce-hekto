import { queryString } from '@utils/common';
import { AxiosError, AxiosResponse } from 'axios';
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

interface DataPayload<T> {
  [key: string]: T;
}

interface DataResponse<T> {
  data: T;
  isLoading: boolean;
  error: boolean;
  isLoadingMore: boolean;
  isReachingEnd: boolean;
  size: number;
  setSize: (size: number | ((_size: number) => number)) => Promise<DataPayload<T>[] | undefined>;
}

// function useRequest<T>(
//   request: GetRequest,
//   { fallbackData, ...config }: Config<T, Error> = {},
//   key: string
// ): DataResponse<T> {
//   const { params, url } = request;
//   const { data: payload, error } = useSWRInfinite<DataPayload<T>>(
//     (index) => `${url}?page=${index + 1}&${queryString(params)}`,
//     (request) => axiosClient.request(request!),
//     {
//       revalidateOnFocus: false,
//     }
//   );
//   const data = payload ? payload[key] : undefined;
//   return {
//     data,
//     isLoading: !data && !error,
//     isError: error,
//   };
// }

export function useRequestInfinite<T>(
  request: GetRequest,
  { fallbackData, ...config }: Config<T, Error> = {}
): DataResponse<T> {
  const { params, url } = request;

  const {
    data: result,
    error,
    mutate,
    size,
    setSize,
    isLoading,
  } = useSWRInfinite<DataPayload<T>>(
    (index) => `${url}?page=${index + 1}&${queryString(params)}`,
    (request) => axiosClient.request(request!),
    {
      revalidateOnFocus: false,
    }
  );

  const data = result ? [].concat(...(result as [])) : ([] as any);

  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData || (size > 0 && data && typeof data[size - 1] === 'undefined') || false;
  const isReachingEnd = (data && !data.slice(-1)[0]?.hasNextPage) || false;

  return {
    data,
    // mutate,
    error,
    isLoadingMore,
    // isValidating,
    isLoading,
    isReachingEnd,
    size,
    setSize,
  };
}
