import AnimatedDiv from '@components/FramerMotion/AnimatedDiv';
import { opacityVariant, popUpFromBottomForText } from '@content/FramerMotionVariants';
import { ProductModel } from 'models';
import * as React from 'react';
import { ProductItemSecondary } from './ProductItem';
import { EProductItemType } from './ProductItem.props';
export interface ProductListProps {
  products: ProductModel[];
}

export default function ProductList({ products }: ProductListProps) {
  console.log('🚀 ~ file: ProductList.tsx:12 ~ ProductList ~ products:', products);
  return (
    <AnimatedDiv variants={opacityVariant} className="">
      {/* // <div className="grid md:grid-cols-2 grid-cols-1 flex-wrap gap-4"> */}
      {products &&
        products.map((product) => (
          <ProductItemSecondary
            key={product.id}
            className="mb-20"
            product={product}
            styleProductItem={EProductItemType.SECONDARY}
          />
        ))}
      {/* </div> */}
    </AnimatedDiv>
  );
}
