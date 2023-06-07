import { mongooseConnect } from '@lib/mongoose';
import User from 'models/Admin/user';

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnect();
  switch (method) {
    case 'GET': {
      if (req.query?.id) {
        const data = await User.findOne({ _id: req.query.id });
        res.status(200).json({
          _id: data?._id,
          email: data?.email,
          isAdmin: data?.isAdmin,
          name: data?.name,
          status: data?.status,
          createdAt: data?.createdAt,
        });
      } else {
        const { page = 1, limit = 10, status } = req.query;

        const cagetoryFilter = status && status !== 'all' ? { status } : {};

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
        const users = await User.find({
          ...cagetoryFilter,
        })
          .skip(Number(limit) * Number(page - 1))
          .limit(Number(limit))
          .lean();

        const countProducts = await User.countDocuments({
          ...cagetoryFilter,
        });
        res.status(200).json({
          data: users.map((user, idx) => {
            return {
              _id: user._id,
              name: user.name,
              email: user.email,
              isAdmin: user.isAdmin,
              createdAt: user.createdAt,
              status: user.status,
            };
          }),
          totalDocs: countProducts,
          limit,
          page,
          message: 'Find all success!',
          pages: Math.ceil(countProducts / limit),
          statusCode: 200,
        });
      }
      break;
    }
    case 'PUT':
      {
        const { _id, status } = req.body;
        const userDoc = await User.updateOne(
          { _id },
          {
            status,
          }
        );
        res.status(200).json(userDoc);
      }
      break;
    case 'DELETE': {
      if (req.query?._id) {
        await User.deleteOne({ _id: req.query?._id });
        res.status(200).json(true);
      }
      break;
    }

    default:
      res.status(200).json({ products: 'categories' });
      break;
  }
  // res.status(200).json({ products: 'categories' });
}
