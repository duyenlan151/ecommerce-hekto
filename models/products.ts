import { CategoryModel } from './category';
import { DataResCommonModel } from './common';
import { ImageModel } from './image';

export interface ProductModel {
  _id?: string | number;
  title: string;
  description: string;
  price: number;
  images: ImageModel;
  category: CategoryModel[];
  short_description: string;
  discount_percentage: number;
  rating: number;
  [key: string]: any;
}

export interface DataProductsModel extends DataResCommonModel<ProductModel> {
  data: ProductModel[];
}
