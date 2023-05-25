import { getSymbolCurrency } from '@utils/common';
import { CartModel } from 'models';
import Link from 'next/link';

export interface CartItemProps {
  item: CartModel;
}

export default function CartItem({ item: { product, size, color, quantity } }: CartItemProps) {
  return (
    <div className="py-4 rounded overflow-hidden border-b flex items-center justify-between">
      <div className="flex">
        <Link href={`/product/${product.id}`} className="mr-3 h-[83px] w-[83px]">
          <img className="max-w-full max-h-full mx-auto" src={product.thumbnail[0]} alt="" />
        </Link>
        <div>
          <Link
            href={`/product/${product.id}`}
            className="hover:text-pink-1 transition ease-in-out duration-300"
          >
            {product.name}
          </Link>
          <p className="text-sub-title text-sm">Color: {color}</p>
          <p className="text-sub-title text-sm">Size: {size}</p>
          <p className="text-sub-title text-xs">{quantity}</p>
        </div>
      </div>
      <div>{getSymbolCurrency('EUR', Number(quantity * Number(product.price)))}</div>
    </div>
  );
}
