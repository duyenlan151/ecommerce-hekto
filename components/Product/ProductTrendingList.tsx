import AnimatedDiv from '@components/FramerMotion/AnimatedDiv';
import { popUpFromBottomForText } from '@content/FramerMotionVariants';

export interface ProductTredingListProps {}

export function ProductTredingList({}: ProductTredingListProps) {
  return (
    <AnimatedDiv
      variants={popUpFromBottomForText}
      className="grid justify-center items-center mx-auto gap-6 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 grid-flow-row"
    >
      {/* {dataProduct.map((product) => (
        <ProductModel
          key={product.id}
          className="mb-20"
          product={product}
          styleProductItem={EProductItemType.TRENDING}
        />
      ))} */}
    </AnimatedDiv>
  );
}
