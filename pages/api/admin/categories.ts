import { mongooseConnect } from '@lib/mongoose';
import { Category } from 'models/Admin';
import { getServerSession } from 'next-auth';
// import { authOptions, isAdminRequest } from "@/pages/api/auth/[...nextauth]";

export default async function handle(req, res) {
  const { method, query } = req;
  await mongooseConnect();
  // await isAdminRequest(req, res);

  switch (method) {
    case 'GET': {
      if (req.query?.id) {
        res.status(200).json(await Category.findOne({ _id: query.id }));
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
        const data = await Category.find({
          ...cagetoryFilter,
        })
          .skip(Number(limit) * Number(page - 1))
          .limit(Number(limit))
          .lean();
        const countProducts = await Category.countDocuments({ ...cagetoryFilter });
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
    case 'POST': {
      const { name, parentCategory, properties, slug, status } = req.body;
      const categoryDoc = await Category.create({
        name,
        properties,
        slug,
        status,
      });
      res.status(200).json(categoryDoc);
      break;
    }
    case 'PUT':
      {
        const { name, parentCategory, properties, _id, slug, status } = req.body;
        const categoryDoc = await Category.updateOne(
          { _id },
          {
            name,
            slug,
            status,
            // parent: parentCategory || undefined,
          }
        );
        res.status(200).json(categoryDoc);
      }
      break;
    case 'DELETE': {
      const { _id } = req.query;
      await Category.deleteOne({ _id });
      res.status(200).json('ok');
    }

    default:
      res.status(200).json({ categories: 'categories' });
      break;
  }
}
