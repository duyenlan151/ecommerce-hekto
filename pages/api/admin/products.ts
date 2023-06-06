// import {isAdminRequest} from "@/pages/api/auth/[...nextauth]";
import { mongooseConnect } from '@lib/mongoose';
import { Product } from 'models/Admin';
import { ObjectId } from 'mongodb';

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnect();
  // await isAdminRequest(req,res);
  switch (method) {
    case 'GET': {
      if (req.query?.id) {
        const { id } = req.query;
        //
        const product = await Product.aggregate([
          {
            $match: {
              _id: new ObjectId(id),
            },
          },
          {
            $lookup: {
              from: 'categories',
              localField: 'categoryId',
              foreignField: '_id',
              as: 'category',
              // pipeline: [
              //   {
              //     $project: {
              //       email: 1,
              //       name: 1,
              //     },
              //   },
              // ],
            },
          },
        ]);
        res.status(200).json(product[0]);
        // res.status(200).json(await Product.findOne({ _id: req.query.id }));
      } else {
        const {
          page = 1,
          limit = 10,
          price = 'all',
          rating = 'all',
          sort = 'featured',
        } = req.query;

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

        const ratingFilter =
          rating && rating !== 'all'
            ? {
                rating: {
                  $gte: Number(rating),
                },
              }
            : {};

        const priceFilter =
          price && price !== 'all'
            ? {
                price: {
                  $gte: Number(price.split('-')[0]),
                  $lte: Number(price.split('-')[1]),
                },
              }
            : {};

        const order =
          sort === 'lowest' ? { price: 1 } : sort === 'highest' ? { price: -1 } : { _id: -1 };

        const filterByPrice =
          price && price !== 'all'
            ? {
                $match: {
                  price: {
                    $gte: 10,
                    $lte: 100,
                  },
                },
              }
            : { $match: {} };

        const products = await Product.aggregate([
          { ...filterByPrice },
          {
            $lookup: {
              from: 'categories',
              localField: 'categoryId',
              foreignField: '_id',
              as: 'category',
            },
          },
        ])
          .skip(Number(limit) * Number(page - 1))
          .limit(Number(limit));

        // const products = await Product.find({
        //   // ...queryFilter,
        //   // ...categoryFilter,
        //   // ...brandFilter,
        //   ...priceFilter,
        //   ...ratingFilter,
        // })
        //   //@ts-ignore
        //   .sort(order)
        //   .skip(Number(limit) * Number(page - 1))
        //   .limit(Number(limit))
        //   .lean();

        const countProducts = await Product.countDocuments({ ...priceFilter, ...ratingFilter });
        res.status(200).json({
          data: products,
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
        categoryId,
        status,
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
        categoryId,
        status,
        slug: title.split(' ').join('-'),
      });
      res.status(200).json(productDoc);
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
        categoryId,
        rating,
        status,
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
          categoryId,
          status,
          slug: title.split(' ').join('-'),
        }
      );
      res.status(200).json(true);
      break;
    }
    case 'DELETE': {
      if (req.query?._id) {
        await Product.deleteOne({ _id: req.query?._id });
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
