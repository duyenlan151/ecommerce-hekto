// import {isAdminRequest} from "@/pages/api/auth/[...nextauth]";
import { mongooseConnect } from '@lib/mongoose';
import { Product } from 'models/Admin';

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnect();
  // await isAdminRequest(req,res);
  switch (method) {
    case 'GET': {
      if (req.query?.slug) {
        res.json(await Product.findOne({ _id: req.query.id, slug: req.query.slug }));
      } else if (req.query?.id) {
        res.json(await Product.findOne({ _id: req.query.id }));
      } else {
        const data = await Product.find();
        res.status(200).json({
          data,
          total: data.length,
          linmit: 10,
          page: 1,
          message: 'Find all success!',
          statusCode: 200,
        });
      }
      break;
    }
    case 'POST': {
      const {
        title,
        description,
        price,
        images,
        category,
        // properties,
        short_description,
        discount_percentage,
        rating,
      } = req.body;
      const productDoc = await Product.create({
        title,
        description,
        price,
        images,
        category,
        // properties,
        short_description,
        discount_percentage,
        rating,
        slug: title.split(' ').join('-'),
      });
      res.json(productDoc);
      break;
    }
    case 'PUT': {
      const {
        title,
        description,
        price,
        images,
        category,
        // properties,
        _id,
        short_description,
        discount_percentage,
        rating,
      } = req.body;
      await Product.updateOne(
        { _id },
        {
          title,
          description,
          price,
          images,
          category,
          // properties,
          short_description,
          discount_percentage,
          rating,
          slug: title.split(' ').join('-'),
        }
      );
      res.json(true);
      break;
    }
    case 'DELETE': {
      if (req.query?._id) {
        await Product.deleteOne({ _id: req.query?._id });
        res.json(true);
      }
      break;
    }

    default:
      break;
  }
  // res.status(200).json({ products: 'categories' });
}
