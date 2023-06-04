import { useSession } from 'next-auth/react';
import * as React from 'react';

export interface UserInfoProps {}

export function UserInfo(props: UserInfoProps) {
  const { data: session } = useSession();
  return (
    <div className="px-6 py-4 bg-white">
      <div className="py-4">Name: {session?.user?.name}</div>
      <div className="py-4">Email: {session?.user?.email}</div>
    </div>
  );
}
