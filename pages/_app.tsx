import { Layout } from '@components/Shared/Layout';
import LayoutAdmin from '@components/Shared/LayoutAdmin';
import ProtectedRoute from '@components/Shared/ProtectedRoute';
import NProgress from '@utils/nprogress';
import { wrapper } from 'app/store';
import { SessionProvider } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

import 'react-toastify/dist/ReactToastify.css';
import 'swiper/css';
import '../styles/index.css';
// import '../styles/tailwind.css';
import { initialOptionsPayPal } from '@utils/common';
NProgress.configure({
  easing: 'ease',
  speed: 800,
  showSpinner: false,
});
function MyApp({ Component, pageProps: { session, ...pageProps }, ...rest }) {
  const router = useRouter();
  const { store, props } = wrapper.useWrappedStore(rest);

  const LayoutMain = Component.layout ?? Layout;

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
    <SessionProvider session={session}>
      <PayPalScriptProvider deferLoading={true} options={initialOptionsPayPal}>
        <Provider store={store}>
          <LayoutMain>
            {Component.authorize ? (
              <ProtectedRoute>
                <Component {...pageProps} />
              </ProtectedRoute>
            ) : (
              <Component {...pageProps} />
            )}
          </LayoutMain>
        </Provider>
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
  );
}
export default MyApp;
