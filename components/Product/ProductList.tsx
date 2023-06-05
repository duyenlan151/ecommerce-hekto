import AnimatedDiv from '@components/FramerMotion/AnimatedDiv';
import { opacityVariant } from '@content/FramerMotionVariants';
import { ProductModel } from 'models';
import { ProductItemSecondary } from './ProductItem';
import { EProductItemType } from './ProductItem.props';
import { ETypeView } from './ProductListPage';
export interface ProductListProps {
  products: ProductModel[];
  viewCol: ETypeView;
}

export default function ProductList({ products, viewCol }: ProductListProps) {
  return (
    <AnimatedDiv variants={opacityVariant} className="">
      {!products.length && <div className="p-4 bg-white">No Products found</div>}
      <div
        className={`grid justify-center items-center mx-auto gap-4 lg:grid-cols-2 ${viewCol} grid-cols-1`}
      >
        {products &&
          products.map((product) => (
            <ProductItemSecondary
              key={product._id}
              className="mb-20"
              product={product}
              styleProductItem={EProductItemType.SECONDARY}
            />
          ))}
      </div>
      {/* </div> */}
    </AnimatedDiv>
  );
}
