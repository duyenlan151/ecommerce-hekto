import { getSymbolCurrency } from '@utils/common';
import { CartModel } from 'models';
import Link from 'next/link';
import Image from 'next/image';

export interface CartItemProps {
  item: CartModel;
}

export default function CartItem({ item: { product, size, color, quantity } }: CartItemProps) {
  return (
    <div className="py-4 rounded overflow-hidden border-b flex items-center justify-between">
      <div className="flex">
        <Link href={`/product/${product.id}`} className="mr-3 h-[83px] w-[83px] min-w-[83px]">
          <Image
            height={83}
            width={83}
            src={product?.images[0]?.path}
            alt={product?.images[0]?.name}
          />
        </Link>
        <div>
          <Link
            href={`/product/${product._id}`}
            className="hover:text-pink-1 text-sm line-clamp-2 transition ease-in-out duration-300"
          >
            {product.title}
          </Link>
          <p className="text-sub-title text-xs">{quantity}</p>
        </div>
      </div>
      <div>{getSymbolCurrency('EUR', Number(quantity * Number(product.price)))}</div>
    </div>
  );
}
