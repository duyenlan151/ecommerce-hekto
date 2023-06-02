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
  return (
    <AnimatedDiv variants={opacityVariant} className="">
      {!products.length && <div className="p-4 bg-white">No Products found</div>}
      {products &&
        products.map((product) => (
          <ProductItemSecondary
            key={product._id}
            className="mb-20"
            product={product}
            styleProductItem={EProductItemType.SECONDARY}
          />
        ))}
      {/* </div> */}
    </AnimatedDiv>
  );
}
