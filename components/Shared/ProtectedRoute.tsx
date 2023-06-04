import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { ReactNode, useState, useEffect } from 'react';

export interface ProtectedRouteProps {
  children: any;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const router = useRouter();
  const { status, data: session } = useSession();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  //@ts-ignore

  //@ts-ignore
  if (!session?.user) {
    router.push({
      pathname: '/login',
      query: {
        redirect: router.asPath,
      },
    });
    // return;
  }

  return children;
}
