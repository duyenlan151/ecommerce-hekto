import { CartModel } from 'models';
import CartItem from './CartItem';

export interface CartItemListProps {
  data?: CartModel[];
}

const dataProduct: CartModel[] = [
  {
    id: 1,
    product: {
      id: 1,
      name: 'Cantilever chair',
      price: '42',
      code: 'Code - Y523201',
      currency: 'EUR',
      thumbnail: ['/images/cart/image01.png'],
      colors: ['#05E6B7', '#F701A8', '#00009D'],
    },
    size: 'XL',
    color: 'Green',
    quantity: 1,
  },
  {
    id: 2,
    product: {
      id: 2,
      name: 'Cantilever chair 2',
      price: '42',
      code: 'Code - Y523201',
      currency: 'EUR',
      thumbnail: ['/images/cart/image02.png'],
      colors: ['#05E6B7', '#F701A8', '#FFEAC1'],
    },
    size: 'XL',
    color: 'Green',
    quantity: 1,
  },
  {
    id: 3,
    product: {
      id: 3,
      name: 'Cantilever chair 3',
      price: '42',
      code: 'Code - Y523201',
      currency: 'EUR',
      thumbnail: ['/images/cart/image03.png'],
      colors: ['#FFEAC1', '#F701A8', '#00009D'],
    },
    size: 'XXL',
    color: 'Pink',
    quantity: 2,
  },
  {
    id: 4,
    product: {
      id: 3,
      name: 'Cantilever chair 3',
      price: '42',
      code: 'Code - Y523201',
      currency: 'EUR',
      thumbnail: ['/images/featured/image03.png'],
      colors: ['#FFEAC1', '#F701A8', '#00009D'],
    },
    size: 'M',
    color: 'Blue',
    quantity: 1,
  },
];

export default function CartItemList({ data = dataProduct }: CartItemListProps) {
  return (
    <div className="mb-10 lg:-mt-4">
      {data.map((product) => (
        <CartItem key={product.id} item={product} />
      ))}
    </div>
  );
}
