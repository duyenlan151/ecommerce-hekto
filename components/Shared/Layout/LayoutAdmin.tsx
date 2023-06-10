import { useSession } from 'next-auth/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import MetaData from '../MetaData';
import Sidebar from '../Sidebar';

export interface LayoutAdminProps {
  children: React.ReactNode;
}

export default function LayoutAdmin({ children }: LayoutAdminProps) {
  const { status, data: session } = useSession();
  const router = useRouter();

  if (status === 'loading') {
    return <div></div>;
  }
  //@ts-ignore
  if (!session?.user?.isAdmin) {
    router.push('/');
    return;
  }

  return (
    <div className="bg-white font-lato">
      <Head>
        <title>Hekto | Admin</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MetaData
        propTitle={'Hekto'}
        propSuffix={'Admin'}
        propDescription={'Hekto admin page'}
        propCurrentURL={'/admin'}
      />
      <>
        <Sidebar />
        <div className="relative md:ml-64 min-h-screen">
          {/* <AdminNavbar /> */}
          {/* Header */}
          {/* <HeaderStats /> */}
          <div className="px-4 md:px-10 mx-auto w-full pt-24 pb-16 bg-color-primary-300 min-h-screen">
            {children}
            {/* <FooterAdmin /> */}
          </div>
        </div>
      </>
    </div>
  );
}
