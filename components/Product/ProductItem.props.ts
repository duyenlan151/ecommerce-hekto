import { ProductModel } from 'models';

export enum EProductItemType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TRENDING = 'trending',
}

export const ProductItemType: Record<EProductItemType, string | number> = {
  [EProductItemType.PRIMARY]: 'text-pink-1 border-b border-pink-1',
  [EProductItemType.SECONDARY]: 'text-black',
  [EProductItemType.TRENDING]: '',
};

export const breadcrumbsForProduct = (product: ProductModel) => {
  return [
    {
      label: 'All Products',
      path: '/products',
    },
    {
      label: product.category[0]?.name || '',
      path: `/products?category=${product.category[0]?.slug}`,
    },
    {
      label: product.title,
      path: '',
    },
  ];
};
