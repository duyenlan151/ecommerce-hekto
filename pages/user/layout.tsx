import { UserSidebar } from '@components/Users';
import React, { ReactNode } from 'react';

export interface LayoutProfileProps {
  children: ReactNode;
}

export default function LayoutProfile({ children }: LayoutProfileProps) {
  return (
    <section className="container mx-auto my-10 lg:px-0 px-4">
      <div className="flex flex-col lg:flex-row justify-between mt-2">
        <div className="lg:max-w-[250px] w-full basis-full mb-8">
          {/* Filter */}
          <UserSidebar />
        </div>
        <div className="flex-1 basis-full lg:ml-3 w-full justify-self-end">{children}</div>
      </div>
    </section>
  );
}
