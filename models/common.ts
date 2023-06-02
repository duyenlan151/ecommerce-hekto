import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
export interface Image {
  ID: string | number;
  title: string;
  bgImg: string;
  url: string;
  description: string;
}

export type ActionCommon = 'add' | 'edit' | 'delete';

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
}

export interface ShippingAddressModel {
  email: string;
  first_name: string;
  last_name: string;
  address: string;
  city: string;
  country: string;
  post_code: string;
}
