import { mongooseConnect } from '@lib/mongoose';
import Order from 'models/Admin/order';
import { getToken } from 'next-auth/jwt';

const secret = process.env.NEXT_PUBLIC_SECRET;

const handler = async (req, res) => {
  try {
    const user = await getToken({ req, secret });
    if (!user) {
      return res.status(401).json({ message: 'signin required' });
    }

    await mongooseConnect();

    const { id, session_id } = req.body;
    const order = await Order.findById(id);
    if (order) {
      if (order.isPaid) {
        return res.status(400).send({ message: 'Your order is already paid', status: false });
      }

      if (order.checkout_session_id && session_id !== order.checkout_session_id) {
        return res.status(400).send({ message: 'Invalid session and order', status: false });
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
