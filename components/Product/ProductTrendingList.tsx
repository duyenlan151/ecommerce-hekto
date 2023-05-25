import AnimatedDiv from '@components/FramerMotion/AnimatedDiv';
import { popUpFromBottomForText } from '@content/FramerMotionVariants';
import { ProductItem as ProductItemModel } from 'models';
import { ProductItem } from './ProductItem';
import { EProductItemType } from './ProductItem.props';

export interface ProductTredingListProps {}

const dataProduct: ProductItemModel[] = [
  {
    id: 1,
    name: 'Cantilever chair',
    price: '42',
    code: 'Code - Y523201',
    currency: 'EUR',
    thumbnail: ['/images/featured/image01.png'],
    colors: ['#05E6B7', '#F701A8', '#00009D'],
  },
  {
    id: 2,
    name: 'Cantilever chair 2',
    price: '42',
    code: 'Code - Y523201',
    currency: 'EUR',
    thumbnail: ['/images/featured/image02.png'],
    colors: ['#05E6B7', '#F701A8', '#FFEAC1'],
  },
  {
    id: 3,
    name: 'Cantilever chair 3',
    price: '42',
    code: 'Code - Y523201',
    currency: 'EUR',
    thumbnail: ['/images/featured/image03.png'],
    colors: ['#FFEAC1', '#F701A8', '#00009D'],
  },
  {
    id: 4,
    name: 'Cantilever chair 4',
    price: '30',
    code: 'Code - Y523201',
    currency: 'GBP',
    thumbnail: ['/images/featured/image04.png'],
    colors: ['#05E6B7', '#F701A8', '#00009D'],
  },
];

export function ProductTredingList({}: ProductTredingListProps) {
  return (
    <AnimatedDiv
      variants={popUpFromBottomForText}
      className="grid justify-center items-center mx-auto gap-6 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 grid-flow-row"
    >
      {dataProduct.map((product) => (
        <ProductItem
          key={product.id}
          className="mb-20"
          product={product}
          styleProductItem={EProductItemType.TRENDING}
        />
      ))}
    </AnimatedDiv>
  );
}
