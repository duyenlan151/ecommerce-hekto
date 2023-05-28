import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import { Layout } from '@components/Shared/Layout';
import MetaData from '@components/Shared/MetaData';
import store from 'app/store';
import 'react-quill/dist/quill.snow.css';
import { useRouter } from 'next/router';
import NProgress from '@utils/nprogress';
import '../styles/tailwind.css';
import '../styles/index.css';
import 'swiper/css';

NProgress.configure({
  easing: 'ease',
  speed: 800,
  showSpinner: false,
});

interface MyAppProps extends AppProps {
  Component;
}

function MyApp({ Component, pageProps }: MyAppProps) {
  const router = useRouter();

  const LayoutMain = Component.layout || Layout;

  useEffect(() => {
    const start = () => {
      NProgress.setColor('#fb2e86');
      NProgress.start();
    };
    const end = () => {
      NProgress.done();
    };
    router.events.on('routeChangeStart', start);
    router.events.on('routeChangeComplete', end);
    router.events.on('routeChangeError', end);
    return () => {
      router.events.off('routeChangeStart', start);
      router.events.off('routeChangeComplete', end);
      router.events.off('routeChangeError', end);
    };
  }, [router.events]);

  return (
    <Provider store={store}>
      <LayoutMain>
        <MetaData />
        <Component {...pageProps} />
      </LayoutMain>
    </Provider>
  );
}

export default MyApp;
