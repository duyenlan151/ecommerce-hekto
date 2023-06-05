import { mongooseConnect } from '@lib/mongoose';
import { round2 } from 'constants/index';
import Order from 'models/Admin/order';
import { getToken } from 'next-auth/jwt';

const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_SECRET);

const secret = process.env.NEXT_PUBLIC_SECRET;

const handler = async (req, res) => {
  try {
    const { method } = req;
    const user = await getToken({ req, secret });
    if (!user) {
      return res.status(401).json({ message: 'signin required' });
    }
    switch (method) {
      case 'GET': {
        if (req.query?.id) {
          await mongooseConnect();
          const order = await Order.findById(req.query.id);
          res.status(200).json(order);
        }
        break;
      }
      case 'POST':
        {
          const { orderItems, paymentMethod, totalPrice, shippingPrice, itemsPrice, taxPrice } =
            req.body;
          await mongooseConnect();
          const newOrder = new Order({
            ...req.body,
            user: user._id,
          });

          const order = await newOrder.save();

          const midTax = (shippingPrice + taxPrice) / orderItems?.length || 1;
          if (paymentMethod === 'stripe') {
            const checkoutSession = await stripe.checkout.sessions.create({
              line_items: orderItems.map((item) => ({
                price_data: {
                  currency: 'usd',
                  product_data: {
                    name: item.product.title,
                  },
                  unit_amount_decimal: Math.ceil((item.product.price + midTax) * 100),
                  // unit_amount: item.product.price,
                },
                quantity: item.quantity,
              })),
              metadata: {
                userId: user.id,
              },
              mode: 'payment',
              success_url: `${process.env.NEXT_PUBLIC_HOST_URL}/orders?order_id=${order.id}&success=true&session_id={CHECKOUT_SESSION_ID}`,
              // cancel_url: `${process.env.NEXT_PUBLIC_HOST_URL}/orders?order_id=${order.id}&cancelled=true`,
              cancel_url: `${process.env.NEXT_PUBLIC_HOST_URL}/cart/payment-method?order_id=${order.id}&cancelled=true`,
            });
            res.status(201).json({ order, url: checkoutSession.url });
            return;
          }
          res.status(201).json({ order });
        }
        break;

      default:
        res.status(404).json({ message: 'Not found' });
        break;
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
export default handler;
