import CartMini from '@components/Cart/CartMini';
import { useSession } from 'next-auth/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactNode, useEffect, useState } from 'react';
import { BoxPageMeta } from '../Box';
import LoadingCommon from '../Common/LoadingCommon';
import { Footer } from '../Footer';
import { Header } from '../Header';
import TopNavbar from '../TopNavbar';

type Props = {
  children?: ReactNode;
  title?: string;
};

const pathNameNoNeedBox = ['/products', '/'];

export const Layout = ({ children, title = 'Heko | Ecommerce - Next.js + TypeScript' }: Props) => {
  const { status, data: session } = useSession();
  const router = useRouter();

  //@ts-ignore
  if (!!session?.user?.isAdmin) {
    router.push('/admin');
    return;
  }
  // @ts-ignore
  if (
    session?.user?.name &&
    // @ts-ignore
    !session?.user?.isAdmin &&
    router.pathname === '/login' &&
    !router?.query?.redirect
  ) {
    router.push('/');
    return;
  }
  return (
    <>
      {status === 'loading' && <LoadingCommon />}
      <div className={`visible ${status === 'loading' && 'hidden'}`}>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <header>
          <TopNavbar />
          <Header />
        </header>
        <CartMini />
        {/* {!pathNameNoNeedBox.includes(pathname) && <BoxPageMeta />} */}
        {children}
        <Footer />
      </div>
    </>
  );
};
