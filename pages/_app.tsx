import { Layout } from '@components/Shared/Layout';
import ProtectedRoute from '@components/Shared/ProtectedRoute';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import NProgress from '@utils/nprogress';
import { wrapper } from 'app/store';
import { SessionProvider } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { GoogleAnalytics } from 'nextjs-google-analytics';

import 'react-toastify/dist/ReactToastify.css';
import 'swiper/css';
import '../styles/index.css';
// import '../styles/tailwind.css';
import MetaData from '@components/Shared/MetaData';
import PushNotificationLayout from '@components/Shared/PushNotificationLayout';
import { initialOptionsPayPal } from '@utils/common';
NProgress.configure({
  easing: 'ease',
  speed: 800,
  showSpinner: false,
});
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const { store } = wrapper.useWrappedStore(pageProps);
  const router = useRouter();

  const LayoutMain = Component.layout ?? Layout;

  useEffect(() => {
    const start = () => {
      NProgress.setColor('#fb2e86');
      NProgress.start();
      document.documentElement.classList.add('normal-scroll');
    };
    const end = () => {
      NProgress.done();
      document.documentElement.classList.remove('normal-scroll');
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
      <SessionProvider session={session}>
        <PayPalScriptProvider deferLoading={true} options={initialOptionsPayPal}>
          <PushNotificationLayout />
          <MetaData />
          {process.env.NODE_ENV === 'production' && <GoogleAnalytics strategy="lazyOnload" />}
          <LayoutMain>
            {Component.authorize ? (
              <ProtectedRoute>
                <Component {...pageProps} />
              </ProtectedRoute>
            ) : (
              <Component {...pageProps} />
            )}
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
        </PayPalScriptProvider>
      </SessionProvider>
    </Provider>
  );
}
export default MyApp;
