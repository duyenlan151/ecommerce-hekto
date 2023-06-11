import { CategoryModel } from './category';
import { DataResCommonModel } from './common';

export interface BlogModel {
  _id: string | number | null | undefined;
  title: string;
  slug: string;
  author: string;
  excerpt: string;
  main_image: string;
  categoryId: string;
  content: string;
  status: string;
  category: CategoryModel[];
  updatedAt: Date;
}

export interface DataBlogModel extends DataResCommonModel {
  data: BlogModel[];
}
