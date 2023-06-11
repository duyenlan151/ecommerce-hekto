import Link from 'next/link';
import React, { ReactNode, useEffect } from 'react';

export interface LayoutBLogProps {
  children: ReactNode;
}

export function LayoutBLog({ children }: LayoutBLogProps) {
  useEffect(() => {
    document.body.classList.add('bg-white');
  }, []);

  return (
    <div className="relative min-h-screen">
      <header className="font-dancing-regular bg-white top-0 left-0 right-0 w-full text-center gap-5 px-5 pb-4">
        <h1 className="relative text-5xl py-4 mx-auto max-w-screen-xl">
          <Link href="/blog">Blog</Link>
        </h1>
        <Link
          className="bg-brand-secondary/20 rounded-full text-sm text-blue-600 dark:text-blue-500 pb-4"
          href="/"
        >
          ← Back to Shopping
        </Link>
      </header>

      <main>{children}</main>

      <footer className="mt-10 bg-white py-4 border-t bottom-0 left-0 w-full gap-5 px-5">
        <div className="text-sm text-center">Copyright © 2023 Stablo. All rights reserved.</div>
      </footer>
    </div>
  );
}
