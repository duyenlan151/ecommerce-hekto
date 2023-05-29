import mongoose, { model, models, Schema } from 'mongoose';

const ImageSchema = new Schema({
  name: { type: String },
  type: { type: String },
  path: { type: String },
});

export const Image = models?.Image || model('Image', ImageSchema);
