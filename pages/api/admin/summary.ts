// import {isAdminRequest} from "@/pages/api/auth/[...nextauth]";
import { mongooseConnect } from '@lib/mongoose';
import { Product } from 'models/Admin';
import Order from 'models/Admin/order';
import User from 'models/Admin/user';
import { getToken } from 'next-auth/jwt';

const secret = process.env.NEXT_PUBLIC_SECRET;

export default async function handle(req, res) {
  try {
    const user = await getToken({ req, secret });
    if (!user || (user && !user.isAdmin)) {
      return res.status(401).send('signin required');
    }
    await mongooseConnect();

    const ordersCount = await Order.countDocuments();
    const productsCount = await Product.countDocuments();
    const usersCount = await User.countDocuments();

    const ordersPriceGroup = await Order.aggregate([
      {
        $group: {
          _id: null,
          sales: { $sum: '$totalPrice' },
        },
      },
    ]);
    const ordersPrice = ordersPriceGroup.length > 0 ? ordersPriceGroup[0].sales : 0;

    // Sales Data
    const currentYear = await Order.aggregate([
      // { $group: { _id: { month: '$month' } } },
      {
        $project: {
          totalSales: { $sum: '$totalPrice' },
          year: { $year: '$createdAt' },
          month: { $month: '$createdAt' },
        },
      },
      { $match: { year: new Date().getFullYear() } },
      {
        $group: {
          _id: { month: '$month' },
          count: { $sum: 1 },
          total: {
            $sum: '$totalSales',
          },
        },
      },
      // { $group: { _id: { month: '$month' }, count: { $sum: 1 } } },
      // {
      //   $group: {
      //     // _id: { $dateToString: { format: '%Y-%m', date: '$createdAt' } },
      //     _id: { year: { $year: '$createdAt' }, month: { $month: '$createdAt' } },
      //     totalSales: { $sum: '$totalPrice' },
      //   },
      // },
    ]);
    const previousYear = await Order.aggregate([
      {
        $project: {
          totalSales: { $sum: '$totalPrice' },
          year: { $year: '$createdAt' },
          month: { $month: '$createdAt' },
        },
      },
      { $match: { year: new Date().getFullYear() - 1 } },
      {
        $group: {
          _id: { month: '$month' },
          count: { $sum: 1 },
          total: {
            $sum: '$totalSales',
          },
        },
      },
    ]);
    const salesData = {
      currentYear,
      previousYear,
    };

    // Orders
    const orderCurrentYear = await Order.aggregate([
      {
        $project: {
          day: { $dayOfMonth: '$createdAt' },
          month: { $month: '$createdAt' },
          year: { $year: '$createdAt' },
        },
      },
      { $match: { year: new Date().getFullYear() } },
      { $group: { _id: { month: '$month' }, count: { $sum: 1 } } },
    ]);
    const orderPreviousYear = await Order.aggregate([
      {
        $project: {
          day: { $dayOfMonth: '$createdAt' },
          month: { $month: '$createdAt' },
          year: { $year: '$createdAt' },
        },
      },
      { $match: { year: new Date().getFullYear() - 1 } },
      { $group: { _id: { month: '$month' }, count: { $sum: 1 } } },
    ]);

    const ordersData = {
      orderCurrentYear,
      orderPreviousYear,
    };
    res
      .status(200)
      .json({ ordersCount, productsCount, usersCount, ordersPrice, salesData, ordersData });
  } catch (error) {
    res.status(500).json({ message: error });
  }
}
