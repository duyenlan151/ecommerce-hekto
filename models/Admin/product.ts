import mongoose, { model, Schema, models } from 'mongoose';

const ProductSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    images: [],
    // category: { type: mongoose.Types.ObjectId, ref: 'Category' },
    short_description: { type: String, required: true },
    slug: String,
    discount_percentage: { type: Number, required: true },
    rating: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

export const Product = models.Product || model('Product', ProductSchema);
