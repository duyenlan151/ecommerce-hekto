import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { ReactNode, useState, useEffect } from 'react';

export interface ProtectedRouteProps {
  children: any;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const router = useRouter();
  const { status, data: session } = useSession();
  console.log('🚀 ~ file: ProtectedRoute.tsx:12 ~ ProtectedRoute ~ status:', status);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  //@ts-ignore
  if (!!session?.user?.isAdmin) {
    router.push('/admin');
    return;
  }

  //@ts-ignore
  if (!session?.user?.isAdmin) {
    router.push('/');
    return;
  }

  return children;
}
