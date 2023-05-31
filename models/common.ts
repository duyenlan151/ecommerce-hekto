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

export interface LayoutProps {
  children: ReactNode;
}

export type NextPageWithLayout = NextPage & {
  layout?: (props: LayoutProps) => ReactElement;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
