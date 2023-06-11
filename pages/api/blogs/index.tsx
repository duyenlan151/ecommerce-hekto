import { mongooseConnect } from '@lib/mongoose';
import { withNextCorsRoute } from '@utils/withSession';
import { Blog } from 'models/Admin';
import { ObjectId } from 'mongodb';
import { getToken } from 'next-auth/jwt';

const secret = process.env.NEXT_PUBLIC_SECRET;

export default withNextCorsRoute(async (req, res) => {
  const { method } = req;
  await mongooseConnect();

  const user = await getToken({ req, secret });
  const { id, slug } = req.query;
  switch (method) {
    case 'GET': {
      if (id || slug) {
        const queryId = id ? { _id: new ObjectId(String(id)) } : {};
        const querySlug = slug ? { slug } : {};

        const blog = await Blog.aggregate([
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
        res.status(200).json(blog[0]);
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

        const categoryDOc = await Blog.findOne({ slug: category });

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

        const blog = await Blog.aggregate([
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

        const countBlogs = await Blog.countDocuments({
          ...priceFilter,
          ...ratingFilter,
          ...categoryFilter,
          ...statusFilter,
        });
        res.status(200).json({
          data: blog,
          totalDocs: countBlogs,
          limit,
          page,
          message: 'Find all success!',
          pages: Math.ceil(countBlogs / Number(limit)),
          statusCode: 200,
        });
      }
      break;
    }
    case 'POST': {
      const { title, slug, author, categoryId, content, status, main_image, excerpt } = req.body;
      const productDoc = await Blog.create({
        title,
        slug,
        author,
        categoryId,
        content,
        status,
        main_image,
        excerpt,
      });
      res.status(200).json(productDoc);
      break;
    }
    case 'PUT': {
      const { _id, title, slug, author, categoryId, content, status, main_image, excerpt } =
        req.body;
      await Blog.updateOne(
        { _id },
        {
          title,
          slug,
          author,
          categoryId,
          content,
          status,
          main_image,
          excerpt,
        }
      );
      res.status(200).json(true);
      break;
    }
    case 'DELETE': {
      if (req.query?._id) {
        await Blog.deleteOne({ _id: req.query?._id });
        res.status(200).json(true);
      }
      break;
    }

    default:
      res.status(200).json({ products: 'categories' });
      break;
  }
});
