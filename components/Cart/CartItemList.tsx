import { CartModel } from 'models';
import CartItem from './CartItem';

export interface CartItemListProps {
  data?: CartModel[];
}

export default function CartItemList({ data }: CartItemListProps) {
  return (
    <div className="mb-10 lg:-mt-4">
      {data && data.map((product) => <CartItem key={product.id} item={product} />)}
    </div>
  );
}
