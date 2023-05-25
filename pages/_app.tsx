import React from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import '../styles/index.css';
import 'swiper/css';
import { Layout } from '@components/Layout';
import MetaData from '@components/MetaData';
import store from 'app/store';
import 'react-quill/dist/quill.snow.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <>
          <MetaData />
          <Component {...pageProps} />
        </>
      </Layout>
    </Provider>
  );
}

export default MyApp;
