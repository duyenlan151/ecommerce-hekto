import { AxiosError, AxiosResponse } from 'axios';
import axiosClient from 'services/api-services';
import useSWR, { SWRResponse } from 'swr';
import { Config, GetRequest } from './swr.props';

interface Return<Data, Error>
  extends Pick<
    SWRResponse<AxiosResponse<Data>, AxiosError<Error>>,
    'isValidating' | 'error' | 'mutate'
  > {
  data: Data | undefined;
  isLoading: boolean;
  response: AxiosResponse<Data> | undefined;
}

export function useRequestWithSWR<Data = unknown, Error = unknown>(
  request: GetRequest,
  { fallbackData, ...config }: Config<Data, Error> = {}
): Return<Data, Error> {
  const {
    data: response,
    error,
    isValidating,
    isLoading,
    mutate,
  } = useSWR<AxiosResponse<Data>, AxiosError<Error>>(
    request,
    /**
     * NOTE: Typescript thinks `request` can be `null` here, but the fetcher
     * function is actually only called by `useSWR` when it isn't.
     */
    () => axiosClient.request<Data>(request!),
    {
      ...config,
      fallbackData:
        fallbackData &&
        ({
          status: 200,
          statusText: 'InitialData',
          config: request!,
          headers: {},
          data: fallbackData,
        } as AxiosResponse<Data>),
    }
  );

  return {
    data: response && response.data,
    response,
    error,
    isLoading,
    isValidating,
    mutate,
  };
}
