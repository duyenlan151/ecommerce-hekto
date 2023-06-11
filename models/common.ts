import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import { OrderModel } from './order';

export enum DateFormats {
  'MMMyyy' = 'MMM yyyy',
  'DayDateMonth' = 'ddd, DD MMM',
  'DayDateMonthYear' = 'ddd, DD MMM YYYY',
  'YearMonthDay' = 'YYYY-MM-DD',
  'DayMonthYear' = 'DD MMM YYYY',
  'DateWithDayMonthYear' = 'ddd DD MMMM YYYY',
  'DayMonthYearWithSlash' = 'DD/MM/YYYY',
}

export interface Image {
  ID: string | number;
  title: string;
  bgImg: string;
  url: string;
  description: string;
}

export type ActionCommon = 'get' | 'add' | 'edit' | 'delete';

export type ActionAuthPage = 'login' | 'signup';

export interface LayoutProps {
  children: ReactNode;
}

export type NextPageWithLayout = NextPage & {
  layout?: (props: LayoutProps) => ReactElement;
  isAdmin?: boolean;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export interface DataResCommonModel {
  totalDocs: number;
  limit?: number;
  page?: number;
  message?: string;
  pages: number;
  hasNextPage: boolean;
}
export interface OrderResModel {
  order: OrderModel;
  message?: string;
  url?: string;
  error?: string;
}
