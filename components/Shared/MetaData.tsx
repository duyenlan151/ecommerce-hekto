import pageMeta from '@content/meta';
import { PageData } from 'models';
import Head from 'next/head';
import { useRouter } from 'next/router';
// import useWindowLocation from "@hooks/useWindowLocation";
import { useEffect, useMemo, useState } from 'react';

type Props = {
  propTitle?: string;
  propDescription?: string;
  propPreviewImage?: string;
  propKeywords?: string;
  propSuffix?: string;
  propCurrentURL?: string;
};

const getFaviconPath = (isDarkMode: boolean = true): string => {
  return `/favicon-${isDarkMode ? 'dark' : 'light'}.ico`;
};

export default function MetaData({
  propTitle,
  propDescription,
  propPreviewImage,
  propKeywords,
  propSuffix,
  propCurrentURL,
}: Props) {
  // const { currentURL } = useWindowLocation();
  // const [faviconHref, setFaviconHref] = useState("/favicon.ico");

  // useEffect(() => {
  //   // Get current color scheme.
  //   const matcher = window.matchMedia("(prefers-color-scheme: dark)");
  //   // Set favicon initially.
  //   setFaviconHref(getFaviconPath(matcher.matches));
  //   // Change favicon if the color scheme changes.
  //   matcher.onchange = () => setFaviconHref(getFaviconPath(matcher.matches));
  // }, [faviconHref]);
  const {
    pathname,
    query: { slug },
  } = useRouter();

  const namePage = (slug && String(slug)) || pathname.split('/')[1];
  console.log('🚀 ~ file: MetaData.tsx:46 ~ namePage:', namePage);

  const { title, description, suffix, keywords, currentURL, previewImage }: PageData = useMemo(
    () => (pageMeta[namePage] ? pageMeta[namePage] : pageMeta['404']),
    [namePage]
  );

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="description" content={description || 'Duyen Lan'} />
      <title>
        {(propTitle || title) + (propSuffix || suffix ? ` - ${propSuffix || suffix}` : '')}
      </title>
      <meta name="theme-color" content="#000" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="author" content="Duyen Lan"></meta>
      <meta name="robots" content="index,follow" />
      <meta name="keywords" content={`${propKeywords || keywords || ''} Duyen Lan, , _`} />

      {/* Og */}
      <meta property="og:title" content={`${propTitle || title || ''} Duyen Lan`} />
      <meta property="og:description" content={propDescription || description || 'Duyen Lan'} />
      <meta property="og:site_name" content="Duyen Lan" />
      <meta property="og:url" content={propCurrentURL || currentURL} key="ogurl" />
      <meta property="og:image" content={propPreviewImage || previewImage || ''} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@_" />
      <meta name="twitter:title" content={`${propTitle || title || ''} Duyen Lan`} />
      <meta name="twitter:description" content={propDescription || description} />
      <meta name="twitter:image" content={propPreviewImage || previewImage || ''} />
      <meta name="twitter:image:alt" content={propTitle || title || 'Duyen Lan'}></meta>
      <meta name="twitter:domain" content={propCurrentURL || currentURL} />

      {/* <link rel="stylesheet" href="https://unpkg.com/react-quill@1.3.3/dist/quill.snow.css" /> */}
    </Head>
  );
}
