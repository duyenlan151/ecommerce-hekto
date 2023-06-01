import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';
import Sidebar from './Sidebar';

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
      <>
        <Sidebar />
        <div className="relative md:ml-64 min-h-screen">
          {/* <AdminNavbar /> */}
          {/* Header */}
          {/* <HeaderStats /> */}
          <div className="px-4 md:px-10 mx-auto w-full pt-24 pb-16">
            {children}
            {/* <FooterAdmin /> */}
          </div>
        </div>
      </>
    </div>
  );
}
