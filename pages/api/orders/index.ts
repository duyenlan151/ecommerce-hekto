import { mongooseConnect } from '@lib/mongoose';
import Order from 'models/Admin/order';
import mongoose from 'mongoose';
import { getToken } from 'next-auth/jwt';

const ObjectId = mongoose.Types.ObjectId;
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
        const { id } = req.query;
        if (id) {
          await mongooseConnect();

          const order = await Order.aggregate([
            {
              $match: {
                _id: new ObjectId(id),
              },
            },
            {
              $lookup: {
                from: 'users',
                localField: 'user',
                foreignField: '_id',
                as: 'user',
                pipeline: [
                  {
                    $project: {
                      email: 1,
                      name: 1,
                    },
                  },
                ],
              },
            },
          ]);

          // @ts-ignore
          if (order[0]?.user[0]?._id.toString() !== user?._id) {
            res.status(401).json({ message: 'Authorize error!!' });
            return;
          }
          res.status(200).json(order[0]);
        } else if (user?.isAdmin) {
          const { page = 1, limit = 10 } = req.query;

          if (Number(page) < 1) {
            res.status(200).json({
              data: [],
              totalDocs: 0,
              limit,
              page,
              message: 'Find all success!',
              statusCode: 200,
            });
          }
          // const data = await Order.find()
          //   .skip(Number(limit) * Number(page - 1))
          //   .limit(Number(limit))
          //   .lean();

          const data = await Order.aggregate([
            {
              $lookup: {
                from: 'users',
                localField: 'user',
                foreignField: '_id',
                as: 'userInfo',
              },
            },
          ])
            .skip(Number(limit) * Number(page - 1))
            .limit(Number(limit));

          const countProducts = await Order.countDocuments();
          res.status(200).json({
            data,
            totalDocs: countProducts,
            limit,
            page,
            message: 'Find all success!',
            statusCode: 200,
          });
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
              cancel_url: `${process.env.NEXT_PUBLIC_HOST_URL}/cart/payment-method?order_id=${order.id}&cancelled=true`,
            });
            const orderSession = await Order.findById(order.id);
            orderSession.checkout_session_id = checkoutSession.id;

            await orderSession.save();
            res.status(201).json({ order: orderSession, url: checkoutSession.url });
          } else {
            const order = await newOrder.save();
            res.status(201).json({ order });
          }
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
