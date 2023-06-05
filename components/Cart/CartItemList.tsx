import { CartModel } from 'models';
import CartItem from './CartItem';

export interface CartItemListProps {
  data?: CartModel[];
}

export default function CartItemList({ data }: CartItemListProps) {
  return (
    <div className="bg-white">
      {data &&
        data.map((product, idx) => <CartItem key={`${product.id} - ${idx}`} item={product} />)}
    </div>
  );
}
