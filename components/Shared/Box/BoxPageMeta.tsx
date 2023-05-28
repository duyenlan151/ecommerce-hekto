import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import pageMeta from '@content/meta';
import { PageMeta, PageData } from 'models';

export interface BoxPageMetaProps {}

export function BoxPageMeta(props: BoxPageMetaProps) {
  const {
    pathname,
    query: { slug },
  } = useRouter();

  const namePage = (slug && String(slug)) || pathname.split('/')[1];
  const dataPage: PageData = useMemo(
    () => (pageMeta[namePage] ? pageMeta[namePage] : pageMeta['404']),
    [namePage]
  );

  return (
    <section className="lg:px-0 px-4 py-28 bg-grey-1">
      <div className="container mx-auto">
        <h4 className="text-blue-5 text-4xl font-bold">{dataPage?.title}</h4>
        <div className="font-lato mt-2">
          <span>Home</span>
          <span className="mx-1">.</span>
          <span>Pages </span>
          <span className="text-pink-1">
            <span className="mx-1">.</span> {dataPage?.breadcrumb}
          </span>
        </div>
      </div>
    </section>
  );
}
