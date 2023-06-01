import { useSession } from 'next-auth/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactNode, useEffect, useState } from 'react';
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
  const { status, data: session } = useSession();
  const router = useRouter();
  if (status === 'loading') {
    return <div>Loading...</div>;
  }
  //@ts-ignore
  if (!!session?.user?.isAdmin) {
    router.push('/admin');
    return;
  }
  //@ts-ignore
  if (session?.user?.name && !session?.user?.isAdmin && router.pathname === '/login') {
    router.push('/');
    return;
  }

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
      {/* {!pathNameNoNeedBox.includes(pathname) && <BoxPageMeta />} */}
      {children}
      <Footer />
    </>
  );
};
