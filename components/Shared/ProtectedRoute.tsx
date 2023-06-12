import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { ReactNode, useState, useEffect } from 'react';
import LoadingCommon from './Common/LoadingCommon';

export interface ProtectedRouteProps {
  children: any;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const router = useRouter();
  const { status, data: session } = useSession();

  if (typeof window !== 'undefined' && !window.navigator.cookieEnabled) {
    // The browser does not support or is blocking cookies from being set.
    alert('The browser does not support or is blocking cookies from being set.');
    return;
  }

  if (status === 'loading') {
    return <LoadingCommon />;
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
