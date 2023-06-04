import { mongooseConnect } from '@lib/mongoose';
import Order from 'models/Admin/order';
import { getToken } from 'next-auth/jwt';

const secret = process.env.NEXT_PUBLIC_SECRET;

const handler = async (req, res) => {
  const user = await getToken({ req, secret });
  if (!user) {
    return res.status(401).send({ message: 'Signin required' });
  }
  const { typeOrder } = req.query;
  const queryOrder =
    typeOrder && typeOrder === 'unpaid'
      ? {
          isPaid: true,
        }
      : typeOrder === 'inprogress'
      ? {
          isDelivered: false,
        }
      : typeOrder === 'delivered'
      ? {
          isDelivered: true,
        }
      : typeOrder === 'cancelled'
      ? {
          isCancelled: true,
        }
      : {};
  await mongooseConnect();
  const orders = await Order.find({ user: user._id, ...queryOrder });
  res.send(orders);
};

export default handler;
