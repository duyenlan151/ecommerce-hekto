import { DataResCommonModel } from './common';

export interface CategoryModel {
  _id?: string | number | null | undefined;
  name?: string;
  slug?: string;
  status?: string;
}

export interface DataCategoryModel extends DataResCommonModel {
  data: CategoryModel[];
}
