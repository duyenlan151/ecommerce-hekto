import { AppProps } from 'next/app';
import { useEffect } from 'react';
import { Provider } from 'react-redux';

import { Layout } from '@components/Shared/Layout';
import MetaData from '@components/Shared/MetaData';
import NProgress from '@utils/nprogress';
import store from 'app/store';
import { useRouter } from 'next/router';
import { ToastContainer } from 'react-toastify';

import 'react-quill/dist/quill.snow.css';
import 'react-toastify/dist/ReactToastify.css';
import 'swiper/css';
import '../styles/index.css';
import '../styles/tailwind.css';
import LayoutAdmin from '@components/Shared/LayoutAdmin';

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
  const LayoutMain = router.asPath.includes('admin') ? LayoutAdmin : Component.layout || Layout;

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
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Provider>
  );
}

export default MyApp;
