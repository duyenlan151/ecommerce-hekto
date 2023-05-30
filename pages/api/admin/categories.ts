import { mongooseConnect } from '@lib/mongoose';
import { Category } from 'models/Admin';
import { getServerSession } from 'next-auth';
// import { authOptions, isAdminRequest } from "@/pages/api/auth/[...nextauth]";

export default async function handle(req, res) {
  const { method, query } = req;
  // await mongooseConnect();
  // // await isAdminRequest(req, res);

  // switch (method) {
  //   case 'GET': {
  //     if (req.query?.id) {
  //       res.json(await Category.findOne({ _id: query.id }));
  //     } else {
  //       const data = await Category.find();
  //       res.status(200).json({
  //         data,
  //         total: data.length,
  //         linmit: 10,
  //         page: 1,
  //         message: 'Find all success!',
  //         statusCode: 200,
  //       });
  //     }
  //     break;
  //   }
  //   case 'POST': {
  //     const { name, parentCategory, properties, slug, status } = req.body;
  //     console.log('🚀 ~ file: categories.ts:30 ~ handle ~ status:', status);
  //     const categoryDoc = await Category.create({
  //       name,
  //       properties,
  //       slug,
  //       status,
  //     });
  //     res.json(categoryDoc);
  //     break;
  //   }
  //   case 'PUT':
  //     {
  //       const { name, parentCategory, properties, _id, slug, status } = req.body;
  //       const categoryDoc = await Category.updateOne(
  //         { _id },
  //         {
  //           name,
  //           slug,
  //           status,
  //           // parent: parentCategory || undefined,
  //         }
  //       );
  //       res.json(categoryDoc);
  //     }
  //     break;
  //   case 'DELETE': {
  //     const { _id } = req.query;
  //     await Category.deleteOne({ _id });
  //     res.json('ok');
  //   }

  //   default:
  //     break;
  // }
  res.status(200).json({ categories: 'categories' });
}
