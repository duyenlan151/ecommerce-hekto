import AnimatedDiv from '@components/FramerMotion/AnimatedDiv';
import { opacityVariant } from '@content/FramerMotionVariants';
import { usePageLoading } from '@hooks/usePageLoading';
import { ProductModel } from 'models';
import { EProductItemType } from './ProductItem.props';
import { ProductItemSecondary } from './ProductItem/ProductItem';
import { ProductItemSkeleton } from './ProductItem/ProductItemSeleteon';
import { ETypeView } from './ProductListPage';
export interface ProductListProps {
  products: ProductModel[];
  viewCol: ETypeView;
}

export default function ProductList({ products, viewCol }: ProductListProps) {
  const { isPageLoading } = usePageLoading();
  return (
    <AnimatedDiv variants={opacityVariant} className="">
      {!products.length && <div className="p-4 bg-white">No Products found</div>}

      {isPageLoading ? (
        <div className={`grid justify-center items-center mx-auto gap-4 ${viewCol} grid-cols-1`}>
          {new Array(6).fill('').map(() => (
            <ProductItemSkeleton />
          ))}
        </div>
      ) : (
        <div className={`grid justify-center items-center mx-auto gap-4 ${viewCol} grid-cols-1`}>
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
      )}

      {/* </div> */}
    </AnimatedDiv>
  );
}
