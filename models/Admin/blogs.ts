import mongoose, { model, Schema, models } from 'mongoose';

const BlogSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    slug: { type: String, required: true },
    excerpt: { type: String, required: true },
    main_image: { type: String, required: true },
    content: { type: String, required: true },
    categoryId: { type: mongoose.Types.ObjectId, ref: 'Category' },
    status: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const Blog = models.Blog || model('Blog', BlogSchema);
