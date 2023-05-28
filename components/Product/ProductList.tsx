import AnimatedDiv from '@components/FramerMotion/AnimatedDiv';
import { opacityVariant, popUpFromBottomForText } from '@content/FramerMotionVariants';
import { ProductItem } from 'models';
import * as React from 'react';
import { ProductItemSecondary } from './ProductItem';
import { EProductItemType } from './ProductItem.props';

export interface ProductListProps {
  products: ProductItem[];
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <AnimatedDiv variants={opacityVariant} className="">
      {products.map((product) => (
        <ProductItemSecondary
          key={product.id}
          className="mb-20"
          product={product}
          styleProductItem={EProductItemType.SECONDARY}
        />
      ))}
    </AnimatedDiv>
  );
}
