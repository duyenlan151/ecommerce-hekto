import Checkout from '@components/Checkout/Checkout';
import Payment from '@components/Payment/Payment';
import { useRouter } from 'next/router';
import PageNotFound from 'pages/404';

const CartPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  if (slug === 'payment') return <Payment />;
  else if (slug === 'checkout') return <Checkout />;
  return <PageNotFound />;
};

export default CartPage;
