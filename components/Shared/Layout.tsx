import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import { BoxPageMeta } from './Box';
import { Footer } from './Footer';
import { Header } from './Header';
import TopNavbar from './TopNavbar';

type Props = {
  children?: ReactNode;
  title?: string;
};

const pathNameNoNeedBox = ['/products', '/'];

export const Layout = ({ children, title = 'This is the default title' }: Props) => {
  console.log('🚀 ~ file: Layout.tsx:17 ~ Layout ~ children:', children);
  const { pathname } = useRouter();
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <TopNavbar />
        <Header />
      </header>
      {!pathNameNoNeedBox.includes(pathname) && <BoxPageMeta />}
      {children}
      <Footer />
    </>
  );
};
