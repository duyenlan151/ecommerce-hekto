// import {isAdminRequest} from "@/pages/api/auth/[...nextauth]";
import { mongooseConnect } from '@lib/mongoose';
import { withNextCorsRoute } from '@utils/withSession';
import { Category, Product } from 'models/Admin';
import { ObjectId } from 'mongodb';
import { getToken } from 'next-auth/jwt';

const secret = process.env.NEXT_PUBLIC_SECRET;

export default withNextCorsRoute(async (req, res) => {
  const { method } = req;
  await mongooseConnect();
  // await isAdminRequest(req,res);

  const user = await getToken({ req, secret });
  // if (!user) {
  //   return res.status(401).json({ message: 'signin required' });
  // }
  switch (method) {
    case 'GET': {
      if (req.query?.id) {
        const { id, slug } = req.query;

        const queryId = id ? { _id: new ObjectId(String(id)) } : {};
        const querySlug = slug ? { slug } : {};

        //
        const product = await Product.aggregate([
          {
            $match: {
              ...queryId,
              ...querySlug,
            },
          },
          {
            $lookup: {
              from: 'categories',
              localField: 'categoryId',
              foreignField: '_id',
              as: 'category',
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
          category = '',
          status,
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

        const statusFilter = user?.isAdmin
          ? status !== 'all'
            ? { status }
            : {}
          : { status: 'active' };

        const categoryDOc = await Category.findOne({ slug: category });

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
                  $gte: Number(String(price).split('-')[0]),
                  $lte: Number(String(price).split('-')[1]),
                },
              }
            : {};

        const categoryFilter =
          category && category !== 'all'
            ? {
                categoryId: categoryDOc?._id,
              }
            : {};

        const order =
          sort === 'lowest' ? { price: 1 } : sort === 'highest' ? { price: -1 } : { _id: -1 };

        // $match
        const matchPrice =
          price && price !== 'all'
            ? {
                price: {
                  $gte: Number(String(price).split('-')[0]),
                  $lte: Number(String(price).split('-')[1]),
                },
              }
            : {};

        const matchRating =
          rating && rating !== 'all'
            ? {
                rating: {
                  $gte: Number(rating),
                },
              }
            : {};

        const matchCategory =
          category && category !== 'all'
            ? {
                categoryId: categoryDOc?._id,
              }
            : {};

        const products = await Product.aggregate([
          {
            $match: {
              ...matchCategory,
              ...matchRating,
              ...matchPrice,
              ...statusFilter,
            },
          },
          {
            $lookup: {
              from: 'categories',
              localField: 'categoryId',
              foreignField: '_id',
              as: 'category',
            },
          },
          {
            //@ts-ignore
            $sort: {
              ...order,
            },
          },
        ])
          .skip(Number(limit) * (Number(page) - 1))
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

        const countProducts = await Product.countDocuments({
          ...priceFilter,
          ...ratingFilter,
          ...categoryFilter,
          ...statusFilter,
        });
        res.status(200).json({
          data: products,
          totalDocs: countProducts,
          limit,
          page,
          message: 'Find all success!',
          pages: Math.ceil(countProducts / Number(limit)),
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
});

// export default async function handle(req, res) {

// }
