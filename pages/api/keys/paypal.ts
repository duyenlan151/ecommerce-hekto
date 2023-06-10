import { withNextCorsRoute } from '@utils/withSession';
import { getToken } from 'next-auth/jwt';

const secret = process.env.NEXT_PUBLIC_SECRET;

const handler = async (req, res) => {
  const user = await getToken({ req, secret });
  if (!user) {
    return res.status(401).send('signin required');
  }
  res.json(
    process.env.PAYPAL_CLIENT_ID ||
      'AaDkb_5471llxafiA1UyI5j558VuWiYmwd3bldm3i4gNBryP0yUH9g8a59tr8GRqxwCl6r3v6k9tYSRl'
  );
};
export default withNextCorsRoute(handler);
