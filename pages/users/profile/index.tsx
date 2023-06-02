import { UserCartInfo, UserInfo, UserSidebar } from '@components/Users';
import { useRouter } from 'next/router';
import * as React from 'react';

export interface ProfileUserPageProps {}

export default function ProfileUserPage(props: ProfileUserPageProps) {
  const router = useRouter();
  console.log('🚀 ~ file: index.tsx:9 ~ ProfileUserPage ~ router:', router);
  const {
    query: { tab },
  } = router;
  return (
    <section className="container mx-auto my-10">
      <div className="flex flex-col lg:flex-row justify-between mt-2">
        <div className="lg:max-w-[250px] w-full basis-full mb-8">
          {/* Filter */}
          <UserSidebar />
        </div>
        <div className="flex-1 basis-full lg:ml-3 w-full justify-self-end border border-primary">
          {tab === 'account' ? <UserInfo /> : <UserCartInfo />}
        </div>
      </div>
    </section>
  );
}

ProfileUserPage.authorize = true;
