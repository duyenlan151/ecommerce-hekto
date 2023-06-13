import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { SWRConfiguration } from 'swr';
import { SWRInfiniteConfiguration } from 'swr/infinite';

export interface InfiniteConfig<Data = unknown, Error = unknown>
  extends Omit<SWRInfiniteConfiguration<AxiosResponse<Data>, AxiosError<Error>>, 'fallbackData'> {
  fallbackData?: Data[];
}

export type GetRequest = AxiosRequestConfig;

export interface Config<Data = unknown, Error = unknown>
  extends Omit<SWRConfiguration<AxiosResponse<Data>, AxiosError<Error>>, 'fallbackData'> {
  fallbackData?: Data;
}
