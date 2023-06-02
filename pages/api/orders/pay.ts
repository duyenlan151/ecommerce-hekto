import { mongooseConnect } from '@lib/mongoose';
import Order from 'models/Admin/order';
import { getToken } from 'next-auth/jwt';

const secret = process.env.NEXT_PUBLIC_SECRET;

const handler = async (req, res) => {
  try {
    const user = await getToken({ req, secret });
    console.log('🚀 ~ file: pay.ts:9 ~ handler ~ user:', req);
    if (!user) {
      return res.status(401).json({ message: 'signin required' });
    }

    await mongooseConnect();
    const order = await Order.findById(req.body.id);
    if (order) {
      if (order.isPaid) {
        return res.status(400).send({ message: 'Your order is already paid', status: false });
      }
      order.isPaid = true;
      order.paidAt = Date.now();
      order.paymentResult = {
        id: req.body.id,
        status: req.body.status,
      };
      const paidOrder = await order.save();
      res.send({ message: 'Order paid successfully', order: paidOrder, status: true });
    } else {
      res.status(404).send({ message: 'Error: order not found', status: false });
    }
  } catch (error) {
    res.status(500).json({ message: error, status: false });
  }
};

export default handler;
